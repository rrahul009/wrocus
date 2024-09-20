import React from 'react';

const ClientProject = () => {
    return (
        <>
            <div
                className="p-12 mx-12 mt-12"
                style={{
                    backgroundImage: 'linear-gradient(90deg, #00DEFF 0%, #7141B1 100%)',
                    height: '200px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                }}
            >
                <div className="flex items-center p-5 justify-between w-full max-w-4xl gap-5">
                    <div className="flex flex-col items-center">
                        <h2 className="text-4xl font-bold">105+</h2>
                        <p className="text-lg font-bold">ACTIVE CLIENT</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <h2 className="text-4xl font-bold">200+</h2>
                        <p className="text-lg font-bold">PROJECT COMPLETE</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <h2 className="text-4xl font-bold">150+</h2>
                        <p className="text-lg font-bold">SUCCESS PLACEMENT</p>
                    </div>
                </div>
            </div>

            {/* Technology index */}
            <div className='flex p-12'>
                <div className='p-12'>
                    <p className='text-lg font-bold text-customPurplee'>// TECHNOLOGY INDEX</p>
                    <h2 className='text-3xl font-extrabold mb-3'>Improve and Innovate</h2>
                    <h2 className='text-3xl font-extrabold mb-3'>with the Tech Trends</h2>
                    <p className='text-gray-600'>
                        We hire and build your own remote dedicated development <br /> teams tailored to your specific needs.
                    </p>

                    {/* Technology Index Bar */}
                    <div className='mt-6'>
                        <div className='p-2'>
                            {/* <h2 className='text-3xl font-extrabold mb-4'>Skills Overview</h2> */}

                            {/* Mobile Development */}
                            <div className='mb-4'>
                                <span className='font-semibold'>Mobile Development</span>
                                <div className='bg-gray-300 rounded-full h-4 w-full'>
                                    <div className='bg-blue-600 h-4 rounded-full' style={{ width: '70%' }} />
                                </div>
                                <span className='text-sm ml-2'>70%</span>
                            </div>

                            {/* Web Development */}
                            <div className='mb-4'>
                                <span className='font-semibold'>Web Development</span>
                                <div className='bg-gray-300 rounded-full h-4 w-full'>
                                    <div className='bg-blue-600 h-4 rounded-full' style={{ width: '90%' }} />
                                </div>
                                <span className='text-sm ml-2'>90%</span>
                            </div>

                            {/* UI/UX Design */}
                            <div className='mb-4'>
                                <span className='font-semibold'>UI/UX Design</span>
                                <div className='bg-gray-300 rounded-full h-4 w-full'>
                                    <div className='bg-custommBlue h-4 rounded-full' />
                                </div>
                                <span className='text-sm ml-2'>60%</span>
                            </div>

                            {/* Quality Assurance */}
                            <div className='mb-4'>
                                <span className='font-semibold'>Quality Assurance</span>
                                <div className='bg-gray-300 rounded-full h-4 w-full'>
                                    <div className='bg-blue-600 h-4 rounded-full' style={{ width: '100%' }} />
                                </div>
                                <span className='text-sm ml-2'>100%</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='p-12'>
                    <img src='slider/image2-about.png' />
                </div>
                <div>

                </div>

            </div>
        </>
    );
};

export default ClientProject;
