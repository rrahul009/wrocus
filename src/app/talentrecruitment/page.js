import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React from 'react';

const Page = () => {
    return (
        <div>
            <Navbar />
            {/* main page */}
            <div className='py-6 text-center'>
                <h1 className='text-4xl font-bold'>Exceptional Talent Recruitment Services</h1>
                <p className='mt-2 mb-8'>"Connecting you with the best talent for your business needs"</p>

                <div className='flex justify-between items-center gap-4 mx-5 mt-2'>

                    <div className='flex flex-col items-start w-full max-w-md ml-10'>
                        <p className='text-blue-600 text-3xl font-bold'>  Wrocus Technology</p>
                        <p className='text-justify text-3xl' style={{ fontSize: '18px', fontFamily: 'Roboto' }}>
                            Choosing Wrocus Technology means partnering with a trusted ally committed to your success.
                            We prioritize quality and efficiency, allowing you to focus on what you do best—growing your business.
                            Let us help you find the talent that will elevate your team and propel your organization forward.
                        </p>

                        <div className='mt-8'>
                            <button className='text-white bg-blue-600 p-3' style={{ width: '150px' }}>
                                Learn More
                            </button>
                        </div>
                    </div>

                    <div className='flex '>
                        <img
                            src='https://media.licdn.com/dms/image/D5612AQH5mTMa4AjznQ/article-cover_image-shrink_600_2000/0/1690446669155?e=2147483647&v=beta&t=4U1ItFfFblYZJQSlUBv6AZCv22hr12fVeLFzkq9osWQ'
                            alt='Recruitment Visual'
                            className='object-fill h-auto max-w-xl'
                        />
                    </div>
                </div>
            </div>


            {/* service we offering */}
            {/* 1st */}
            <div className='bg-gray-100 py-1 mt-5'>
            {/* <div></div> */}
                <p className='text-center mt-5 text-4xl font-bold mb-5 text-black-600'>Service Offerings</p>

                <div className='flex flex-col md:flex-row justify-center items-center md:space-x-8'>
                    <div className=' p-6 rounded-lg shadow-md transform transition-transform hover:scale-105'>
                        <h3 className='text-3xl font-bold mb-2 text-blue-700 ml-4 '>Talent Sourcing :</h3>
                        <p className='text-gray-700 w-100 p-5'>
                            We employ a comprehensive strategy to identify and attract top talent tailored to your specific needs. Our methods include leveraging online job boards, social media platforms, and tapping into our extensive network of industry contacts. By focusing on both active and passive candidates, we ensure that you have access to a diverse pool of skilled individuals who align with your company culture and values.
                        </p>
                    </div>


                    <img
                        src='https://cdn.prod.website-files.com/63f7ba307a7a6c038d9a63df/63f7ba307a7a6cef329a6454_63e87bf11ce5ddb7a23f4ab3_WhatsApp%20Image%202022-12-15%20at%2019.48.00.jpeg'
                        alt='Talent image'
                        className='shadow-lg rounded-lg mt-4 md:mt-0'
                        style={{ height: '300px', width: 'auto' }}
                    />
                </div>
            </div>
            {/* 2nd */}
            <div className='py-5 '>


                <div className='flex flex-col md:flex-row justify-center items-center md:space-x-8'>
                    <img
                        src='https://www.ismartrecruit.com/upload/blog/main_image/Untitled_design_(15).webp'
                        alt='Talent image'
                        className='shadow-lg rounded-lg mt-4 md:mt-0 ml-1'
                        style={{ height: '300px', width: 'auto' }}
                    />
                    <div className=' p-6 rounded-lg shadow-md transform transition-transform hover:scale-105'>

                        <h3 className='text-3xl font-bold mb-2 text-blue-700 ml-4 '>
                            Screening & Selection:</h3>

                        <p className='text-gray-700 w-100 p-5'>
                            In our Screening & Selection process, we implement a multi-step vetting approach to ensure we present only the most qualified candidates. Initially, we conduct thorough resume screenings to identify key skills and relevant experience. This is followed by in-depth phone interviews, where we assess candidates’ soft skills, cultural fit, and motivations.


                        </p>
                    </div>



                </div>
            </div>
            {/* 3rd */}
            <div className='py-5 '>


                <div className='flex flex-col md:flex-row justify-center items-center md:space-x-8'>
                    <div className=' p-6 rounded-lg shadow-md transform transition-transform hover:scale-105'>
                        <h3 className='text-3xl font-bold mb-2 text-blue-700 ml-4 '>
                            Interview Coordination: </h3>
                        <p className='text-gray-700 w-100 p-5'>
                            Our Interview Coordination service streamlines the entire interview process, making it as efficient and stress-free as possible for both your team and candidates. We handle all scheduling logistics, ensuring that interviews are arranged at convenient times for everyone involved. Additionally, we prepare candidates by providing them with insights into your company culture and interview expectations, helping them perform at their best.
                        </p>
                    </div>


                    <img
                        src='https://www.ziprecruiter.com/svc/fotomat/public-ziprecruiter/uploads/career_advice/interview_questions/coordinator.webp=ws1280x960'
                        alt='Talent image'
                        className='shadow-lg rounded-lg mt-4 md:mt-0'
                        style={{ height: '300px', width: 'auto' }}
                    />
                </div>
            </div>

            {/* 4th */}
            <div className='py-5  '>


                <div className='flex flex-col md:flex-row justify-center items-center md:space-x-8'>
                    <img
                        src='https://www.datocms-assets.com/23428/1721385970-employee-onboarding.jpg?auto=compress'
                        alt='Talent image'
                        className='shadow-lg rounded-lg mt-4 md:mt-0 ml-1'
                        style={{ height: '300px', width: 'auto' }}
                    />
                    <div className=' p-6 rounded-lg shadow-md transform transition-transform hover:scale-105'>

                        <h3 className='text-3xl font-bold mb-2 text-blue-700 ml-4 '>
                            Onboarding Support:</h3>

                        <p className='text-gray-700 w-100 p-5'>
                            In our Screening & Selection process, we implement a multi-step vetting approach to ensure we present only the most qualified candidates. Initially, we conduct thorough resume screenings to identify key skills and relevant experience. This is followed by in-depth phone interviews, where we assess candidates’ soft skills, cultural fit, and motivations.


                        </p>
                    </div>



                </div>
            </div>


            {/* The Recruitment Process */}
            <div className='   mt-8 p-2'>
                <h2 className='text-center text-4xl font-bold mb-5 text-black-600 mt-4'>The Recruitment Process</h2>

                <div className='flex flex-col items-center'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                        <div className='flex flex-col'>
                            {[
                                { title: "Consultation", description: "Understanding your hiring needs and organizational culture." },
                                { title: "Sourcing", description: "Identifying potential candidates through various channels." },
                                { title: "Screening", description: "Vetting candidates through resume reviews and assessments." },
                            ].map((step, index) => (
                                <div key={index} className='flex flex-col items-center mb-6 transition-transform transform hover:scale-105 p-4 bg-white rounded-lg shadow-md hover:shadow-lg'>
                                    <div className='bg-blue-500 text-white p-4 rounded-full shadow-lg'>
                                        <p className='text-lg font-semibold'>{index + 1}. {step.title}</p>
                                    </div>
                                    <p className='mt-2 text-gray-700 text-center'>{step.description}</p>
                                </div>
                            ))}
                        </div>

                        <div className='flex flex-col'>
                            {[

                                { title: "Interviews", description: "Coordinating interviews to evaluate candidate fit and skills." },
                                { title: "Client Interviews", description: "Coordinating interviews to evaluate candidate fit and skills." },
                                { title: "Placement", description: "Finalizing the hiring process and ensuring smooth onboarding." }
                            ].map((step, index) => (
                                <div key={index} className='flex flex-col items-center mb-6 transition-transform transform hover:scale-105 p-4 bg-white rounded-lg shadow-md hover:shadow-lg'>
                                    <div className='bg-blue-500 text-white p-4 rounded-full shadow-lg'>
                                        <p className='text-lg font-semibold'>{index + 3}. {step.title}</p>
                                    </div>
                                    <p className='mt-2 text-gray-700 text-center'>{step.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>



                </div>

            </div>
            <div className='mt-8 flex justify-between p-8'>
                <img
                    src='https://media.licdn.com/dms/image/D5612AQFVzG_XZTJyug/article-cover_image-shrink_600_2000/0/1703655196031?e=2147483647&v=beta&t=gJVvSs5mVJpy6-4FmLxEO_Y5Skj1oCOPO2zpvl-yxAM'
                    alt='Recruitment Process Flowchart'
                    className='shadow-xl object-cover rounded-lg w-full max-w-4xl'
                    style={{ height: '360px', width: '600px' }}
                />
                <div className='mt-6 text-center'>
                    <p className='text-lg text-gray-800 italic'>Join us on this journey to find the perfect fit for your team!</p>

                    <button className='text-white text-lg bg-blue-600 p-5 mt-10' style={{ width: '200px' }}>CONTACT US</button>


                </div>
            </div>



            {/* Why Choose us */}

            <div className='py-6 bg-gray-100 mt-5'>
                <h2 className='text-center text-4xl font-bold mb-6 text-blue-600'>Why Choose Us?</h2>

                <div className='flex flex-col items-center'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {[
                            {
                                title: "Tailored Approaches",
                                description: "We customize our recruitment strategies to meet your specific needs, ensuring the perfect match for your organization.",
                                icon: "🌟"
                            },
                            {
                                title: "Industry Expertise",
                                description: "Our team has extensive experience across various industries, allowing us to understand your unique challenges and requirements.",
                                icon: "🛠️"
                            },
                            {
                                title: "Dedicated Support",
                                description: "We provide continuous support throughout the recruitment process, ensuring seamless communication and a positive experience.",
                                icon: "🤝"
                            },
                            {
                                title: "Data-Driven Insights",
                                description: "Utilizing advanced analytics, we refine our processes to attract the best talent, enhancing your hiring efficiency.",
                                icon: "📊"
                            },
                            {
                                title: "Vast Network",
                                description: "Our extensive network of candidates means we can quickly connect you with top talent, reducing your time to hire.",
                                icon: "🌐"
                            },
                            {
                                title: "Commitment to Diversity",
                                description: "We prioritize diversity and inclusion, ensuring a rich pool of candidates that brings different perspectives to your team.",
                                icon: "🌈"
                            }
                        ].map((usp, index) => (
                            <div key={index} className='flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow'>
                                <div className='text-3xl'>{usp.icon}</div>
                                <h3 className='text-xl font-semibold mt-3'>{usp.title}</h3>
                                <p className='mt-2 text-gray-700 text-center'>{usp.description}</p>
                            </div>
                        ))}
                    </div>


                </div>
            </div>

            <div className='py-6 bg-gray-100 mt-8 p-4'>
    <h2 className='text-center text-4xl font-bold mb-6 text-black-600'>Success Stories</h2>

    <div className='max-w-4xl mx-auto text-gray-800'>
        <h3 className='text-2xl font-semibold mb-4'>Client Testimonials</h3>
        <div className='bg-white p-4 rounded-lg shadow-md mb-4'>
            <blockquote className='italic text-lg'>
                "The team at Network_18 understood our unique needs and delivered exceptional candidates that fit our culture perfectly."
            </blockquote>
            <p className='text-right font-semibold'>— Jane Doe, HR Manager, ABC Corp</p>
        </div>
        <div className='bg-white p-4 rounded-lg shadow-md mb-4'>
            <blockquote className='italic text-lg'>
                "Thanks to Wrocus Technology, we filled our critical roles quickly and efficiently, which allowed us to maintain productivity."
            </blockquote>
            <p className='text-right font-semibold'>— John Smith, CEO, XYZ Ltd.</p>
        </div>
        <div className='bg-white p-4 rounded-lg shadow-md mb-4'>
            <blockquote className='italic text-lg'>
                "Their personalized service made a significant difference in our hiring process. We felt supported every step of the way."
            </blockquote>
            <p className='text-right font-semibold'>— Sarah Johnson, Talent Acquisition Lead, 123 Inc.</p>
        </div>
 
       
    </div>
</div>


         {/* contact to us */}
           <div className='bg-gray-00 mt-5'>
           <div className='mt-8 text-center'>
                <div className='bg-white p-4'>
                    <p className='text-lg text-gray-800'>
                        Choose us for a recruitment experience that prioritizes your needs and delivers results. Let’s build your dream team together!
                    </p>
                    <button className='text-white bg-blue-600 p-3 mt rounded-lg mt-8'>schedule a Meeting</button>
                </div>


            </div>
           </div>



            <Footer />
        </div>
    );
};

export default Page;
