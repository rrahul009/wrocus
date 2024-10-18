import Carausel from '@/components/Carausel';
import ClientTestimonial from '@/components/ClientTestimonial';
import CompanyOverview from '@/components/CompanyOverview';
import Comparision from '@/components/Comparision';
import ContactPage from '@/components/ContactPage';
import Footer from '@/components/Footer';
import Industriserve from '@/components/Industriserve';
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
        <OurClient/>
        <Services/>
        <OurServices/>
        <Comparision/>
        <Industriserve/>
        <CompanyOverview/>
        {/* <OurPartner/> */}
       
       
        <ContactPage/>
        <IntroduceProject/>
        {/* <TechnologyIndex/> */}
        <ClientTestimonial/>
        <Footer/> 
      
    </div>
  )
}

export default Home;
