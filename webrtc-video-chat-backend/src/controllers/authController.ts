import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import { db } from '../db/config';
import { users } from '../db/schema';
import { generateToken } from '../utils/generateToken';
import { eq } from 'drizzle-orm';
import { AuthenticatedRequest } from '../types/authenticatedRequestType';

export const registerUser = async (req: Request, res: Response) => {
  const { email, password, username } = req.body;

  const userExists = await db
    .select()
    .from(users)
    .where(eq(users.email, email))
    .limit(1);

  if (userExists.length) {
    return res.status(400).json({ message: 'User already exists' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await db
    .insert(users)
    .values({   
        email, 
        password: hashedPassword,
    });

  const newUser = await db
    .select()
    .from(users)
    .where(eq(users.email, email))
    .limit(1);

  return res.status(201).json({
    id: newUser[0].id,
    email: newUser[0].email,
    token: generateToken(newUser[0].id),
  });
};

export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await db
    .select()
    .from(users)
    .where(eq(users.email, email))
    .limit(1);

  if (user.length && (await bcrypt.compare(password, user[0].password))) {
    return res.json({
      id: user[0].id,
      email: user[0].email,
      token: generateToken(user[0].id),
    });
  } else {
    return res.status(401).json({ message: 'Invalid email or password' });
  }
};

export const getMe = async (req: AuthenticatedRequest, res: Response) => {
    if (!req.user?.id) {
        return res.status(400).json({ message: 'User ID is missing or invalid' });
    }

    const user = await db
        .select()
        .from(users)
        .where(eq(users.id, req.user?.id))
        .limit(1);

    if (user.length) {
        return res.json({
        id: user[0].id,
        email: user[0].email,
        });
    } else {
        return res.status(404).json({ message: 'User not found' });
    }
};
