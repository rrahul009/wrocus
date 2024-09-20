'use client';
import Navbar from '@/components/Navbar';
import React, { useState } from 'react';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import CloseIcon from '@mui/icons-material/Close'; // Import the close icon
import { AcademicCapIcon, DevicePhoneMobileIcon, GlobeAltIcon, CogIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import ActualWork from '@/components/ActualWork';
import OurLeaderShip from '@/components/OurLeaderShip';
import ClientProject from '@/components/ClientProject';

const cardData = [
  {
    id: 1,
    title: 'People with the Right Skill Sets',
    icon: <UserGroupIcon className="w-12 h-12 text-blue-600" />,
    description: 'People with the Right Skill Sets'
  },
  {
    id: 2,
    title: 'Process ideas from concept to market launch',
    icon: <CogIcon className="w-12 h-12 text-blue-600" />,
    description: 'Process ideas from concept to market launch'
  },
  {
    id: 3,
    title: 'Adoption of latest Technology',
    icon: <DevicePhoneMobileIcon className="w-12 h-12 text-blue-600" />,
    description: 'Adoption of latest Technology'
  },
  {
    id: 4,
    title: 'Scalability and customization of each prototype',
    icon: <GlobeAltIcon className="w-12 h-12 text-blue-600" />,
    description: 'Scalability and customization of each prototype'
  },
  {
    id: 5,
    title: 'Usability of design in enterprise eco-system',
    icon: <AcademicCapIcon className="w-12 h-12 text-blue-600" />,
    description: 'Usability of design in enterprise eco-system'
  },
];

const Page = () => {
  const [isVideoVisible, setIsVideoVisible] = useState(false);

  const handlePlayClick = () => {
    setIsVideoVisible(true);
  };

  const handleCloseClick = () => {
    setIsVideoVisible(false);
  };

  return (
    <>
      <Navbar />

      <div
        className='flex justify-between p-4 py-6'
        style={{
          backgroundImage: 'url(/bg-pheader.jpg)', // Ensure the image path is correct
          backgroundSize: 'cover', // Optional: Adjust background size
          backgroundPosition: 'center', // Optional: Adjust background position
        }}
      >
        <div>
          <h2 className='text-white text-4xl font-extrabold'>ABOUT US</h2>
        </div>
        <div>
          <ul className='flex gap-5 text-white font-bold'>
            <li>HOME</li>
            <li>ABOUT US</li>
          </ul>
        </div>
      </div>
      <section className='p-5 flex mt-6 py-6'>
        <div className='w-1/2 py-12'>
          <h3 className='text-md mt-5 mb-5 font-semibold text-violet-700 px-8'>// OVERVIEW</h3>
          <p className='text-4xl font-bold mb-6 px-8'>IT Partner</p>
          <p className='text-gray-600 leading-8 px-8'>
            WROCUS is an IT solution company based in Delhi NCR, India serving global enterprises. It provides consultancy and software development solutions through trending technologies. Our clients are based in India, UK, USA, and Europe. We have a robust and resourceful team to produce scalable and innovative solutions. Our services and solutions are retained by small and medium businesses, startups, and reputed companies.
          </p>
          <div className='flex flex-col items-start mt-8'>
            {!isVideoVisible ? (
              <div className='flex items-start'>
                <PlayCircleIcon
                  className='mx-4 mt-5 cursor-pointer text-gray-800'
                  style={{ fontSize: '70px' }}
                  onClick={handlePlayClick}
                />
                <p className='mt-10 font-bold'>VIDEO SHOWCASE</p>
              </div>
            ) : (
              <div className='relative'>
                <button
                  className='absolute top-2 right-2 p-2 text-white bg-gray-800 rounded-full'
                  onClick={handleCloseClick}
                >
                  <CloseIcon style={{ fontSize: '24px' }} />
                </button>
                <video
                  width="600"
                  controls
                  autoPlay
                  className='mt-4'
                >
                  <source src="https://videos.pexels.com/video-files/1851190/1851190-sd_640_360_25fps.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            )}
          </div>
        </div>
        <div className='w-1/2 p-2'>
          <div className='grid grid-cols-2 gap-2'>
            <img
              src='/slider/box1.jpg'
              alt='Box 1'
              className='w-full h-auto object-cover'
            />
            <img
              src='/slider/box2.jpg'
              alt='Box 2'
              className='w-full h-auto object-cover'
            />
            <img
              src='/slider/box3.jpg'
              alt='Box 3'
              className='w-full h-auto object-cover'
            />
            <img
              src='/slider/box4.jpg'
              alt='Box 4'
              className='w-full h-auto object-cover'
            />
          </div>
        </div>
      </section>
      <section className='bg-gray-100 p-10'>
        <p className='text-2xl font-semibold text-center text-gray-600 leading-8 mb-4'>
          WROCUS is known to make IT happen with end-to-end engineering with strict deadlines.<br />
          Our deep strategic organization is built on the five pillars.
        </p>
        <div className="bg-white p-5 container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cardData.map(({ id, title, icon, description }) => (
              <div
                key={id}
                className=" text-black rounded-lg shadow-lg overflow-hidden p-2 transition-transform transform hover:scale-105 hover:bg-white hover:text-blue-600 duration-300 ease-in-out flex flex-col items-center"
                style={{ width: '300px' }}
              >
                <div className="mb-4">{icon}</div>
                <h2 className="text-center text-xl font-semibold mb-4">{title}</h2>
                {/* <p className="text-center">{description}</p> */}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section>
        <ActualWork/>
      </section>
      <section>
        <OurLeaderShip/>
      </section>
      <section>
        <ClientProject/>
      </section>


    </>
  );
};

export default Page;
