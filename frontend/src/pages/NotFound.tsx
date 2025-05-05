
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <img
        src="https://illustrations.popsy.co/amber/crashed-error.svg"
        alt="Page not found"
        className="w-full max-w-md mb-8"
      />
      <h1 className="text-4xl font-bold text-gray-900 mb-2 text-center">Page not found</h1>
      <p className="text-lg text-gray-600 mb-8 text-center">
        Sorry, the page you are looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-gps-blue text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
      >
        Go back home
      </Link>
    </div>
  );
};

export default NotFound;
