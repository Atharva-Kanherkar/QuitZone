import express, { Response } from 'express';
import jwt from 'jsonwebtoken';
import {login, signUp} from '../controllers/userController';
import User from '../models/User';
import { Request } from 'express';

interface RequestWithUser extends Request {
  userId: string;
}
const userRouter = express.Router();

// Route for user sign up
userRouter.post('/signup',signUp);
userRouter.post('/login', login);

userRouter.get('/profile', (req, res) => {
    const userId = (req as RequestWithUser).userId;

    const userProfile = User.findById({userId});

     if (userProfile) {
        
        res.status(200).json(userProfile);
    } else {
      
        res.status(404).json({ message: 'User profile not found' });
    }
});
export default userRouter;