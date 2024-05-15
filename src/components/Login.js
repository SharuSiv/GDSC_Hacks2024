import React, {useContext, useState} from 'react';
import { AuthContext } from './AuthContext';
import { Navigate, useNavigate } from 'react-router-dom';
import '../pages/Auth'

function Login() {
  const [email, setEmail]=useState("");
  const [password, setPassword] = useState('');
  const {setIsLoggedIn} = useContext(AuthContext);
  const navigate = useNavigate();
  
  async function handleSubmit(e) {
    e.preventDefault();

    if (email === "hello@gmail.com" && password ==="123456") {
      setIsLoggedIn(true);
      navigate("/Home");
    }
  }

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <div className="rounded-md shadow-sm -space-y-px">
        <div>
          <label htmlFor="email-address" className="sr-only">
            Email address
          </label>
          <input
            id="email-address"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>

      <div className="flex justify-center">
        <button
          type="submit"
          className='btn-auth' 
        >
          Login
        </button>
      </div>
    </form>
  );
}

export default Login;