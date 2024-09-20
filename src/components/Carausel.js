'use client'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import React, { useEffect, useState } from 'react'
import { Carousel } from 'react-responsive-carousel'
import banner1 from '../assets/slider/banner1.jpg'
import banner2 from '../assets/slider/banner2.jpg'
import banner3 from '../assets/slider/banner3.jpg'
import Image from "next/image";
import { initializeAOS } from "@/app/utils/Aos_setup";
import Link from "next/link";

const carouselStyle = {
    position: 'relative',
    width: '100%',
    height: '550px', // Default height for larger screens
};

const overlayStyle = {
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white',
    textAlign: 'center',
    padding: '10px',
    borderRadius: '5px',
    width: '80%',
    boxSizing: 'border-box', // Include padding in width calculation
};

const textStyle = {
    margin: 0,
    opacity: 1, // Text should be visible once animation is applied
};

const firstlineStyle = {
    opacity: 0, // Hide initially
    transform: 'translateY(20px)', // Initial position for animation
    display: 'block', // Ensure each line is on its own line
    fontSize: '1.5rem', // Default font size
};

const secondlineStyle = {
    opacity: 0, // Hide initially
    transform: 'translateY(20px)', // Initial position for animation
    display: 'block', // Ensure each line is on its own line
    fontSize: '3rem', // Default font size
    fontWeight: 'bold',
};

const thirdlineStyle = {
    opacity: 0, // Hide initially
    transform: 'translateY(20px)', // Initial position for animation
    display: 'block', // Ensure each line is on its own line
    fontSize: '1.2rem', // Default font size
};

