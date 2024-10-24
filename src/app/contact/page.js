import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
    return (
        <>
            <Navbar />
            <section>
                <div className='flex  justify-between'>
                    <div className='w-1/2 justify-center  lg:p-12'>
                        <div>
                            <p className='mb-2 text-3xl font-semibold'>Schedule a Meeting with Us</p>
                            <img
                                src='https://cdn.shulex-voc.com/shulex/upload/2024-06-28/1eb69cab-1135-4e1b-9e02-38204c7aeec9.jpg'
                                style={{height:'350px'}}
                            />
                        </div>
                        <div className='mt-9 flex justify-around'>
                            <div className='flex flex-col items-center gap-5'>
                                <img src='https://upload.wikimedia.org/wikipedia/commons/6/6c/Phone_icon.png'
                                    style={{ height: '60px' }}
                                />
                                <p>0120-496-3453</p>
                            </div>
                            <div className='flex flex-col items-center gap-5'>
                                <img src='https://www.pngitem.com/pimgs/m/218-2189877_transparent-email-png-logo-email-logo-hd-png.png'
                                    style={{ height: '60px' }}
                                />
                                <p> info@wrocus.com </p>
                            </div>
                            <div className='flex flex-col items-center gap-5'>
                                <img src='https://i.pinimg.com/474x/c0/16/fb/c016fb16a9d95fdf0da9e5ea2228604a.jpg'
                                    style={{ height: '60px' }}
                                />
                                <p> D-76, Noida Sector 63 </p>
                            </div>
                        </div>
                    </div>
                    <div className='w-1/2 justify-center lg:p-12  '>
                    <p className='text-2xl font-semibold '>Send Your Query</p>
                       <ContactForm/>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default page