import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import router from './routes/Routes.js'; // Ensure the correct path and include .js extension if using ES6

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
const mongoDBURL = process.env.MONGODB_URL;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(mongoDBURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('MongoDB database connection established');
    app.listen(port, () => {
        console.log(`App is listening on port: ${port}`);
    });
})
.catch((error) => {
    console.error('DB CONNECTION ERROR:', error);
});

// Route
app.use('/', router); // Adjust the path as needed
