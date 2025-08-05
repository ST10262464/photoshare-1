import express from 'express';
import dotenv from 'dotenv';
import fs from 'fs';
import https from 'https';

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

// Use mkcert-generated certificates for HTTPS
const ssloptions = {
  key: fs.readFileSync('certs/localhost-key.pem'),
  cert: fs.readFileSync('certs/localhost.pem')
};

// Https server 
https.createServer(ssloptions, app).listen(PORT, () => {
  console.log(`Server is running on https://localhost:${PORT}`);
});

// Start the server
//app.listen(PORT,() => {
 // console.log(`Server is running on port ${PORT}`);
//});
