import express from 'express';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Initialize express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON requests
app.use(express.json());

// Add basic route
app.get('/', (req, res) => {
  res.send('Welcome to the PhotoShare API');
});

// Start the server
app.listen(PORT,() => {
  console.log(`Server is running on port ${PORT}`);
});
