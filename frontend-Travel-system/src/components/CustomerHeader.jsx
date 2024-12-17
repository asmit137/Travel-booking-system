import { Link } from 'react-router-dom';

const CustomerHeader = () => (
  <header className="bg-indigo-600 text-white p-4">
    <nav className="flex justify-between">
      <Link to="/customer" className="font-bold text-lg">
        Travel Agency
      </Link>

        <Link to="/bookinghistory">
            My Bookings
        </Link>
      
       
    
      <div>
      <Link to="/home" className="hover:underline mx-8">
          Back
        </Link>

        <Link to="/" className="hover:underline">
          Logout
        </Link>
      </div>

     
    </nav>
  </header>
);

export default CustomerHeader;
