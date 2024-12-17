const Booking = require('../models/Booking');


exports.getBookings = async (req, res) => {
    try {
        const bookings = await Booking.find();
        res.status(200).json({
            success: true,
            data: bookings,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server Error',
        });
    }
};


exports.createBooking = async (req, res) => {
    try {
        const { name, destination, date } = req.body;

        const newBooking = new Booking({
            name,
            destination,
            date,
        });

        const savedBooking = await newBooking.save();

        res.status(201).json({
            success: true,
            message: 'Booking created successfully',
            data: savedBooking,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server Error',
        });
    }
};

exports.deleteBooking = async (req, res) => {
    try {
      const booking = await Booking.findByIdAndDelete(req.params.id);
      if (!booking) {
        return res.status(404).json({ error: 'Booking not found' });
      }
      res.status(204).send();
    } catch (err) {
      res.status(500).json({ error: 'Failed to delete booking' });
    }
  };
