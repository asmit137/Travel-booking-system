const express = require('express');
const mongoose = require('mongoose'); // Import Mongoose
const cors = require('cors'); // Import CORS middleware
require('dotenv').config(); // Load .env file

const app = express();
const bookingRoutes = require('./routes/bookingRoutes'); // Import booking routes
const packageRoutes = require('./routes/packageRoutes'); // Import package routes

// Middleware to parse JSON
app.use(express.json());

// Enable CORS for all routes
app.use(cors());

// MongoDB Connection
const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT || 5000;

mongoose
    .connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('MongoDB connected successfully!');
    })
    .catch((err) => {
        console.error('MongoDB connection error:', err.message);
    });

// Use Routes
app.use('/bookings', bookingRoutes);
app.use('/packages', packageRoutes); // Add packages route

// Root route
app.get('/', (req, res) => {
    res.send('Welcome to the Travel Booking System');
});

// Server setup
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
