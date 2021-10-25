import React, { useState, useEffect } from "react";
import cn from "classnames";
import { motion, AnimateSharedLayout } from "framer-motion";


const TabComponentDesktop = ({ tabs, defaultIndex = 0 }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(defaultIndex);

  const onTabClick = (index) => {
    setActiveTabIndex(index);
  };


  const tabVariant = {
    active: {
      scale: 1.2,
      textShadow: "0px 5px 11px rgba(178, 120, 0, 0.4)",
      transition: {
        type: "tween",
        duration: 0.2
      }
    },
    inactive: {
      scale: 1,
      textShadow: "0px 0px 0px rgba(178, 120, 0, 0)",
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

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--tab-active-color",
      tabs[activeTabIndex].color
    );
  }, [activeTabIndex, tabs]);

  return (

 
  <div>

    
    
  <AnimateSharedLayout>
  <ul className="tab-links flex justify-evenly relative z-auto pt-5 bg-space-light border-b-2 border-solid border-space-DEFAULT rounded-t-md m-0" role="tablist">
    {tabs.map((tab, index) => (
      <motion.li
        key={tab.id}
        className={cn("tab", { active: activeTabIndex === index })}
        role="presentation"
        variants={tabVariant}
        initial={false}
        animate={activeTabIndex === index ? "active" : "inactive"}
      >
        <a href={`#about${tab.id}`} className="sm:text-xl md:text-2xl" onClick={() => onTabClick(index)}>
          <div>{tab.icon}</div>
          <span className="whitespace-nowrap">{tab.title}</span>
        </a>
        
      

        {activeTabIndex === index && (     
   <motion.div
   className="arrow"
   layoutId="arrow"
   initial="false"
   transition={spring}
   > 
  

   <div className="arrowSize">
    <div className='triangle bg-space-light'></div>
   </div>
  </motion.div>
        )}

      </motion.li>
    ))}
    
  </ul>
  </AnimateSharedLayout>

 
	<div className="p-1 bg-space-light w-full shadow-lg rounded-b-md sm:rounded-md pt-12">
    
    
  

    {tabs.map((tab, index) => (

		  <tab.content
      key={tab.id}
      id={`${tab.id}-content`}
      active={activeTabIndex === index}
      />
    
    ))}




  </div>
  </div>
  
);
}

export default TabComponentDesktop;