import { Link } from 'react-router-dom';

const Header = ({ onShowBookings }) => (
  <header className="bg-indigo-600 text-white p-4">
    <nav className="flex justify-between">
      <Link to="/customer" className="font-bold text-lg">
        Travel Agency
      </Link>

      
        <Link to="/BookingList"
        className="bg-indigo-700 hover:bg-indigo-800 text-white px-4 py-2 rounded"
        >
        Manage Booking
        </Link>

        <Link to="/admin"
        className="bg-indigo-700 hover:bg-indigo-800 text-white px-4 py-2 rounded"
        >
        Manage Packages
        </Link>
    
      <div>
        <Link to="/" className="hover:underline">
          Logout
        </Link>
      </div>

     
    </nav>
  </header>
);

export default Header;
