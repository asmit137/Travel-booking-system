const express = require('express');
const router = express.Router();


const { getBookings, createBooking, deleteBooking } = require('../controllers/bookingController');

router.get('/getbookings', getBookings); 
router.post('/createbookings', createBooking); 
router.delete('/deletebooking/:id', deleteBooking);

module.exports = router;
