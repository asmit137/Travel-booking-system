import { useEffect, useState } from 'react';
import { fetchBookings, deleteBooking, fetchPackages } from '../api'; 
import Header from './Header';


const BookingList = () => {
  const [bookings, setBookings] = useState([]); 
  const [packages, setPackages] = useState({}); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadBookingsAndPackages = async () => {
      try {
  
        const { data: bookingsData } = await fetchBookings();
        setBookings(Array.isArray(bookingsData) ? bookingsData : bookingsData.data || []);

      
      
       
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to load bookings or packages. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    loadBookingsAndPackages();
  }, []);

  const handleDeleteBooking = async (id) => {
    try {
      await deleteBooking(id);
      setBookings((prevBookings) => prevBookings.filter((booking) => booking._id !== id));
      alert("Booking deleted successfully.");
    } catch (error) {
      console.error("Failed to delete booking:", error);
      alert("Failed to delete booking. Please try again.");
    }
  };

  if (loading) {
    return <p className="text-center text-gray-500">Loading bookings...</p>;
  }


  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }


  return (
    <>
    <Header/>
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-8 text-indigo-800">Booking List</h1>

      {bookings.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {bookings.map((booking) => (
            <div key={booking._id} className="border rounded-lg p-4 shadow-md">
              <h2 className="text-lg font-bold">
                Package Id: {booking.packageId}
              </h2>
              <p className="text-gray-600">Customer Name: {booking.name}</p>
              <p className="text-gray-600">Email Id: {booking.email}</p>
              <p className="text-gray-600">Total Price: {booking.totalPrice}</p>
              <p className="text-gray-600">Number Of Travelers: {booking.numberOfTravelers}</p>

              <button
                onClick={() => handleDeleteBooking(booking._id)}
                className="mt-4 bg-red-600 text-white px-4 py-2 rounded"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No bookings available.</p>
      )}
    </div>
    </>
  );
};

export default BookingList;
