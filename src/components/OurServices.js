'use client'
import React, { useEffect } from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { initializeAOS } from '@/app/utils/Aos_setup';

const OurServices = () => {
  useEffect(() => {
    const cleanupAOS = initializeAOS();
    return cleanupAOS; // Cleanup AOS on unmount
}, []);
  const services = [
    {
      title: 'Web Design ',
      title2:'& Development',
      description: 'We carry more than just good coding skills. Our experience makes us stand out from other web development.',
      icon: "https://cdn-icons-png.freepik.com/512/8713/8713437.png"
    },
    {
      title: 'Mobile Apps',
      title2:'Development',
      description: 'Create complex enterprise software, ensure reliable software integration, modernise your legacy system.',
      icon: "https://static.vecteezy.com/system/resources/previews/031/022/358/non_2x/mobile-development-icon-vector.jpg",
    },
    {
      title: 'UI/UX ',
      title2:'Design',
      description: 'Build the product you need on time with an experienced team that uses a clear and effective design process.',
      icon: "https://cdn-icons-png.freepik.com/256/12098/12098127.png?semt=ais_hybrid"
    },
    {
      title: 'QA',
      title2:'& Testing',
      description: 'Turn to our experts to perform comprehensive, multi-stage testing and auditing of your software.',
      icon: "https://img.freepik.com/premium-vector/qa-testing-icon-vector-image-can-be-used-agile_120816-102975.jpg",
    },
    {
      title: 'IT ',
      title2:'Consultancy',
      description: 'Trust our top minds to eliminate workflow pain points, implement new tech, and consolidate app portfolios.',
      icon: "https://cdn-icons-png.freepik.com/256/14510/14510945.png?semt=ais_hybrid",
    },
    {
      title: 'Odoo ',
      title2:'Development',
      description: 'Customizing and implementing Odoo solutions to streamline your business processes.',
      icon: "https://www.magictechnolabs.com/assets/images/odoo.webp",
    },
  ];

  return (
    <div className=" mx-auto p-6 "data-aos="zoom-in">
      <h1 className="text-4xl font-bold text-center mb-8">Solutions We Provide</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {services.map((service, index) => (
          <div key={index} className="bg-white rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl"
          data-aos="zoom-in"
          >
            <div className='flex justify-center mb-4'>
              <img src={service.icon} alt={service.title} className="h-20 w-20 object-contain" />
            </div>
            <h2 className="text-xl font-bold text-center mt-5 text-black">{service.title}</h2>
            <h2 className="text-xl font-bold text-center text-black">{service.title2}</h2>
            <p className="text-gray-600 mt-3 text-center text-sm">{service.description}</p>
            <div className="flex justify-center mt-4">
              <button className=' text-black  shadow-sm py-2 px-4 rounded-lg 
              transition-transform transform hover:scale-105 hover:shadow-lg'>
                Read More <ArrowForwardIcon style={{fontSize:'large'}}/>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
