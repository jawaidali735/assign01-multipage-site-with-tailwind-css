const Hero = () => {
    return (
      <div
        className="bg-cover bg-center text-white p-8 h-screen" 
        style={{
          backgroundImage: "url('/header-bg.jpg')", 
        }}
      >
        <div className="hero-content max-w-2xl mt-56 mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Leave Your Footprints</h1>
          <p className="text-lg sm:text-xl mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora repellendus mollitia totam, Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <button className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition-colors duration-300">
            Book Now
          </button>
        </div>
      </div>
    );
  };
  
  export default Hero;
  
  // this is hero section