import express, { Request, Response } from 'express';
import GoalModel from '../models/Goal';
import * as z from "zod";
const router = express.Router();

const goalSchema = z.object({
    name: z.string(),
    target: z.number(),
    currentValue: z.number(),
    startDate: z.date(),
    endDate: z.date(),
});

router.post('/createGoal', async (req: Request, res: Response) => {
    const { name, target, currentValue, startDate, endDate } = req.body;
    try {
        const goal = new GoalModel({
            name,
            target,
            currentValue,
            startDate,
            endDate
        });

        const savedGoal = await GoalModel.create(goal);



        res.json(savedGoal);
    } catch (error : any) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/viewGoal/:id', async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const goal = await GoalModel.findById(id);

        if (!goal) {
            return res.status(404).json({ message: 'Goal not found' });
        }

        res.json(goal);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
});

router.put('/updateGoal/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, target, currentValue, startDate, endDate } = req.body;

    try {
        const updatedGoal = await GoalModel.findByIdAndUpdate(id, {
            name,
            target,
            currentValue,
            startDate,
            endDate
        }, { new: true });

        if (!updatedGoal) {
            return res.status(404).json({ message: 'Goal not found' });
        }

        res.json(updatedGoal);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
});

router.delete('/deleteGoal/:id', async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const deletedGoal = await GoalModel.findByIdAndDelete(id);

        if (!deletedGoal) {
            return res.status(404).json({ message: 'Goal not found' });
        }

        res.json(deletedGoal);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
});



export default router;