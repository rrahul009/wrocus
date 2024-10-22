import React from 'react';

const OdooIntegration = () => {
    return (
        <>
            <section className='bg-gray-100 py-8'>
                <div className='container mx-auto flex flex-col md:flex-row'>
                    <div className='w-full md:w-1/2'>
                        <img
                            src='https://www.candidroot.com/web/image/5173-44ce8537/Odoo%20Integration.jpg'
                            alt='Odoo Integration'
                            className='object-cover  w-full rounded-lg shadow-lg mt-12'
                            style={{height:'500px'}}
                        />
                    </div>
                    <div className='w-full md:w-1/2 p-6'>
                        <h2 className='text-3xl font-bold mb-4 text-gray-800'>Odoo Integration Services</h2>
                        <p className='text-gray-700 mb-4'>
                            At Wrocus Technology, we specialize in integrating Odoo with your existing systems to enhance functionality and improve business processes. Our team ensures a seamless connection between Odoo and third-party applications, making your operations more efficient.
                        </p>
                        <h3 className='text-2xl font-semibold mt-6 mb-2'>Our Integration Services Include:</h3>
                        <ul className="list-disc list-inside text-gray-600">
                            <li className="mb-2">ERP and CRM integration for better data flow.</li>
                            <li className="mb-2">E-commerce platform integration for seamless online sales.</li>
                            <li className="mb-2">Payment gateway integration for secure transactions.</li>
                            <li className="mb-2">Custom API integrations tailored to your business needs.</li>
                            <li className="mb-2">Real-time data synchronization across platforms.</li>
                            <li className="mb-2">Ongoing support and maintenance for all integrations.</li>
                        </ul>
                        <p className='mt-4'>
                            Let us help you harness the full potential of Odoo through effective integrations that drive growth and efficiency in your business.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default OdooIntegration;
