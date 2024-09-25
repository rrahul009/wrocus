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
                 showStatus={false}
                className="carouselStyle"
            >
                {/* testiing slide */}
                <div className='py-6 text-center'>
                <h1 className='text-4xl font-bold'>Exceptional Talent Recruitment Services</h1>
                <p className='mt-2 mb-8 font-sans'>"Connecting you with the best talent for your business needs"</p>

                <div className='flex justify-between items-center gap-4 mx-5 mt-8'>

                    <div className='flex flex-col items-start w-full max-w-md ml-10 mt-8'>
                        <p className='text-blue-600 text-3xl font-bold'>  Wrocus Technology</p>
                        <p className='text-justify text-3xl' style={{ fontSize: '18px', fontFamily: 'Roboto' }}>
                            Choosing Wrocus Technology means partnering with a trusted ally committed to your success.
                            We prioritize quality and efficiency, allowing you to focus on what you do best—growing your business.
                            Let us help you find the talent that will elevate your team and propel your organization forward.
                        </p>

                        <div className='mt-8'>
                            <button className='text-white bg-blue-600 p-3' style={{ width: '150px' }}>
                                Learn More
                            </button>
                        </div>
                    </div>

                    <div className='flex hidden md:block'>
                        <img
                            src='https://media.licdn.com/dms/image/D5612AQH5mTMa4AjznQ/article-cover_image-shrink_600_2000/0/1690446669155?e=2147483647&v=beta&t=4U1ItFfFblYZJQSlUBv6AZCv22hr12fVeLFzkq9osWQ'
                            alt='Recruitment Visual'
                            className='object-fill h-auto max-w-xl'
                            style={{height:'290px'}}
                        />
                    </div>
                </div>
            </div>

                {/* First slide */}
                <div className='bg-white flex mt-6 flex-col md:flex-row items-center justify-between py-5 px-4'>
                    <div className="max-w-6xl bg-white p-4 flex-1 mx-5">
                        <p className="text-2xl sm:text-2xl  md:text-4xl text-blue-600 font-bold leading-tight mb-4">
                            {/* Software Development Services */}
                            Software Development Service
                        </p>
                        <p className="hidden sm:block  text-base sm:text-lg md:text-xl text-black mt-2 leading-relaxed mb-4">
                            We exceed your expectations where others may falter,<br /> <span className='md:mr-7'>ranging from minimal to extensive engagement models.</span>
                        </p>
                        <p className="text-sm sm:text-base md:text-md leading-relaxed md:mb-3 mb-4">
                            Low-Touch: Engage on an hourly basis, starting with a few hours per week remotely.
                        </p>
                        <p className='text-sm sm:text-base md:text-md leading-relaxed md:mb-2 mb-4'>
                            High-Touch: We handle the entire project, manage operations, and transfer ownership to you when desired.
                        </p>
                        <div className="flex flex-col md:grid md:grid-cols-2 gap-6 ">
                            <div className="flex-1 flex items-center justify-center rounded-lg text-start">
                                <div>
                                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-black md:mt-5 ">
                                        100K+
                                    </h3>
                                    <p className="text-sm sm:text-base md:text-lg text-black md:mt-4">
                                        pre-screened profiles of Software Experts
                                    </p>
                                </div>
                            </div>
                            <div className="flex-1 flex items-center justify-center rounded-lg text-start">
                                <div>
                                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-black md:mt-7">
                                        57%
                                    </h3>
                                    <p className="text-sm sm:text-base md:text-lg text-black font-medium md:mt-4">
                                        profiles equipped with the latest trending and in-demand skill sets
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <Link href="/services">
                                <button className="flex items-center border-2 border-black py-3 px-6
                 text-black hover:bg-blue-200 transition-colors duration-300 rounded-lg mt-4 md:mt-2">
                                    <span className="mr-2">Learn More</span>
                                    {/* <ArrowDownwardIcon /> */}
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className='hidden md:flex flex-1 justify-center items-center mt-1'>
                        <img
                            src='https://www.pngitem.com/pimgs/m/534-5348813_software-development-company-png-transparent-png.png'
                            alt='Custom Software Development'
                            className='object-cover rounded-lg shadow-lg max-w-full h-auto'
                            style={{ maxWidth: '900px', maxHeight: '600px' }}
                        />
                    </div>
                </div>

                {/*second testng slde  */}
                <div className='bg-gray-100 flex flex-col md:flex-row items-center justify-between py-8 px-4'>
                    <div className="max-w-6xl p-4 flex-1 mx-5">
                        <p className="text-3xl sm:text-3xl md:text-4xl font-extrabold leading-tight mb-6 text-gray-800">
                            Your Collaborator in a Thrilling <span
                                className="text-blue-600">Product Development
                            </span> Experience
                        </p>
                        <p className="hidden sm:block text-base sm:text-md text-gray-800 leading-relaxed mb-6 mt-4">
                            Collaborate with our talented team of Product Specialists, Business Analysts, and Data Scientists to achieve:
                        </p>
                        <p className="hidden sm:block text-base sm:text-md text-gray-800 leading-relaxed mb-6 mt-2">
                            Market Analysis, Customer Insights, User Stories, Marketing Materials, and Content Creation.
                        </p>

                        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 mt-6">
                            <div className="flex-1 flex items-center justify-center rounded-lg text-start">
                                <div>
                                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
                                        100K+
                                    </h3>
                                    <p className="text-sm sm:text-base md:text-lg text-gray-800 mt-2">
                                        curated profiles of Software Experts
                                    </p>
                                </div>
                            </div>
                            <div className="flex-1 flex items-center justify-center rounded-lg  text-start">
                                <div>
                                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
                                        77%
                                    </h3>
                                    <p className="text-sm sm:text-base md:text-lg text-gray-800 mt-2">
                                        profiles showcasing in-demand skill sets
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8">
                            <Link href="/services">
                                <button className="flex items-center border-2 border-black py-4 px-8 text-black   transition-colors duration-300 rounded-lg">
                                    <span className="mr-2 font-semibold">Discover More</span>
                                    {/* <ArrowDownwardIcon /> */}
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className='hidden md:flex flex-1 justify-center items-center mt-6'>
                        <img
                            src='https://img.freepik.com/free-vector/hand-drawn-flat-design-intranet-illustration_23-2149379501.jpg?semt=ais_hybrid'
                            alt='Custom Software Development'
                            className='object-cover rounded-lg shadow-lg max-w-full h-auto'
                            style={{ maxWidth: '800px', height: '400px' }}
                        />
                    </div>
                </div>

                {/* Third slde */}
                <div className='bg-gray-100 flex flex-col md:flex-row items-center justify-between py-8 px-4'>
                    <div className="max-w-6xl p-4 flex-1 mx-5">
                        <p className="text-3xl sm:text-4xl md:text-4xl font-extrabold leading-tight mb-6 text-gray-800">
                            <span className="text-black">END TO END</span>
                        </p>

                        <p className="text-3xl sm:text-3xl md:text-xl font-extrabold leading-tight mb-4 text-blue-600">
                            DEVELOPMENT, INTEGRATION, IMPLEMENTATION
                        </p>

                        <p className="text-md text-gray-700 mb-4">
                            We specialize in integrating various systems and platforms, maximizing efficiency and enhancing functionality for your business.
                        </p>

                        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 mt-6">
                            <div className="flex-1 flex items-center justify-center  text-start">
                                <div>
                                    <h3 className="text-2xl font-bold text-black mb-2">Full-Cycle Development</h3>

                                </div>
                            </div>
                            <div className="flex-1 flex items-center justify-center  text-start">
                                <div>
                                    <h3 className="text-2xl font-bold text-black mb-2">Robust Integration Solutions</h3>

                                </div>
                            </div>
                        </div>

                        <div className="hidden md:block mt-8">
                            <h3 className="text-2xl font-bold text-blue-600 mb-4 text-center">Why Choose Us?</h3>
                            <ul className="list-disc list-inside text-gray-700 pl-4 text-start" >
                                <li className="mb-2">Expert team with extensive industry experience</li>
                                <li className="mb-2">Tailored solutions that fit your unique business needs</li>
                                <li className="mb-2">Commitment to quality and customer satisfaction</li>
                                <li className="mb-2">Ongoing support and maintenance to ensure success</li>
                            </ul>
                        </div>



                    </div>
                    <div className='hidden md:flex flex-1 justify-center items-center mt-6'>
                        <img
                            src='https://img.freepik.com/free-vector/isometric-cms-concept_23-2148807389.jpg'
                            alt='Custom Software Development'
                            className='object-cover rounded-lg shadow-lg max-w-full h-auto'
                            style={{ maxWidth: '800px', height: '400px' }}
                        />
                    </div>
                </div>



            </Carousel>
        </>
    )
}

export default Carausel;
