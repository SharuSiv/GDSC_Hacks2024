import React, { useState } from 'react';
import Login from '../components/Login';
import Signup from '../components/Signup';

const Auth = () => {
  const [showLoginInfo, setShowLoginInfo] = useState(true);

  const handleLoginClick = () => {
    setShowLoginInfo(true);
  };

  const handleSignUpClick = () => {
    setShowLoginInfo(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-md shadow-md w-96">
        {/* Login and Sign Up buttons */}
        <div className="flex justify-between mb-6">
          <button
            onClick={handleLoginClick}
            className={`px-4 py-2 rounded-md focus:outline-none ${
              showLoginInfo
                ? 'bg-blue-500 text-white hover:bg-blue-600 focus:bg-blue-600'
                : 'bg-gray-300 text-gray-600 hover:bg-gray-400 focus:bg-gray-400'
            }`}
          >
            Login
          </button>
          <button
            onClick={handleSignUpClick}
            className={`px-4 py-2 rounded-md focus:outline-none ${
              showLoginInfo
                ? 'bg-gray-300 text-gray-600 hover:bg-gray-400 focus:bg-gray-400'
                : 'bg-blue-500 text-white hover:bg-blue-600 focus:bg-blue-600'
            }`}
          >
            Sign Up
          </button>
        </div>
        {/* Login or Sign Up info */}
        {showLoginInfo ? (
          <div>
            <h2 className="text-center text-3xl font-extrabold text-gray-900 mb-6">
              Login
            </h2>
            {<Login />}
          </div>
        ) : (
          <div>
            <h2 className="text-center text-3xl font-extrabold text-gray-900 mb-6">
              Sign Up
            </h2>
            {<Signup />}
          </div>
        )}
      </div>
    </div>
  );
};

export default Auth;
