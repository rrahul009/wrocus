'use client'
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import React, { useState } from 'react';

const services = [
    {
        title: 'Salesforce Consulting',
        description: 'Our Salesforce Consulting service offers expert guidance to help you seamlessly implement Salesforce and optimize your CRM processes. We provide strategic insights on best practices, tailored recommendations to address your unique business needs, and hands-on support to ensure a smooth transition. Our goal is to enhance your CRM efficiency, improve data management, and drive better customer relationships through a customized Salesforce strategy.',
        img: 'https://nuagebiz.tech/wp-content/uploads/2021/09/image-1.png',
        benefits: [
            'Enhanced CRM efficiency',
            'Improved data management',
            'Customized Salesforce strategy'
        ],
    },
    {
        title: 'Custom Salesforce Development',
        description: 'Tailored Salesforce applications and customizations to meet your business needs. Whether you require unique workflows, advanced automation, or custom user interfaces, we build solutions that integrate seamlessly with your existing systems.',
        img: 'https://miro.medium.com/v2/resize:fit:1024/0*fVJMXTrFmNXrGKL6.png',
        benefits: [
            'Custom workflows and automation',
            'Seamless system integration',
            'Scalable and adaptable solutions'
        ],
    },
    {
        title: 'Salesforce Integration',
        description: 'Seamlessly integrate Salesforce with your existing systems and third-party applications. We ensure smooth data migration and system synchronization to enhance operational efficiency and eliminate data silos.',
        img: 'https://www.sfdcpoint.com/wp-content/uploads/2021/06/Integration-updated.jpg',
        benefits: [
            'Efficient data synchronization',
            'Elimination of data silos',
            'Enhanced operational efficiency'
        ],
    },
    {
        title: 'Salesforce Training',
        description: 'Comprehensive training sessions to empower your team with Salesforce skills. Our training programs cover everything from basic navigation to advanced features, ensuring your team can fully leverage Salesforce’s capabilities.',
        img: 'https://courses.apexhours.com/wp-content/uploads/2023/03/1646033829.jpg',
        benefits: [
            'Hands-on workshops',
            'Tailored training programs',
            'Enhanced team productivity'
        ],
    },
    {
        title: 'Salesforce Support and Maintenance',
        description: 'Ongoing support and maintenance services to ensure your Salesforce environment runs smoothly. We offer troubleshooting, performance optimization, and regular updates to keep your system up-to-date and efficient.',
        img: 'https://images.squarespace-cdn.com/content/v1/60294149195c464885c73d16/ff2ac92a-d5a3-4602-a769-0ff35fa22d1f/Salesforce-Managed-Service-Benefits.jpg',
        benefits: [
            'Timely troubleshooting',
            'Performance optimization',
            'Regular system updates'
        ],
    },
    {
        title: 'Salesforce Migration',
        description: 'Assistance with migrating your data from legacy systems to Salesforce. We ensure a smooth and error-free data transfer, minimizing disruption to your business operations during the migration process.',
        img: 'https://datatoolspro.com/wp-content/uploads/2023/04/Flow-1.png',
        benefits: [
            'Smooth data transfer',
            'Minimized operational disruption',
            'Error-free migration'
        ],
    },
    {
        title: 'Salesforce Analytics and Reporting',
        description: 'Custom analytics and reporting solutions to help you make data-driven decisions. We create dashboards and reports tailored to your business needs, providing valuable insights into your Salesforce data.',
        img: 'https://cdn.buttercms.com/dvbEZiVhQNO56IbXlVqK',
        benefits: [
            'Custom dashboards and reports',
            'Data-driven decision making',
            'Valuable business insights'
        ],
    },
    {
        title: 'Salesforce AppExchange Solutions',
        description: 'Help with selecting and implementing solutions from the Salesforce AppExchange. We assist you in finding and integrating the right apps to extend Salesforce’s functionality and meet your business needs.',
        img: 'https://miro.medium.com/v2/resize:fit:602/1*GHNxqlSNFwd6NJhQeP453g.png',
        benefits: [
            'Access to a wide range of apps',
            'Enhanced Salesforce functionality',
            'Customized app integration'
        ],
    },
];

const ServiceCard = ({ title, description, img, benefits }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="relative">
                <img src={img} alt={`${title} image`} className="w-100 h-58 object-cover object-center" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40"></div>
            </div>
            <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3">{title}</h3>
                {/* Show limited description initially */}
                <p className={`text-gray-600 mb-4 ${isHovered ? '' : 'line-clamp-3'}`}>
                    {description}
                </p>
                {/* Show full description and benefits on hover */}
                {isHovered && (
                    <>
                        <div className="mb-4">
                            <strong className="text-lg">Key Benefits:</strong>
                            <ul className="list-disc list-inside text-gray-600 mt-2">
                                {benefits.map((benefit, index) => (
                                    <li key={index} className="flex items-center">
                                        <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M21 7l-12 12-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        {benefit}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

const Page = () => {
     const[isFormVisible,setFormVisible]=useState(false)
    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gray-50">
                <main className="container mx-auto p-6">

                    <section className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-2 mb-8">
                        <div className="container mx-auto px-6 text-center">
                            <h1 className="text-4xl md:text-4xl font-extrabold mb-1 leading-tight text-shadow-lg">
                                Our Salesforce Services
                            </h1>
                            <p className="text-lg md:text-md text-white opacity-90">
                                Explore our range of Salesforce services designed to optimize your CRM and enhance business efficiency.
                            </p>
                        </div>
                    </section>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {services.map((service, index) => (
                            <ServiceCard
                                key={index}
                                title={service.title}
                                description={service.description}
                                img={service.img}
                                benefits={service.benefits}
                            />
                        ))}
                    </div>

                    <section id="contact" className="text-center mb-8 mt-12">
                        <h2 className="text-3xl font-semibold mb-6 text-blue-600">Ready to Transform Your Business?</h2>
                        <p className="text-lg text-gray-700 mb-4">
                            Contact us today to learn more about how our Salesforce integration services can help your business succeed.
                        </p>
                        <button
                        onClick={()=>setFormVisible(true)}

                            className="inline-block bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
                            Get in Touch
                        </button>
 
                    </section>
                    {
                    isFormVisible && (
                        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                            <div className="bg-white p-6 rounded-lg shadow-lg">
                                <ContactForm onClose={() => setFormVisible(false)} isCloseBtnVisible />
                            </div>
                        </div>
                    )
                }
                  
                </main>
                <Footer />
            </div>
        </>
    );
};

export default Page;

