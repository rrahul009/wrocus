import React from 'react';

const OdooCustomization = () => {
    return (
        <>
            <section className='bg-gray-50  py-4 '>
                <p className='text-center text-3xl font-bold text-gray-800  py-6 '>Odoo Customization</p>
                <div className="flex flex-col md:flex-row  justify-between p-6 bg-white shadow-md rounded-lg mx-4 my-8">
                    <div className='w-full md:w-1/2 mb-6 md:mb-0 py-5'>
                        <h2 className='text-2xl font-bold text-gray-800 mb-4'>Odoo Customization Services</h2>
                        <p className='mt-4 text-start text-gray-700'>
                            At Wrocus Technology, we understand that every business has unique needs. Our Odoo customization services are designed to tailor the platform specifically for you, enhancing functionality and user experience.
                        </p>
                        <p className='mt-2 text-start text-gray-700'>
                            Whether you need custom modules, specific workflows, or unique reports, our expert team is here to ensure that Odoo fits your business like a glove.
                        </p>
                        <div className='flex justify-start gap-12  mt-12'>
                            <img
                                src='https://www.candidroot.com/website_candidroot/static/src/svg/mobile_app_page3.svg'
                                className='mt-1'
                                style={{ height: '80px' }}
                            />
                            <img
                                src='https://www.candidroot.com/website_candidroot/static/src/svg/mobile_app_page4.svg'
                                style={{ height: '80px' }}
                            />
                        </div>
                    </div>
                    <div className='w-full md:w-1/2 flex justify-center'>
                        <img
                            src='https://www.ksolves.com/wp-content/uploads/2024/04/odoo-dev-banner.svg'
                            alt='Odoo Customization'
                            className='max-w-full h-76 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105'
                        />
                    </div>
                </div>


                <div className='p-4 mx-8 flex justify-around gap-8'>
                    <div className='w-1/2'>
                        <h3 className='text-2xl font-semibold mt-6 text-gray-800 text-center'>Our Customization Services Include:</h3>
                        <ul className='list-disc list-inside font-normal text-gray-700 mt-4 '>
                            <li className='mb-2'>Custom Module Development</li>
                            <li className='mb-2'>Workflow Optimization</li>
                            <li className='mb-2'>User Interface Enhancements</li>
                            <li className='mb-2'>Integration with Third-party Applications</li>
                            <li className='mb-2'>Custom Reporting and Analytics</li>
                            <li className='mb-2'>Feature Extensions and Modifications</li>
                            <li className='mb-2'>Regular Maintenance and Support</li>
                        </ul>
                        <p className='mt-12 text-start text-gray-700 max-w-2xl mx-auto '>
                        Let us help you maximize the potential of Odoo for your business. Contact us today to discuss your customization needs and take your operations to the next level!
                    </p>
                    </div>
                    <div className='w-1/2'>
                        <img src='https://www.infiraise.com/wp-content/uploads/2021/08/QA_1_img_1-1.png' 
                        height="300px"width="500px"
                        />
                    </div>


                  
                </div>
              
            </section>
        </>
    );
}

export default OdooCustomization;
