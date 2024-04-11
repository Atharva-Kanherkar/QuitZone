import express, { RequestHandler, Response } from 'express';
import { createPost, deletePost, updatePost, viewPost } from '../controllers/postController';
import { verifyToken } from '../config/isAuth';
const postRouter = express.Router();


postRouter.post('/createPost',verifyToken as unknown as RequestHandler, createPost);
postRouter.get('/viewPost/:id', verifyToken as unknown as RequestHandler, viewPost );
postRouter.put('/updatePost/:id', verifyToken as unknown as RequestHandler, updatePost);
postRouter.delete('/deletePost/:id', verifyToken as unknown as RequestHandler, deletePost);  


export default postRouter;