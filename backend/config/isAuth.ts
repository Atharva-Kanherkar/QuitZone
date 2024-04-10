import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface CustomRequest extends Request {
    user: any;
}

export const verifyToken = async (
    req: CustomRequest,
    res: Response,
    next: NextFunction
) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];
        if (!token) {
            return res.status(401).json({ error: "Unauthorized" });
        }
        const decoded = jwt.verify(token, "1234!@#%<{*&)") as any;
        if (!decoded) {
            throw new Error();
        }
        console.log(decoded);
        req.user = decoded;
        next();
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Error Validating Token" });
    }
};
