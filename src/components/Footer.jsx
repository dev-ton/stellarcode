import React from "react"



const Footer = () => {
  

  return (

    <footer className="w-full flex flex-col justify-between md:pt-64">



    <div className="container pt-4 pb-12 mb-24 sm:mb-0 sm:py-12 md:flex md:items-center md:justify-between">

     

      <p className="text-center text-sm md:text-base text-whiteDarker">
          Powered by GatsbyJS and Netlify
      </p>

      <div className="mt-0 md:order-1">
        <p className="text-center text-sm md:text-base text-whiteDarker">
          &copy; {new Date().getFullYear()} Antonin Jech. All rights reserved.
        </p>
      </div>




    </div>

    


    </footer>

      

  

             

   
  )
}



export default Footer
