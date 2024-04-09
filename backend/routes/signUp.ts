import express from 'express';
import jwt from 'jsonwebtoken';

const router = express.Router();

// Route for user sign up
router.post('/signup', (req, res) => {  
    
    // Your sign up logic here

    // Generate JWT token
    const token = jwt.sign({ userId: 'yourUserId' }, 'yourSecretKey');

    // Return the token as response
    res.json({ token });
});

export default router;