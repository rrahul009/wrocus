import React from 'react';

const OurLeaderShip = () => {
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
            <div className='flex justify-evenly gap-5 max-w-full overflow-hidden mt-5 rounded-full'>
            <div>
            <img
                    className='rounded-full w-[300px] h-[300px] object-cover'
                    src='slider/Aseemsir.jpg'
                  alt='Aseem Sir'
                />
                <p className='text-center font-bold text-2xl'>Aseem Gupta</p>
                <h2 className='text-center '>ASSOCIATE DIRECTOR</h2>
                 
            </div>
                <div>
                <img
                    className='rounded-full w-[300px] h-[300px] object-cover'
                    src='slider/Atulsir.jpeg'
                    alt='Atul Sir'
                />
                    <p className='text-center font-bold text-2xl'>Atul Singhal</p>
                    <h2 className='text-center'>  DIRECTOR</h2>
                </div>
            </div>
        </div>
    );
};

export default OurLeaderShip;
