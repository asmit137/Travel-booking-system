import { useEffect, useState } from 'react';
import { fetchBookings } from '../api'; 
import CustomerHeader from '../components/CustomerHeader';



const BookingList = () => {
  const [bookings, setBookings] = useState([]); 
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


  if (loading) {
    return <p className="text-center text-gray-500">Loading bookings...</p>;
  }


  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }


  return (
    <>
    <CustomerHeader/>
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
