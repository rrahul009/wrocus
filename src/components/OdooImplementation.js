import React from 'react';
import Footer from './Footer';

const OdooImplementation = () => {
  return (
    <>
      <section className="p-8 mt-2">
        <h1 className="text-center  text-2xl lg:text-4xl font-bold lg:mb-4" style={{ color: '#0056b3' }}>
          Odoo Implementation Services
        </h1>
        <p className="text-center text-gray-950 mb-4 font-semibold">
          At Wrocus Technology, we specialize in providing comprehensive Odoo implementation services that align with your business needs.
        </p>
      </section>

      <section className="p-8 bg-white shadow-md">
        <div className="flex flex-col md:flex-row justify-between p-6">
          <div className="mx-4 w-full md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <ul className="list-disc list-inside text-gray-950 mb-6">
              <li className="mb-2">Complete Odoo setup and configuration.</li>
              <li className="mb-2">Customization of modules to fit your workflow.</li>
              <li className="mb-2">Data migration from existing systems.</li>
              <li className="mb-2">User training and support for a smooth transition.</li>
            </ul>

            <section>
              <h2 className="text-3xl font-semibold mb-4">Benefits of Choosing Us</h2>
              <p className="text-gray-950 mb-4 font-semibold">
                By choosing Wrocus Technology for your Odoo implementation, you can expect:
              </p>
              <ul className="list-disc list-inside text-gray-950">
                <li className="mb-2">Expert guidance throughout the implementation process.</li>
                <li className="mb-2">Increased efficiency and productivity across your business operations.</li>
                <li className="mb-2">Post-implementation support to ensure ongoing success.</li>
                <li className="mb-2">Flexible solutions tailored to your unique business requirements.</li>
              </ul>
            </section>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src='https://www.ksolves.com/wp-content/uploads/2024/04/odoo-dev-banner.svg'
              alt='Odoo Development'
              className="object-contain w-full h-auto rounded-lg mt-4" // Ensure the image is responsive
            />
          </div>
        </div>
      </section>

      <section className="p-8 bg-white shadow-md">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">Get Started Today!</h2>
          <p className="text-gray-600 mb-4">
            Ready to transform your business with Odoo? Contact us today to learn more about our implementation services!
          </p>
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Contact Us
          </button>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default OdooImplementation;
