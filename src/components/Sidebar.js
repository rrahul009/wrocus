import React, { useState } from 'react';

const initialFilterState = {
    location: '',
    experienceLevel: '',
    workMode: '',
    primarySkill: ''

}

const Sidebar = ({ onFilterApply }) => {
    const [filterState, setFilterState] = useState(initialFilterState);

    const handleFilterUpdate = (e) => {
        const { name, value } = e.target
        setFilterState((prevState) => ({
            ...prevState, [name]: value
        }))

    }

    const applyFilters = () => {
        if(onFilterApply)
            onFilterApply(filterState)
    }

    const resetFilter=()=>{
        setFilterState(initialFilterState)
        onFilterApply()

    }


    return (
        <section className="p-4 bg-white sticky top-2">
            <div>
                <div className='flex justify-between'>
                    <h2 className="text-sm  mb-4">Filters</h2>
                    <h2 className="text-sm mb-4 cursor-pointer "
                        onClick={resetFilter}
                    >Clear</h2>

                </div>

                {/* Location Dropdown */}
                <div className="mb-6">
                    <label className="block text-sm  mb-2" htmlFor="location">
                        Location
                    </label>
                    <select
                        id="location"
                        className="block w-full text-sm p-2 border border-gray-300 rounded-md cursor-pointer"
                        onChange={handleFilterUpdate}
                        name='location'
                        value={filterState.location}
                    >
                        <option value=''>Select</option>
                        <option value='Noida'>Noida</option>
                        <option value='Delhi'>Delhi</option>
                        <option value='Gurugram'>Gurugram</option>
                        <option value='Hydrabaad'>Hydrabaad</option>
                        <option value='Pune'>Pune</option>
                        <option value='Bangalore'>Bangalore</option>


                    </select>
                </div>

                {/* Experience Dropdown */}
                <div className="mb-6">
                    <label className="block text-sm mb-2" htmlFor="experience">
                        Experience
                    </label>
                    <select
                        id="experience"
                        className="block w-full text-sm p-2 border border-gray-300 rounded-md cursor-pointer"
                        onChange={handleFilterUpdate}
                        name='experience'
                        value={filterState.experienceLevel}
                    >
                        <option value="">Select</option>
                        <option value="fresher">Fresher</option>
                        <option value="1-2">1-2 Years</option>
                        <option value="3-5">3-5 Years</option>
                        <option value="6-10">6-10 Years</option>
                        <option value="10+">10+ Years</option>
                    </select>
                </div>

                {/*   Work Mode Dropdown */}
                <div className="mb-6">
                    <label className="block text-sm mb-2" htmlFor="workMode">
                        Work Mode
                    </label>
                    <select
                        id="wokMode"
                        className="block w-full text-sm p-2 border border-gray-300 rounded-md cursor-pointer"
                        onChange={handleFilterUpdate}
                        name='workMode'
                        value={filterState.workMode}
                    >
                        <option value="">Select</option>
                        <option value="onsite">Onsite</option>
                        <option value="remote">Remote</option>
                        <option value="hybrid">Hybrid</option>
                    </select>
                </div>

                {/*  Primary Skill Dropdown */}
                <div className="mb-5">
                    <label className="block text-sm mb-2" htmlFor="speciality">
                        Select Your Primary Skill
                    </label>
                    <select
                        id="primarySkill"
                        className="block w-full text-sm p-2 border border-gray-300 rounded-md cursor-pointer"
                        name="primarySkill"
                        value={filterState.primarySkill}
                        onChange={handleFilterUpdate}
                    >
                        <option value="">Select</option>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="vue">Vue.js</option>
                        <option value="java">Java</option>
                        <option value=".net">.NET</option>
                        <option value="python">Python</option>
                        <option value="nodejs">Node.js</option>
                        <option value="php">PHP</option>
                        <option value="ruby">Ruby on Rails</option>
                        <option value="go">Go</option>
                        <option value="sql">Sql</option>

                    </select>
                </div>

                {/* Apply Button */}
                <div className="mb-6 mt-3">
                    <button
                        className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition duration-200"
                        onClick={applyFilters}
                    >
                        Apply
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Sidebar;
