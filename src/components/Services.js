'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import { initializeAOS } from '@/app/utils/Aos_setup';
import Image from 'next/image';
import CloudOffIcon from '@mui/icons-material/CloudOff';
import BarChartIcon from '@mui/icons-material/BarChart';
import GroupsIcon from '@mui/icons-material/Groups';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';

export default function ServiceCards() {
    useEffect(() => {
        const cleanupAOS = initializeAOS();
        return cleanupAOS; // Cleanup AOS on unmount
    }, []);

    return (
        <>

            <div className="flex flex-col md:flex-row w-full">
                {/* Text Content Section */}
                <div className="text-content flex-1  md:p-12 " data-aos="zoom-in-down">
                    <h1 className="text-4xl mt-4 font-bold ml-2 md:ml-3 md:pl-8"> Your Partner for </h1>
                    <h1 className='text-4xl font-bold ml-3 md:pl-8 mb-4 '>Software Innovation</h1>

                    <ul
                        className="list-disc md:pl-8 space-y-3 ml-8 text-md"
                        style={{ fontSize: '14px' }}
                    >
                        <li>Our experienced team makes your ideas a reality from concept to active applications.</li>
                        <li>Agile solutions for timely delivery for market launch.</li>
                        <li>Considering usability of design in enterprise eco-system.</li>
                        <li>Scalability and customization of each prototype.</li>
                        <li>We understand the niche and unique client-business to develop applications.</li>
                        <li>Projects delivered across 12 industries.</li>
                        <li>Service provider for complete digital transformation of legacy systems.</li>
                        <li>We encourage new talent and adopt leading technologies.</li>
                    </ul>
                    <div className='flex justify-start gap-10  ml-10 mt-8 '>
                        <div>
                            <img src='https://ivrnet.com/wp-content/uploads/2020/04/icon-aa-1.png' style={{ height: '80px', width: '80px' }} />
                            <p className='text-2xl font-bold border-b-2 border-transparent hover:border-blue-600 cursor-pointer'>Experience</p>
                            <p className='text-md text-gray-600 mt-2'>Our great team of more than <br />250+ software experts.</p>
                        </div>
                        <div>
                            <img src='https://img.freepik.com/premium-vector/flat-icon-representing-settings_941526-9336.jpg'
                            className=' hover:border-blue-600 cursor-pointer'
                            style={{ height: '70px', width: '70px' }} />
                            <p className='text-2xl  font-bold border-b-2 border-transparent hover:border-blue-600 cursor-pointer'>Quick Support</p>
                            <p className='text-md text-gray-600 mt-2'>The pilot team provides <br /> valuable expertise.</p>
                        </div>
                    </div>

                </div>


                {/* Image Content Section */}
                <div className="image-content flex-1 flex items-center justify-center p-10 md:p-12 mt-2" data-aos="flip-left">
                    <img
                        src='https://cloud3tech.com/wp-content/uploads/2020/03/image1-home2.png'
                        className='object-cover w-full  '
                        style={{ height: '450px', maxWidth: '700px' }}
                    />
                </div>

            </div>






        </>
    );
}
