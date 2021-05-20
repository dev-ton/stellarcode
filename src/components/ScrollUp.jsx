import React, {useState} from "react"
import {FaArrowCircleUp} from 'react-icons/fa'

const ScrollUp = () => {

const [showScroll, setShowScroll] = useState(false)

const checkScrollTop = () => {   
 
   if (!showScroll && typeof window !== 'undefined'  && window.pageYOffset > 800){
      setShowScroll(true)    
   } else if (showScroll && typeof window !== 'undefined' && window.pageYOffset <= 800){
      setShowScroll(false)    
   }  

};

const scrollTop = () =>{
    typeof window !== 'undefined' && window.scrollTo({top: 0, behavior: 'smooth'});
 };

 typeof window !== 'undefined' && window.addEventListener('scroll', checkScrollTop)


return (
    <FaArrowCircleUp 
   className="scrollTop invisible md:visible" 
   onClick={scrollTop} 
   style={{height: 40, display: showScroll ? 'block' : 'none'}}
    />
)

}

export default ScrollUp