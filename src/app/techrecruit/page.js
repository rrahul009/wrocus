import Navbar from "@/components/Navbar"
import React from "react"

const page = () => {
    return (
        <>
        <Navbar/>
         <section className="mt-12">
           <div className="flex justify-around ">
            
           <div className="col-lg-6 mt-12">
          <p className="text-6xl font-normal"> Recruitment and </p>
          <p  className="text-6xl font-normal mt-3">executive search </p>
            
          <p className="text-6xl font-normal mt-3">solutions for tomorrow's  </p> 
            <p className="text-6xl mt-3">tech leaders</p>
            </div>
            <div className="col-lg-6 mt-12">
             
            <img src="https://cowenpartners.com/wp-content/uploads/2024/10/AdobeStock_450926812-1024x683.jpeg"
            className="rounded-lg"
            style={{objectFit:'cover',width:"550px",height:'400px'}}
            />
            </div>
            </div>
         </section>
        </>
    )
}
export default page