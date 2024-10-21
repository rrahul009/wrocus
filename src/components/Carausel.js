'use client';
import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';

import Link from 'next/link';
import AOS from 'aos';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "aos/dist/aos.css";
import { initializeAOS } from '@/app/utils/Aos_setup';
import { color } from 'framer-motion';

const Carausel = () => {
    useEffect(() => {
        AOS.init();
        const cleanupAOS = initializeAOS();
        return cleanupAOS;
    }, []);

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
            AOS.refresh();
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleCarouselChange = () => {
        AOS.refresh();
    };

    const containerStyle = {
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        alignItems: 'center',
        height: isMobile ? 'auto' : '700px',
        // backgroundColor: '#e3f2fd',
        padding: '5px',
        borderRadius: '10px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    };

    const textContainerStyle = {
        flex: 1,
        padding: isMobile ? '20px' : '40px',
        color: '#333',
        textAlign: 'left',
        fontFamily: '"Poppins", sans-serif',
    };

    const imageStyle = {
        maxWidth: '100%',
        width: isMobile ? '100%' : '750px',
        height: 'auto',
        objectFit: 'cover',
        borderRadius: '10px',
        marginLeft: isMobile ? '0' : '20px',
        marginTop: isMobile ? '20px' : '0',
    };

    const headingStyle = {
        fontSize: '1.9em',
        marginBottom: '10px',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        color: '#0056b3',
    };

    const middleTextStyle = {
        fontSize: isMobile ? '2em' : '2.5em',
        fontWeight: '700',
        lineHeight: '1.3',
        margin: '10px 0',
        color: '#007bff',
    };

    const paragraphStyle = {
        fontSize: isMobile ? '1em' : '1.2em',
        marginBottom: '10px',
        lineHeight: '1.6',
        color: '#555',
    };

    const buttonStyle = {
        padding: '12px 25px',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '20px',
        fontSize: '1.2em',
        cursor: 'pointer',
        transition: 'background-color 0.3s, transform 0.3s',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
    };

    return (
        <Carousel
            showArrows={true}
            showThumbs={false}
            showStatus={false}
            infiniteLoop={true}
            // autoPlay={true}
            interval={3000}
            swipeable={false}
            onChange={handleCarouselChange}
        >
            {/* First Section */}
            <div className="py-8 bg-gray-100"  >
                <div className="container md:mx-8  flex flex-col lg:flex-row justify-between items-center h-auto px-8">
                    <div className="text-left flex-grow flex flex-col" data-aos="zoom-in-up">
                        <p className=" font-semibold text-3xl mt-6 mb-4"
                            data-aos="zoom-in-right" data-aos-delay="600"
                            style={{ color: '#0056b3' }}>Full Cycle Software Development</p>
                        <p className="text-6xl mt-4  font-extrabold" style={{
                            fontSize: isMobile ? '2em' : '2.5em',
                            fontWeight: '700',
                            lineHeight: '1.3',
                            margin: '10px 0',
                            color: '#007bff',
                        }} data-aos="zoom-in-right" data-aos-delay="800" >FROM IDEA</p>
                        <p className="text-6xl  text-gray-950 font-extrabold" style={{
                            fontSize: isMobile ? '2em' : '2.5em',
                            fontWeight: '700',
                            // lineHeight: '1.3',
                            margin: '10px 0',
                            color: '#007bff',
                        }} data-aos="zoom-in-right" data-aos-delay="900">TO PRODUCT</p>
                        <p className="text-gray-950 mt-4 text-lg" style={{
                            fontSize: isMobile ? '1em' : '1.2em',
                            // marginBottom: '10px',
                            lineHeight: '1.6',

                        }} data-aos="zoom-in-right" data-aos-delay="1100">
                            Consultancy services from an idea to strategy and enhancement.
                        </p>
                        <p className="text-gray-950 mt-4" style={{
                            fontSize: isMobile ? '1em' : '1.2em',
                            marginBottom: '10px',
                            lineHeight: '1.6',
                            // color: '#555',
                        }} data-aos="zoom-in-right" data-aos-delay="1200">
                            Explore our range of resources to enhance your development projects. We provide the tools and frameworks that empower your development teams to create outstanding applications.
                        </p>
                        <div className="mt-5 text-gray-950 flex flex-col md:flex-row justify-between md:gap-12"
                            data-aos="zoom-in-right" data-aos-delay="1400"
                        >
                            <p className="mb-2 text-lg font-semibold">
                                6+ Years of Outsourcing Excellence
                                <br />
                                <span className="text-gray-700 text-base font-normal">
                                    Delivering quality solutions to clients worldwide.
                                </span>
                            </p>

                            <div className="mb-4 text-lg font-semibold">
                                <span>250+ Talented Professional<br /> 100+</span>
                                <span> Ongoing Projects <br /></span>

                                <span>1200+ Successful Client Projects</span>
                            </div>
                        </div>


                        <button className="bg-blue-600 text-white p-4 mt-4 rounded-lg transition duration-300 transform
                         hover:bg-blue-700 hover:scale-105 flex items-center justify-center" style={{ width: "200px" }}
                            data-aos="zoom-out-up"
                        >
                            Learn More
                        </button>
                    </div>
                    <div className="mt-10 lg:mt-0 flex-shrink-0 flex justify-end">
                        {!isMobile && ( // Render image only if not mobile
                            <img
                                src="https://softjourn.com/media/images/Articles/Full_cycle_software_dev/full-cycle-software-dev-article-image-03.png"
                                alt="DevOps Engineers"
                                className="rounded-lg object-cover mt-12 ml-12"
                                style={{ maxWidth: '100%', height: 'auto', maxHeight: '400px', marginTop: '20px' }} // Adjusted margin
                            />
                        )}
                    </div>

                </div>
            </div>


            {/* second Section */}
            <div className='bg-gray-100 ' style={containerStyle}>
                <div style={textContainerStyle}>
                    <h1 className="carousel-text " style={headingStyle}>
                        Our Expertise
                    </h1>
                    <h1 className="carousel-text " style={middleTextStyle} data-aos="zoom-in">
                        End to End Implementation & Integration Services
                    </h1>
                    <p className="carousel-text " style={paragraphStyle} data-aos="zoom-in">
                        Our expert team specializes in seamless integration of Salesforce and Odoo.
                        We ensure that your business processes are optimized for success, with
                        tailored solutions that meet your unique needs.
                    </p>
                    {/* Additional Content (Desktop Only) */}
                    {/* {!isMobile && ( */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                        <div className='mt-4' style={{ flex: 1, paddingRight: '10px' }}>
                            <h2 className='text-blue-600 md:text-3xl text-xl font-bold mb-3' data-aos="zoom-in">Our Commitment</h2>
                            <p style={paragraphStyle} data-aos="zoom-in">
                                We continuously explore cutting-edge solutions to meet the evolving needs of our clients.
                            </p>
                        </div>
                        <div className='mt-4' style={{ flex: 1, paddingLeft: '10px' }}>
                            <h2 className='text-blue-600 md:text-3xl text-xl font-bold mb-3' data-aos="zoom-in">Our Promise</h2>
                            <p className='text-lg' data-aos="zoom-in">
                                We guarantee personalized attention and expert guidance throughout your journey.
                            </p>
                        </div>
                    </div>
                    {/* )} */}
                    <br />
                    <Link href="/sfdc">
                        <button className="bg-blue-600 text-white p-4  rounded-lg transition duration-300 transform hover:bg-blue-700 hover:scale-105 flex items-center justify-center" style={{ width: "200px" }}>
                            Learn More
                        </button>
                    </Link>
                </div>
                {!isMobile && <img src="od-removebg.png" alt='Service Image' style={imageStyle} />}
            </div>

            {/* third Section */}
            <div className='bg-gray-100' style={containerStyle}>
                <div style={textContainerStyle}>
                    <h1 className="carousel-text " style={headingStyle}>
                        Resource Hub
                    </h1>
                    <h1 className="carousel-text md:text-3xl text-xl" style={middleTextStyle} data-aos="fade-up">
                        Develop Big with Our Qualified Tech Resources
                    </h1>
                    <p className="carousel-text mb-2" style={paragraphStyle} data-aos="fade-up">
                        Explore our range of resources to enhance your development projects.
                        From ReactJs to Angular, we provide the tools and frameworks that
                        empower your development teams to create outstanding applications.
                    </p>
                    {/* Additional Content (Desktop Only) */}
                    {/* {isMobile && ( */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                        <div className='mt-4' style={{ flex: 1, paddingRight: '10px' }}>
                            <h2 className='text-blue-600 md:text-3xl text-xl font-bold mb-1' data-aos="fade-up">Our Technologies</h2>
                            <p style={paragraphStyle} data-aos="fade-up">
                                Leverage the latest frameworks and tools for optimal development efficiency.
                            </p>
                        </div>
                        <div className='mt-4' style={{ flex: 1, paddingLeft: '10px' }}>
                            <h2 className='text-blue-600 md:text-3xl text-xl font-bold mb-1' data-aos="fade-up">Begin Your Project</h2>
                            <p style={paragraphStyle} data-aos="fade-up">
                                Collaborate with us to turn your vision into successful outcomes.
                            </p>
                        </div>
                    </div>
                    {/* )} */}
                    <br />
                    <Link href="/mobileapp">
                        <button className="bg-blue-600 text-white p-4  rounded-lg transition duration-300 transform hover:bg-blue-700 hover:scale-105 flex items-center justify-center" style={{ width: "200px" }}>
                            Learn More
                        </button>
                    </Link>
                </div>
                {!isMobile && <img src={'edit-removebg-preview.png'} alt='Resources Image' style={imageStyle} />}
            </div>


        </Carousel>
    );
};

export default Carausel;



