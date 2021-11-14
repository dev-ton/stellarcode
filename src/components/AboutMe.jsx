import React from "react"
import { useMediaQuery } from 'react-responsive'
import TabComponentMobile from "./TabComponentMobile";
import TabComponentDesktop from "./TabComponentDesktop";
import tabs from "./tabs"


const AboutMe = () => {
  
  const isMobile = useMediaQuery({ query: '(max-width: 599px)' })
  const notMobile = useMediaQuery({ query: '(min-width: 600px)' })

   return (

    
 
  <section id="aboutme" className="container pb-20 sm:pb-40">

    <div className="flex justify-center">
    <h2 className="text-4xl heading sm:text-6xl font-extrabold leading-tight tracking-tight text-space-lighter">About Me</h2>
    </div>


   {isMobile && <TabComponentMobile tabs={tabs}/>}
   {notMobile && <TabComponentDesktop tabs={tabs}/>}
  
   


  </section>

    
    )}
  



export default AboutMe


