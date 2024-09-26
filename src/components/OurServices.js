import React from 'react';

const OurServices = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'We carry more than just good coding skills. Our experience makes us stand out from other web development.',
      icon: "https://cdn-icons-png.freepik.com/512/8713/8713437.png"
    },
    {
      title: 'Mobile Development',
      description: 'Create complex enterprise software, ensure reliable software integration, modernise your legacy system.',
      icon: "https://static.vecteezy.com/system/resources/previews/031/022/358/non_2x/mobile-development-icon-vector.jpg",
    },
    {
      title: 'UI/UX Design',
      description: 'Build the product you need on time with an experienced team that uses a clear and effective design process.',
      icon: "https://cdn-icons-png.freepik.com/256/12098/12098127.png?semt=ais_hybrid"
    },
    {
      title: 'QA & Testing',
      description: 'Turn to our experts to perform comprehensive, multi-stage testing and auditing of your software.',
      icon: "https://img.freepik.com/premium-vector/qa-testing-icon-vector-image-can-be-used-agile_120816-102975.jpg",
    },
    {
      title: 'IT Consultancy',
      description: 'Trust our top minds to eliminate workflow pain points, implement new tech, and consolidate app portfolios.',
      icon: "https://cdn-icons-png.freepik.com/256/14510/14510945.png?semt=ais_hybrid",
    },
    {
      title: 'Odoo Development',
      description: 'Customizing and implementing Odoo solutions to streamline your business processes.',
      icon: "https://www.magictechnolabs.com/assets/images/odoo.webp",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8">Solutions We Provide</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl">
            <div className='flex justify-center mb-4'>
              <img src={service.icon} alt={service.title} className="h-20 w-20 object-contain" />
            </div>
            <h2 className="text-2xl font-bold text-center mt-5 text-gray-800">{service.title}</h2>
            <p className="text-gray-600 mt-3 text-center text-md">{service.description}</p>
            <div className="flex justify-center mt-4">
              <button className='bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg'>
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
