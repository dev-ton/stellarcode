import React, { useState, useEffect } from "react";
import cn from "classnames";
import { motion, AnimateSharedLayout } from "framer-motion";

const TabComponent = ({ tabs, defaultIndex = 0 }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(defaultIndex);

  const onTabClick = (index) => {
    setActiveTabIndex(index);
  };



  const tabVariant = {
    active: {
      scale: 1.2,
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

  
  

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--tab-active-color",
      tabs[activeTabIndex].color
    );
  }, [activeTabIndex, tabs]);

  return (

  <div>
    
  <AnimateSharedLayout>
  <ul className="tab-links" role="tablist">
    {tabs.map((tab, index) => (
      <motion.li
        key={tab.id}
        className={cn("tab", { active: activeTabIndex === index })}
        role="presentation"
        variants={tabVariant}
        initial={false}
        animate={activeTabIndex === index ? "active" : "inactive"}
      >
        <a href={`#about${tab.id}`} className="text-base sm:text-xl md:text-2xl" onClick={() => onTabClick(index)}>
          {tab.icon}
          <span className="inline-block whitespace-nowrap">{tab.title}</span>
        </a>
        
        {activeTabIndex === index && (     
   <motion.div
   className="arrow"
   layoutId="arrow"
   initial="false"
   transition={spring}
   > 
    <div className='triangle bg-space-light'></div>
  </motion.div>
        )}

      </motion.li>
    ))}
    
  </ul>
  </AnimateSharedLayout>



	<div className="p-1 bg-space-light w-full shadow-lg rounded-md pt-12">
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

export default TabComponent;