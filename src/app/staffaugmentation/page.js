'use client';
import React, { useEffect, useState, useRef } from 'react';
 
import { HiOutlineOfficeBuilding, HiOutlineUser, HiOutlinePhone, HiOutlineMail } from 'react-icons/hi';
import { initializeAOS } from '../utils/Aos_setup';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const StaffAugmentationServices = () => {
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
    <div className="bg-gray-100">
       
      <Navbar/>
     

      {/* Hero Section */}
      <section className="bg-blue-50 text-gray-900 py-24" data-aos="zoom-in-up">
        <div className="container mt-12 px-4 text-center">
          <h1 className="text-4xl font-extrabold mb-6 leading-tight">
            Enhance Your Team with Our Staff Augmentation Services
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Access top talent quickly and efficiently with our staff augmentation services. Scale your team on demand and fill skill gaps without the long-term commitment.
          </p>
          <button
            type="button"
            className="bg-blue-950 text-white py-3 px-6 rounded-lg font-semibold text-lg transition duration-300"
            onClick={() => setFormVisible(true)}
          >
            Get Started
          </button>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-12 bg-white" data-aos="zoom-in-up">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-extrabold mb-6 text-center text-gray-800">Our Staff Augmentation Process</h2>
          <div className="flex flex-col lg:flex-row items-center lg:justify-between">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <p className="text-lg mb-4 text-gray-800">
                At <strong>[AnbruchIT],</strong> we follow a structured process to ensure that we meet your staffing needs efficiently and effectively. Our approach includes:
              </p>
              <ol className="list-decimal pl-5 space-y-4 text-gray-800">
                <li>
                  <strong>Understanding Your Needs:</strong> We begin by conducting a detailed consultation to understand your project requirements, team dynamics, and specific skill needs.
                </li>
                <li>
                  <strong>Talent Matching:</strong> Leveraging our extensive network and resources, we match your needs with qualified candidates who possess the required skills and experience.
                </li>
                <li>
                  <strong>Candidate Screening:</strong> We thoroughly vet candidates through interviews, technical assessments, and reference checks to ensure they meet our high standards.
                </li>
                <li>
                  <strong>Integration and Onboarding:</strong> Once a candidate is selected, we facilitate a smooth onboarding process to integrate them into your team effectively.
                </li>
                <li>
                  <strong>Ongoing Support:</strong> We provide continuous support and check-ins to ensure that the candidate is meeting expectations and address any issues promptly.
                </li>
              </ol>
            </div>
            <div className="lg:w-1/2 flex justify-center lg:justify-end">
              <img src="https://ewzduhvhjkj.exactdn.com/wp-content/uploads/2022/08/07160431/Augment-your-team-1-2.png?strip=all&lossy=1&ssl=1" alt="Staff Augmentation" />
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-12 bg-gray-50" data-aos="zoom-in-up">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-extrabold mb-6 text-center text-gray-800">Key Benefits of Staff Augmentation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" data-aos="zoom-in-up">
            {[
              {
                title: "Access to Top Talent",
                description: "Quickly tap into a pool of highly skilled professionals who can deliver exceptional results and bring valuable expertise to your projects."
              },
              {
                title: "Flexibility and Scalability",
                description: "Scale your team up or down based on project demands, ensuring you have the right resources at the right time without long-term commitments."
              },
              {
                title: "Cost Efficiency",
                description: "Optimize your budget by hiring professionals for specific projects or short-term needs, avoiding the overhead costs of permanent hires."
              },
              {
                title: "Speed to Market",
                description: "Accelerate project timelines by quickly integrating skilled professionals into your team, helping you meet deadlines and achieve goals faster."
              },
              {
                title: "Enhanced Focus",
                description: "Allow your core team to focus on strategic initiatives and high-priority tasks while specialized professionals handle specific aspects of your projects."
              },
              {
                title: "Reduced Risk",
                description: "Minimize risks associated with hiring and training permanent staff by leveraging experienced professionals who are ready to contribute immediately."
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-blue-950 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <h3 className="text-2xl font-semibold mb-4 text-white">{benefit.title}</h3>
                <p className="text-white">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insights & Resources */}
      <section className="py-12 bg-gray-200" data-aos="zoom-in-up">
        <div className="container mt-4 px-4">
          <h2 className="text-4xl font-extrabold mb-6 text-center text-gray-800">Insights & Resources</h2>
          <p className="text-lg mb-8 text-center text-gray-800">
            Stay informed and make better decisions with our curated insights and resources on staff augmentation. Explore industry trends, best practices, and valuable content to enhance your understanding of how staff augmentation can benefit your organization.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12" data-aos="zoom-in-up">
            {[
              {
                title: "Industry Trends",
                description: "Discover the latest trends in staff augmentation and how they can impact your business. Stay ahead with insights into market dynamics and evolving workforce strategies."
              },
              {
                title: "Best Practices",
                description: "Learn best practices for implementing staff augmentation effectively. From selecting the right talent to integrating them into your team, get practical tips and guidelines."
              },
              {
                title: "Case Studies & White Papers",
                description: "Access detailed case studies and white papers that showcase real-world examples and research on staff augmentation. Understand how other organizations have benefited from similar solutions."
              }
            ].map((resource, index) => (
              <div key={index} className="bg-blue-50 p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4 text-blue-950">{resource.title}</h3>
                <p className="text-gray-800">{resource.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Contact Section */}
      <div className="py-24 bg-blue-50 text-center" data-aos="zoom-in-up">
        <h1 className="text-3xl md:text-4xl font-extrabold mt-4 mb-6">Ready to Enhance Your Team?</h1>
        <p className="text-lg md:text-lg mb-8">
          Get in touch with us today to learn more about our staff augmentation services and how we can help you achieve your business objectives with the right talent.
        </p>
        <button
          type="button"
          className="bg-blue-500 text-white py-2 px-4 rounded-md"
          onClick={() => setFormVisible(true)}
        >
          CONTACT US
        </button>
      </div>

      {/* Modal for Contact Form */}
      {isFormVisible && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="bg-white p-4 rounded-lg w-full max-w-sm mx-4" style={{paddingLeft:"40px",paddingRight:"40px"}}
            data-aos="zoom-in-up"
          >
            <button
              type="button"
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
              onClick={() => setFormVisible(false)}
            >
              &times;
            </button>
            <h2 className="text-lg font-semibold mb-2 text-center text-blue-700">Contact Us</h2>

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
                style={{ resize: 'none' }}
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
      )}

      <Footer/>
    </div>
  );
};

export default StaffAugmentationServices;