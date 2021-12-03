import React from "react"
import {FaArrowCircleLeft} from "@react-icons/all-files/fa/FaArrowCircleLeft"
import { Link } from "gatsby"


const MenuBack = () => {

  return (

    <nav>
       

        <div className="block">    
                    <Link
                    className="ml-6 sm:ml-8 text-lg sm:text-2xl font-bold px-px border-b-2 pb-2 pt-1 border-transparent text-whiteLighter hover:text-stellar transition duration-150 ease-in-out"
                    to='/'
                    >
                    <div className="inline-block"><FaArrowCircleLeft className="float-left mr-3 relative top-3"/><span className="relative">Go back</span></div>
                    </Link>
        </div>
      
      
    </nav>
  


  )


}

export default MenuBack