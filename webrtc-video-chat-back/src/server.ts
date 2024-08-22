import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import cors from 'cors';

const app = express();
app.use(cors());
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: 'http://192.168.68.122:5173',
        methods: ['GET', 'POST'],
    },
});


io.on('connection', (socket) => {
    console.log(`User connected: ${socket.id}`);

    socket.on('message', (data) => {
        console.log(`Message received: ${data} ${socket.id}`);
        io.emit('message', data);
    });

    socket.on('disconnect', () => {
        console.log(`User disconnected: ${socket.id}`);
    });
});


const port = process.env.PORT || 5000;
const start = async () => {
    try {
        server.listen(port, () => console.log(`Server is listening on port: ${port}`));
    } catch (error) {
        console.error(error);
    }
};

start();