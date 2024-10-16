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




const Carausel = () => {


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
                <div className="mt-2 py-3">
                    {/* <p className="text-3xl font-bold">Software Development Services</p> */}
                    <div className='bg-white flex mt-4 flex-col md:flex-row   '>

                        <div className=" bg-white  flex-1 ">
                            <p className="text-3xl font-bold  mt-5 mb-2 text-start mx-12">Full Cycle <span className="text-blue-600">Software</span> Development</p>
                            <p className="text-5xl font-extrabold text-start mx-11">FROM <span className="ml-2 text-blue-600">IDEA</span></p>
                            <p className="text-5xl font-extrabold mt-2 text-start mx-10">TO <span className="text-blue-600">PRODUCT</span></p>
                            <p className="mt-4 text-start mx-11  ">
                                Consultancy Service from an idea to strategy and enhancement

                            </p>


                            <div className="flex flex-col md:grid md:grid-cols-2 gap-6 mx-5  text-start">
                                <div className="flex-1 flex items-center justify-center rounded-lg text-start">
                                    <div className="">
                                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-black md:mt-8 text-start ml-5 ">
                                            100<span className="text-blue-600">K+</span>
                                        </h3>
                                        <p className="text-sm sm:text-base md:text-md text-black md:mt-1 ml-5">
                                            pre-screened profiles of Software Experts
                                        </p>
                                    </div>
                                </div>
                                <div className="flex-1 flex items-center justify-center rounded-lg text-start mt-8">
                                    <div>
                                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-black ">
                                            57%
                                        </h3>
                                        <p className="text-sm sm:text-base md:text-md text-black md:mt-1">
                                            profiles equipped with the latest trending and in-demand skill sets
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-12 mx-12 ml-8 mb  ">
                                <Link href="/services">
                                    <button className="flex items-center bg-blue-600  border-2   py-3 px-8 ml-5
                 text-black hover:bg-blue-200 transition-colors duration-300 rounded-lg mt-4 md:mt-2">
                                        <span className="mr-2  text-white">Read  More</span>
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

                            />
                        </div>
                    </div>
                </div>

                {/*second testng slde  */}

                <div>
                    {/* <p className="text-3xl text-center mt-3 sm:text-3xl md:text-2xl font-bold leading-tight text-gray-800">
                        Your Collaborator in a Thrilling <span
                            className="text-blue-600">Product Development
                        </span> Experience
                    </p> */}
                    <div className='bg-white flex flex-col md:flex-row items-center justify-between py-4'>

                        <div className="max-w-6xl p-4 flex-1 mx-5">

                            <p className="text-2xl font-bold  mt-5 mb-2 text-start ">We Create <span className="text-blue-600">leading Digital </span> Products</p>
                            <p className="text-3xl mb-2 text-start font-bold" style={{ fontSize: '22px' }}>  </p>
                            <p className="text-5xl font-extrabold text-start">END-TO-END </p>
                            <p className="text-5xl font-extrabold text-start mt-2 text-blue-600">DEVELOPMENT </p>

                            {/* <p className="text-6xl font-extrabold mt-2 text-start mx-10">TO <span className="text-blue-600">PRODUCT</span></p> */}
                            <p className="mt-2 text-start text-xl md:mt-4 ">
                                Trigger <span className="text-blue-600 font-bold">100 %</span> Successful customer experience

                            </p>

                            <div className="flex flex-col md:grid md:grid-cols-2 gap-8 mt-6">
                                <div className="flex-1 flex items-center justify-center rounded-lg text-start">
                                    <div>
                                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
                                            100<span className="text-blue-600 " >K+</span>
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
                    <div className=" mx-12 ml-8  ">
                        <Link href="/services">
                            <button className="flex items-center bg-blue-600  border-2   py-3 px-8 ml-5
                 text-black hover:bg-blue-200 transition-colors duration-300 rounded-lg   md:mt-2">
                                <span className="mr-2  text-white">Read  More</span>
                                {/* <ArrowDownwardIcon /> */}
                            </button>
                        </Link>
                    </div>
                </div>


                {/* Third slde */}
                <div>
                    <div className='bg-white flex flex-col md:flex-row  justify-between py-4 mt-5 '>
                        <div className=" p-4 flex-1">

                            <p className="text-start text-2xl mx-5 font-bold">Only <span className="text-blue-600">High-Quality</span> Services </p>

                            <p className="text-start text-5xl font-extrabold mt-5  mx-5">SOFTWARE IT</p>
                            <p className="text-start text-blue-600 text-5xl font-extrabold mt-2 mb-6  mx-5">OUTSOURCING</p>
                            <p className="text-start  mx-5">Our team puts hard skills to understand your <span className="text-blue-600"><strong>business needs</strong></span> </p>
                            <div className="flex flex-col md:grid md:grid-cols-2 gap-6 mx-5  text-start">
                                <div className="flex-1 flex items-center justify-center rounded-lg text-start">
                                    <div className="">
                                        <h3 className="text-xl mr-3 sm:text-2xl md:text-3xl font-bold text-black md:mt-8 text-start ml-5 ">
                                            100<span className="text-blue-600">K+</span>
                                        </h3>
                                        <p className="text-sm sm:text-base md:text-md text-black md:mt-1 ml-5">
                                            pre-screened profiles of Software Experts
                                        </p>
                                    </div>
                                </div>
                                <div className="flex-1 flex items-center justify-center rounded-lg text-start mt-8">
                                    <div>
                                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-black ">
                                            57%
                                        </h3>
                                        <p className="text-sm sm:text-base md:text-md text-black md:mt-1">
                                            profiles equipped with the latest trending and in-demand skill sets
                                        </p>
                                    </div>
                                </div>
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


                    <div className=" mx-12 ml-8  ">
                        <Link href="/services">
                            <button className="flex items-center bg-blue-600  border-2   py-3 px-8 ml-5
                 text-black hover:bg-blue-200 transition-colors duration-300 rounded-lg mt-4 md:mt-2">
                                <span className="mr-2  text-white">Read  More</span>
                                {/* <ArrowDownwardIcon /> */}
                            </button>
                        </Link>
                    </div>
                </div>





            </Carousel>
        </>
    )
}

export default Carausel;