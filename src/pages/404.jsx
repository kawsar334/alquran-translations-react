import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';

const NotFoundPage = () => {
  return (
    <div>
        <Navbar/>

    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-blue-600">404</h1>
        <p className="text-2xl md:text-3xl font-light mb-8">
          Oops! Page not found.
        </p>
        <p className="text-gray-500 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Go to Home
        </Link>
      </div>
    </div>
    </div>
  );
};

export default NotFoundPage;
