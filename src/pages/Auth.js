import React, { useState } from 'react';
import Login from '../components/Login';
import Signup from '../components/Signup';
import './auth.css';

const Auth = () => {
  const [showLoginInfo, setShowLoginInfo] = useState(true);

  const handleLoginClick = () => {
    setShowLoginInfo(true);
  };

  const handleSignUpClick = () => {
    setShowLoginInfo(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <div >
        {/* Login and Sign Up buttons */}
  
        </div>
        {/* Login or Sign Up info */}
        {showLoginInfo ? (
          <div>
            <h2 className="text-center text-3xl font-extrabold text-gray-900 mb-6">
              Login
            </h2>
            {<Login />}
            <p className="text-center mt-4">
              Don't have an account?{' '}
              <a href="#" onClick={handleSignUpClick} className="text-blue-500 hover:underline">
                Sign Up
              </a>
            </p>
          </div>
        ) : (
          <div>
            <h2 className="text-center text-3xl font-extrabold text-gray-900 mb-6">
              Sign Up
            </h2>
            {<Signup />}
            <p className="text-center mt-4">
              Already have an account?{' '}
              <a href="#" onClick={handleLoginClick} className="text-blue-500 hover:underline">
                Sign In
              </a>
            </p>
          </div>
        )}
      </div>
 
  );
};

export default Auth;
