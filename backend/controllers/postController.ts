import { Request, Response } from "express";
import Post from "../models/Post";
import User from "../models/User";

interface RequestWithUser extends Request {
    userId: string;
  }

export const createPost = async (req: Request, res: Response) => { 

    const { title, content } = req.body as { title: string, content: string };
    const userId = (req as RequestWithUser).userId;
  
    try {
        const currentUser = await User.findById((req as RequestWithUser).userId);
        const post = await Post.create({ title, content,author: userId});
        currentUser?.posts.push(post._id);
        res.status(201).json(post);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}