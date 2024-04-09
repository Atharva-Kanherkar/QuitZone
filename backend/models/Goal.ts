import mongoose, { Schema, Document } from 'mongoose';
 
export interface IGoal  extends Document {
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

const GoalModel = mongoose.model<IGoal>('Goal', goalSchema);

export default GoalModel;