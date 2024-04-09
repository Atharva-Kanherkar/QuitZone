import mongoose, { Schema, Document } from 'mongoose';
 
interface GoalInterface extends Document {
    name: string;
    target: number;
    currentValue: number;
    startDate: Date;
    endDate: Date;
}

const goalSchema: Schema = new Schema({
    name: { type: String, required: true },
    target: { type: Number, required: true },
    currentValue: { type: Number, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
});

const GoalModel = mongoose.model<GoalInterface>('Goal', goalSchema);

export default GoalModel;