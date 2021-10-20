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
            <h4 className="text-xl leading-relaxed text-stellar font-normal text-left py-2">My Approach </h4>
               <p className="text-whitey py-2">
                 More and more businesses are finding out how dramatically can good UX design affect their productivity, sales & revenues, reduce development time & costs, reduce maintenance cost and increase customer satisfaction. </p>
                 <p className="text-whitey py-2">
                 As a UX designer I can adapt to the client needs, whether you’re used to work based on Design Thinking, Lean UX or any other framework. Are you looking for someone to work exclusively on the visuals, are you in need of rapidly made prototypes or you want someone to overlook the whole project from start to finish, then you don’t have to search anymore.</p>
                 <p className="text-whitey py-2">
                 And finally, having a knowledge of frontend development allows me to create developer-friendly designs, which speed up the hand-off process by reducing the back-and-forths between designer and development team.</p>
                 <p className="text-whitey py-2">
                 Regarding the tools, I’m used to work with Figma, Adobe XD, Sketch, Adobe Creative Suite and Pen & Paper. If your company uses different tools I will be able to grasp it quite quickly.</p>
            </motion.div>

            <motion.div variants={contVariant} className="sm:pl-12">
            <h4 className="text-xl leading-relaxed text-stellar font-normal text-left py-2">Tools </h4>
               <div className="flex flex-wrap py-2">
                  {skillsDesign.map((skill, index) => (
                    <div className=" bg-space-dark rounded-lg p-2 mb-4 mr-3 text-xs text-whitey uppercase" key={index}>{skill}
                    </div>
                    
                  ))}
               </div>
            </motion.div>
            </div>

    







  </motion.div>
);

export default TabContent;