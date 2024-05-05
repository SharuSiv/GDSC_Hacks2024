import React, { useState } from 'react';
import Login from '../components/Login';
import Signup from '../components/Signup';
import './Auth.css';

const Auth = () => {
  const [showLogin, setShowLogin] = useState(true);

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  const handleSignUpClick = () => {
    setShowLogin(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-beige-100">
      <div className="bg-white p-8 rounded-md shadow-md w-96 mx-auto">
        {/* Login and Sign Up buttons */}
        <div className="flex justify-between mb-6">
          <Button onClick={handleLoginClick} active={showLogin} label="Login" />
          <Button
            onClick={handleSignUpClick}
            active={!showLogin}
            label="Sign Up"
          />
        </div>
        {/* Login or Sign Up info */}
        {showLogin ? (
          <div>
            <h2 className="text-center text-3xl font-extrabold text-gray-900 mb-6">
              Login
            </h2>
            <Login />
          </div>
        ) : (
          <div>
            <h2 className="text-center text-3xl font-extrabold text-gray-900 mb-6">
              Sign Up
            </h2>
            <Signup />
          </div>
        )}
      </div>
    </div>
  );
};

const Button = ({ onClick, active, label }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-md focus:outline-none ${
      active
        ? 'bg-black text-white hover:bg-gray-800 focus:bg-gray-800'
        : 'bg-beige-300 text-gray-600 hover:bg-beige-400 focus:bg-beige-400'
    }`}
  >
    {label}
  </button>
);

export default Auth;
