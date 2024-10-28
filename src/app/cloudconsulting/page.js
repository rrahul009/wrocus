'use client';
import React, { useEffect, useState, useRef } from 'react';



import { HiOutlineOfficeBuilding, HiOutlineUser, HiOutlinePhone, HiOutlineMail } from 'react-icons/hi';
import { initializeAOS } from '../utils/Aos_setup';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

const page = () => {
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

            // Use toast or inline message instead of alert
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
        backgroundColor: 'rgb(239 246 255)',
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
            <div className="bg-white">


                <main>
                    <section className="text-center bg-blue-50 mb-8 py-12">
                        <h1 className="text-4xl mt-8 font-extrabold mb-6 text-black">Cloud Consulting Services</h1>
                        <p className="text-xl text-black max-w-5xl mx-auto">
                            Unlock the power of the cloud with our expert consulting services. We help businesses of all sizes leverage cloud technologies to optimize operations, reduce costs, and drive innovation.
                        </p>
                        <div className="flex justify-center mt-8">
                            <a  className="bg-blue-950 text-white py-3 px-6 rounded-lg text-lg font-semibold">
                                Explore Our Services
                            </a>
                        </div>
                    </section>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                        {/* Cloud Migration Card */}
                        <div className="bg-blue-950 border border-gray-300 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300" data-aos="zoom-in-up">
                            <img src="https://raw.githubusercontent.com/Zafar9708/AnbruchIT/refs/heads/main/public/Assets/cloudConsultant/cloud-migration-min.webp" alt="Cloud Migration" className="w-full h-48 object-cover rounded-t-lg mb-4" />
                            <h3 className="text-2xl font-semibold mb-3 text-white">Cloud Migration</h3>
                            <p className="text-white mb-4">
                                Seamlessly transition your IT infrastructure to the cloud, optimizing performance and cost-efficiency.
                            </p>
                            <ul className="list-disc list-inside text-left text-white mb-4">
                                <li>Assessment and planning</li>
                                <li>Data migration</li>
                                <li>Cloud architecture design</li>
                            </ul>
                        </div>

                        {/* Cloud Optimization Card */}
                        <div className="bg-blue-950 border border-gray-300 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300" data-aos="zoom-in-up">
                            <img src="https://github.com/Zafar9708/AnbruchIT/blob/main/public/Assets/cloudConsultant/cloud-cost-optimization-fb.png?raw=true" alt="Cloud Optimization" className="w-full h-48 object-cover rounded-t-lg mb-4" />
                            <h3 className="text-2xl font-semibold mb-3 text-white">Cloud Optimization</h3>
                            <p className="text-white mb-4">
                                Maximize the value of your cloud investment through performance tuning, cost optimization, and security best practices.
                            </p>
                            <ul className="list-disc list-inside text-white text-left mb-4">
                                <li>Cost analysis and reduction</li>
                                <li>Performance optimization</li>
                                <li>Security assessments</li>
                            </ul>
                        </div>

                        {/* Cloud Security Card */}
                        <div className="bg-blue-950 border border-gray-300 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300" data-aos="zoom-in-up">
                            <img src="https://github.com/Zafar9708/AnbruchIT/blob/main/public/Assets/cloudConsultant/EC_Data_Security_Lock_750.jpg?raw=true" alt="Cloud Security" className="w-full h-48 object-cover rounded-t-lg mb-4" />
                            <h3 className="text-2xl font-semibold mb-3 text-white">Cloud Security</h3>
                            <p className="text-white mb-4">
                                Protect your sensitive data and ensure compliance with rigorous security standards.
                            </p>
                            <ul className="list-disc list-inside text-white text-left mb-4">
                                <li>Risk assessments</li>
                                <li>Security audits</li>
                                <li>Incident response planning</li>
                            </ul>
                        </div>

                        {/* Cloud Consulting Card */}
                        <div className="bg-blue-950 border border-gray-300 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300" data-aos="zoom-in-up">
                            <img src="https://github.com/Zafar9708/AnbruchIT/blob/main/public/Assets/cloudConsultant/cloud_consulting.jpg?raw=true" alt="Cloud Consulting" className="w-full h-48 object-cover rounded-t-lg mb-4" />
                            <h3 className="text-2xl font-semibold mb-3 text-white">Cloud Consulting</h3>
                            <p className="text-white mb-4">
                                Get expert guidance on your cloud journey, from strategy development to implementation and ongoing support.
                            </p>
                            <ul className="list-disc list-inside text-white text-left mb-4">
                                <li>Cloud strategy development</li>
                                <li>Technology selection</li>
                                <li>Cloud migration planning</li>
                            </ul>
                        </div>

                        {/* Cloud DevOps Card */}
                        <div className="bg-blue-950 border border-gray-300 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300" data-aos="zoom-in-up">
                            <img src="https://github.com/Zafar9708/AnbruchIT/blob/main/public/Assets/cloudConsultant/cloud_devops.jpg?raw=true" alt="Cloud DevOps" className="w-full h-48 object-cover rounded-t-lg mb-4" />
                            <h3 className="text-2xl font-semibold mb-3 text-white">Cloud DevOps</h3>
                            <p className="text-white mb-4">
                                Integrate development and operations to streamline workflows, automate deployments, and improve efficiency.
                            </p>
                            <ul className="list-disc list-inside text-white text-left mb-4">
                                <li>CI/CD pipeline setup</li>
                                <li>Infrastructure as Code (IaC)</li>
                                <li>Monitoring and logging</li>
                            </ul>
                        </div>

                        {/* Cloud Analytics Card */}
                        <div className="bg-blue-950 border border-gray-300 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300" data-aos="zoom-in-up">
                            <img src="https://github.com/Zafar9708/AnbruchIT/blob/main/public/Assets/cloudConsultant/cloud_Analaytics.jpg?raw=true" alt="Cloud Analytics" className="w-full h-48 object-cover rounded-t-lg mb-4" />
                            <h3 className="text-2xl font-semibold mb-3 text-white">Cloud Analytics</h3>
                            <p className="text-white mb-4">
                                Leverage data analytics to gain insights and drive business decisions in the cloud.
                            </p>
                            <ul className="list-disc list-inside text-white text-left mb-4">
                                <li>Data warehousing</li>
                                <li>Business intelligence</li>
                                <li>Predictive analytics</li>
                            </ul>
                        </div>
                    </div>
                </main>

                <section className="text-center mb-3 py-4 bg-gray-100">
                    <h2 className="text-2xl lg:text-4xl font-bold mb-4 text-black">Our Cloud Consulting Offerings</h2>
                    <p className="text-md font-semibold text-black max-w-3xl mx-auto mb-6">
                        Explore our comprehensive range of services designed to elevate your cloud journey:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                        {/* Innovative Solutions Card */}
                        <div className="bg-blue-950 border border-gray-300 rounded-lg shadow-lg p-12 hover:shadow-xl transition-shadow duration-300" data-aos="zoom-in-up">
                            <h3 className="text-2xl font-semibold mb-3 text-white">Innovative Solutions</h3>
                            <p className="text-white mb-4">
                                Explore cutting-edge cloud solutions tailored to meet the unique needs of your business.
                            </p>
                        </div>

                        {/* Cost Management Card */}
                        <div className="bg-blue-950 border border-gray-300 rounded-lg shadow-lg p-12 hover:shadow-xl transition-shadow duration-300" data-aos="zoom-in-up">
                            <h3 className="text-2xl font-semibold mb-3 text-white">Cost Management</h3>
                            <p className="text-white mb-4">
                                Optimize your cloud spending with strategic cost management and budgeting techniques.
                            </p>
                        </div>

                        {/* Compliance & Governance Card */}
                        <div className="bg-blue-950 border border-gray-300 rounded-lg shadow-lg p-12 hover:shadow-xl transition-shadow duration-300" data-aos="zoom-in-up">
                            <h3 className="text-2xl font-semibold mb-3 text-white">Compliance & Governance</h3>
                            <p className="text-white mb-4">
                                Ensure your cloud environment adheres to industry regulations and best practices.
                            </p>
                        </div>

                        {/* Multi-Cloud Strategy Card */}
                        <div className="bg-blue-950 border border-gray-300 rounded-lg shadow-lg p-12 hover:shadow-xl transition-shadow duration-300" data-aos="zoom-in-up">
                            <h3 className="text-2xl font-semibold mb-3 text-white">Multi-Cloud Strategy</h3>
                            <p className="text-white mb-4">
                                Leverage the benefits of multiple cloud providers to enhance flexibility and avoid vendor lock-in.
                            </p>
                        </div>

                        {/* Disaster Recovery Card */}
                        <div className="bg-blue-950 border border-gray-300 rounded-lg shadow-lg p-12 hover:shadow-xl transition-shadow duration-300" data-aos="zoom-in-up">
                            <h3 className="text-2xl font-semibold mb-3 text-white">Disaster Recovery</h3>
                            <p className="text-white mb-4">
                                Develop robust disaster recovery plans to ensure business continuity in the face of disruptions.
                            </p>
                        </div>

                        {/* Industry-Specific Solutions Card */}
                        <div className="bg-blue-950 border border-gray-300 rounded-lg shadow-lg p-12 hover:shadow-xl transition-shadow duration-300" data-aos="zoom-in-up">
                            <h3 className="text-2xl font-semibold mb-3 text-white">Industry-Specific Solutions</h3>
                            <p className="text-white mb-4">
                                Tailor cloud solutions that address the unique challenges and opportunities within your industry.
                            </p>
                        </div>
                    </div>
                </section>


                <div style={containerStyle} data-aos="zoom-in-up">
                    <h2 className="text-2xl lg:text-4xl font-bold text-gray-800">Elevating Your Business with Cloud Solutions</h2>
                    <p className="text-xl mt-6 text-gray-600 mb-6">
                        Expert cloud consulting services designed to optimize your operations, enhance scalability.
                    </p>
                   <Link href="contact">
                   <button
                        // onClick={() => setFormVisible(true)}
                        className="bg-blue-950 text-white py-2 px-4 rounded-lg transition duration-300 hover:bg-blue-700"
                    >
                        Get In Touch
                    </button>
                   </Link>
                </div>

                {/* Modal */}
                {isFormVisible && (
                    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                        <form
                            ref={formRef}
                            onSubmit={handleSubmit}
                            className="bg-white p-4 rounded-lg w-full max-w-sm mx-4" style={{ paddingLeft: "40px", paddingRight: "40px" }}
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

                <Footer />
            </div>
        </>
    );
};

export default page;