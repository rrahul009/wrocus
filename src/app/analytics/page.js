'use client';
import React, { useEffect, useState, useRef } from 'react';
 
 
import { HiOutlineOfficeBuilding, HiOutlineUser, HiOutlinePhone, HiOutlineMail } from 'react-icons/hi';
import { initializeAOS } from '../utils/Aos_setup';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

const AnalyticsPage = () => {
  useEffect(() => {
    const cleanupAOS = initializeAOS();
    return cleanupAOS;
  }, []);

  const [isFormVisible, setFormVisible] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const formRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      company_name: e.target.company_name.value,
      your_name: e.target.your_name.value,
      phone: e.target.phone.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    try {
      const response = await fetch('/api/email-send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorResponse = await response.json();
        throw new Error(errorResponse.error || 'An error occurred.');
      }

      alert('Message sent successfully!');
      e.target.reset();
      setFormVisible(false);
    } catch (error) {
      console.error('Fetch error:', error);
      alert(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleClickOutside = (event) => {
    if (formRef.current && !formRef.current.contains(event.target)) {
      setFormVisible(false);
    }
  };

  useEffect(() => {
    if (isFormVisible) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isFormVisible]);

  // Styles for the container
  const containerStyle = {
    backgroundColor: 'rgb(243 244 246)',
    height: '350px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    textAlign: 'center',
  };

  return (
    <div>
      
      <Navbar/>
      

      <main>
        {/* Hero Section */}
        <section className="text-center py-6 bg-blue-50 mb-4" data-aos="zoom-in-up">
          <h1 className="text-3xl mt-6 font-bold mb-4 text-black">Transform Your Business with Expert Analytics Services</h1>
          <p className="text-lg text-black">
            We provide in-depth insights that empower you to make informed, data-driven decisions and enhance operational efficiency.
          </p>

          <div className="flex justify-center mt-8">
            <a   className="bg-blue-950 text-white py-3 px-6 rounded-lg text-lg font-semibold">
              Explore Our Services
            </a>
          </div>
        </section>

        {/* Service Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12" data-aos="zoom-in-up">
          {/* Web Analytics Card */}
          <div className="bg-blue-950 border border-gray-200 rounded-lg shadow-md p-6 text-center">
            <h3 className="text-xl font-bold mb-2 text-white">Web Analytics</h3>
            <p className="text-white mb-4">
              Track website traffic, user behavior, and conversion rates to optimize your online presence.
            </p>
            <ul className="list-disc list-inside text-white text-left mb-4">
              <li>User acquisition and retention</li>
              <li>Conversion rate optimization (CRO)</li>
              <li>A/B testing</li>
            </ul>
            <p className="text-white mb-4">
              With our web analytics services, you’ll gain actionable insights into how users interact with your site, allowing you to make data-driven decisions to improve user engagement and increase conversions.
            </p>
          </div>

          {/* Mobile App Analytics Card */}
          <div className="bg-blue-950 border border-gray-200 rounded-lg shadow-md p-6 text-center">
            <h3 className="text-xl font-bold mb-2 text-white">Mobile App Analytics</h3>
            <p className="text-white mb-4">
              Understand how users interact with your mobile app and identify areas for improvement.
            </p>
            <ul className="list-disc text-white list-inside text-left mb-4">
              <li>User engagement analysis</li>
              <li>App store optimization (ASO)</li>
              <li>Crash reporting</li>
            </ul>
            <p className="text-white mb-4">
              Our mobile app analytics will help you monitor user interactions and performance metrics, enabling you to enhance app functionality, optimize user experience, and drive user retention.
            </p>
          </div>

          {/* Data Visualization Card */}
          <div className="bg-blue-950 border border-gray-200 rounded-lg shadow-md p-6 text-center">
            <h3 className="text-xl font-bold mb-2 text-white">Data Visualization</h3>
            <p className="text-white mb-4">
              Transform raw data into actionable insights with visually appealing and informative dashboards.
            </p>
            <ul className="list-disc text-white list-inside text-left mb-4">
              <li>Custom dashboard development</li>
              <li>Data storytelling</li>
              <li>Interactive visualizations</li>
            </ul>
            <p className="text-white mb-4">
              Our data visualization solutions turn complex data into clear, visually engaging formats, making it easier for you to understand trends and make informed decisions quickly.
            </p>
          </div>
        </div>

        {/* Testimonial Section */}
        <section className="bg-gray-100 py-12 px-4" data-aos="zoom-in-up">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-gray-950">What Our Clients Say</h2>
            <div className="flex flex-wrap justify-center gap-8">
              {/* Testimonial 1 */}
              <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6 max-w-md">
                <p className="text-black mb-4">
                  “The insights provided by their analytics services have been invaluable to our business. We've seen a significant improvement in user engagement and conversions. Highly recommend!”
                </p>
                <p className="font-semibold text-black">Anil Gupta Johnson</p>
                <p className="text-black">Sun Max Gears Ltd</p>
              </div>
              {/* Testimonial 2 */}
              <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6 max-w-md">
                <p className="text-black mb-4">
                  “Thanks to their analytics solutions, we have gained actionable insights that have streamlined our operations and boosted our overall performance. Their expertise is unmatched!”
                </p>
                <p className="font-semibold text-black">Shekar Mehta  </p>
                <p className="text-black">Udaan Infotech</p>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6 max-w-md">
                <p className="text-black mb-4">
                  “Their data visualization tools made it so much easier to understand our performance metrics. We now have a clearer picture of our business and can make more informed decisions.”
                </p>
                <p className="font-semibold text-black">Jessica Smith</p>
                <p className="text-black">Marketing Director, Creative Solutions</p>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study Section */}
        <section className="py-12 bg-blue-50 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">Case Studies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Case Study 1 */}
              <div className="bg-blue-950 border border-gray-200 rounded-lg shadow-md p-12" data-aos="zoom-in-up">
                <h3 className="text-xl font-semibold mb-4 text-white">E-Commerce Growth</h3>
                <p className="text-white mb-4">
                  Our client, an e-commerce store, saw a 30% increase in sales after implementing our web analytics and conversion rate optimization strategies.
                </p>
              </div>

              {/* Case Study 2 */}
              <div className="bg-blue-950 border border-gray-200 rounded-lg shadow-md p-12" data-aos="zoom-in-up">
                <h3 className="text-xl font-semibold mb-4 text-white">Mobile App Engagement</h3>
                <p className="text-white mb-4">
                  We helped a mobile app company improve user engagement by 40% through targeted analytics and user feedback analysis.
                </p>
              </div>

              {/* Case Study 3 */}
              <div className="bg-blue-950 border border-gray-200 rounded-lg shadow-md p-12" data-aos="zoom-in-up">
                <h3 className="text-xl font-semibold mb-4 text-white">Data-Driven Decisions</h3>
                <p className="text-white mb-4">
                  Our data visualization solutions empowered a finance firm to make data-driven decisions that resulted in a 25% increase in profitability.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-12 text-center" data-aos="zoom-in-up">
          <h2 className="text-3xl font-bold mb-4 text-black">Ready to Get Started?</h2>
          <p className="text-lg text-gray-700 mb-8">
            Contact us today to learn how our analytics services can benefit your business.
          </p>
        <Link href="contact">
        <button
            className="bg-blue-950 text-white py-3 px-6 rounded-lg text-lg font-semibold"
            // onClick={() => setFormVisible(true)}
          >
            Contact Us
          </button>
        </Link>
        </section>
      </main>

      {/* Modal for Contact Form */}
      {isFormVisible && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-10" />
          <div className="fixed inset-0 flex items-center justify-center z-20">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="bg-white p-4 rounded-lg w-full max-w-sm mx-4" style={{paddingLeft:"40px",paddingRight:"40px"}}
              data-aos="zoom-in-up"
            >
              <button
                type="button"
                className="absolute top- right-2 text-gray-600 hover:text-gray-800 text-lg"
                onClick={() => setFormVisible(false)}
                aria-label="Close form"
              >
                &times;
              </button>
              <h2 className="text-lg font-semibold mb-2 text-center text-blue-700">Contact Us</h2>

              {/* {error && <p className="text-red-500 text-center mb-4">{error}</p>} */}

              <div className="mb-4">
                <label className="flex items-center mb-1">
                  <HiOutlineOfficeBuilding className="mr-2 text-gray-500" />
                  <span className="text-sm font-medium text-gray-800">Company Name</span>
                </label>
                <input
                  type="text"
                  name="company_name"
                  required
                  className="block w-full border border-blue-400 focus:ring-blue-500 focus:border-blue-500 p-2 rounded-md"
                />
              </div>

              <div className="mb-4">
                <label className="flex items-center mb-1">
                  <HiOutlineUser className="mr-2 text-gray-500" />
                  <span className="text-sm font-medium text-gray-800">Your Name</span>
                </label>
                <input
                  type="text"
                  name="your_name"
                  required
                  className="block w-full border border-blue-400 focus:ring-blue-500 focus:border-blue-500 p-2 rounded-md"
                />
              </div>

              <div className="mb-4">
                <label className="flex items-center mb-1">
                  <HiOutlinePhone className="mr-2 text-gray-500" />
                  <span className="text-sm font-medium text-gray-800">Phone</span>
                </label>
                <input
                  type="text"
                  name="phone"
                  required
                  className="block w-full border border-blue-400 focus:ring-blue-500 focus:border-blue-500 p-2 rounded-md"
                />
              </div>

              <div className="mb-4">
                <label className="flex items-center mb-1">
                  <HiOutlineMail className="mr-2 text-gray-500" />
                  <span className="text-sm font-medium text-gray-800">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="block w-full border border-blue-400 focus:ring-blue-500 focus:border-blue-500 p-2 rounded-md"
                />
              </div>

              <div className="mb-4">
                <label className="block mb-1 text-sm font-medium text-gray-800">Query</label>
                <textarea
                  name="message"
                  required
                  className="block w-full border border-blue-400 focus:ring-blue-500 focus:border-blue-500 p-2 rounded-md"
                  rows="3"
                  style={{ resize: 'none' }} // Prevent resizing
                />
              </div>

              <button
                type="submit"
                className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all duration-200"
                disabled={isLoading}
              >
                {isLoading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </>
      )}

      <Footer/>
    </div>
  );
};

export default AnalyticsPage;