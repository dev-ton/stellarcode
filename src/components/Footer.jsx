import React from "react"
import Socials from "../components/Socials"
import Contact from "./Contact"

const Footer = () => {
  

  return (

    <div className="footer w-full flex flex-col-reverse justify-between pt-64">

      
      








    <div className="container py-12 md:flex md:items-center md:justify-between">
      <Socials/>
      <div className="mt-8 md:mt-0 md:order-1">
        <p className="text-center text-sm md:text-base text-gray-700">
          &copy; 2020 John Doe. All rights reserved.
        </p>
      </div>
    </div>


    <div className="container flex flex-col">
   
    <h2 className=" pb-12 text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight text-whitey">
                Contact Me
    </h2>

    <div className=" bg-space-light bg-opacity-50 rounded-lg p-10 flex pb-20">

      <div className="w-full md:w-1/2 md:h-full flex justify-center align-middle content-center text-whitey text-center flex-col">
      <p className="block">Space for contact information<br/> - <br/><i>to be created on contentful</i></p>
      </div>

     <Contact className="w-full md:w-1/2"/>
    </div>

    </div>
             

    </div>
  )
}



export default Footer
