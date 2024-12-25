import React from 'react';
import Image from 'next/image';

const Destinations = () => {
  
  const destinations = [
    {
      id: 1,
      name: 'Paris',
      description: 'The city of lights, known for the Eiffel Tower and art museums.',
      imageUrl: '/paris.jpg',
    },
    {
      id: 2,
      name: 'Tokyo',
      description: 'A bustling city blending modern technology with traditional temples.',
      imageUrl: '/japan.jpg',
    },
    {
      id: 3,
      name: 'New York',
      description: 'The city that never sleeps, famous for Times Square and Central Park.',
      imageUrl: '/newyork.jpg',
    },
    {
      id: 4,
      name: 'Sydney',
      description: 'Known for the Sydney Opera House and beautiful beaches.',
      imageUrl: '/sydeny.jpg',
    },
    {
      id: 5,
      name: 'Rome',
      description: 'A city filled with ancient history and iconic architecture, like the Colosseum.',
      imageUrl: '/rome.jpg',
    },
    {
      id: 6,
      name: 'Dubai',
      description: 'Famous for luxury shopping, modern architecture, and vibrant nightlife.',
      imageUrl: '/dubai.jpg',
    },
  ];

  return (
    <div className="flex flex-col items-center bg-gray-50 min-h-screen py-16 px-6 sm:px-12 lg:px-24 text-gray-800">
      
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-600 mb-6">Top Destinations</h1>

      
      <p className="max-w-3xl text-lg sm:text-xl text-center text-gray-700 mb-10">
        Explore our curated list of top travel destinations from around the world. Find your next adventure!
      </p>

      
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {destinations.map((destination) => (
          <div
            key={destination.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            <Image
              src={destination.imageUrl}
              alt={destination.name}
              width={500} // Adjust width as needed
              height={300} // Adjust height as needed
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-3">{destination.name}</h2>
              <p className="text-gray-600">{destination.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destinations;
