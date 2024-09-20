import Carausel from '@/components/Carausel';
import ClientTestimonial from '@/components/ClientTestimonial';
import ContactPage from '@/components/ContactPage';
import Footer from '@/components/Footer';
import IntroduceProject from '@/components/IntroduceProject';
import Navbar from '@/components/Navbar';
import OurClient from '@/components/OurClient';
import OurPartner from '@/components/OurPartner';
import OurServices from '@/components/OurServices';
import Services from '@/components/Services';
import TechnologyIndex from '@/components/TechnologyIndex';
import React from 'react'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Carausel/>
        <Services/>
        <OurServices/>
        {/* <OurPartner/> */}
       
        <OurClient/>
        <ContactPage/>
        <IntroduceProject/>
        <TechnologyIndex/>
        <ClientTestimonial/>
        <Footer/> 
      
    </div>
  )
}

export default Home;
