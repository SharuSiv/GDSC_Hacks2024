import React from 'react';
import '../pages/auth.css'

function Signup() {
  return (
    <form className="mt-8 space-y-6">
      <div className="rounded-md shadow-sm -space-y-px">
        <div>
          <label htmlFor="First Name" className="sr-only">
            First Name
          </label>
          <input
            id="first-name"
            name="first-name"
            type="first-name"
            autoComplete="first-name"
            required
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="First Name"
          />
        </div>
        <div>
          <label htmlFor="Last Name" className="sr-only">
            First Name
          </label>
          <input
            id="last-name"
            name="last-name"
            type="last-name"
            autoComplete="last-name"
            required
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Last Name"
          />
        </div>

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
          />
        </div>
        <div>
          <label htmlFor="createpassword" className="sr-only">
            Password
          </label>
          <input
            id="Createpassword"
            name="Createpassword"
            type="Createpassword"
            autoComplete="current-password"
            required
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Create Password"
          />
        </div>
        <div>
          <label htmlFor="confirmpassword" className="sr-only">
            Confirm Password
          </label>
          <input
            id="confirmpassword"
            name="confirmpassword"
            type="confirmpassword"
            autoComplete="current-password"
            required
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Confirm Password"
          />
        </div>
      </div>

      <div className="flex justify-center">
        <button
          type="submit"
          className='btn-auth'>
          Confirm
        </button>
      </div>
    </form>
  );
}

export default Signup;
