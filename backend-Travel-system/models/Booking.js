const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  numberOfTravelers: Number,
  specialRequests: String,
  packageId: { type: mongoose.Schema.Types.ObjectId, ref: 'Package' },
  totalPrice: Number,
});

module.exports = mongoose.model('Bookings', BookingSchema);
