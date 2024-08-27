import express, { Express, Request, Response } from 'express';
import authRoutes from './routes/authRoutes';

import dotenv from 'dotenv';
dotenv.config();

const app: Express = express();
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript with Express!');
});
app.use('/api/auth', authRoutes);


const port = process.env.PORT || 3000;
const start = async () => {
    try {
        app.listen(port, () => console.log(`Server is listening on port: ${port}`));
        // server.listen(port, () => console.log(`Server is listening on port: ${port}`));
    } catch (error) {
        console.error(error);
    }
};

start();