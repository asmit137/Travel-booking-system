import React from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  // Handlers for button clicks
  const handleCustomerLogin = () => {
    navigate('/home'); 
  };

  const handleAdminLogin = () => {
    navigate('/admin'); 
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <div className="space-y-4">
          <button
            onClick={handleCustomerLogin}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
          >
            Login as Customer
          </button>
          <button
            onClick={handleAdminLogin}
            className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
          >
            Login as Admin
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
