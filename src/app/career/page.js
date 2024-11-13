'use client'
import ApplyJobModel from '@/components/ApplyJobModel';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import React, { useEffect, useState } from 'react';
const Page = () => {

    const [jobData, setJobdata] = useState([])
    const [selectedJobId, setSelectedJobId] = useState(null)
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [successMessage, setSuccessMessage] = useState('')
    const [error, setError] = useState('')

    useEffect(() => {

        getJobData();
    }, [])
    const getJobData = async () => {
        const res = await fetch('http://localhost:5001/api/getalljob')
        const data = await res.json();
        console.log(jobData)
        setJobdata(data.jobData);
    }

    const handleApply = (jobId) => {
        setSelectedJobId(jobId)
        setIsOpenModal(true)
    }

    const handleSubmit = async (formData) => {
        // Create a new FormData object if you're passing plain data, not FormData
        const payLoad = new FormData();

        // Append the form data fields to FormData
        payLoad.append('name', formData.name);
        payLoad.append('email', formData.email);
        payLoad.append('noticeperiod', formData.noticeperiod);

        // Append the file (resume)
        if (formData.resume) {
            payLoad.append('resume', formData.resume);
        }

        // Append additional data, such as selectedJobId
        payLoad.append('selectedJobId', selectedJobId);

        try {
            const res = await fetch('http://localhost:5001/api/applyjob', {
                method: 'POST',
                // No need to set 'Content-Type', the browser will automatically set the correct boundary
                body: payLoad
            });

            if (!res.ok) {
                throw new Error(`HTTP error! Status: ${res.status}`);
            }
            const data = await res.json();
            setSuccessMessage(data.message)
            setTimeout(() => {
                setIsOpenModal(false)
                setSuccessMessage('')
            }, 1000);

      
        } catch (error) {
            console.error('Error during the request:', error.message);
        }
    };


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

            <section className="lg:p-5 p-4">
                <div className="grid grid-cols-12 gap-4">
                    {/* Sidebar (3 columns) */}
                    <div className="col-span-3 bg-gray-100 p-4 rounded-lg shadow-md">

                        <Sidebar />
                    </div>
                    {/* Main Content Area (9 columns) */}
                    <div className="col-span-9 bg-gray-100 p-2 rounded-lg shadow-md">
                        <div className="bg-white p-4 rounded-lg">
                            <h2 className="text-xl font-bold mb-8">Job Listings</h2>

                            {
                                jobData && jobData.length > 0 ? (
                                    jobData && jobData.map((item, index,) => (
                                        <div key={item._id}>
                                            <div className='mt-5 grid grid-cols-3 gap-6 mb-4 '>
                                                <div>
                                                    <p><strong>Company</strong></p>
                                                    <p>{item.company}</p>
                                                </div>
                                                <div>
                                                    <p><strong> Job Title</strong></p>
                                                    <p>{item.job_title}</p>
                                                </div>
                                                <div>
                                                    <p><strong> Job Description</strong></p>
                                                    <p>{item.job_description}</p>
                                                </div>
                                                <div>
                                                    <p><strong>Created At</strong></p>
                                                    <p>{new Date(item.createdAt).toLocaleDateString('en-US')}</p>
                                                </div>
                                                <div>
                                                    <p><strong>Application_Deadline</strong></p>
                                                    <p>{new Date(item.application_deadline).toLocaleDateString('en-US')}</p>
                                                </div>
                                                <div>
                                                    <p><strong>Benefit</strong></p>
                                                    <p>{item.benefit}</p>
                                                </div>

                                                <div>
                                                    <p><strong>Contact Email</strong></p>
                                                    <p>{item.contact_email}</p>
                                                </div>

                                                <div>
                                                    <p><strong>Experience Level</strong></p>
                                                    <p>{item.experience_level}</p>
                                                </div>
                                                <div>
                                                    <p><strong>Job Category</strong></p>
                                                    <p>{item.job_category}</p>
                                                </div>
                                                <div>
                                                    <p><strong>Job Type</strong></p>
                                                    <p>{item.job_type}</p>
                                                </div>
                                                <div>
                                                    <p><strong>Location</strong></p>
                                                    <p>{item.location}</p>
                                                </div>
                                                <div>
                                                    <p><strong>Salary</strong></p>
                                                    <p>{item.salary}</p>
                                                </div>

                                            </div>
                                            <div className='text-center'>
                                                <button
                                                    onClick={() => handleApply(item._id)}
                                                    className='py-2 mt-6 mb-5  px-8 bg-blue-600 text-white rounded-md w-md '>Apply</button>
                                            </div>
                                            <hr className='mt-6' />
                                        </div>
                                    ))

                                ) : <p>Loading...</p>

                            }

                        </div>
                    </div>



                </div>
            </section>
            <ApplyJobModel
                isOpen={isOpenModal}
                closeModal={() => setIsOpenModal(false)}
                onSubmit={handleSubmit}
                successMessage={successMessage}



            />
        </>
    );
}

export default Page;
