import React from "react";
import { motion } from "framer-motion";



const skillsDesign = ["Figma", "Adobe XD", "Sketch", "Zeplin", "Adobe Illustrator", "Adobe Animate", "Adobe Photoshop", "Test"];


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
  
  
  
               
            <div className="mx-auto text-center pt-2">
            <motion.div variants={contVariant}>
               <p className="text-whitey py-8 px-12 text-xl">I value simple content structure, clean design patterns, and thoughtful interactions.</p>
               <h4 className="text-xl leading-relaxed text-stellar font-normal text-center py-4">Focus: </h4>
               <p className="text-whitey py-4 px-12">Always doing my best to see things
               from the user perspective. I enjoy designing web & mobile apps.</p>
               <h4 className="text-xl leading-relaxed text-stellar font-normal text-center py-4">Tools: </h4>
            </motion.div>

               <div className="flex flex-wrap justify-center py-4 px-12 pb-12">


                  {skillsDesign.map((skill, index) => (
                    <motion.div variants={contVariant} className=" bg-space-dark rounded-lg p-2 mb-4 mr-3 text-xs text-whitey uppercase" key={index}>{skill}
                    </motion.div>
                    
                  ))}

               </div>
            </div>

    







  </motion.div>
);

export default TabContent;