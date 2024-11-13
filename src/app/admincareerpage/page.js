'use client'
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
const Page = () => {

  const [jobData, setJobdata] = useState([])

  useEffect(() => {

    getJobData();
  }, [])
  const getJobData = async () => {
    const res = await fetch('http://localhost:5001/api/getalljob')
    const data = await res.json();
    console.log(jobData)
    setJobdata(data.jobData);


  }

  return (
    <>

      <Navbar />
      <section className="p-2 lg:mx-4 flex justify-center">
        <div style={{ width: '700px' }}>  

          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search jobs..."
              className="flex-grow p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-r-md hover:bg-blue-700 transition duration-200"
            >
              Search
            </button>
          </div>
        </div>

      </section>

      <section className="lg:p-2 p-4  flex justify-center">
        <div className="grid grid-cols-12 gap-4  ">

          {/* Main Content Area (9 columns) */}
          <div className="col-span-12 bg-gray-50 px-8 p-2 rounded-lg shadow-md   ">
          <div className='flex justify-between'>
          <div>
              <h2 className="text-xl font-semibold mt-6 ml-4">Job Listings</h2>
            </div>
            <div className='text-end'>
              <Link href="/appliedjob"><button className='text-end mb-2 bg-blue-600 rounded-md p-3 text-white'>View All Applied Job</button></Link>
            </div>
          </div>

            <div className="bg-white p-5 rounded-lg   ">


              {
                jobData && jobData.length > 0 ? (

                  jobData.map((item, index,) => (

                    <div key={item._id} >

                      <div className='mt-5 grid grid-cols-3 gap-6 mb-4   p-5 '>
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
                      <div className='text-end'>
                        <button className='py-2 mt-2 mb-5  px-8 bg-blue-600 text-white rounded-md w-md ml-4 '>Edit</button>
                        <button className='py-2 mt-2 mb-5  px-8 bg-red-600 text-white rounded-md w-md ml-4 '>Delete</button>
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
    </>
  );
}

export default Page;
