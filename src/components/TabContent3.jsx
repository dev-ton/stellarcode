import React from "react";
import { Link } from "gatsby"
import { motion } from "framer-motion";
import { FaDownload } from "@react-icons/all-files/fa/FaDownload"
import { FaUserAlt } from "@react-icons/all-files/fa/FaUserAlt"






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



const TabContent = ({ id, active }) => (
  
  <motion.div
    role="tabpanel"
    id={id}
    className="tab-content aboutLeft"
    variants={tabContentVariant}
    animate={active ? "active" : "inactive"}
    initial="inactive"
  >
  
  
        
                
            <div className="mx-auto pt-2">
              <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center py-6">
                <a className=' w-full sm:w-1/2 block' href={"#"}>
                <div className="bg-stellar-dark border-2 border-stellar-dark stellarButton p-3 m-6 text-xs text-whiteyDarker uppercase hover:shadow-xl h transition ease-in-out duration-150"><FaDownload className="float-left mr-2"/>Download my resume</div>
                </a>
                <Link className='w-full sm:w-1/2 block' to="/about">
                <div className=" text-whiteyDarker bg-transparent border-2 border-stellar-dark stellarButton p-3 m-6 text-xs uppercase hover:shadow-xl hover:text-whitey hover:bg-stellar-dark h transition ease-in-out duration-150"><FaUserAlt className="float-left mr-3"/>My biography</div>
                </Link>
              </div>
            </div>

    







  </motion.div>
);

export default TabContent;