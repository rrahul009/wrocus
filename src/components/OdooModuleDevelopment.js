import React from 'react';

const OdooModuleDevelopment = () => {
    return (
        <>
            <section className="bg-gray-50 p-8">
                <div className="container mx-auto text-center">
                    <h1 className="text-3xl font-bold text-gray-800 mb-6">Odoo Module Development</h1>
                    <p className="text-gray-600 mb-8">
                        At Wrocus Technology, we specialize in developing custom Odoo modules that enhance your business operations and cater to your specific needs.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-white shadow-md rounded-lg p-6 text-center">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Custom Module Design</h3>
                            <p className="text-gray-600">
                                Our team designs bespoke modules tailored to your business processes, ensuring seamless integration and functionality.
                            </p>
                        </div>
                        <div className="bg-white shadow-md rounded-lg p-6 text-center">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Integration with Existing Systems</h3>
                            <p className="text-gray-600">
                                We ensure that your new modules integrate smoothly with your existing Odoo setup, enhancing overall efficiency.
                            </p>
                        </div>
                        <div className="bg-white shadow-md rounded-lg p-6 text-center">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">User-Friendly Interfaces</h3>
                            <p className="text-gray-600">
                                Our modules are designed with user experience in mind, providing intuitive interfaces that your team will love.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-white p-8 ">
                <div className="container mx-auto text-center">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Why Choose Our Odoo Module Development Services?</h2>
                    <p className="text-gray-600 mb-4 text-center">
                        With years of experience and a dedicated team of experts, we deliver high-quality Odoo modules that drive results and streamline your operations.
                    </p>
                   <div className='flex'>
                    <div className='w-1/2'>
                    <ul className="list-disc list-inside text-start text-gray-600 mt-12">
                        <li className="mb-2">Tailored solutions to fit your unique business needs.</li>
                        <li className="mb-2">Robust support and maintenance for all modules.</li>
                        <li className="mb-2">Proven track record of successful implementations.</li>
                        <li className="mb-2">Focus on maximizing your return on investment.</li>
                        <li className="mb-2">Expert team with extensive knowledge of Odoo’s capabilities.</li>
                        <li className="mb-2">Agile development approach to ensure timely delivery.</li>
                        <li className="mb-2">Comprehensive testing to guarantee module performance and stability.</li>
                         
                    </ul>
                    </div>
                    <div className='w-1/2 flex justify-center'>
                        <img
                        src='https://smarttek.solutions/wp-content/uploads/odoo-versions-1170x516.jpg'
                        className='mt-6 object-contain'
                        style={{height:'300px'}}
                        />

                    </div>
                   </div>

                </div>

            </section>
        </>
    );
};

export default OdooModuleDevelopment;
