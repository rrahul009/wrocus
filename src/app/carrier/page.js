import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import React from 'react';
const Page = () => {
    return (
        <>

            <Navbar />
            <section className="p-2 lg:mx-4 flex justify-center">
                <div style={{ width: '700px' }}> {/* Set max width and allow responsiveness */}

                    <div className="flex items-center">
                        <input
                            type="text"
                            placeholder="Search jobs..."
                            className="flex-grow p-4 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button
                            className="bg-blue-600 text-white font-semibold py-4 px-4 rounded-r-md hover:bg-blue-700 transition duration-200"
                        >
                            Search
                        </button>
                    </div>
                </div>
            </section>

            <section className="lg:p-10 p-4">
                <div className="grid grid-cols-12 gap-4">
                    {/* Sidebar (3 columns) */}
                    <div className="col-span-3 bg-gray-100 p-4 rounded-lg shadow-md">

                        <Sidebar />
                    </div>
                    {/* Main Content Area (9 columns) */}
                    <div className="col-span-9 bg-gray-100 p-2 rounded-lg shadow-md">
                        <div className="bg-white p-4 rounded-lg">
                            <h2 className="text-xl font-bold mb-4">Job Listings</h2>

                            {/* Job Listing Example */}
                            <div className="mb-4 border-b pb-4">
                                <h3 className="text-lg font-semibold">Frontend Developer</h3>
                                <p className="text-gray-600">Location: Remote</p>
                                <p className="text-gray-500">Company: Awesome Company</p>
                                <p className="mt-2">
                                    We are looking for a passionate Frontend Developer to join our team. The ideal candidate should have experience in React, HTML, CSS, and JavaScript.
                                </p>
                                <button className="mt-2 text-blue-600 hover:underline">View Details</button>
                            </div>

                            {/* Job Listing Example */}
                            <div className="mb-4 border-b pb-4">
                                <h3 className="text-lg font-semibold">Backend Developer</h3>
                                <p className="text-gray-600">Location: New York, NY</p>
                                <p className="text-gray-500">Company: Tech Innovations</p>
                                <p className="mt-2">
                                    We are looking for a Backend Developer to build and maintain server-side applications. Proficiency in Node.js, Express, and MongoDB is required.
                                </p>
                                <button className="mt-2 text-blue-600 hover:underline">View Details</button>
                            </div>

                            {/* Job Listing Example */}
                            <div className="mb-4 border-b pb-4">
                                <h3 className="text-lg font-semibold">UI/UX Designer</h3>
                                <p className="text-gray-600">Location: San Francisco, CA</p>
                                <p className="text-gray-500">Company: Creative Solutions</p>
                                <p className="mt-2">
                                    We are seeking a talented UI/UX Designer to create intuitive and engaging user experiences for our products.
                                </p>
                                <button className="mt-2 text-blue-600 hover:underline">View Details</button>
                            </div>

                            {/* Add more job listings as needed */}
                        </div>
                    </div>



                </div>
            </section>
        </>
    );
}

export default Page;
