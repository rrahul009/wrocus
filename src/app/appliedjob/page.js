    'use client'
    import Navbar from '@/components/Navbar'
    import Link from 'next/link'
    import React, { useEffect, useState } from 'react'

    const page = () => {
        const [getappliedJobData, setAppliedJobData] = useState(null)
        const [error, setError] = useState(null)
        const [loading, setLoading] = useState(true)

        useEffect(() => {
            FetchAllJobData()

        }, [])

        const FetchAllJobData = async () => {
            try {
                const response = await fetch('http://localhost:5001/api/getallapplyjob')
                if (!response.ok) {
                    throw new Error(`Error:${response.status}`)
                }
                const data = await response.json();
                setAppliedJobData(data.data)
                console.log(data);
            }
            catch (error) {
                console.error(`Error`, error);
                setError('Failed to load applied job data.please try again later.');

            }
            finally {
                setLoading(false)

            }
        }
        if (loading) {
            return <div>Loading...</div>
        }

        if (error) {
            return <div>{error}</div>
        }
        return (
        <>
        <Navbar/>
            <div className='bg-gray-100 p-10'>

    <h2 className='text-center text-3xl font-bold mb-6'>Applied Job Data</h2>

    {getappliedJobData && getappliedJobData.length > 0 ? (

        <table className='table-auto w-full bg-white border-collapse border border-gray-200'>
            <thead>
                <tr className='bg-gray-100'>
                    <th className="border px-4 py-2 text-center">Name</th>
                    <th  className="border px-4 py-2 text-center">Email</th>
                    <th  className="border px-4 py-2 text-center">NoticePeriod(Days)</th>
                    <th  className="border px-4 py-2 text-center">Applied for</th>
                    <th  className="border px-4 py-2 text-center">Resume</th>
            

                </tr>
            </thead>
            <tbody>
                {
                    getappliedJobData.map((item, index) => (
                        <tr key={item._id} className='bg-white p-10 ' >

                            <td className="border px-4 py-2 text-center">{item.name}</td>
                            <td className="border px-4 py-2 text-center">{item.email}</td>
                            <td className="border px-4 py-2 text-center">{item.noticeperiod}</td>
                            <td className="border px-4 py-2 text-center">{item.jobId?.job_title||'N/A'}</td>
                            <td className="border px-4 py-2 text-center">
                            <Link href={item.resume} target='_blank' rel='noopener noreferrer' className='text-blue-500 underline '>
                            View Resume
                            </Link>
                                
                                </td>


                        </tr>

                    ))
                }
            </tbody>

        </table>

    ) : (
        <p>No Applied jobs Found.</p>
    )}

    </div>
        </>
        )
    }

    export default page