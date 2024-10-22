import React from 'react';

const OdooMigration = () => {
    return (
        <>
            <section className="bg-gray-50 p-8">
                <h1 className="text-center text-3xl font-bold text-gray-800 mb-2">Odoo Migration Services</h1>
                <p className="text-center text-gray-600 mb-2">
                    Seamlessly transition to the latest version of Odoo with our expert migration services.
                </p>
                <p className="text-center text-gray-600 mb-8">
                    At Wrocus Technology, we ensure a smooth migration process tailored to your business needs.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">Why Migrate to Odoo?</h2>
                        <ul className="list-disc list-inside text-gray-600">
                            <li className="mb-2">Access to the latest features and improvements.</li>
                            <li className="mb-2">Enhanced performance and security.</li>
                            <li className="mb-2">Improved user experience with a modern interface.</li>
                            <li className="mb-2">Better integration with third-party applications.</li>
                        </ul>
                    </div>

                    <div className="bg-white shadow-md rounded-lg p-6">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">Our Migration Process</h2>
                        <ol className="list-decimal list-inside text-gray-600">
                            <li className="mb-2">Assessment of current system and data.</li>
                            <li className="mb-2">Planning and strategy development for migration.</li>
                            <li className="mb-2">Data backup and preparation for transfer.</li>
                            <li className="mb-2">Execution of migration to the new Odoo version.</li>
                            <li className="mb-2">Post-migration testing and validation.</li>
                            <li className="mb-2">Training for users on the new system.</li>
                        </ol>
                    </div>
                </div>
            </section>

            <section className="bg-white p-8 ">
                <h2 className="text-center text-2xl font-bold text-gray-800 mb-2">Benefits of Choosing Us</h2>
                <p className="text-center text-gray-600">
                    Our experienced team at Wrocus Technology is dedicated to providing:
                </p>
                <div className='flex  justify-between'>
                    <div className='w-1/2 mt-2 flex justify-center items-center'>
                        <ul className="list-disc list-inside text-gray-600">
                            <li className="mb-2">Tailored migration solutions to fit your unique business requirements.</li>
                            <li className="mb-2">Continuous support throughout the migration process.</li>
                            <li className="mb-2">Expertise in various Odoo modules and functionalities.</li>
                            <li className="mb-2">Ensuring data integrity and security during the transition.</li>
                            <li className="mb-2">Comprehensive training for your team on the new system.</li>
                            <li className="mb-2">Post-migration optimization for improved performance.</li>
                            <li className="mb-2">Customized reporting and analytics features to enhance decision-making.</li>
                            <li className="mb-2">Ongoing maintenance options to keep your system up-to-date.</li>
                           
                        </ul>

                    </div>
                    <div className='w-1/2'>
                        <img src='https://techspawn.com/wp-content/uploads/2021/09/Odoo-Migration-2.png' />

                    </div>
                </div>
            </section>
        </>
    );
}

export default OdooMigration;
