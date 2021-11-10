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





const TabContent = ({ id, active }) => {



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

<article className="px-2">
  <h2 className="text-stellarDarker">My Story</h2>
<p className=" text-whiteyDarker">
I'm Antonin, I was born on one nice autumnal day in 1986 in former Czechoslovakia. Nowadays I live in Germany with my girlfriend. Most of my professional life is turning around the web-development. I designed and coded my first website someday in 2002 when I was 15 years old. After that I worked in my fathers company (real-estate) - taking care of websites and advertisement, I also spent few years in corporate advertisement agencies like Havas and Wunderman. And between that (that explains the gaps in my CV, which is attached) I was travelling and volunteering around Asia for 1 year and consequently working in Myanmar as a staff of a hostel and finally almost another year in Uganda as a hostel manager.
</p>
</article>


<div className="flex px-2">
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
          title="My Resume (PDF)"
          primary
          href="https://www.seznam.cz"
          />
          </motion.div>

</div>
        




    
</div>






  </motion.div>
)};

export default TabContent;