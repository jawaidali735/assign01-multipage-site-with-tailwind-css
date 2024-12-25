import React from 'react';

const ContactUs = () => {
  return (
    <div className="flex flex-col items-center bg-gray-50 min-h-screen py-16 px-6 sm:px-12 lg:px-24 text-gray-800">
    
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-600 mb-6">Contact Us</h1>

      
      <p className="max-w-3xl text-lg sm:text-xl text-center text-gray-700 mb-10">
        We&rsquo;d love to hear from you! Please reach out with any questions, comments, or feedback.
      </p>

      
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8 max-w-4xl w-full">
        <h2 className="text-2xl font-semibold text-blue-500 mb-6">Get In Touch</h2>
        <form className="space-y-4">
          
          <div>
            <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
            />
          </div>
        
          <div>
            <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Email"
            />
          </div>
          
          <div>
            <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
            <textarea
              id="message"
              rows={4} 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Message"
            ></textarea>
          </div>
        
          <button className="w-full bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition-colors duration-300">
            Send Message
          </button>
        </form>
      </div>

      
      <div className="text-center mt-10">
        <p className="text-lg text-gray-700">You can also reach us at:</p>
        <p className="text-lg font-medium text-blue-500 mt-2">Email</p>
        <p className="text-lg font-medium text-blue-500 mt-2">phone</p>
      </div>
    </div>
  );
};

export default ContactUs;
