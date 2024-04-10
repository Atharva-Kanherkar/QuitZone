import mongoose, { Schema, Document } from 'mongoose';
import { IUser } from './User';
 

export interface ISupportGroup extends Document {
    name: string;
    description: string;
    members: IUser[];
    posts: string[]; //will check later
}

const SupportGroupSchema: Schema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    members: { type: [Schema.Types.ObjectId], ref: 'User', default: []},
    posts: { type: [Schema.Types.ObjectId], ref: 'Post', default: [] }
});

const SupportGroupModel = mongoose.model<ISupportGroup>('SupportGroup', SupportGroupSchema);