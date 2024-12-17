import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage.jsx';
import AdminPanel from './pages/AdminPanel';
import Login from './pages/LoginPage.jsx';
import BookingForm from './components/BookingForm.jsx'
import BookingList from './components/BookingList.jsx';
import BookingHistory from './pages/BookingHistory.jsx';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/booking/:id" element={<BookingForm />} />
        <Route path="/bookingList" element={<BookingList/>} />
        <Route path="/bookinghistory" element={<BookingHistory/>} />
        
      </Routes>
    </div>
  );
}

export default App;
