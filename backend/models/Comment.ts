import mongoose, { Schema, Document } from 'mongoose';

// Define the interface for the Comment document
interface IComment extends Document {
    content: string;
    author: Schema.Types.ObjectId;
    createdAt: Date;
}

// Define the Comment schema
const CommentSchema: Schema = new Schema({
    content: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    createdAt: { type: Date, default: Date.now }
});

// Create the Comment model
const Comment = mongoose.model<IComment>('Comment', CommentSchema);

export default Comment;