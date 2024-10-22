'use client';



import React, { useEffect, useState, useRef } from 'react';
import { HiOutlineOfficeBuilding, HiOutlineUser, HiOutlinePhone, HiOutlineMail } from 'react-icons/hi';
import { initializeAOS } from '../utils/Aos_setup';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const page = () => {
    useEffect(() => {
        const cleanupAOS = initializeAOS();
        return cleanupAOS;
    }, []);

    const [isFormVisible, setFormVisible] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const formRef = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

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
            setError(`Error: ${error.message}`);
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

    return (
        <>
            <Navbar />
            <div className='bg-white'>


                <header className="relative bg-blue-50 text-gray-800 py-8  bg-cover bg-center" style={{ backgroundImage: "url('https://example.com/your-background-image.jpg')" }}>
                    <div className="relative z-10 container mx-auto text-center mt-4 mb-1">
                        <h1 className="text-5xl font-extrabold leading-tight relative">
                            Design & Build Exceptional Solutions
                            <span className="absolute inset-0 bg-gradient-to-r opacity-30 rounded-lg"></span>
                        </h1>
                        <p className="text-lg md:text-xl mt-4 max-w-3xl mx-auto font-semibold leading-relaxed">
                            Transform your ideas into reality with our expert design and development services. We specialize in crafting tailored solutions that elevate your brand and enhance user experiences across all platforms.
                        </p>
                        <div className="mt-8">
                            <a href="/contact" className="block">
                                <button className="bg-blue-950 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
                                    Get in Touch
                                </button>
                            </a>
                        </div>
                    </div>
                </header>

                <section className="text-center mb-16 mt-8 ">
                    <h2 className="text-4xl font-bold mb-4">Turn Your Ideas into Stunning Apps</h2>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto font-semibold leading-relaxed">
                        Our mobile app development services create feature-rich applications for both iOS and Android, tailored to your specific business needs.
                    </p>
                </section>

                {/* Services Section */}
                <section id="services" className="mb-16">
                    <h2 className="text-4xl font-bold mb-8 text-center">Our Services</h2>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {[
                            { title: 'Custom App Development', description: 'We build custom mobile applications from scratch, tailored to your specific needs.', imageUrl: 'https://www.tangenttek.com/storage/app/public/UploadedBlogs/3St8SGSqca9nI4is2lYDHdeX3Rwb5LVOaURLUZMs.jpg' },
                            { title: 'Cross-Platform Development', description: 'Develop apps that work seamlessly on both iOS and Android platforms.', imageUrl: 'https://static.tildacdn.com/tild6561-6538-4663-b266-623435653439/cross-platform-app-d.png' },
                            { title: 'UI/UX Design', description: 'Create intuitive and engaging designs that enhance user experience.', imageUrl: 'https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149051556.jpg' },
                            { title: 'App Maintenance & Support', description: 'Ongoing maintenance to keep your app up-to-date and functional.', imageUrl: 'https://www.serole.com/wp-content/uploads/2018/09/2.Application-Maintenance-Support-banner-01.jpg' },
                            { title: 'Consulting & Strategy', description: 'Provide expert advice and strategic planning to align technology with your business goals.', imageUrl: 'https://www.glueup.com/sites/default/files/image_1571.png' },
                            { title: 'Integration & API Development', description: 'Build and integrate APIs to connect your app with other services and platforms.', imageUrl: 'https://media.excellentwebworld.com/wp-content/uploads/2022/03/17091451/best-api-development-services.webp' }
                        ].map((service, index) => (
                            <div key={index} className="p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden" data-aos="zoom-in-up">
                                <img src={service.imageUrl} alt={service.title} className="w-full h-40 object-cover rounded-t-lg" />
                                <div className="p-8 bg-blue-950">
                                    <h3 className="text-xl text-white font-semibold mb-3">{service.title}</h3>
                                    <p className="text-base text-white">{service.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Benefits Section */}
                <section id="benefits" className="bg-gray-300 py-16" data-aos="zoom-in-up">
                    <h2 className="text-4xl font-extrabold text-blue-700 text-center mb-8 relative">
                        Why Choose Us?
                        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-blue-700 rounded-full"></span>
                    </h2>
                    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
                        <div className="md:w-1/2 mb-8 md:mb-0">
                            <img src="https://www.slideteam.net/media/catalog/product/cache/1280x720/w/h/why_choose_us_for_your_app_development_ios_app_development_slide01.jpg" alt="Why Choose Us" className="w-full h-auto rounded-lg shadow-lg" />
                        </div>
                        <div className="md:w-1/2 text-center md:text-left">
                            <p className="p-4 text-xl mb-6">
                                Our team delivers high-quality mobile applications with a focus on exceptional user experience and comprehensive support.
                            </p>
                            <ul className="list-disc list-inside text-left mx-auto space-y-2 max-w-lg">
                                <li className="flex items-start space-x-3">
                                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <span>High-quality, scalable apps</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <span>Tailored solutions to meet your needs</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <span>Dedicated support and maintenance</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <span>Agile development methodologies</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-blue-50 text-center mb-2 mt-4" data-aos="zoom-in-up">
                    <h2 className="text-4xl font-semibold mb-4">Ready to Start Your Project?</h2>
                    <p className="text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
                        Contact us today to discuss your mobile app development needs!
                    </p>
                    <button
                        onClick={() => setFormVisible(true)}
                        className="bg-blue-950 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-300 mt-4"
                    >
                        Contact Us
                    </button>
                </section>

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

                                {error && <p className="text-red-500 text-center mb-4">{error}</p>}

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

                <Footer />
            </div>
        </>
    );
};

export default page;