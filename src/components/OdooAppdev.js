import React from 'react';

const OdooAppDev = () => {
    return (
        <div className="bg-gray-100 min-h-screen py-4"id='odoo-appdev'>
            {/* Hero Section */}
            <section className="relative bg-white"data-aos="zoom-in">

                <div className="absolute inset-0 " />
                <div className="relative text-center py-6">
                    <h1 className="text-4xl font-bold text-gray-950">Odoo App Development</h1>
                    <p className="text-lg text-gray-950 mt-4 max-w-2xl mx-auto">
                        Custom applications designed to fit your business needs and optimize your workflows.
                    </p>
                </div>
            </section>

            {/* Services Section */}
            <section className="p-8 bg-white"data-aos="zoom-in">



                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white shadow-md rounded-lg p-6 text-center">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Custom App Development</h3>
                        <img src='https://techspawn.com/wp-content/uploads/2021/09/Odoo-Dedicated-Developer.png'
                        />
                        <p className="text-gray-600">Build tailored applications that align with your business processes.</p>
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-6 text-center">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Integration Services</h3>
                        <img
                            src='https://indexworld.net/wp-content/uploads/2024/07/OSINT-2000x1200-1.jpg'
                            className='mt-12 lg:ml-16'
                            style={{ height: '250px' }}
                        />

                        <p className="text-gray-600 mt-16">Seamlessly connect your Odoo apps with existing systems.</p>
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-6 flex justify-center flex-col">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">UI/UX Design</h3>
                        <img src='https://buildfire.com/wp-content/themes/buildfire/assets/images/hub-hero.webp'

                        // style={{height:'280px'}}
                        />

                        <p className="text-gray-600 text-center mt-14">Enhance user experience with intuitive designs tailored for your applications.</p>
                    </div>
                </div>
            </section>

            {/* <section className='p-6'>
             <div className='flex'>

             <div>
                    <img
                    src='https://www.flexsin.com/blog/wp-content/uploads/2021/12/odoo.jpg'
             
                    />
                </div>
                <div>
                    <img 
                    src='https://i0.wp.com/www.noitechnologies.com/wp-content/uploads/Odoo-ERP-Development.png?fit=1024%2C576&ssl=1'
                    style={{height:'400px'}}
                    />
                </div>
             </div>
            </section> */}



        </div>
    );
};

export default OdooAppDev;
