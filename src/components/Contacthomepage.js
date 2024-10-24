'use client';
import React, { useState } from 'react';
import ContactForm from './ContactForm';
import Link from 'next/link';
 

const ContactHomepage = () => {
    const [openContact, setOpenContact] = useState(false);

    const handleOverlayClick = (e) => {
        if (e.target.id === 'modal-overlay') {
            setOpenContact(false);
        }
    };

    return (
        <>
            <section>
                <div
                    className='relative'
                    style={{
                        backgroundImage: 'url(contactImage.jpg)',
                        height: '500px',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        width: '100%',
                        objectFit: 'cover'
                    }}
                >
                    <div className='absolute top-40 left-20'>
                        <p className='text-xl'> // We Carry more Than Just Good Coding Skills</p>
                        <p className='text-6xl mt-5 font-semibold mb-4'>Let's Collaborate</p>
                        <p className='text-6xl font-semibold'> for some good work</p>
                    </div>
                  <Link href="contact">
                  <div className='absolute top-60 right-10'>
                        <button className='p-4 bg-black text-white rounded-md' 
                            // onClick={() => setOpenContact(true)}
                            style={{ width: '200px' }}>
                            Contact us
                        </button>
                    </div>
                    </Link>
                  

                    {openContact && (
                        <div 
                            id="modal-overlay"
                            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
                            onClick={handleOverlayClick}
                        >
                            <div className="bg-white p-8 rounded-md shadow-lg relative">
                                <button 
                                    className="absolute top-4 right-4 text-xl"
                                    onClick={() => setOpenContact(false)}
                                >
                                    &times;
                                </button>
                                <ContactForm onClose={() => setOpenContact(false)} />
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}

export default ContactHomepage;
