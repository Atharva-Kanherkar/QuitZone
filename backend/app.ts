import connectDB from './db';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import userRouter from './routes/userRoutes';
import goalRouter from './routes/goalRoutes';

const app = express();

// Connect to MongoDB
connectDB();
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

// Use the routes
app.use('/api/goal', goalRouter );
app.use('/api/user', userRouter);
// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));