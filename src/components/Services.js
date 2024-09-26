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
            <h1 className="text-4xl mt-4 font-bold text-center"> Partner for Software Innovation</h1>
            <div className="flex flex-col md:flex-row w-full">
                {/* Text Content Section */}

                <div className="text-content flex-1 p-6 md:p-12" data-aos="zoom-in-down">

                    <ul
                        className="list-disc pl-5 space-y-4"
                        style={{ fontFamily: '"Nunito Sans", sans-serif', color: '#6d6d6d' }}
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
                    <div className='flex justify-start gap-20 mt-10'>
                        <div>


                            <p className='text-2xl font-bold'>Experience</p>
                            <p className='text-md text-gray-600 mt-5'>Our great team of more than  <br />250+ software experts.</p>

                        </div>
                        <div>
                            <p className='text-2xl font-bold'>Quick Support</p>
                            <p className='text-md text-gray-600 mt-5'>The pilot team provides <br /> valuable expertise.</p>

                        </div>
                    </div>
                </div>


                {/* Image Content Section */}
                <div className="image-content flex-1 flex items-center justify-center p-16 md:p-12" data-aos="flip-left">
                    <img
                        src='https://wrocus.com/wp-content/uploads/2021/08/about.png'
                    />
                </div>
            </div>




        </>
    );
}