const Carausel = () => {
    useEffect(() => {
        const cleanupAOS = initializeAOS();
        return cleanupAOS; // Cleanup AOS on unmount
    }, []);
    const [showText, setShowText] = useState(false);

    useEffect(() => {
        const timeoutId = setTimeout(() => setShowText(true), 500); // Delay before showing text
        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <>
            <style jsx>{`
        @keyframes slideInFromTop {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .line {
          animation: slideInFromTop 1s ease-out forwards;
          opacity: 0;
        }
        .line:nth-of-type(1) { animation-delay: 0.5s; }
        .line:nth-of-type(2) { animation-delay: 1s; }
        .line:nth-of-type(3) { animation-delay: 1.5s; }
        .line:nth-of-type(4) { animation-delay: 2s; }
        .line:nth-of-type(5) { animation-delay: 2.5s; }
        
        /* Responsive design */
        @media (max-width: 768px) {
          .carouselStyle {
            height: 300px; /* Adjust height for mobile screens */
          }
          .overlayStyle {
            top: 50%; /* Adjust position for smaller screens */
            left: 50%;
            width: 90%; /* Adjust width for smaller screens */
            padding: 5px; /* Adjust padding for smaller screens */
            transform: translate(-50%, -50%); /* Ensure centered positioning */
          }
          .firstlineStyle {
            font-size: 1rem; /* Adjust font size for smaller screens */
          }
          .secondlineStyle {
            font-size: 1.5rem; /* Adjust font size for smaller screens */
          }
          .thirdlineStyle {
            font-size: 0.875rem; /* Adjust font size for smaller screens */
          }
        }
      `}</style>
            <Carousel
                // autoPlay={true}
                interval={6000}
                infiniteLoop={true}
                showArrows={true}
                transitionTime={1000}
                className="carouselStyle"
            >
                {/* First slide */}
                <div className='bg-gray-100  flex flex-col md:flex-row items-center justify-between py-2 px-4'>
                    <div className="max-w-6xl p-4 flex-1 mx-5">
                        <p className="text-2xl sm:text-2xl md:text-4xl font-bold leading-tight mb-4">
                            Software Development Services
                        </p>
                        <p className="hidden sm:block font-serif text-base sm:text-lg md:text-2xl text-black mt-2 leading-relaxed mb-4">
                            We meet your expectations where most fall short,<br /> <span className='md:mr-7'>from low-Touch to high-Touch engagements.</span>
                        </p>
                        <p className="text-sm sm:text-base md:text-md text-gray-800 leading-relaxed md:mb-3 mb-4 md:mr-1">
                            Low-Touch: Hire on an hourly rate, starting remotely with a few hours/week.


                        </p>
                        <p className='text-sm sm:text-base md:text-md text-gray-800 leading-relaxed md:mb-5 mb-4 '>High-Touch: We build the entire thing, operate, and then transfer to you when you want it.</p>
                        <div className="flex flex-col md:grid md:grid-cols-2 gap-6 ">
                            <div className="flex-1 flex items-center justify-center  rounded-lg text-start">
                                <div>
                                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-black md:mt-5 ">
                                        200K+
                                    </h3>
                                    <p className="text-sm sm:text-base md:text-lg text-black md:mt-4">
                                        pre-verified resumes of Software Professionals
                                    </p>
                                </div>
                            </div>
                            <div className="flex-1 flex items-center justify-center  rounded-lg text-start">
                                <div>
                                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-black md:mt-5">
                                        57%
                                    </h3>
                                    <p className="text-sm sm:text-base md:text-lg text-black font-medium md:mt-4">
                                        profiles in latest trending and in-demand skill clusters
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <Link href="/services">
                                <button className="flex items-center border-2 border-black py-3 px-6
                             text-black hover:bg-blue-200 transition-colors duration-300 rounded-lg mt-4 md:mt-8">
                                    <span className="mr-2">Learn More</span>
                                    {/* <ArrowDownwardIcon /> */}
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className='hidden md:flex flex-1 justify-center items-center mt-6'>
                        <img
                            src='https://www.oceansoftwares.com/assets/img/Services/customised.webp'
                            alt='Custom Software Development'
                            className='object-cover rounded-lg max-w-full h-auto'
                            style={{ maxWidth: '900px', maxHeight: '600px' }}
                        />
                    </div>
                </div>
                {/* second slide */}
                <div className='flex flex-col md:flex-row bg-gray-100 p-2 mt-2 md:p-5'>
                    <div className="max-w-5xl mx-auto p-4 flex-1 py-12">
                        <p className="text-2xl md:text-4xl font-bold leading-tight mb-2 md:mb-6">
                            Partner In Your Exciting <br />
                            <span className="text-blue-800 text-3xl">Product Development</span> journey
                        </p>
                        <p className="text-md md:text-md text-gray-700 leading-relaxed mb-2 md:mb-3 md:mr-6">
                            Hire our seasoned Product Specialists, Business Analysts, and Data Scientists for
                        </p>
                        <p className="hidden sm:block text-base md:text-md
                         text-gray-700 leading-relaxed mb-4 md:mb-6 md:ml-3">
                            Market Research, Customer Surveys, User Stories, Marketing Collaterals, and Content.
                        </p>
                        <div className="grid grid-cols-1 gap-6 mb-2 md:mb-6">
                            <div className=" rounded-lg text-start">
                                <h3 className="text-2xl md:text-3xl font-bold text-black  md:mb-5 ml-2 md:ml-3">
                                    50+
                                </h3>
                                <p className="text-base md:text-lg text-gray-700 leading-relaxed md:ml-3">
                                    Years of combined experience of our experts in delivering Software Products <br /> in diverse Industry Verticals and Technology Horizontals.
                                </p>
                            </div>
                        </div>
                        <div style={{ width: '170px' }}>
                            <Link href="/services/#ai" >
                                <p className="flex items-center border-2 border-black py-3 px-6
                                 text-black hover:bg-blue-200 transition-colors duration-300
                                  rounded-lg mt-10 md:mb-8 md:ml-3">
                                    <span className="mr-2 ">Learn More</span>
                                    {/* <ArrowDownwardIcon /> */}
                                </p>
                            </Link>
                        </div>
                    </div>
                    <div className='hidden md:flex justify-center items-center mt-6 md:mt-0 flex-shrink-0'>
                        <img
                            src='https://freedesignfile.com/upload/2018/10/Company-Product-Development-Group-Meeting-Stock-Photo-04.jpg'
                            alt='Product Development'
                            className='object-cover rounded-sm max-w-full'
                            style={{ maxWidth: '1000px', height: 'auto' }}
                        />
                    </div>
                </div>
                {/* Third slde */}
                <div className='flex flex-col md:flex-row bg-gray-100 p-2 mt-2 md:p-5'>
                    <div className="max-w-5xl mx-auto p-4 flex-1 py-12">
                        <p className="text-2xl md:text-4xl font-bold leading-tight mb-2 md:mb-6">
                            Partner In Your Exciting <br />
                            <span className="text-blue-800 text-3xl">Product Development</span> journey
                        </p>
                        <p className="text-md md:text-md text-gray-700 leading-relaxed mb-2 md:mb-3 md:mr-6">
                            Hire our seasoned Product Specialists, Business Analysts, and Data Scientists for
                        </p>
                        <p className="hidden sm:block text-base md:text-md
                         text-gray-700 leading-relaxed mb-4 md:mb-6 md:ml-3">
                            Market Research, Customer Surveys, User Stories, Marketing Collaterals, and Content.
                        </p>
                        <div className="grid grid-cols-1 gap-6 mb-2 md:mb-6">
                            <div className=" rounded-lg text-start">
                                <h3 className="text-2xl md:text-3xl font-bold text-black  md:mb-5 ml-2 md:ml-3">
                                    50+
                                </h3>
                                <p className="text-base md:text-lg text-gray-700 leading-relaxed md:ml-3">
                                    Years of combined experience of our experts in delivering Software Products <br /> in diverse Industry Verticals and Technology Horizontals.
                                </p>
                            </div>
                        </div>
                        <div style={{ width: '170px' }}>
                            <Link href="/services/#ai" >
                                <p className="flex items-center border-2 border-black py-3 px-6
                                 text-black hover:bg-blue-200 transition-colors duration-300
                                  rounded-lg mt-10 md:mb-8 md:ml-3">
                                    <span className="mr-2 ">Learn More</span>
                                    {/* <ArrowDownwardIcon /> */}
                                </p>
                            </Link>
                        </div>
                    </div>
                    <div className='hidden md:flex justify-center items-center mt-6 md:mt-0 flex-shrink-0'>
                        <img
                            src='https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/styles/webp/public/2024-02/Leveraging%20Analytics%20to%20Smooth%20Out%20the%20Customer%20Journey.png.webp?itok=bfjUXL81'
                            alt='Product Development'
                            className='object-cover rounded-sm max-w-full'
                            style={{ width: '500px', height: '400px' }}
                        />
                    </div>
                </div>

            </Carousel>
        </>
    )
}

export default Carausel;
