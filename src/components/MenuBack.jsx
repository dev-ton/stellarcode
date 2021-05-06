import React, { useState } from "react"
import {FaArrowCircleLeft} from "react-icons/fa"
import { Link } from "gatsby"






const MenuBack = () => {

 

  


  return (

    <nav>
       

        <div className="block">    
                    <Link
                    className="ml-6 sm:ml-8 text-2xl sm:text-base font-bold px-px border-b-2 pb-2 border-transparent text-whitey hover:text-stellar transition duration-150 ease-in-out"
                    to='/'
                    >
                    <div className="inline-block"><FaArrowCircleLeft className="float-left mr-3"/><span className="relative form-label-align">Go back</span></div>
                    </Link>
        </div>
      
      
    </nav>
  


  )


}

export default MenuBack