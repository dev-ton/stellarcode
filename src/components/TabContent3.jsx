import React from "react";
import { motion } from "framer-motion";
import { FaDownload } from "@react-icons/all-files/fa/FaDownload"
import { FaUserAlt } from "@react-icons/all-files/fa/FaUserAlt"
import { navigate } from "gatsby";
import Button from "./Button";






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





const TabContent = ({ id, cv, active }) => {



return (
  
  <motion.div
    role="tabpanel"
    id={id}
    className="tab-content aboutLeft"
    variants={tabContentVariant}
    animate={active ? "active" : "inactive"}
    initial="inactive"
  >
  
  
        
  <div className="mx-auto text-left flex flex-col pb-10 px-2 sm:px-8">

<motion.article className="px-2 pb-4" variants={contVariant}>
  <h3 className="text-stellarDarker">Basic facts about me</h3>
<p className="text-whiteLighter">
I’m 35 years old, currently living in Regensburg, Germany, but coming out of Prague, Czech Republic. <br/>You can talk with me Czech, English and German.</p>
<p className="text-whiteLighter">
 Currently I'm working as a freelancer, but I’m open to fixed employment offers as well. I’m working in web design industry already more than a decade and I can offer you complex digital solutions from design to a functional website, depending on your needs. I value good communication and fair play...
</p>
</motion.article>


<div className="flex px-2 flex-wrap">
          <motion.div variants={contVariant} className="mr-4">
          <Button
          icon={<FaUserAlt/>}
          title="Read more"
          onClick={()=>{navigate("/mystory")}}
          > </Button>
          </motion.div>

          <motion.div variants={contVariant}>
          <Button
          icon={<FaDownload/>}
          title="Download My Resume (PDF)"
          primary
          href={cv}
          />
          </motion.div>

</div>
        




    
</div>






  </motion.div>
)};

export default TabContent;