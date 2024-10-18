'use client'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import React, { useEffect } from 'react'
import { Carousel } from 'react-responsive-carousel'
import { initializeAOS } from "@/app/utils/Aos_setup";
import Link from "next/link";

const Carausel = () => {
    useEffect(() => {
        const cleanupAOS = initializeAOS();

        return cleanupAOS; // Cleanup AOS on unmount
    }, []);

    return (
        <>
            <Carousel
                // autoPlay={true}
                interval={4000}
                infiniteLoop={true}
                showArrows={true}
                transitionTime={1000}
                showStatus={false}
                showIndicators={false}
            // className="carouselStyle"
            >
                {/* First slide */}
                <div>
                    <div className='bg-white  flex flex-col md:flex-row items-center justify-between py-8 shadow-lg rounded-lg'>
                        <div className="max-w-6xl flex-1 mx-6 animate-fade-in">
                            <div className="ml-12">
                                <p className="text-3xl font-bold mt-5 mb-2 text-start" data-aos="zoom-in-up">
                                    We Create <span className="text-blue-600">Leading Digital</span> Products
                                </p>
                                <div className="text-5xl font-extrabold text-start mt-4" data-aos="fade-down"
                                    data-aos-easing="linear"
                                    data-aos-duration="1500">
                                    {[" ", "END-TO-END", "DEVELOPMENT"].map((word, index) => (
                                        <span

                                            key={index}
                                            className={`inline-block opacity-0 transform translate-y-4 animate-appear mt-4`}
                                            style={{ animationDelay: `${index * 0.6}s` }}
                                        >
                                            {word}
                                        </span>
                                    ))}
                                </div>
                                <p className="mt-4 text-start text-xl md:mt-4" data-aos="fade-down" data-aos-delay="400"
                                    data-aos-easing="linear"
                                    data-aos-duration="1500" style={{ animationDelay: 0.6 }}>
                                    Trigger <span className="text-blue-600 font-bold">100%</span> Successful Customer Experience
                                </p>
                            </div>

                            <div className="flex flex-col md:grid md:grid-cols-2 gap-8 mt-10" data-aos="zoom-in-left" data-aos-delay="800">
                                <div className="flex-1 flex items-center justify-center rounded-lg text-start">
                                    <div>
                                        <h3 className="text-3xl font-bold text-blue-600">10K+</h3>
                                        <p className="text-md text-gray-950 mt-2">
                                            Curated Profiles of Software Experts
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center rounded-lg">
                                    <div>
                                        <h3 className="text-3xl font-bold text-blue-600">77%</h3>
                                        <p className="text-md text-gray-950 mt-2">
                                            Profiles Showcasing In-Demand Skill Sets
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-between mt-12 ml-7 text-gray-700" data-aos="zoom-in-left" data-aos-delay="1600">
                                <p className="text-gray-950 font-semibold">Expert Software Development <span className="ml-3">|</span></p>
                                <p className="text-gray-950 font-semibold">Cost-Effective Solutions <span className="ml-3">|</span></p>
                                <p className="text-gray-950 font-semibold">24/7 Dedicated Support</p>
                            </div>
                            <div className="mx-12 ml-8 mt-12" data-aos="flip-right" data-aos-delay="3000">
                                <Link href="/services">
                                    <button className="flex items-center bg-blue-600 border-2 border-blue-600 py-3 px-8 ml-5 text-white hover:bg-blue-200 hover:text-black transition-colors duration-300 rounded-lg md:mt-2">
                                        <span className="mr-2">Read More</span>
                                        {/* <ArrowDownwardIcon /> */}
                                    </button>
                                </Link>
                            </div>
                        </div>

                        <div className='hidden md:flex flex-1 justify-center items-center mt-6 animate-fade-in'>
                            <img
                                src='https://opencybersecurityalliance.org/wp-content/uploads/2023/06/Agile_Development-1200x675.jpg'
                                alt='Custom Software Development'
                                className='object-cover rounded-lg'
                                style={{ maxWidth: '700px', height: '400px' }}
                            />
                        </div>
                    </div>

                    <style jsx>{`
        @keyframes fade-in {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
            animation: fade-in 0.8s ease forwards;
        }

        @keyframes appear {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
        }
        .animate-appear {
            animation: appear 1s ease forwards;
        }
    `}</style>
                </div>
                {/*second slide  */}
                <div className="py-6 bg-white">
                    <div className="container mx-auto py-12 flex flex-col lg:flex-row justify-between items-center h-auto px-5">
                        <div className="text-left flex-grow flex flex-col" data-aos="zoom-in-up">
                            <p className="text-gray-950 font-semibold text-3xl">Full Cycle Software Development</p>
                            <p className="text-7xl mt-4 text-gray-950 font-extrabold">FROM IDEA</p>
                            <p className="text-7xl mt-4 text-gray-950 font-extrabold">TO PRODUCT</p>
                            <p className="text-gray-950 mt-4 text-lg">Consultancy services from an idea to strategy and enhancement.</p>
                            <p>Explore our range of resources to enhance your development projects. we provide the tools and frameworks that empower your development teams to create outstanding applications.</p>
                            <div className="mt-5 text-gray-950">
                                <p className="mb-2 text-lg font-semibold">6+ Years of Outsourcing Excellence</p>
                                <p className="mb-4 text-lg font-semibold">
                                    <span className="mr-2">250+ Talented Professionals</span> |
                                    <span className="ml-2">1200+ Successful Client Projects</span>
                                </p>
                            </div>
                            <button className="bg-blue-600 text-white p-4 mt-6 rounded-lg transition duration-300 transform hover:bg-blue-700 hover:scale-105 flex items-center justify-center" style={{ width: "200px" }}>
                                Learn More
                            </button>
                        </div>
                        <div className="mt-10 lg:mt-0 flex-shrink-0 flex justify-center items-end">
                            <img src="https://softjourn.com/media/images/Articles/Full_cycle_software_dev/full-cycle-software-dev-article-image-03.png" alt="DevOps Engineers" className="rounded-lg shadow-md object-cover" style={{ maxWidth: '100%', height: 'auto', maxHeight: '400px' }} />
                        </div>
                    </div>
                </div>
                {/* Third slide  */}
                <div className="py-8 p-6 bg-gray-200 flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 p-4 rounded-lg">
                        <p className="text-4xl font-bold mt-4">OUR EXPERTISE</p>
                        <p className="text-5xl font-bold mt-2">End to End <span className="text-blue-600">Implementation</span> &</p>
                        <p className="text-5xl font-bold"><span className="text-blue-600">Integration</span> Services</p>
                        <div className="mt-8 text-md text-gray-600">
                            <p>Our expert team specializes in seamless integration of Salesforce and Odoo.</p>
                            <p className="mt-2">We ensure that your business processes are optimized for success</p>
                            <p className="mt-2">with tailored solutions that meet your unique needs.</p>
                        </div>
                        <div className="flex mt-8 justify-between">
                            <div className="flex-1 flex flex-col">
                                <p className="text-2xl font-semibold text-blue-600 text-start ml-3">Our Commitment</p>
                                <p className="text-gray-600 text-md">We continuously explore cutting-edge solutions to meet the   needs of our clients.</p>
                            </div>
                            <div className="flex-1 flex flex-col text-right">
                                <p className="text-2xl font-semibold text-blue-600 text-start ml-4">Our Promise</p>
                                <p className="text-gray-600">We guarantee personalized attention and expert guidance throughout your journey.</p>
                            </div>
                        </div>
                        <div className="text-start mt-4 ml-4">
                            <button className="bg-blue-600 text-white p-4 mt-6 rounded-lg transition duration-300 transform hover:bg-blue-700 hover:scale-105" style={{ width: "200px" }}>
                                Learn More
                            </button>
                        </div>
                    </div>
                    <div className="md:w-1/2 p-4 rounded-lg flex justify-center">
                        <img
                            src="https://www.infomazeelite.com/wp-content/uploads/2022/02/Custom-API-Integration-and-Development.png"
                            alt="Programmer at work"
                            className="w-full h-auto rounded-lg  mt-8"

                        />
                    </div>
                </div>
            </Carousel>
        </>
    )
}

export default Carausel;
