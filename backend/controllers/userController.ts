import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User";
import * as z from "zod";



interface SignUpRequestBody {
  username: string;
  password: string;
  email : string; 
}

const userSchema = z.object({
    username: z.string(),
    password : z.string().min(8).max(16),
    email : z.string(),
   
});



export const signUp = async (req: Request<{}, {}, SignUpRequestBody>, res: Response) => {
  try {
    const body : any   = userSchema.safeParse(req.body);
    
    // Validate the request body against the user schema
    const validationResult = userSchema.safeParse(req.body);

  
    if (!validationResult.success) {
        return res.status(400).json({ message: "Invalid request body", errors: validationResult.error });
    }

   
    const { username, password, email } = validationResult.data;

   
    if (!username || !password) {
        return res.status(400).json({ message: "Please input username and password" });
    }

 
    if (!email) {
        return res.status(400).json({ message: "Please input a valid email" });
    }

    // Check if user exists in the database
    const existingUser = await User.findOne({ username });

    if (existingUser) {
        return res.status(400).json({ message: "User already exists" });
    }

    // Hash the user's password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Save the user to the database
    const newUser = new User({
        username,
        password: hashedPassword,
        email,
    });

    await newUser.save();

    return res.status(201).json({ message: "User created successfully", newUser });
  } catch (error:any) {
    console.log(error.message);
    return res.status(500).json({ message: "Error creating user" });
  }
};
