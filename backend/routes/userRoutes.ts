import express, { Response } from 'express';
import {login, profile, signUp} from '../controllers/userController';



const userRouter = express.Router();

// Route for user sign up
userRouter.post('/signup',signUp);
userRouter.post('/login', login);
userRouter.get('/profile', profile);



export default userRouter;