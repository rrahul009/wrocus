'use client'
import { initializeAOS } from '@/app/utils/Aos_setup';
import React, { useEffect } from 'react';

// Inline styles for the partner logos slider
const containerStyle = {
  position: 'relative',
  overflow: 'hidden',
  width: '100%',
  height: '300px',
  backgroundColor: 'white', // Set background color to black
  padding: '20px 0', // Add padding to the top and bottom
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center', // Center the content horizontally
  overflow: 'hidden'
};

const sliderStyle = {
  display: 'flex',
  alignItems: 'center',
  height: '100%',
  whiteSpace: 'nowrap',
  animation: 'scroll 10s linear infinite'
};

// Calculate the total width of the logos and use it in the keyframes
const logoStyle = {
  flex: '0 0 auto',
  marginRight: '6rem', // Increased gap between logos
  display: 'inline-block'
};

const imgStyle = {
  width: '200px', // Set a specific width for consistency
  height: '100px', // Set a specific height for consistency
  objectFit: 'contain', // Ensures that logos are contained within the specified width and height
  display: 'block' // Ensure the logo images are block elements
};

// Keyframes animation for scrolling effect
const keyframesStyle = `
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }
`;

const OurClient = () => {
  useEffect(() => {
    const cleanupAOS = initializeAOS();
    return cleanupAOS; // Cleanup AOS on unmount
  }, []);
  return (
    <div className='mt-5' data-aos="zoom-in-up">
      <style>{keyframesStyle}</style>
      <div style={containerStyle} className='mt-2' >
        <div style={{ textAlign: 'center', width: '100%' }} data-aos="fede-left">
          <h2 style={{ color: 'black', fontSize: '2rem', fontWeight: 'bold', marginBottom: '30px' }}>
            Our Client
          </h2>
          <div style={sliderStyle}>
            {/* Display logos */}
            <div style={logoStyle}>
              <img src="https://etimg.etb2bimg.com/photo/87261183.cms" alt="Partner 1" style={imgStyle} />
            </div>
            <div style={logoStyle}>
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2CQIMiyn44Rj9rbUflyH69dj0MaObVOeQPw&s' alt="Partner 2" style={imgStyle} />
            </div>
            <div style={logoStyle}>
              <img src='https://mir-s3-cdn-cf.behance.net/projects/404/306764204888467.Y3JvcCwxMzgwLDEwODAsMjcwLDA.png' alt="Partner 3" style={imgStyle} />
            </div>
            <div style={logoStyle}>
              <img src='https://garciamedia.com/wp-content/uploads/2020/08/Screen-Shot-2020-08-31-at-7.11.00-AM-1024x806.png' alt="Partner 4" style={imgStyle} />
            </div>
            <div style={logoStyle}>
              <img src='https://img.staticmb.com/mbcontent/images/crop/uploads/2015/5/MB%20Logo_0_1200.JPG' alt="Partner 5" style={imgStyle} />
            </div>
            <div style={logoStyle}>
              <img src='https://wrocus.com/wp-content/uploads/2021/08/timesinternetlimited.png' alt="Partner 6" style={imgStyle} />
            </div>
            <div style={logoStyle}>
              <img src='https://img.staticmb.com/mbcontent/images/crop/uploads/2015/5/MB%20Logo_0_1200.JPG' alt="Partner 7" style={imgStyle} />
            </div>
            {/* Repeat logos to ensure continuous scrolling */}
            <div style={logoStyle}>
              <img src="https://etimg.etb2bimg.com/photo/87261183.cms" alt="Partner 1" style={imgStyle} />
            </div>
            <div style={logoStyle}>
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2CQIMiyn44Rj9rbUflyH69dj0MaObVOeQPw&s' alt="Partner 2" style={imgStyle} />
            </div>
            <div style={logoStyle}>
              <img src='https://mir-s3-cdn-cf.behance.net/projects/404/306764204888467.Y3JvcCwxMzgwLDEwODAsMjcwLDA.png' alt="Partner 3" style={imgStyle} />
            </div>
            <div style={logoStyle}>
              <img src='https://garciamedia.com/wp-content/uploads/2020/08/Screen-Shot-2020-08-31-at-7.11.00-AM-1024x806.png' alt="Partner 4" style={imgStyle} />
            </div>
            <div style={logoStyle}>
              <img src='https://img.staticmb.com/mbcontent/images/crop/uploads/2015/5/MB%20Logo_0_1200.JPG' alt="Partner 5" style={imgStyle} />
            </div>
            <div style={logoStyle}>
              <img src='https://wrocus.com/wp-content/uploads/2021/08/timesinternetlimited.png' alt="Partner 6" style={imgStyle} />
            </div>
            <div style={logoStyle}>
              <img src='https://img.staticmb.com/mbcontent/images/crop/uploads/2015/5/MB%20Logo_0_1200.JPG' alt="Partner 7" style={imgStyle} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex mt-10 p-10 gap-10 w-full" data-aos="zoom-in-up">
        {/* First Half */}
        <div
          className="flex-1 bg-cover bg-center h-[300px]"
          style={{ backgroundImage: 'url(https://wrocus.com/wp-content/uploads/2021/08/country-worlwide-1.jpg)' }}
          data-aos="zoom-in-left"
        >
          <p className='p-10 text-5xl text-white font-bold'>5 +</p>
          <p className='p-2 text-3xl text-white font-bold'>Countries Worldwide</p>
          <p className='p-2  text-white'>

            WROCUS serves businesses in Australia, Singapore, UK, USA and India with a dedicated team providing software development solutions.</p>
        </div>

        {/* Second Half */}
        <div
          className="flex-1 bg-cover bg-center h-[300px]"
          style={{ backgroundImage: 'url(https://wrocus.com/wp-content/uploads/2021/08/happy-customers.jpg)' }}
          data-aos="zoom-in-right"
        >
          <p className='p-10 text-5xl text-white font-bold'>250 +</p>
          <p className='p-2 text-3xl text-white font-bold'>  Happy Customers</p>
          <p className='p-2  text-white'>

            We retain our customers through proactive support, transparency and</p>
        </div>
      </div>
    </div>
  );
};

export default OurClient;
