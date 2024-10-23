import React from 'react';

const OurLeadership = () => {
    return (
        <div className='bg-white mt-5 p-5 py-5'>
            <p className='text-center text-customPurplee font-bold mb-4'>GET TO KNOW OUR LEADERS</p>
            <h2 className='text-center font-extrabold text-4xl mb-3'>Our Leadership Team</h2>
            <p className='text-center font-serif mb-2 text-gray-600 font-medium'>
                We help businesses elevate their value through custom software development
            </p>
            <p className='text-center font-serif text-gray-600 font-medium'>
                product design, QA and consultancy services.
            </p>
            <div className='flex flex-col md:flex-row justify-evenly gap-5 max-w-full mt-5'>
                <div className='flex flex-col items-center mt-6'>
                    <img
                        className='rounded-full w-[250px] h-[250px] md:w-[380px] md:h-[380px] object-fill'
                        src='slider/Aseemsir.jpg'
                        alt='Aseem Gupta'
                    />
                    <p className='text-center font-bold text-xl md:text-2xl mt-6'>Aseem Gupta</p>
                    <h2 className='text-center text-lg md:text-xl'>ASSOCIATE DIRECTOR</h2>
                </div>
                <div className='flex flex-col items-center mt-6'>
                    <img
                        className='rounded-full w-[250px] h-[260px] md:w-[380px] md:h-[380px] object-fill'
                        src='Atulsir.jpg'
                        alt='Atul Singhal'
                    />
                    <p className='text-center font-bold text-xl md:text-2xl mt-6'>Atul Singhal</p>
                    <h2 className='text-center text-lg md:text-xl'>DIRECTOR</h2>
                </div>
            </div>
        </div>
    );
};

export default OurLeadership;
