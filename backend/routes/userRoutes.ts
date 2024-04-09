import express from 'express';
import jwt from 'jsonwebtoken';
import {login, signUp} from '../controllers/userController';

const userRouter = express.Router();

// Route for user sign up
userRouter.post('/signup',signUp);
userRouter.post('/login', login);

export default userRouter;