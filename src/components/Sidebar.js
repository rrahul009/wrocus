import React from 'react';

const Sidebar = () => {
    return (
        <section className="p-4 bg-white sticky top-2">
            <div>
                <div className='flex justify-between'>
                    <h2 className="text-md  mb-4">Filters</h2>
                    <h2 className="text-md mb-4 cursor-pointer ">Clear</h2>

                </div>

                {/* Location Dropdown */}
                <div className="mb-4 mt-3">
                    <label className="block text-sm  mb-2" htmlFor="location">
                        Location
                    </label>
                    <select id="location"  className="block w-full text-sm p-2 border border-gray-300 rounded-md cursor-pointer">
                        <option value="">Select Location</option>
                        <option value="remote">Noida</option>
                        <option value="office">Bengaluru</option>
                        <option value="hybrid">Mumbai</option>
                        <option value="hybrid">Gurugram</option>
                        <option value="hybrid">Delhi</option>
                        <option value="hybrid">Hyderabad</option>
                    </select>
                </div>

                {/* Function Dropdown */}
                <div className="mb-6">
                    <label className="block text-sm mb-2" htmlFor="function">
                        Function
                    </label>
                    <select id="function" className="block w-full text-sm p-2 border border-gray-300 rounded-md cursor-pointer">
                        <option value="">Select Function</option>
                        <option value="development">Development</option>
                        <option value="design">Design</option>
                        <option value="marketing">Marketing</option>
                    </select>
                </div>

                {/* Work Preference Dropdown */}
                <div className="mb-6">
                    <label className="block  text-sm mb-2" htmlFor="work-preference">
                        Where Do You Want to Work?
                    </label>
                    <select id="work-preference" className="block text-sm w-full p-2 border border-gray-300 rounded-md cursor-pointer">
                        <option value="">Select Work Preference</option>
                        <option value="home">From Home</option>
                        <option value="office">From Office</option>
                        <option value="office">Hybrid</option>
                    </select>
                </div>

                {/* Specialty Dropdown */}
                <div className="mb-5">
                    <label className="block text-sm mb-2" htmlFor="specialty">
                        What is your primary focus or specialty?
                    </label>
                    <select id="specialty" className="block text-sm w-full p-2 border border-gray-300 rounded-md cursor-pointer">
                        <option value="">Select Specialty</option>
                        <option value="frontend">Frontend Development</option>
                        <option value="backend">Backend Development</option>
                        <option value="fullstack">Full Stack Development</option>
                    </select>
                </div>


                {/* Apply Button */}
                <div className="mb-6 mt-3">
                    <button
                        className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition duration-200"
                    >
                        Apply
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Sidebar;
