import React from "react"
import Socials from "../components/Socials"
import Contact from "./Contact"
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"


const ContactMe = () => {
  

    return (


  <section id="contactme" className="container flex flex-col">
  <h2 className=" pb-8 text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight text-stellar">
              Contact Me
  </h2>

  <div className=" bg-space-light bg-opacity-50 rounded-lg px-10 flex py-20 bgBlur">

    <div className="w-full md:w-1/3 md:h-full text-whitey">
    
    <ul className="flex flex-col items-center">
      <li className=" p-6"><FaMapMarkerAlt className="float-left mr-2"/><span className="relative form-label-align">Regensburg, Germany</span></li>
      <li className=" p-6"><FaEnvelope className="float-left mr-2"/><span className="relative form-label-align">tony@stellarcode.io</span></li>
    </ul>
    
    <Socials/>
    </div>

   <Contact/>


  </div>
  </section>


)
}



export default ContactMe