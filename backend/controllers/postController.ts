import { Request, Response } from "express";
import Post from "../models/Post";

export const createPost = async (req: Request, res: Response) => { 
    
    const { title, content } = req.body as { title: string, content: string };
    try {
        const post = await Post.create({ title, content });
        res.status(201).json(post);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}