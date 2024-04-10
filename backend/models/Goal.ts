import mongoose, { Schema, Document } from 'mongoose';

export enum GoalType{
    QuitSmoking = "Quit Smoking",
    QuitDrinking = "Quit Drinking",
    QuitDrugs = "Quit Drugs"
}
export interface IGoal  extends Document {
    userId: Schema.Types.ObjectId;
    name: GoalType;
    target: number;
    currentValue: number;
    startDate: Date;
    endDate: Date;
}

const goalSchema: Schema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User',   },
    name: { type:  String, required: true },
    target: { type: Number, required: true },
    currentValue: { type: Number, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
});

 
const GoalModel = mongoose.model<IGoal>('Goal', goalSchema);

export default GoalModel;