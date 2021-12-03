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

<article>
<h3 className="text-stellarDarker">What can I offer?</h3>
<span className=" text-whiteLighter py-2">
  <ul className="list-disc pl-4 text-lg sm:text-xl 2xl:text-xl py-2 sm:py-3 lg:py-4 xl:py-5">
    <li className="text-whiteLighter">Performing of complete user research and drive design decisions based on that</li>
    <li className="text-whiteLighter">Building of sophisticated user-flows and information architectures</li>
    <li className="text-whiteLighter">Rapid creation of cross-platform wireframes and prototypes</li>
    <li className="text-whiteLighter">Leading of the usability studies</li>
    <li className="text-whiteLighter">Creation of convincing presentations and presenting the ideas to the stake-holders</li>
    <li className="text-whiteLighter">Building of the new design systems</li>
  </ul>
</span>
</article>

<article>
<h3 className="text-stellarDarker">What is my extra value?</h3>
<p className=" text-whiteLighter py-2">
Having a knowledge of frontend development allows me to create developer-friendly designs, which speed up the hand-off process by reducing the back-and-forths between designer and development team.
</p>
</article>
            </motion.div>

            <motion.div variants={contVariant} className="sm:pl-12">
            <h3 className="text-stellarDarker pb-2">What tools do I use?</h3>
               <div className="flex flex-wrap py-2 sm:py-3 lg:py-4">
                  {skillsDesign.map((skill, index) => (
                    <div className=" bg-space-darkest rounded-lg p-2 mb-4 mr-3 text-xs text-whiteDarker uppercase" key={index}>{skill}
                    </div>
                    
                  ))}
               </div>
            </motion.div>
            </div>

    







  </motion.div>
);

export default TabContent;