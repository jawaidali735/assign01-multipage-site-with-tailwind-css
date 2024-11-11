import React from 'react';

const AboutUs = () => {
  return (
    <div className="flex flex-col items-center bg-gray-50 min-h-screen py-16 px-6 sm:px-12 lg:px-24 text-gray-800">
    
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-600 mb-6">About Us</h1>

      
      <p className="max-w-3xl text-lg sm:text-xl text-center text-gray-700 mb-10">
        We are passionate about helping you discover amazing places around the world. Our mission is to make your travel experience unforgettable by offering the best services, personalized experiences, and reliable support.
      </p>

      <div className="bg-white rounded-lg shadow-lg p-8 mb-8 max-w-4xl w-full">
        <h2 className="text-2xl font-semibold text-blue-500 mb-4">Our Mission</h2>
        <p className="text-gray-700">
          Our mission is to inspire and enable people to explore new destinations, discover different cultures, and connect with the beauty of the world. We aim to provide a platform where travelers can plan and book their trips easily and confidently.
        </p>
      </div>

      
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl w-full">
        <h2 className="text-2xl font-semibold text-blue-500 mb-4">Our Values</h2>
        <p className="text-gray-700">
          We believe in sustainability, respect for cultures, and promoting positive travel experiences. We are dedicated to customer satisfaction, and we work hard to offer services that meet and exceed expectations.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
