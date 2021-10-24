import React from "react";
import { motion } from "framer-motion";



const skillsCode = ["ReactJS", "GatsbyJS", "GraphQL", "Bootstrap", "LESS", "SASS", "Tailwind", "Bulma", "Styled Components", "Hubspot", "Wordpress", "Webflow", "npm", "Github", "VS Code"];


const tabContentVariant = {
    active: {
      display: "block",
      transition: {
        staggerChildren: 0.2
      }
    },
    inactive: {
      display: "none"
    }
  };

  const contVariant = {
    active: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    },
    inactive: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 0.5
      }
    }
  };


const TabContent = ({ id, active }) => (
  
  <motion.div
    role="tabpanel"
    id={id}
    className="tab-content aboutLeft"
    variants={tabContentVariant}
    animate={active ? "active" : "inactive"}
    initial="inactive"
  >
  
  
        
                
  <div className="mx-auto text-left flex flex-col sm:flex-row pb-10 px-2 sm:px-8">
            <motion.div variants={contVariant}>
           
              
               <h3 className="text-stellarDarker">What is my experience?</h3>
               <p className=" text-whiteyDarker py-2">
               I coded my first website more than 15 years ago. Mostly I build projects based on HTML/CSS/JS. At the beginning of 2021 I started to learn ReactJS. And not long after that I discovered static site generators and started learning GatsbyJS and using JAMstack architecure.
</p>
<h3 className="text-stellarDarker">What technologies do I use?</h3>
<p className=" text-whiteyDarker py-2">
My main focus was always on HTML/CSS/JS and building modern looking websites and CMS templates. Recently I started working with ReactJS, especially together with GatsbyJS. With this technology I’m now able to build lightning-fast websites. Websites that are fast perform better in search engines, usability scores, and in converting visitors to customers.
</p>


            </motion.div>

            <motion.div variants={contVariant} className="sm:pl-12">
            <h3 className="text-stellarDarker pb-2">With what tools/frameworks I work?</h3>
               <div className="flex flex-wrap py-2">
                  {skillsCode.map((skill, index) => (
                    <div className=" bg-space-dark rounded-lg p-2 mb-4 mr-3 text-xs text-whiteyDarker uppercase" key={index}>{skill}
                    </div>
                    
                  ))}
               </div>
            </motion.div>
            </div>

    







  </motion.div>
);

export default TabContent;