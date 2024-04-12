import { Request, Response } from "express";
import Post from "../models/Post";
import User from "../models/User";
import jwt from "jsonwebtoken";

  export const createPost = async (req: Request, res: Response) => {
      const { title, content } = req.body as { title: string, content: string };
      const token = req.headers.authorization?.split(" ")[1];
      
      if (!token) {
          return res.status(401).json({ error: "Unauthorized" });
      }
  
      try {
          const decoded = jwt.verify(token, "1234!@#%<{*&)") as any;
          const userId = decoded.userId;
          
          const currentUser = await User.findById(userId);
          if (!currentUser) {
              return res.status(404).json({ message: "User not found" });
          }
  
          const post = await Post.create({ title, content, author: userId });
          currentUser.posts.push(post._id);
          await currentUser.save();
  
          res.status(201).json(post);
      } catch (error: any) {
          res.status(500).json({ message: error.message });
      }
  };
  

export const viewPost = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const post = await Post.findById(id);
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
        res.json(post);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}  
export const updatePost = async (req: Request, res: Response) => { 
    const { id } = req.params;
    const { title, content } = req.body as { title: string, content: string };
    try {
        const post = await Post.findByIdAndUpdate(id, { title, content }, { new: true });  
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        } 
        res.json(post);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
} 

export const deletePost = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const post = await Post.findByIdAndDelete(id);
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
        res.json({ message: 'Post deleted successfully' });
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}