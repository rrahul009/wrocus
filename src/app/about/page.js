'use client';
import Navbar from '@/components/Navbar';
import React, { useEffect, useState } from 'react';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import CloseIcon from '@mui/icons-material/Close'; // Import the close icon
import { AcademicCapIcon, DevicePhoneMobileIcon, GlobeAltIcon, CogIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import ActualWork from '@/components/ActualWork';
import OurLeaderShip from '@/components/OurLeaderShip';
import ClientProject from '@/components/ClientProject';
import Link from 'next/link';
import { initializeAOS } from '../utils/Aos_setup';

const cardData = [
  {
    id: 1,
    title: 'People with the Right Skill Sets',
    img: "https://cdn.elearningindustry.com/wp-content/uploads/2019/10/7-Benefits-That-Highlight-The-Importance-Of-Soft-Skills-In-The-Workplace.png",
    description: 'People with the Right Skill Sets'
  },
  {
    id: 2,
    title: 'Process ideas from concept to market launch',
    img: 'https://cdn-proxy.slickplan.com/wp-content/uploads/2022/03/NPD-process-1.png',
    description: 'Process ideas from concept to market launch'
  },
  {
    id: 3,
    title: 'Adoption of latest Technology',
    img: 'https://media.licdn.com/dms/image/C5612AQH0p0dxAbZ4LQ/article-cover_image-shrink_720_1280/0/1650207211200?e=2147483647&v=beta&t=aKBzHGskD3MkhBNB2nnNvfEN--77wwDjxqyzgLP0xrU',
    description: 'Adoption of latest Technology'
  },
  {
    id: 4,
    title: 'Scalability and customization of each prototype',
    img: 'https://autoprotoway.com/wp-content/uploads/2022/12/from-ideal-to-production.jpg',
    description: 'Scalability and customization of each prototype'
  },
  {
    id: 5,
    title: 'Usability of design in enterprise eco-system',
    img: 'https://static.infragistics.com/marketing/Website/whitepapers/Design-Usability-Impact/design-usability-and-complex-systems-header-480.png',
    description: 'Usability of design in enterprise eco-system'
  },
];

const Page = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  useEffect(() => {
    const cleanupAOS = initializeAOS();
    return cleanupAOS; // Cleanup AOS on unmount
  }, []);
  const [isVideoVisible, setIsVideoVisible] = useState(false);
  const [hoverIndex, setHoverIndex] = useState(null)
  const images = [
    { src: '/slider/box1.jpg', alt: 'Box 1', description: 'Software product to our experienced BAs,UI/UX designer ,developer' },
    { src: '/slider/box2.jpg', alt: 'Box 2', description: 'Software product to our experienced BAs,UI/UX designer ,developer' },
    { src: '/slider/box3.jpg', alt: 'Box 3', description: 'Software product to our experienced BAs,UI/UX designer ,developer' },
    { src: '/slider/box4.jpg', alt: 'Box 4', description: 'Software product to our experienced BAs,UI/UX designer ,developer' },
  ];


  const items = [
    { 
      number: '01',
       text: 'People with the right skill sets.' ,
      img:'https://cdn-icons-png.flaticon.com/512/2773/2773117.png'
      },
    {
       number: '02',
        text: 'Process ideas from concept to market launch.',
         img:'https://img.lovepik.com/png/20231024/White-shopping-cart-round-cartoon-instagram-icon-social-cart-icons_332314_wh1200.png'
      },
    { number: '03',
       text: 'Adoption of the latest technology.',
         img:'https://img.freepik.com/premium-vector/technology-adoption-icon-vector-image-can-be-used-business-performance_120816-346904.jpg'
      },
    { 
      number: '04',
       text: 'Scalability and customization of each prototype.',
         img:'https://miro.medium.com/v2/resize:fit:1400/1*jnVaAudSAchg9hzZAI2USQ.jpeg'
      },
    { 
      number: '05',
       text: 'Usability of design in the enterprise ecosystem.',
       img:'https://e7.pngegg.com/pngimages/310/332/png-clipart-computer-icons-home-house-desktop-service-home-blue-logo.png' 
      },
  ];
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
        
      </div>
      <section className='p-5 flex mt-6 py-4'>
        <div className='w-1/2 py-4'>
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
          <div className='grid grid-cols-2 gap-2 '>

            {
              images.map((image, index) => (
                <div data-aos="zoom-in-down"
                  key={index}
                  className='relative group'
                  onMouseEnter={() => setHoverIndex(index)}
                  onMouseLeave={() => setHoverIndex(null)}
                >
                  <img
                    src={image.src}
                    alt='image.alt'
                    className='w-full h-48 object-cover  duration-300'
                  />
                  {hoverIndex === index && (
                    <div className='absolute inset-0 bg-aboutBackground flex items-center justify-center' data-aos="flip-right">
                      <p className='text-white text-sm p-2 text-center' >{image.description}</p>
                    </div>
                  )}

                </div>

              ))
            }
          </div>
        </div>
 
      </section>
      <hr />

      {/* wrocus known for */}
      <section className="p-6 bg-gray-50" data-aos="zoom-in">
    <p className="text-center text-2xl font-semibold text-gray-800 mb-6">
        WROCUS is known to make IT happen with end-to-end engineering and strict deadlines. Our deep strategic organization is built on five key pillars.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-5"data-aos="zoom-in">
        {items.map((item, index) => (
            <div
                key={index}
                className="relative p-4 bg-aboutBackground hover:bg-white rounded-lg shadow-md transition-transform transform hover:scale-105 flex flex-col justify-between"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
            >
                <div >
                    <h3 className={`text-3xl font-bold ${hoveredIndex === index ? 'text-black' : 'text-white'}`}>
                        {item.number}
                    </h3>
                    <p className={`text-xl font-bold ${hoveredIndex === index ? 'text-black' : 'text-white'}`}>
                        {item.text}
                    </p>
                </div>
                <div className='flex items-end justify-end mt-4'>
                    <img
                        src={item.img}
                        alt={`Icon for ${item.number}`}
                        className='h-20'
                        style={{backgroundColor:'white'}}
                    />
                </div>
            </div>
        ))}
    </div>
</section>




      <section data-aos="zoom-in">
        <ActualWork />
      </section>
      <section>
        <OurLeaderShip />
      </section>
      <section>
        <ClientProject />
      </section>


    </>
  );
};

export default Page;
