import React from "react"
import Socials from "../components/Socials"
import Contact from "./Contact"
import { FaMapMarkerAlt } from "@react-icons/all-files/fa/FaMapMarkerAlt"
import Email from "../components/Email"
import PropTypes from "prop-types"
import cn from "classnames";


const ContactMe = (hasContainer) => {
  
  console.log(hasContainer)

    return (

      
  <section id="contactme" className={cn("pb-20","sm:pb-40",{ container : hasContainer })}>


<div className="flex justify-center">
  <h2 className="text-4xl sm:text-6xl heading font-extrabold leading-tight tracking-tight pb-10 text-center">
              Contact Me
  </h2></div>

  <div className=" bg-space-dark bg-opacity-50 rounded-lg md:px-10 flex md:py-20 pt-10 pb-4 px-4 flex-wrap cyber-bg">

  

    <div className="w-full md:w-5/12 lg:w-1/3 md:h-full text-whiteLighter px-6 text-center sm:text-left pb-10 md:pb-0">
    <h3 className="text-2xl leading-relaxed text-stellar font-bold text-center sm:text-left py-2 md:py-4">Interested in working together?</h3><h4 className="text-xl leading-relaxed text-stellar font-normal text-center sm:text-left py-2 md:py-4"> Or just wanna say Hi? </h4><p> Contact me with the awesome form <span className="hidden md:inline">on the right</span> or any of the contacts below.</p><p> Im looking forward to hear from you!</p>

    <ul className="flex flex-col items-center sm:items-start">
      <li className="hidden py-6"><FaMapMarkerAlt className="float-left mr-2"/><span className="relative form-label-align">Regensburg, Germany</span></li>
      <li className=" py-6"><Email/></li>
    </ul>
    
    <Socials/>
    </div>

    <Contact/>


  </div>
  </section>


)
}

ContactMe.propTypes = {
  hasContainer: PropTypes.bool.isRequired,
}


export default ContactMe
