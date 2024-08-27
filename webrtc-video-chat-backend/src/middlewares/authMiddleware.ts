import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { db } from '../db/config';
import { users } from '../db/schema';

export const protect = async (req: Request, res: Response, next: NextFunction) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded: any = jwt.verify(token, process.env.JWT_SECRET || 'your_jwt_secret');
      const user = await db.select().from(users).where(users.id.eq(decoded.id)).limit(1);

      if (user.length) {
        req.user = { id: user[0].id };
        next();
      } else {
        res.status(401).json({ message: 'Not authorized, token failed' });
      }
    } catch (error) {
      return res.status(401).json({ message: 'Not authorized, token failed' });
    }
  }

  if (!token) {
    return res.status(401).json({ message: 'Not authorized, no token' });
  }
};
