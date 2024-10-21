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
      title: 'Web Development',
      // title2: '& Development',
      description: 'We carry more than just good coding skills. Our experience makes us stand out from other web development. Our designs are tailored to meet user needs, ensuring an engaging experience. We prioritize responsive design, so your site looks great on any device.',
      icon: "https://cdn-icons-png.freepik.com/512/8713/8713437.png"
    },
    {
      title: 'Mobile Apps Development',
      // title2: 'Development',
      description: 'Create complex enterprise software, ensure reliable software integration, modernize your legacy system. We focus on building scalable and efficient mobile applications that enhance user engagement. Our team stays updated with the latest technologies to deliver high-performance apps.',
      icon: "https://static.vecteezy.com/system/resources/previews/031/022/358/non_2x/mobile-development-icon-vector.jpg",
    },
    {
      title: 'UI/UX Design',
      // title2: 'Design',
      description: 'Build the product you need on time with an experienced team that uses a clear and effective design process. We emphasize user-centered design principles to create intuitive interfaces. Our iterative design approach ensures we meet your expectations at every stage.',
      icon: "https://cdn-icons-png.freepik.com/256/12098/12098127.png?semt=ais_hybrid"
    },
    {
      title: 'QA & Testing',
      // title2: '& Testing',
      description: 'Turn to our experts to perform comprehensive, multi-stage testing and auditing of your software. Our rigorous testing methodologies help identify issues early in the development cycle. We ensure your product is reliable and meets industry standards for quality.',
      icon: "https://img.freepik.com/premium-vector/qa-testing-icon-vector-image-can-be-used-agile_120816-102975.jpg",
    },
    {
      title: 'IT Consultancy',
      // title2: 'Consultancy',
      description: 'Trust our top minds to eliminate workflow pain points, implement new tech, and consolidate app portfolios. We provide strategic insights that align IT initiatives with your business goals. Our consultancy services enhance operational efficiency and drive growth.',
      icon: "https://cdn-icons-png.freepik.com/256/14510/14510945.png?semt=ais_hybrid",
    },
    {
      title: 'Odoo Development',
      // title2: 'Development',
      description: 'Customizing and implementing Odoo solutions to streamline your business processes. Our expertise in Odoo allows us to tailor solutions that fit your specific needs. We ensure seamless integration with existing systems for a smooth transition.',
      icon: "https://www.magictechnolabs.com/assets/images/odoo.webp",
    },
  ];


  return (
    <div className=" mx-auto p-6 " data-aos="zoom-in">
      <h1 className="text-4xl font-bold text-center mb-4">Solutions We Provide</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 cursor-pointer ">
        {services.map((service, index) => (
          <div key={index} className="bg-white rounded-lg p-6 transition-transform transform hover:scale-105  "
            data-aos="zoom-in"
          >
            <div className='flex justify-evenly'>
              <div className='flex '>
                <img src={service.icon} alt={service.title} className="h-20 w-20 object-contain" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-center mt-3 text-black hover:text-blue-300 transition duration-300 cursor-pointer">{service.title}</h2>
          
              </div>
            </div>
            <p className="text-gray-600  text-start text-sm ml-9 mt-6 ">{service.description}</p>
             
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
