import mongoose, { Schema, Document } from 'mongoose';

export interface IPost extends Document {
    author: Schema.Types.ObjectId;
    title: string;
    content: string;
    image: string;
    comments: Schema.Types.ObjectId[];
    likes: Schema.Types.ObjectId[];
    tags: string[];
    createdAt: Date; 
    updatedAt: Date;  
}

const postSchema: Schema = new Schema({
    author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true },
    content: { type: String, required: true },
    image: { type: String },
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
    likes: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    tags: [{ type: String }],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

// Create the Post model using the schema
const Post = mongoose.model<IPost>('Post', postSchema);

export default Post;