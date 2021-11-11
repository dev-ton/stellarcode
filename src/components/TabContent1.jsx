import React from "react";
import { motion } from "framer-motion";



const skillsDesign = ["Figma", "Adobe XD", "Sketch", "Zeplin", "Adobe Illustrator", "Adobe Animate", "Adobe Photoshop"];


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
           
              
               <h3 className="text-stellarDarker">Why UX design?</h3>
               <p className=" text-whiteyDarker py-2">
More and more businesses are finding out how dramatically can good UX design affect their productivity, sales & revenues, reduce development time & costs, reduce maintenance cost and increase customer satisfaction. 
</p>
<h3 className="text-stellarDarker">What can I offer?</h3>
<p className=" text-whiteyDarker py-2">
My main passion is the interaction design, but I enjoy also other disciplines of UX design, whether it is research, usability testing or others. At the end always stands a perfectly usable product and thats what motivates me the most.
</p>
<h3 className="text-stellarDarker">What is my extra value?</h3>
<p className=" text-whiteyDarker py-2">
Having a knowledge of frontend development allows me to create developer-friendly designs, which speed up the hand-off process by reducing the back-and-forths between designer and development team.
</p>

            </motion.div>

            <motion.div variants={contVariant} className="sm:pl-12">
            <h3 className="text-stellarDarker pb-2">What tools do I use?</h3>
               <div className="flex flex-wrap py-2">
                  {skillsDesign.map((skill, index) => (
                    <div className=" bg-space-darkest rounded-lg p-2 mb-4 mr-3 text-xs text-whiteyDarker uppercase" key={index}>{skill}
                    </div>
                    
                  ))}
               </div>
            </motion.div>
            </div>

    







  </motion.div>
);

export default TabContent;