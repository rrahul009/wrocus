'use client';
import React, { useEffect, useState, useRef } from 'react';


import { HiOutlineOfficeBuilding, HiOutlineUser, HiOutlinePhone, HiOutlineMail } from 'react-icons/hi';
import Footer from '@/components/Footer';
import { initializeAOS } from '../utils/Aos_setup';
import Navbar from '@/components/Navbar';

const ManagedServicesPage = () => {
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
            formRef.current.querySelector('input').focus(); // Focus the first input

            // Trap focus within modal
            const focusableElements = formRef.current.querySelectorAll('input, textarea, button');
            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];

            const trapFocus = (e) => {
                if (e.key === 'Tab') {
                    if (e.shiftKey) { // Shift + Tab
                        if (document.activeElement === firstElement) {
                            e.preventDefault();
                            lastElement.focus();
                        }
                    } else { // Tab
                        if (document.activeElement === lastElement) {
                            e.preventDefault();
                            firstElement.focus();
                        }
                    }
                }
            };

            document.addEventListener('keydown', trapFocus);

            return () => {
                document.removeEventListener('keydown', trapFocus);
                document.removeEventListener('mousedown', handleClickOutside);
            };
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
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
        <>
            <Navbar />


            <div className="bg-gray-100">

                {/* Hero Section */}
                <section className="bg-blue-50 py-6 text-black" data-aos="zoom-in-up">
    <div className="container mx-auto flex flex-col items-center px-4 py-12">
        <h2 className="text-4xl font-extrabold mb-6 mt-6 text-center">
            Comprehensive Managed Services for Seamless Operations
        </h2>
        <p className="text-xl mb-8 max-w-3xl text-center">
            Optimize your IT operations and focus on your core business with our expert-managed services. We handle your IT infrastructure, support, and maintenance so you can achieve operational excellence without the hassle.
        </p>
        <a href="/contact" className="bg-blue-950 text-white py-3 px-6 rounded-lg font-semibold text-lg transition duration-300">
            Learn More
        </a>
    </div>
</section>


                {/* Introduction to Managed Services */}
                <section className="py-12 bg-gray-200">
                    <div className="container mx-auto px-4" data-aos="zoom-in-up">
                        <h2 className="text-4xl font-extrabold mb-6 text-center text-gray-800">What Are Managed Services?</h2>
                        <div className="flex flex-col lg:flex-row items-center lg:justify-between">
                            <div className="lg:w-1/2 mb-8 lg:mb-0">
                                <p className="text-lg mb-4 text-gray-800">
                                    Managed services involve outsourcing the management of your IT infrastructure and operations to a specialized provider. This approach allows businesses to focus on their core functions while ensuring that their IT systems are handled by experts.
                                </p>
                                <p className="text-lg mb-4 text-gray-800">
                                    Managed services can encompass a range of IT functions, including proactive monitoring, technical support, cloud services, data backup, and network management. The goal is to enhance your IT performance, reduce costs, and ensure reliable and secure operations.
                                </p>
                                <p className="text-lg text-gray-800">
                                    By partnering with a managed services provider, you gain access to a team of skilled professionals who offer continuous support and expertise, ensuring your technology operates efficiently and aligns with your business objectives.
                                </p>
                            </div>
                            <div className="lg:w-1/2 flex justify-center lg:justify-end bg-gray-200">
                                <img src="https://images.spiceworks.com/wp-content/uploads/2023/03/16070722/pasted-image-0-1.png" alt="Managed Services" />
                            </div>
                        </div>
                        <div className="mt-12 text-center">
                            <a href="/contact" className="bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold text-lg hover:bg-blue-500 transition duration-300">
                                Explore Our Services
                            </a>
                        </div>
                    </div>
                </section>

                {/* Benefits of Managed Services */}
                <section className="py-12 bg-white">
                    <div className="container mx-auto px-4" data-aos="zoom-in-up">
                        <h2 className="text-4xl font-extrabold mb-10 text-center text-gray-800">Benefits of Managed Services</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                            <div className="bg-blue-950 p-8 rounded-lg shadow-lg" data-aos="zoom-in-up">
                                <h3 className="text-2xl font-semibold mb-4 text-white">Cost Efficiency</h3>
                                <p className="text-white">
                                    Managed services offer predictable costs with fixed monthly fees, helping businesses budget effectively and avoid unexpected expenses related to IT issues.
                                </p>
                            </div>
                            <div className="bg-blue-950 p-8 rounded-lg shadow-lg" data-aos="zoom-in-up">
                                <h3 className="text-2xl font-semibold mb-4 text-white">Expertise and Experience</h3>
                                <p className="text-white">
                                    Gain access to a team of IT professionals with specialized skills and experience, ensuring high-quality service and the latest technological advancements.
                                </p>
                            </div>
                            <div className="bg-blue-950 p-8 rounded-lg shadow-lg" data-aos="zoom-in-up">
                                <h3 className="text-2xl font-semibold mb-4 text-white">Focus on Core Business</h3>
                                <p className="text-white">
                                    By outsourcing IT management, you can focus on your core business activities and strategic initiatives, rather than dealing with day-to-day IT operations.
                                </p>
                            </div>
                            <div className="bg-blue-950 p-8 rounded-lg shadow-lg" data-aos="zoom-in-up">
                                <h3 className="text-2xl font-semibold mb-4 text-white">Enhanced Security</h3>
                                <p className="text-white">
                                    Managed services providers implement robust security measures to protect your data and infrastructure from cyber threats and unauthorized access.
                                </p>
                            </div>
                            <div className="bg-blue-950 p-8 rounded-lg shadow-lg" data-aos="zoom-in-up">
                                <h3 className="text-2xl font-semibold mb-4 text-white">Scalability</h3>
                                <p className="text-white">
                                    Easily scale your IT resources up or down based on your business needs without the need for significant capital investment.
                                </p>
                            </div>
                            <div className="bg-blue-950 p-8 rounded-lg shadow-lg" data-aos="zoom-in-up">
                                <h3 className="text-2xl font-semibold mb-4 text-white">24/7 Support</h3>
                                <p className="text-white">
                                    Enjoy round-the-clock support from a dedicated team, ensuring that any IT issues are resolved promptly and minimizing downtime.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>




                {/* Custom Contact Section */}
                <div className="flex flex-col items-center justify-center p-20" style={{ backgroundColor: 'rgb(243 244 246)' }} data-aos="zoom-in-up">
                    <h1 className="text-3xl md:text-4xl font-extrabold mb-4">
                        Streamlining Your Operations with Managed Services
                    </h1>
                    <p className="text-lg mb-8">
                        Comprehensive managed services that ensure your IT infrastructure runs smoothly.
                    </p>

                    <button
                        type="button"
                        className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition"
                        onClick={() => setFormVisible(true)}
                    >
                        GET IN TOUCH
                    </button>

                    {isFormVisible && (
                        <>
                            <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-10" />
                            <div className="fixed inset-0 flex items-center justify-center z-20">
                                <form
                                    ref={formRef}
                                    onSubmit={handleSubmit}
                                    className="bg-white p-4 rounded-lg w-full max-w-sm mx-4" style={{ paddingLeft: "40px", paddingRight: "40px" }}
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
                </div>
            </div>
            <Footer />

        </>
    );
};

export default ManagedServicesPage;