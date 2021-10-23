import React, { useState, useEffect } from "react";
import cn from "classnames";
import { motion, AnimateSharedLayout } from "framer-motion";
import useWindowSize from "../utils/useWindowSize";

const TabComponent = ({ tabs, defaultIndex = 0 }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(defaultIndex);

  const onTabClick = (index) => {
    setActiveTabIndex(index);
    const scroller = document.querySelector(".textboxMask");
    scroller.scrollTop = 0;
  };

  const { width } = useWindowSize();

  const tabVariant = {
    activeSmall: {
      scale: 1.2,
      textShadow: "0px 5px 11px rgba(178, 120, 0, 0.4)",
      transition: {
        type: "tween",
        duration: 0.2
      }
    },
    active: {
      scale: 1,
      textShadow: "none",
      transition: {
        type: "tween",
        duration: 0.2
      }
    },
    inactive: {
      scale: 1,
      textShadow: "none",
      transition: {
        type: "tween",
        duration: 0.2
      }
    }
  };

  
 
  const spring = {
    type: "spring",
    stiffness: 500,
    damping: 30
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  
  
  

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--tab-active-color",
      tabs[activeTabIndex].color
    );
  }, [activeTabIndex, tabs]);

  return (

 
  <div>

    
    
  <AnimateSharedLayout>
  <ul className="tab-links flex justify-evenly relative z-auto pt-5 bg-space-light border-b-2 border-solid border-space-dark rounded-t-md m-0" role="tablist">
    {tabs.map((tab, index) => (
      <motion.li
        key={tab.id}
        className={cn("tab", { active: activeTabIndex === index })}
        role="presentation"
        variants={tabVariant}
        initial={false}
        animate={width > 600 ? (activeTabIndex === index ? "activeSmall" : "inactive") : (activeTabIndex === index ? "active" : "inactive")}
      >
        <a href={`#about${tab.id}`} className="text-base sm:text-xl md:text-2xl" onClick={() => onTabClick(index)}>
          <div className="hidden sm:block">{tab.icon}</div>
          <span className="whitespace-nowrap">{tab.title}</span>
        </a>
        
      

        {activeTabIndex === index && (     
   <motion.div
   className="arrow"
   layoutId="arrow"
   initial="false"
   transition={spring}
   > 
   <div className="arrowMobile block sm:hidden pt-5 relative">
   <div className="h-2 bg-stellar-light"></div>
   </div>

   <div className="arrowSize hidden sm:block">
    <div className='triangle bg-space-light'></div>
   </div>
  </motion.div>
        )}

      </motion.li>
    ))}
    
  </ul>
  </AnimateSharedLayout>

 
	<div className="p-1 bg-space-light w-full shadow-lg rounded-b-md sm:rounded-md pt-12">
    
    
    <div className="textboxMask scrolling-touch overflow-y-scroll sm:overflow-hidden">

    {tabs.map((tab, index) => (
      <motion.div
      initial="false"
      key={tab.id}
      active={activeTabIndex === index}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.7}
      dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
      onDragEnd={(e, { offset, velocity }) => {
        
        const swipe = swipePower(offset.x, velocity.x);
        if (swipe > -swipeConfidenceThreshold && tab.id !== "design") {
          onTabClick(index - 1);
        }
        else if (swipe < swipeConfidenceThreshold && tab.id !== "bio") {
          onTabClick(index + 1);
        }
    }}>
		  <tab.content
      key={tab.id}
      id={`${tab.id}-content`}
      active={activeTabIndex === index}
      />
      </motion.div>
    ))}

</div>


  </div>
  </div>
  
);
}

export default TabComponent;