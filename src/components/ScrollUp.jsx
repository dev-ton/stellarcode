import React, {useState, useEffect } from "react"
import { useIsMounted } from "../utils/useIsMounted"
import {FaArrowCircleUp} from '@react-icons/all-files/fa/FaArrowCircleUp'

const ScrollUp = () => {

const [showScroll, setShowScroll] = useState(false)
const isMounted = useIsMounted();

useEffect(() => {
  
   window.addEventListener("scroll", () => {
     if (window.pageYOffset > 800 && isMounted.current) {
       setShowScroll(true);
     } else {
       setShowScroll(false);
     }
   });
 });



 const scrollToTop = () => {
   window.scrollTo({
     top: 0,
     behavior: 'smooth' 
   });
 };


return (

   <>
   {showScroll && (
    <FaArrowCircleUp 
   className="scrollTop invisible md:visible rounded-full" 
   onClick={scrollToTop} 
   style={{fill: '#B27800'}}
    />
   )}
   </>
)

}

export default ScrollUp