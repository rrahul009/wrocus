import React from 'react';

const OdooWebsiteDev = () => {
    return (
        <>
            <section className='bg-gray-100'>
                <p className='text-center text-3xl p-4 font-bold' style={{ color: '#0056b3' }}>Odoo Website Development</p>
                <div className='mx-3 '>
                    <div className='bg-white flex justify-center  shadow-md p-4 '>
                        <div className='w-1/2 flex justify-center flex-col p-6'>
                            <h2 className='text-2xl font-semibold mb-4 ' style={{ color: '#0056b3' }}>Our Expertise</h2>
                            <p className='text-gray-700'>
                                At Wrocus Technology, we specialize in Odoo Website Development, providing businesses with visually appealing and highly functional websites.
                                Our team is dedicated to creating customized solutions that align with your brand and enhance user experience.
                            </p>
                        </div>
                        <div className='w-1/2 flex justify-center mt-12'>
                            <img src='https://www.captivea.com/web/image/449383-8d7e9953/Benefit-of-Odoo-consulting.svg'
                                style={{ height: '260px' }}
                            />
                        </div>
                    </div>

                    <div className='bg-white rounded-lg  p-8  mt-5'>
                        {/* <h2 className='text-2xl font-semibold mb-12 text-center' style={{ color: '#0056b3' }}>Our Services</h2> */}
                        <div className='flex justify-between'>
                            <div className='w-1/2 mt-6'>
                                <ul className='list-disc list-inside font-normal text-gray-700'>
                                    <li className='mb-2'>Custom Odoo Website Design</li>
                                    <li className='mb-2'>E-commerce Integration</li>
                                    <li className='mb-2'>Responsive Design for Mobile and Tablet</li>
                                    <li className='mb-2'>SEO Optimization for Better Visibility</li>
                                    <li className='mb-2'>Content Management System (CMS) Setup</li>
                                    <li className='mb-2'>Third-party Application Integration</li>
                                    <li className='mb-2'>User-Friendly Navigation Design</li>
                                    <li className='mb-2'>Performance Optimization for Faster Loading</li>
                                    <li>Regular Maintenance and Updates</li>
                                </ul>

                            </div>
                            <div className='w-1/2'>
                                <img src='https://www.odoo-bs.com/web/image/1022158-c89bc9d5/App%20Overview.jpg' />
                            </div>
                        </div>
                    </div>


                    <div className='flex mt-6'>
                        <div className='bg-white rounded-lg shadow-md p-6 w-1/2 flex justify-center flex-col'>
                            <h2 className='text-2xl font-semibold mb-4'>Why Choose Us?</h2>
                            <p className='text-gray-700'>
                                Our experienced developers ensure that your website is not only aesthetically pleasing but also functional and easy to navigate.
                                We focus on creating a seamless user experience, optimizing performance, and ensuring that your website can scale as your business grows.
                            </p>
                        </div>
                        <div className='w-1/2 flex justify-center'>
                            <img src='https://media.licdn.com/dms/image/v2/D5612AQF95ms-ryODOg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1705485850044?e=2147483647&v=beta&t=dPy6zgFAz8ujgasV-zQ2s7vc587fJx8PlXqFr1mUHEM'
                            style={{height:'300px'}}
                            />
                        </div>
                    </div>



                </div>
            </section>
        </>
    );
};

export default OdooWebsiteDev;
