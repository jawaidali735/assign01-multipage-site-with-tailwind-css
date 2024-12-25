import Image from 'next/image';

const FeaturedPlaces = () => {
  const places = [
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
    <section className="featured-places bg-gray-100 py-16 px-4">
      <p className="text-center text-xl text-gray-500 mb-4">KNOW ABOUT SOME PLACES BEFORE YOUR TRAVEL</p>
      <h2 className="text-center text-3xl font-bold mb-8">FEATURED PLACES</h2>
      <div className="places-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8">
        {places.map((place) => (
          <div key={place.id} className="place-card group bg-white rounded-lg shadow-lg overflow-hidden">
            <Image
              src={place.imageUrl}
              alt={place.name}
              width={400} // Adjust as per your layout
              height={300} // Adjust as per your layout
              className="place-image w-full h-48 object-cover"
            />
            <div className="place-info p-4">
              <h3 className="place-name text-xl font-semibold text-gray-800">{place.name}</h3>
              <p
                className="place-description text-gray-600 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                {place.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedPlaces;
