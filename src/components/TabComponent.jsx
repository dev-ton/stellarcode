import React, { useState, useEffect } from "react";
import cn from "classnames";
import { motion } from "framer-motion";

const TabComponent = ({ tabs, defaultIndex = 0 }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(defaultIndex);

  const onTabClick = (index) => {
    setActiveTabIndex(index);
  };

  const tabVariant = {
    active: {
      width: "55%",
      transition: {
        type: "tween",
        duration: 0.4
      }
    },
    inactive: {
      width: "15%",
      transition: {
        type: "tween",
        duration: 0.4
      }
    }
  };

  const tabTextVariant = {
    active: {
      opacity: 1,
      x: 0,
      display: "block",
      transition: {
        type: "tween",
        duration: 0.3,
        delay: 0.3
      }
    },
    inactive: {
      opacity: 0,
      x: -30,
      transition: {
        type: "tween",
        duration: 0.3,
        delay: 0.1
      },
      transitionEnd: { display: "none" }
    }
  };

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--tab-active-color",
      tabs[activeTabIndex].color
    );
  }, [activeTabIndex, tabs]);

  return (

	<div className="p-1 bg-space-light w-full shadow-lg rounded-md ">
    <ul className="tab-links" role="tablist">
      {tabs.map((tab, index) => (
        <motion.li
          key={tab.id}
          className={cn("tab", { active: activeTabIndex === index })}
          role="presentation"
          variants={tabVariant}
          animate={activeTabIndex === index ? "active" : "inactive"}
        >
          <a href={`#about${tab.id}`} onClick={() => onTabClick(index)}>
            {tab.icon}
            <motion.span variants={tabTextVariant} className="inline-block whitespace-nowrap">{tab.title}</motion.span>
          </a>
        </motion.li>
      ))}
    </ul>
    {tabs.map((tab, index) => (
		  <tab.content
      key={tab.id}
      id={`${tab.id}-content`}
      active={activeTabIndex === index}
    />
    ))}
  </div>
  
);
}

export default TabComponent;