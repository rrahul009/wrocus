'use client'
import Navbar from '@/components/Navbar'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const page = () => {
    const router=useRouter();

    const [jobData, setJobData] = useState({
        jobtitle: "",
        jobdescription: '',
        location: '',
        jobtype: '',
        salary: '',
        company: '',
        email: '',
        applicationdeadline: '',
        skill: '',
        experience: '',
        jobcategory: '',
        benefit: ''
    })
    const [error, setError] = useState('')
    const [success, setSuccess] = useState()

    const handleChange = (e) => {
        const { name, value } = e.target
        setJobData({
            ...jobData, [name]: value
        })

    }

    const handleSubmit = async (e) => {
        e.preventDefault();
       try {
        const response = await fetch('http://localhost:5001/api/createjob', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(jobData)

        })

        const data = await response.json()
        console.log(data)
        setSuccess(data.message)
        setJobData({
            jobtitle: "",
            jobdescription: '',
            location: '',
            jobtype: '',
            salary: '',
            company: '',
            email: '',
            applicationdeadline: '',
            skill: '',
            experience: '',
            jobcategory: '',
            benefit: ''

        })
        setTimeout(() => {
            router.push('/admincareerpage');
            
        }, 2000);


       } catch (error) {
        setError(error)
        
       }

    }


    return (
        <>
            <Navbar />

            <div className='bg-gray-100 mt-3 p-4' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                <div className='bg-white p-6' style={{ width: '700px' }}>
            <div className='grid grid-cols-3 items-center'>
                <p></p>
                <p className='text-center font-bold text-md lg:text-2xl'>CREATE JOB</p>
               <Link href="/admincareerpage"> <button className='text-right ml-10 lg:ml-26 bg-blue-600 text-white p-2 rounded-md w-18' style={{width:'80px'}}>view job</button></Link>
                
            </div>
                    <p className='text-green-400 text-center mt-4'>{success}</p>
                    {error &&<p className='text-red-300'>{error}</p>}
                    <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
                        {/* job title */}
                        <div className="relative z-0 w-full mb-5 group">
                            <input
                                type="text"
                                name="jobtitle"
                                id="Job Title"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=""
                                required
                                onChange={handleChange}
                                value={jobData.jobtitle}
                                autoComplete='off'
                            />
                            <label
                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Job Title
                            </label>
                        </div>

                        {/* job description  */}
                        <div className="relative z-0 w-full mb-5 group">
                            <input
                                type="text"
                                name="jobdescription"
                                id="Job Description"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required
                                onChange={handleChange}
                                value={jobData.jobdescription}
                                autoComplete='off'
                            />
                            <label
                                htmlFor="jobdescription"
                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Job Description
                            </label>
                        </div>

                        {/* Location */}
                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full mb-5 group">
                                <input
                                    type="text"
                                    name="location"
                                    id="location"
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                    required
                                    onChange={handleChange}
                                    value={jobData.location}
                                    autoComplete='off'
                                />
                                <label
                                    htmlFor="location"
                                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Location
                                </label>
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <label htmlFor="jobtype" className="sr-only text-gray-500">
                                    Select Job Type
                                </label>
                                <select
                                    type="text"
                                    name="jobtype"
                                    id="jobtype"
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                    required
                                    onChange={handleChange}
                                    value={jobData.jobtype}
                                    autoComplete='off'
                                >
                                    <option value="" disabled selected hidden className="text-gray-500">
                                        Select Job Type
                                    </option>
                                    <option value="full_time">Full Time </option>
                                    <option value="Part_time"> Part Time</option>
                                    <option value="Contract">Contract</option>
                                    <option value="Remote">Remote</option>
                                </select>
                                {/* Dropdown Icon */}
                                <svg
                                    className="absolute right-2 top-1/2 transform -translate-y-1/2 w-5 h-4 text-gray-500 pointer-events-none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>


                        {/* salary and company name */}
                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full mb-5 group">
                                <input
                                    type="text"

                                    name="salary"
                                    id="salary"
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                    required
                                    onChange={handleChange}
                                    value={jobData.salary}
                                    autoComplete='off'
                                />
                                <label
                                    htmlFor="salary"
                                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Salary
                                </label>
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <input
                                    type="text"

                                    name="company"
                                    id="company"
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                    required
                                    onChange={handleChange}
                                    value={jobData.company}
                                    autoComplete='off'
                                />
                                <label
                                    htmlFor="company"
                                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Company
                                </label>
                            </div>
                        </div>


                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full mb-5 group">
                                <input
                                    type="text"
                                    name="email"
                                    id="email"
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                    required
                                    onChange={handleChange}
                                    value={jobData.email}
                                    autoComplete='off'
                                />
                                <label
                                    htmlFor="email"
                                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Contact Email
                                </label>
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <input
                                    type="date"
                                    name="applicationdeadline"
                                    id="floating_last_name"
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                    required
                                    onChange={handleChange}
                                    value={jobData.applicationdeadline}
                                    autoComplete='off'
                                />
                                <label
                                    htmlFor="applicationdeadline"
                                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Application Deadline
                                </label>
                            </div>
                        </div>

                        {/* experience and skill */}
                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full mb-5 group">
                                <input
                                    type="text"
                                    name="skill"
                                    id="skillsrequired"
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                    required
                                    onChange={handleChange}
                                    value={jobData.skill}
                                    autoComplete='off'
                                />
                                <label
                                    htmlFor="skillsrequired"
                                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Skills Required
                                </label>
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <label htmlFor="jobtype" className="sr-only">Select Job Type</label>
                                <select
                                    type="text"
                                    name="experience"
                                    id="experience"
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                    required
                                    onChange={handleChange}
                                    value={jobData.experience}
                                    autoComplete='off'
                                >
                                    <option value="" disabled selected hidden>
                                        Experience level
                                    </option>
                                    <option value="full_time">Fresher </option>
                                    <option value="Junior"> Junior</option>
                                    <option value=" Mid-level"> Mid-level</option>
                                    <option value="Senior">Senior</option>


                                </select>
                                {/* Dropdown Icon */}
                                <svg
                                    className="absolute right-2 top-1/2 transform -translate-y-1/2 w-5 h-4 text-gray-500 pointer-events-none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>

                            </div>
                        </div>
                        {/* job category */}
                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full mb-5 group">
                                <select
                                    type="text"
                                    name="jobcategory"
                                    id="jobcategory"
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                    required
                                    onChange={handleChange}
                                    value={jobData.jobcategory}
                                    autoComplete='off'
                                >
                                    <option value="" disabled selected hidden> Job category</option>
                                    <option value="Engineering">Engineering</option>
                                    <option value="Marketing">Marketing</option>
                                    <option value="Design">Design</option>

                                </select>
                                {/* Dropdown Icon */}
                                <svg
                                    className="absolute right-2 top-1/2 transform -translate-y-1/2 w-5 h-4 text-gray-500 pointer-events-none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>

                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <input
                                    type="text"
                                    name="benefit"
                                    id="benefits"
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                    required
                                    onChange={handleChange}
                                    value={jobData.benefit}
                                    autoComplete='off'
                                />
                                <label
                                    htmlFor="benefits"
                                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    benefits
                                </label>



                            </div>
                        </div>


                        <button
                            type="submit"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full  mt-5 px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Create Job
                        </button>
                    </form>


                </div>

            </div>

        </>
    )
}

export default page