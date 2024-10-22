import Navbar from '@/components/Navbar'
import OdooAppdev from '@/components/OdooAppdev'
import OdooConsulting from '@/components/OdooConsulting'
import OdooCustomization from '@/components/OdooCustomization'
import OdooDevelopment from '@/components/OdooDevelopment'
import OdooIntegration from '@/components/OdooIntegration'
import OdooMigration from '@/components/OdooMigration'
import OdooModuleDevelopment from '@/components/OdooModuleDevelopment'
import OdooWebsiteDev from '@/components/OdooWebsiteDev'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
      
     
      {/* <section>
        <div
          className='flex justify-center p-4 py-12 relative'
          style={{
            backgroundImage: 'url(/bg-pheader.jpg)', // Ensure the image path is correct
            backgroundSize: 'cover', // Optional: Adjust background size
            backgroundPosition: 'center', // Optional: Adjust background position
            height: '130px'
          }}
        >
          <ul className="absolute flex bottom-3  left-0 w-full text-white p-4">
            <li><Link href="/about" className="block px-4 py-2  ">Odoo Consulting</Link></li>
            <li><Link href="/about" className="block px-4 py-2  ">Odoo Website Development</Link></li>
            <li><Link href="/service3" className="block px-4 py-2  ">Odoo App Development</Link></li>
            <li><Link href="/service4" className="block px-4 py-2  ">Odoo Theme Development</Link></li>
            <li><Link href="/service5" className="block px-4 py-2  ">Odoo Customization</Link></li>
            <li><Link href="/service6" className="block px-4 py-2 ">Odoo Migration</Link></li>
            <li><Link href="/service7" className="block px-4 py-2 ">Odoo Integration</Link></li>
            <li><Link href="/service8" className="block px-4 py-2 ">Odoo Implementation</Link></li>
            <li><Link href="/service9" className="block px-4 py-2 ">Odoo Support</Link></li>
          </ul>
        </div>
      </section> */}

      <section>
        <OdooDevelopment/>
      </section>
      <section>

      <section className="mb-2 py-6 flex flex-col md:flex-row items-center bg-gray-50" data-aos="zoom-in-up">
          <div className="md:w-1/2 p-4">
            <img 
              src="https://media.licdn.com/dms/image/D5612AQFvVi1RQi2s4A/article-cover_image-shrink_720_1280/0/1683108858545?e=2147483647&v=beta&t=vuDPF_SxmJR5QSAwLD1GpECwLw3FYiDw1z_eK1CrRBc" 
              alt="Development Process"
              className="rounded-lg shadow-lg" 
            />
          </div>
          <div className="md:w-1/2 p-4">
            <h2 className="text-5xl font-bold text-gray-950 mb-8 text-center md:text-left">Our Development Process</h2>
            <p className="mb-4 text-lg text-gray-950">
              Our development process is designed to deliver high-quality, custom solutions that align perfectly with your business objectives.
            </p>
            <ol className="list-decimal list-inside space-y-2">
              {[
                "Consultation: We begin by understanding your business needs and objectives.",
                "Planning: We create a roadmap detailing features, timelines, and milestones.",
                "Development: Our team builds the application, ensuring adherence to best practices and industry standards.",
                "Testing: Rigorous testing is conducted to identify and fix any issues before launch.",
                "Deployment: We assist with the smooth deployment of your custom app.",
                "Training & Support: We provide training for your team and ongoing support to maximize your app's effectiveness."
              ].map((step, index) => (
                <li key={index}><strong>{step.split(':')[0]}</strong> {step.split(':')[1]}</li>
              ))}
            </ol>
          </div>
        </section>

        {/* <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-extrabold mb-10 text-center text-gray-800">Our Approach to Odoo Development</h2>
            <p className="text-lg mb-8 text-center text-gray-600">
              Our approach to Odoo development is centered around understanding your specific business needs and delivering tailored solutions. Here’s how we do it:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-blue-50 p-6 rounded-lg shadow-lg flex flex-col items-center" data-aos="zoom-in-up">
                <img src="https://elegantwebdesigns.org/wp-content/uploads/2022/07/apps_odoo.jpg" alt="Discovery & Analysis" className="w-40 h-40 mb-4"/>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Discovery & Analysis</h3>
                <p className="text-gray-600 text-center">
                  We begin with a comprehensive analysis of your business processes and requirements to identify the best Odoo solutions.
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg shadow-lg flex flex-col items-center" data-aos="zoom-in-up">
                <img src="https://www.keyconcepts.co.in/Areas/Client/asset/images/Product/odoo/APPS.jpg" alt="Design & Planning" className="w-40 h-40 mb-4"/>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Design & Planning</h3>
                <p className="text-gray-600 text-center">
                  Our team creates a detailed project plan and design that aligns with your business objectives and ensures a successful implementation.
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg shadow-lg flex flex-col items-center" data-aos="zoom-in-up">
                <img src="https://www.odoo.com/documentation/17.0/_images/web-design.png" alt="Development & Customization" className="w-40 h-40 mb-4"/>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Development & Customization</h3>
                <p className="text-gray-600 text-center">
                  We develop and customize Odoo modules to meet your specific needs, ensuring that the system functions seamlessly with your existing workflows.
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg shadow-lg flex flex-col items-center" data-aos="zoom-in-up">
                <img src="https://img.freepik.com/premium-photo/project-task-management-effective-time-planning-tools-project-development-icon-3d-illustration-work-organizer-daily-plan_1240525-10405.jpg" alt="Testing & Quality Assurance" className="w-40 h-40 mb-4"/>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Testing & Quality Assurance</h3>
                <p className="text-gray-600 text-center">
                  Rigorous testing and quality assurance are conducted to ensure that the Odoo system performs as expected and meets all your requirements.
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg shadow-lg flex flex-col items-center" data-aos="zoom-in-up">
                <img src="https://img.lovepik.com/photo/45009/0594.jpg_wh860.jpg" alt="Deployment & Training" className="w-40 h-40 mb-4"/>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Deployment & Training</h3>
                <p className="text-gray-600 text-center">
                  We handle the deployment of Odoo and provide training to your team to ensure a smooth transition and effective use of the system.
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg shadow-lg flex flex-col items-center" data-aos="zoom-in-up">
                <img src="https://softhealer.com/theme_softhealer_website/static/src/img/images/odoo_support/about.webp" alt="Ongoing Support" className="w-40 h-40 mb-4"/>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Ongoing Support</h3>
                <p className="text-gray-600 text-center">
                  Our support doesn’t end at deployment. We offer ongoing support and maintenance to keep your system running efficiently and address any issues that arise.
                </p>
              </div>
            </div>
          </div>
        </section>  */}

      </section>
      <section>

      <OdooConsulting/>

      </section>

      <section>
      <OdooWebsiteDev/>
      </section>

      <section>
        <OdooCustomization/>
      </section>
      <section>
        <OdooAppdev/>
      </section>
      <section>
        <OdooModuleDevelopment/>
      </section>
      <section>
        <OdooMigration/>
      </section>
      <section>
        <OdooIntegration/>
      </section>

     
    </>
  )
}



export default page;
