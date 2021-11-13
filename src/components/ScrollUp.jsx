import React, {useState, useEffect } from "react"
import {FaArrowCircleUp} from '@react-icons/all-files/fa/FaArrowCircleUp'

const ScrollUp = () => {

const [showScroll, setShowScroll] = useState(false)

useEffect(() => {
   window.addEventListener("scroll", () => {
     if (window.pageYOffset > 800) {
       setShowScroll(true);
     } else {
       setShowScroll(false);
     }
   });
 }, []);



 const scrollToTop = () => {
   window.scrollTo({
     top: 0,
     behavior: 'smooth' // for smoothly scrolling
   });
 };


return (

   <>
   {showScroll && (
    <FaArrowCircleUp 
   className="scrollTop invisible md:visible" 
   onClick={scrollToTop} 
   style={{height: 40, fill: '#131313'}}
    />
   )}
   </>
)

}

export default ScrollUp