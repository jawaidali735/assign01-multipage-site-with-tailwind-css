import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white py-12 px-6 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 gap-8 text-center md:text-left md:grid-cols-2 lg:grid-cols-3">
        
      
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-3xl font-semibold text-blue-500">
            Travel<span className="text-white">Spot</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-xs">
            Discover amazing places around the world with us.
          </p>
        </div>

        
        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors duration-300">
              <FaFacebookF />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors duration-300">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors duration-300">
              <FaInstagram />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors duration-300">
              <FaLinkedin />
            </a>
          </div>
        </div>

        
        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-blue-500 transition-colors duration-300">Home</a></li>
            <li><a href="#" className="text-gray-400 hover:text-blue-500 transition-colors duration-300">About Us</a></li>
            <li><a href="#" className="text-gray-400 hover:text-blue-500 transition-colors duration-300">Services</a></li>
            <li><a href="#" className="text-gray-400 hover:text-blue-500 transition-colors duration-300">Contact</a></li>
          </ul>
        </div>
        
      </div>

      
      <div className="text-center text-gray-400 mt-12">
        <p>&copy; 2024 TravelSpot. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
