import React from 'react';

const OdooDevelopment = () => {
  const odooService = [
    {
      title: 'Odoo Consultant',
      description: 'Get expert advice on your ERP strategy to optimize processes and overcome challenges.',
      icon: "https://icon-library.com/images/consulting-icon/consulting-icon-3.jpg"
    },
    {
      title: 'Odoo Website Development',
      description: 'Design and develop websites that seamlessly integrate with your Odoo ERP for enhanced performance.',
      icon: "https://cdn-icons-png.flaticon.com/512/9364/9364669.png"
    },
    {
      title: 'Odoo Customization',
      description: 'Tailor Odoo modules to fit your unique business processes and requirements effectively.',
      icon: "https://leadmaster.com/wp-content/uploads/2023/08/support.png"
    },
    {
      title: 'Odoo App Development',
      description: 'Create custom applications tailored to your specific needs with our expert development team.',
      icon: "https://leadmaster.com/wp-content/uploads/2023/08/support.png"
    },
    {
      title: 'Odoo Module Development',
      description: 'Develop dynamic modules that enhance the functionality of your Odoo system for better scalability.',
      icon: "https://leadmaster.com/wp-content/uploads/2023/08/support.png"
    },
    {
      title: 'Odoo Migration',
      description: 'Seamlessly migrate your data to Odoo with minimal downtime and maximum efficiency.',
      icon: "https://leadmaster.com/wp-content/uploads/2023/08/support.png"
    },
    {
      title: 'Odoo Integration',
      description: 'Integrate Odoo with third-party applications for improved workflows and data consistency.',
      icon: "https://leadmaster.com/wp-content/uploads/2023/08/support.png"
    },
    {
      title: 'Odoo Implementation',
      description: 'Implement Odoo solutions tailored to your business needs with a focus on successful outcomes.',
      icon: "https://leadmaster.com/wp-content/uploads/2023/08/support.png"
    },
    {
      title: 'Odoo Support',
      description: 'Receive ongoing support and maintenance to ensure your Odoo system runs smoothly and efficiently.',
      icon: "https://leadmaster.com/wp-content/uploads/2023/08/support.png"
    },
  ];

  return (
    <div className='bg-gray-800 py-4 p-5 mt-4'>
      <div className='py-6'>
        <h2 className='text-4xl text-center py-1 p-4 font-bold text-white'>Odoo Development Services We Offer</h2>
        <p className='text-center mb-5 text-white'>Explore our diverse Odoo ERP solutions and development services to elevate your digital transformation.</p>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4'>
          {odooService.map((item, id) => (
            <div key={id} className='border border-gray-300 p-6 rounded-lg shadow-lg bg-white transition-transform duration-300 transform hover:scale-105'>
              <div className='flex items-center justify-center mb-3'>
                <img
                  src={item.icon}
                  alt={`${item.title} icon`}
                  width="80"
                  height="80"
                  className='mr-3'
                />
                <h3 className='font-semibold text-xl text-gray-800'>{item.title}</h3>
              </div>
              <p className='mt-6 text-gray-700'>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OdooDevelopment;
