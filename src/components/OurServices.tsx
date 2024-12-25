import React from "react";

const OurServices = () => {
  return (
    <div
      className="py-16 px-8 bg-cover bg-center bg-gray-50 min-h-screen" 
      style={{
        backgroundImage: "url('/services-bg.jpg')",
      }}
    >
  
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold text-white mb-4">Our Services</h2>
        <p className="text-lg text-white max-w-3xl mx-auto">
          Explore the various services we offer to make your travel experience
          seamless and unforgettable. From luxurious stays to personalized
          tours, we have everything to make your trip memorable.
        </p>
      </div>

      
      <div className="grid md:grid-cols-3 gap-8">
        {/* Service Item 1 */}
        <div className="service-item p-6 bg-white bg-opacity-80 rounded-lg shadow-lg hover:shadow-xl hover:bg-opacity-90 transform transition-all duration-300 hover:-translate-y-2">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Accommodation
          </h3>
          <p className="text-gray-600 mb-6">
            Comfortable stays at the best hotels and resorts. We offer a range
            of options for every budget.
          </p>
          <button className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition-colors duration-300">
            <a href="#">Read More</a>
          </button>
        </div>

        <div className="service-item p-6 bg-white bg-opacity-80 rounded-lg shadow-lg hover:shadow-xl hover:bg-opacity-90 transform transition-all duration-300 hover:-translate-y-2">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Guided Tours
          </h3>
          <p className="text-gray-600 mb-6">
            Explore cities with expert guides who provide insights into history,
            culture, and attractions.
          </p>
          <button className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition-colors duration-300">
            <a href="#">Read More</a>
          </button>
        </div>

     
        <div className="service-item p-6 bg-white bg-opacity-80 rounded-lg shadow-lg hover:shadow-xl hover:bg-opacity-90 transform transition-all duration-300 hover:-translate-y-2">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Transportation
          </h3>
          <p className="text-gray-600 mb-6">
            Convenient transport options, including airport transfers, private
            cars, and more for your comfort.
          </p>
          <button className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition-colors duration-300">
            <a href="#">Read More</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
