import React, { useState, useEffect } from "react";
import cn from "classnames";
import { motion, AnimateSharedLayout } from "framer-motion";


const TabComponentMobile = ({ tabs, defaultIndex = 0 }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(defaultIndex);

  const onTabClick = (index) => {
    setActiveTabIndex(index);
    const scroller = document.querySelector(".textboxMask");
    scroller.scrollTop = 0;
  };



  const tabVariant = {
    active: {
      scale: 1,
      transition: {
        type: "tween",
        duration: 0.2
      }
    },
    inactive: {
      scale: 1,
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
      "--stellar-light",
      tabs[activeTabIndex].color
    );
  }, [activeTabIndex, tabs]);

  return (

 
  <div>

    
    
  <AnimateSharedLayout>
  <div className="tab-links flex justify-evenly relative z-auto pt-5 bg-space-dark border-b-2 border-solid border-space rounded-t-md m-0" role="tablist" aria-label="About me Tabs">
    {tabs.map((tab, index) => (
      <motion.div
        key={tab.id}
        className={cn("tab", { active: activeTabIndex === index }, "inline")}
        role="tab"
        variants={tabVariant}
        initial={false}
        animate={activeTabIndex === index ? "active" : "inactive"}
        aria-selected={activeTabIndex === index ? "true" : "false"}
        aria-controls={tab.id}
      >
        <a href={`#about${tab.id}`} className="text-base" onClick={() => onTabClick(index)}>
          <span className="whitespace-nowrap">{tab.title}</span>
        </a>
        
      

        {activeTabIndex === index && (     
   <motion.div
   className="arrow"
   layoutId="arrow"
   initial="false"
   transition={spring}
   > 
   <div className="arrowMobile block pt-5 relative">
   <div className=" bg-stellar-light"></div>
   </div>
  </motion.div>
        )}

      </motion.div>
    ))}
    
  </div>
  </AnimateSharedLayout>

 
	<div className="p-1 bg-space-dark cyber-bg w-full shadow-lg rounded-b-md relative z-0">
    <div className="textboxMask scrolling-touch overflow-y-scroll pt-10 mb-10">

    {tabs.map((tab, index) => (
      <motion.div
      initial="false"
      key={tab.id}
      active={+(activeTabIndex === index)}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.7}
      dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
      onDragEnd={(e, { offset, velocity }) => {
        
        const swipe = swipePower(offset.x, velocity.x);
        if (swipe > swipeConfidenceThreshold && tab.id !== "bio") {
          onTabClick(index - 1);
        }
        else if (swipe < -swipeConfidenceThreshold && tab.id !== "design") {
          onTabClick(index + 1);
        }
    }}>
		  <tab.content
      key={tab.id}
      id={tab.id}
      active={+(activeTabIndex === index)}
      aria-labelledby={`tab-${index}`}
      />
      </motion.div>
    ))}

</div>


  </div>
  </div>
  
);
}

export default TabComponentMobile;