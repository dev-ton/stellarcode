import React from "react";
import useWindowSize from "../utils/useWindowSize";
import TabComponentMobile from "./TabComponentMobile";
import TabComponentDesktop from "./TabComponentDesktop";
import tabs from "./tabs"

const TabComponent = () => {
 
  const { width } = useWindowSize();
  


return (
  <div>
    {width < 600
      ? <TabComponentMobile tabs={tabs}/>
      : <TabComponentDesktop tabs={tabs}/>
    }
  </div>
);


  
}

export default TabComponent;