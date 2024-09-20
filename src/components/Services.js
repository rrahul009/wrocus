'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import { initializeAOS } from '@/app/utils/Aos_setup';
import Image from 'next/image';
import CloudOffIcon from '@mui/icons-material/CloudOff';
import BarChartIcon from '@mui/icons-material/BarChart';
import GroupsIcon from '@mui/icons-material/Groups';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';

export default function ServiceCards() {
    useEffect(() => {
        const cleanupAOS = initializeAOS();
        return cleanupAOS; // Cleanup AOS on unmount
    }, []);

    return (
        <>
            <div className="bg-gray-200 py-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-center text-4xl font-normal text-white mb-10">
                        <span className="block text-4xl font-bold text-black">
                            Empowering Businesses With Digital
                        </span>
                        <span className="block text-4xl text-black">
                            Transformation Solutions
                        </span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* First Card */}
                        <div
                            className="bg-black text-white p-6 border border-white rounded-lg shadow-lg transition-transform transition-shadow duration-300 ease-out hover:shadow-2xl hover:scale-105"
                            style={{ border: '.5px solid rgba(255, 255, 255, 0.3)' }}
                            data-aos="zoom-in-down"
                        >
                            <div className="flex items-center mb-4">
                                <div className="w-30 h-30 rounded-full flex items-center justify-center">
                                    <CloudOffIcon style={{ fontSize: 50 }} />
                                </div>
                                <h3 className="text-xl font-semibold ml-4 text-green-700 hover:text-white transition-colors duration-300 ease-out">
                                    Cloud Consulting
                                </h3>
                            </div>
                            <p className="text-gray-600 hover:text-white transition-colors duration-300 ease-out">
                                At Wrocus Technology, we offer cutting-edge cloud solutions designed to elevate your business. Our cloud consulting services encompass everything from strategic planning and cloud adoption to system optimization and management. We help you harness the power of cloud technology to streamline operations, enhance flexibility, and reduce costs.
                            </p>
                            <Link href="/cloud-consulting" className="text-green-700 hover:text-white font-semibold hover:underline mt-4 block transition-colors duration-300 ease-out">
                                Learn More
                            </Link>
                        </div>

                        {/* Second Card */}
                        <div
                            className="bg-black text-white p-6 border border-white rounded-lg shadow-lg transition-transform transition-shadow duration-300 ease-out hover:shadow-2xl hover:scale-105"
                            style={{ border: '1px solid rgba(255, 255, 255, 0.3)' }}
                            data-aos="zoom-in-down"
                        >
                            <div className="flex items-center mb-4">
                                <div className="w-30 h-30 rounded-full flex items-center justify-center">
                                    <BarChartIcon style={{ fontSize: 50 }} />
                                </div>
                                <h3 className="text-xl font-semibold ml-4 text-green-700 hover:text-white transition-colors duration-300 ease-out">
                                    Data Analytics
                                </h3>
                            </div>
                            <p className="text-gray-600 hover:text-white transition-colors duration-300 ease-out">
                                At Wrocus Technology, our data analytics services empower your business with actionable insights and strategic intelligence. We utilize advanced analytics tools and techniques to help you uncover patterns, trends, and key metrics from your data. Our approach includes data collection, processing, and visualization.
                            </p>
                            <Link href="/cloud-consulting" className="text-green-700 hover:text-white font-semibold hover:underline mt-4 block transition-colors duration-300 ease-out">
                                Learn More
                            </Link>
                        </div>

                        {/* Third Card */}
                        <div
                            className="bg-black text-white p-6 border border-white rounded-lg shadow-lg transition-transform transition-shadow duration-300 ease-out hover:shadow-2xl hover:scale-105"
                            style={{ border: '1px solid rgba(255, 255, 255, 0.3)' }}
                            data-aos="zoom-in-down"
                        >
                            <div className="flex items-center mb-4">
                                <div className="w-30 h-30 rounded-full flex items-center justify-center">
                                    <GroupsIcon style={{ fontSize: 50 }} />
                                </div>
                                <h3 className="text-xl font-semibold ml-4 text-green-700 hover:text-white transition-colors duration-300 ease-out">
                                    CRM Solutions
                                </h3>
                            </div>
                            <p className="text-gray-600 hover:text-white transition-colors duration-300 ease-out">
                                Elevate your customer relationships with Wrocus Technology's advanced CRM solutions. We specialize in seamlessly integrating cutting-edge CRM systems with your existing infrastructure, enhancing customer engagement, and optimizing your sales and service workflows. Our solutions are designed to streamline operations, boost client satisfaction.
                            </p>
                            <Link href="/cloud-consulting" className="text-green-700 hover:text-white font-semibold hover:underline mt-4 block transition-colors duration-300 ease-out">
                                Learn More
                            </Link>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-10">
                        {/* First Card in Second Row */}
                        <div
                            className="bg-black text-white p-6 rounded-lg shadow-lg border border-white transition-transform transition-shadow duration-300 ease-out hover:shadow-2xl hover:scale-105"
                            style={{ border: '1px solid rgba(255, 255, 255, 0.3)' }}
                            data-aos="zoom-in-down"
                        >
                            <div className="flex items-center mb-4">
                                <div className="w-30 h-30 rounded-full flex items-center justify-center">
                                    <DeveloperModeIcon style={{ fontSize: 50 }} />
                                </div>
                                <h3 className="text-xl font-semibold ml-4 text-green-700 hover:text-white transition-colors duration-300 ease-out">
                                    Custom Development & Staff Augmentation
                                </h3>
                            </div>
                            <p className="text-gray-600 hover:text-white transition-colors duration-300 ease-out">
                                Transform your operations with Wrocus Technology's bespoke development and staffing solutions. Our custom development services are tailored to your unique needs, creating innovative and scalable software that drives your business forward. Coupled with our staff augmentation expertise, we provide skilled professionals to seamlessly integrate into your team.
                            </p>
                            <Link href="/cloud-consulting" className="text-green-700 hover:text-white font-semibold hover:underline mt-4 block transition-colors duration-300 ease-out">
                                Learn More
                            </Link>
                        </div>

                        {/* Second Card in Second Row */}
                        <div
                            className="bg-black text-white p-6 border border-white rounded-lg shadow-lg transition-transform transition-shadow duration-300 ease-out hover:shadow-2xl hover:scale-105"
                            style={{ border: '1px solid rgba(255, 255, 255, 0.3)' }}
                            data-aos="zoom-in-down"
                        >
                            <div className="flex items-center mb-4">
                                <div className="w-30 h-30 rounded-full flex items-center justify-center">
                                    <SupervisorAccountIcon style={{ fontSize: 50 }} />
                                </div>
                                <h3 className="text-xl font-semibold ml-4 text-green-700 hover:text-white transition-colors duration-300 ease-out">
                                    ERP & HRMS
                                </h3>
                            </div>
                            <p className="text-gray-600 hover:text-white transition-colors duration-300 ease-out">
                                Revolutionize your enterprise operations with Wrocus Technology’s advanced ERP and HRMS solutions. Our integrated systems are designed to streamline your business processes, from resource planning to human resource management, ensuring a seamless and efficient workflow. Experience enhanced data visibility, real-time analytics.
                            </p>
                            <Link href="/erp-hrms" className="text-green-700 hover:text-white font-semibold hover:underline mt-4 block transition-colors duration-300 ease-out">
                                Learn More
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row w-full">
                {/* Text Content Section */}
                <div className="text-content flex-1 p-6 md:p-12" data-aos="zoom-in-down">
                    <h1 className="text-3xl font-bold mb-4">Your Partner for Software Innovation</h1>
                    <ul
                        className="list-disc pl-5 space-y-4"
                        style={{ fontFamily: '"Nunito Sans", sans-serif', color: '#6d6d6d' }}
                    >
                        <li>Our experienced team makes your ideas a reality from concept to active applications.</li>
                        <li>Agile solutions for timely delivery for market launch.</li>
                        <li>Considering usability of design in enterprise eco-system.</li>
                        <li>Scalability and customization of each prototype.</li>
                        <li>We understand the niche and unique client-business to develop applications.</li>
                        <li>Projects delivered across 12 industries.</li>
                        <li>Service provider for complete digital transformation of legacy systems.</li>
                        <li>We encourage new talent and adopt leading technologies.</li>
                    </ul>
                    <div className='flex justify-start gap-20 mt-10'>
                        <div>
                            
                           
                             <p className='text-2xl font-bold'>Experience</p>
                            <p className='text-md text-gray-600 mt-5'>Our great team of more than  <br />250+ software experts.</p>

                        </div>
                        <div>
                            <p className='text-2xl font-bold'>Quick Support</p>
                            <p className='text-md text-gray-600 mt-5'>The pilot team provides <br /> valuable expertise.</p>

                        </div>
                    </div>
                </div>


                {/* Image Content Section */}
                <div className="image-content flex-1 flex items-center justify-center p-16 md:p-12" data-aos="flip-left">
                    <img
                        src='https://wrocus.com/wp-content/uploads/2021/08/about.png'
                    />
                </div>
            </div>




        </>
    );
}
