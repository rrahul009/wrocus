import CloudConsulting from '@/components/CloudConsulting';
import CRMSolutionsPage from '@/components/CrmSoluton';
import CustomDevelopment from '@/components/CustomDevelopment';
import DataAnalytics from '@/components/DataAnalytics';
import ErpHrms from '@/components/ErpHrms';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React from 'react';

const Page = () => {
    return (
        <>

            <Navbar />

            <div className='bg-gray-100 flex flex-col md:flex-row items-center justify-between py-12 px-4'>
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

                    <div className="mt-8">
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

            <CustomDevelopment />
            <CRMSolutionsPage />
            <ErpHrms />
            <CloudConsulting/>
            <DataAnalytics/>
            <Footer/>
        </>

    );
};

export default Page;
