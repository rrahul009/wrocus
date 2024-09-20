'use client'
import { initializeAOS } from '@/app/utils/Aos_setup';
import React, { useEffect, useState } from 'react';

const ContactPage = () => {
  useEffect(() => {
    const cleanupAOS = initializeAOS();
    return cleanupAOS; // Cleanup AOS on unmount
}, []);
  // State to manage the visibility of the contact form
  const [isFormVisible, setIsFormVisible] = useState(false);

  // Function to toggle form visibility
  const toggleFormVisibility = () => {
    setIsFormVisible((prev) => !prev);
  };

  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat h-[400px] w-full mt-10"
      style={{ backgroundImage: 'url(contactImage.jpg)' }} // Ensure the correct path
      data-aos="zoom-in-up"
    >
      {/* Container for text and form */}
      <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-between bg-black bg-opacity-50 p-6 md:p-10"
      
      >
        {/* Text Section */}
        <div className="text-white mb-8 md:mb-0 md:w-1/2 max-w-lg">
          <h1 className="text-md mb-4 md:text-xl md:mb-6">We Carry More Than Just Good Coding Skills</h1>
          <p className="text-xl md:text-4xl font-bold">Let's Collaborate for some <br /> good work</p>
        </div>

        {/* Contact Button */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <button
            onClick={toggleFormVisibility}
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
          >
            {isFormVisible ? 'Close Form' : 'Contact Us'}
          </button>
        </div>
      </div>

      {/* Conditional rendering of the contact form */}
      {isFormVisible && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 p-6 md:p-10">
          <div className="bg-white p-6 rounded-lg shadow-lg md:w-1/2 max-w-md relative">
            <button
              onClick={toggleFormVisibility}
              className="absolute top-2 right-2 text-red-500 hover:text-gray-700 transition"
              aria-label="Close Form"
            >
              &times;
            </button>
            <h2 className="text-xl font-bold mb-4">Contact Us</h2>
            <form className="flex flex-col space-y-4">
              <div className="flex flex-col">
                <label htmlFor="name" className="mb-1 text-sm font-semibold">Name</label>
                <input
                  id="name"
                  type="text"
                  className="p-2 border border-gray-300 rounded-md text-sm"
                  placeholder="Your Name"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="mb-1 text-sm font-semibold">Email</label>
                <input
                  id="email"
                  type="email"
                  className="p-2 border border-gray-300 rounded-md text-sm"
                  placeholder="Your Email"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="mobile" className="mb-1 text-sm font-semibold">Mobile</label>
                <input
                  id="mobile"
                  type="tel"
                  className="p-2 border border-gray-300 rounded-md text-sm"
                  placeholder="Your Mobile Number"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="company" className="mb-1 text-sm font-semibold">Company</label>
                <input
                  id="company"
                  type="text"
                  className="p-2 border border-gray-300 rounded-md text-sm"
                  placeholder="Your Company Name"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="message" className="mb-1 text-sm font-semibold">Message</label>
                <textarea
                  id="message"
                  rows="3"
                  className="p-2 border border-gray-300 rounded-md text-sm"
                  placeholder="Your Message"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactPage;
