import React from "react";
import { FaBezierCurve } from "@react-icons/all-files/fa/FaBezierCurve"
import { FaCode } from "@react-icons/all-files/fa/FaCode"
import TabContent1 from "./TabContent1";
import TabContent2 from "./TabContent2";
import TabContent3 from "./TabContent3";

const tabs = [
    {
      title: "Design",
      id: "design",
      icon: <FaBezierCurve />,
      color: "#ffc857",
      content: TabContent1
    },
    {
      title: "Front-end",
      id: "code",
      icon: <FaCode />,
      color: "#ffc857",
      content: TabContent2
    },
    {
      title: "CV & Bio",
      id: "bio",
      icon: <FaCode />,
      color: "#ffc857",
      content: TabContent3
    }
  ];
  
  export default tabs;