import mongoose, { Schema, Document } from 'mongoose';

export enum GoalType{
    QuitSmoking = "Quit Smoking",
    QuitDrinking = "Quit Drinking",
    QuitDrugs = "Quit Drugs",
    WeightLoss = "Weight Loss",
    WeightGain = "Weight Gain",
    Exercise = "Exercise",
    Running = "Running",
    Walking = "Walking",
    Cycling = "Cycling",
    Swimming = "Swimming",
    Yoga = "Yoga",
    Meditation = "Meditation",
    Reading = "Reading",
    Writing = "Writing",
    Learning = "Learning",
    Saving = "Saving",
    Investment = "Investment",
    Charity = "Charity",
    Social = "Social",
    Family = "Family",
    Friends = "Friends",
    Relationship = "Relationship",
    Marriage = "Marriage",
}
export interface IGoal  extends Document {
    name: GoalType;
    target: number;
    currentValue: number;
    startDate: Date;
    endDate: Date;
}

const goalSchema: Schema = new Schema({
    name: { type:  String, required: true },
    target: { type: Number, required: true },
    currentValue: { type: Number, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
});

const GoalModel = mongoose.model<IGoal>('Goal', goalSchema);

export default GoalModel;