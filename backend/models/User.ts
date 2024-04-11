import mongoose, { Schema, Document } from 'mongoose';
import { IGoal } from './Goal';
import { IPost } from './Post';
 
export interface IUser extends Document {
    username: string;
    email: string;
    goals: IGoal[];  
    password: string;
    createdAt: Date;
    updatedAt: Date;
    posts : IPost[];
}

// Define the User schema
const UserSchema: Schema = new Schema({
    username: {
        type: String,
        required: true
    },
    goals: [{
            type: Schema.Types.ObjectId,
            ref: 'Goal'
        }]
 ,
    posts: [{
            type: Schema.Types.ObjectId,
            ref: 'Post'
        }],
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

// Create and export the User model
export default mongoose.model<IUser>('User', UserSchema);