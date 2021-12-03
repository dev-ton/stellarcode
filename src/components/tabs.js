import React from "react";
import { FaBezierCurve } from "@react-icons/all-files/fa/FaBezierCurve"
import { FaCode } from "@react-icons/all-files/fa/FaCode"
import { FaUserAlt } from "@react-icons/all-files/fa/FaUserAlt"
import TabContent1 from "./TabContent1";
import TabContent2 from "./TabContent2";
import TabContent3 from "./TabContent3";

const tabs = [
    {
      title: "Basic facts",
      id: "bio",
      icon: <FaUserAlt />,
      color: "#ffc857",
      content: TabContent3
    },
 
    {
      title: "Front-end",
      id: "code",
      icon: <FaCode />,
      color: "#ffc857",
      content: TabContent2
    },

    {
      title: "Design",
      id: "design",
      icon: <FaBezierCurve />,
      color: "#ffc857",
      content: TabContent1
    },
  ];
  
  export default tabs;