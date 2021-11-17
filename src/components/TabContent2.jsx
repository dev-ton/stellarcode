import React from "react";
import { motion } from "framer-motion";



const skillsCode = ["GraphQL", "Bootstrap", "LESS", "SASS", "Tailwind", "Bulma", "Styled Components", "Framer Motion", "Hubspot", "Wordpress", "Webflow", "npm/yarn", "Git", "and more"];


const tabContentVariant = {
    active: {
      display: "block",
      transition: {
        staggerChildren: 0.1
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
        duration: 0.5,
        staggerChildren: 0.5
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

  const bar1 = {
    active: {
      opacity: 1,
      width: '100%',
      transition: {
        duration: 0.9,
        ease: "easeOut",
      }
    },
    inactive: {
      opacity: 0,
      width: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        
      }
    }
  };

  const bar2 = {
    active: {
      opacity: 1,
      width: '80%',
      transition: {
        duration: 0.9,
        ease: "easeOut",
      }
    },
    inactive: {
      opacity: 0,
      width: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        
      }
    }
  };

  const bar3 = {
    active: {
      opacity: 1,
      width: '50%',
      transition: {
        duration: 0.9,
        ease: "easeOut",
      }
    },
    inactive: {
      opacity: 0,
      width: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        
      }
    }
  };

  const bar4 = {
    active: {
      opacity: 1,
      width: '50%',
      transition: {
        duration: 0.9,
        ease: "easeOut",
      }
    },
    inactive: {
      opacity: 0,
      width: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        
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
           
  <article className=" text-whiteLighter px-2">
               <h3 className="text-stellarDarker">Tech stack:</h3>

            <div className="pb-4">
                <div className="mb-1 flex justify-between">
                  <span className="text-base font-medium">HTML/CSS</span>
                  <span className="text-sm font-medium">Expert</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4 mb-3">
                  <motion.div className=" buttonGradient h-4 rounded-full" variants={bar1}></motion.div>
                </div>

                <div className="mb-1 flex justify-between">
                  <span className="text-base font-medium">Javascript ES6</span>
                  <span className="text-sm font-medium">Advanced</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4 mb-3">
                  <motion.div className=" buttonGradient h-4 rounded-full" variants={bar2}></motion.div>
                </div>

                <div className="mb-1 flex justify-between">
                  <span className="text-basefont-medium">ReactJS</span>
                  <span className="text-sm font-medium">Medium</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4 mb-3">
                  <motion.div className=" buttonGradient h-4 rounded-full" variants={bar3}></motion.div>
                </div>

                <div className="mb-1 flex justify-between">
                  <span className="text-base font-medium">JAMstack (GatsbyJS/GraphQL)</span>
                  <span className="text-sm font-medium">Medium</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4 mb-3">
                  <motion.div className=" buttonGradient h-4 rounded-full" variants={bar4}></motion.div>
                </div>
            </div>
</article>

<article>
<h3 className="text-stellarDarker">What can I code for you?</h3>
<p className=" text-whiteLighter py-2">
  Basically everything based on mighty trio HTML/CSS/JS, from highly converting landing pages to lightning fast modern websites including e-shops. Besides that I can use my animation skills and help you out with eye-catching animated banners or code a flawless email newsletters.
</p>
</article>

            </motion.div>

            <motion.div variants={contVariant} className="sm:pl-12 px-2">
              <article>
            <h3 className="text-stellarDarker">Which other tools/frameworks<br/> I use?</h3>
               <div className="flex flex-wrap py-2 sm:py-3 lg:py-4">
                  {skillsCode.map((skill, index) => (
                    <div className=" bg-space-darkest rounded-lg p-2 mb-4 mr-3 text-xs text-whiteDarker uppercase" key={index}>{skill}
                    </div>
                    
                  ))}
               </div>
               </article>
            </motion.div>
            </div>

    







  </motion.div>
);

export default TabContent;