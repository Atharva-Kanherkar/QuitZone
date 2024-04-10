import express, { Response } from 'express';
import { createPost } from '../controllers/postController';
const postRouter = express.Router();


postRouter.post('/createPost', createPost);
 
 



export default postRouter;