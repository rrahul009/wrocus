import React from 'react';

const CompanyOverview = () => {
    return (
        <div className='mt-5 py-12' style={{backgroundColor:'#063970'}}>
            <p className='text-5xl font-bold text-center  text-white p-4'>Company Overview</p>
            <p className='text-center mb-4 text-white'>
                Discover how we make an impact globally and locally. Our achievements reflect our commitment to excellence and innovation.
            </p>
            <div className='flex  justify-center gap-10 p-10'>
                <div className='bg-white shadow-lg rounded-lg p-6 max-w-xs'>
                    <h3 className='text-xl font-semibold mb-2'>5+ Countries Worldwide</h3>
                    <p>
                        Anbruch serves businesses in Australia, Singapore, UK, USA, and India with a dedicated team providing software development solutions.
                    </p>
                </div>
                <div className='bg-white shadow-lg rounded-lg p-6 max-w-xs'>
                    <h3 className='text-xl font-semibold mb-2'>Innovative Solutions</h3>
                    <p>
                        We develop cutting-edge software that meets the unique needs of our clients across various industries.
                    </p>
                </div>
                <div className='bg-white shadow-lg rounded-lg p-6 max-w-xs'>
                    <h3 className='text-xl font-semibold mb-2'>Dedicated Team</h3>
                    <p>
                        Our expert team is committed to delivering high-quality results and exceptional customer service.
                    </p>
                </div>
                <div className='bg-white shadow-lg rounded-lg p-6 max-w-xs'>
                    <h3 className='text-xl font-semibold mb-2'>Client Satisfaction</h3>
                    <p>
                        We pride ourselves on maintaining strong relationships with our clients and ensuring their satisfaction.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default CompanyOverview;
