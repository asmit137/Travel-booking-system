import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { createBooking } from '../api';

const BookingForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { pkg } = location.state || {};

  const price = pkg?.price || 0;
  const packageId = pkg?._id || 0;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    numberOfTravelers: 1,
    specialRequests: '',
  });

  const [invoiceData, setInvoiceData] = useState(null);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const totalPrice = price * formData.numberOfTravelers;

      const bookingResponse = await createBooking({
        ...formData,
        packageId,
        totalPrice,
      });

      setInvoiceData({
        ...formData,
        bookingId: bookingResponse.data._id,
        totalPrice,
        packagePrice: price,
      });
      setBookingSuccess(true);
      alert('Booking successful! Invoice is ready to download.');
    } catch (error) {
      alert('Booking failed! Please try again.');
      console.error(error);
    }
  };

  const generateInvoice = () => {
    const doc = new jsPDF();
    doc.text('Travel Booking Invoice', 20, 20);
    doc.text(`Booking ID: ${invoiceData.bookingId}`, 20, 30);
    doc.text(`Name: ${invoiceData.name}`, 20, 40);
    doc.text(`Email: ${invoiceData.email}`, 20, 50);
    doc.text(`Phone: ${invoiceData.phone}`, 20, 60);
    doc.text(`Number of Travelers: ${invoiceData.numberOfTravelers}`, 20, 70);
    doc.text(`Price per Traveler: $${invoiceData.packagePrice}`, 20, 80);
    doc.text(`Total Price: $${invoiceData.totalPrice}`, 20, 90);
    doc.text('Thank you for choosing us!', 20, 110);
    doc.save('invoice.pdf');
  };

  useEffect(() => {
    if (bookingSuccess) {
      const timer = setTimeout(() => {
        navigate('/home'); 
      }, 10000); 

      return () => clearTimeout(timer); 
    }
  }, [bookingSuccess, navigate]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      {!bookingSuccess ? (
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-lg p-8 space-y-4 w-full max-w-md"
        >
          <h2 className="text-2xl font-bold text-center mb-4">Book Your Package</h2>

          <div>
            <label htmlFor="name" className="block font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div>
            <label htmlFor="phone" className="block font-medium mb-1">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div>
            <label htmlFor="numberOfTravelers" className="block font-medium mb-1">
              Number of Travelers
            </label>
            <input
              type="number"
              id="numberOfTravelers"
              name="numberOfTravelers"
              value={formData.numberOfTravelers}
              onChange={handleChange}
              placeholder="Enter number of travelers"
              min="1"
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div>
            <label htmlFor="specialRequests" className="block font-medium mb-1">
              Special Requests
            </label>
            <textarea
              id="specialRequests"
              name="specialRequests"
              value={formData.specialRequests}
              onChange={handleChange}
              placeholder="Any special requests?"
              className="w-full p-2 border rounded"
            />
          </div>

          <button
            type="submit"
            className="bg-indigo-600 text-white px-4 py-2 rounded w-full font-semibold"
          >
            Book Now (${price * (formData.numberOfTravelers || 1)} )
          </button>
        </form>
      ) : (
        <div className="bg-white shadow-lg rounded-lg p-8 text-center">
          <h2 className="text-xl font-bold mb-4">Booking Successful!</h2>
          <p>
            Thank you, <strong>{invoiceData.name}</strong>, for your booking.
          </p>
          <p>
            Total Price: <strong>${invoiceData.totalPrice}</strong>
          </p>
          <button
            onClick={generateInvoice}
            className="mt-4 bg-green-600 text-white px-4 py-2 rounded font-semibold"
          >
            Download Invoice
          </button>
          <p className="mt-4 text-gray-600">You will be redirected to the homepage in 10 seconds...</p>
        </div>
      )}
    </div>
  );
};

export default BookingForm;
