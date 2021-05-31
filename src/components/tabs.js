import React from "react";
import { FaBezierCurve } from "@react-icons/all-files/fa/FaBezierCurve"
import { FaCode } from "@react-icons/all-files/fa/FaCode"
import TabContent1 from "./TabContent1";
import TabContent2 from "./TabContent2";

const tabs = [
    {
      title: "Design",
      id: "design",
      icon: <FaBezierCurve />,
      color: "#5d5dff",
      content: TabContent1
    },
    {
      title: "Front-end",
      id: "code",
      icon: <FaCode />,
      color: "#67bb67",
      content: TabContent2
    }
  ];
  
  export default tabs;