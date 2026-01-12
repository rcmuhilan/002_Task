// importing packages and modules
import express from 'express';
import config from './config/config.js';
import userRouter from './routes/userRoutes.js';
import errorHandler from './middlewares/errorHandler.js';

const app = express();

// middlewares
app.use(express.json())

//routes
app.use('/user', userRouter);

// global error handler
app.use(errorHandler);

// creating server
app.listen(config.port, () => {
    console.log(`Server is running at http://localhost:${config.port}`);
})