import {Link} from "gatsby"
import React from "react"

import Menu from "./Menu"


const Header = () => {
  



  return (
    <div className=" bg-space-dark pt-6 pb-6 fixed z-50 w-full shadow-xl">
      <div className="flex justify-between items-center container">
        <Link to="/">
        <div className="flex justify-items-start items-center">
        <div className="pr-5"> 
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="logo">
        <path id="Star1" d="M29.2095 8.36149L23.5263 11.0398L20.848 16.723L18.1696 11.0398L12.4865 8.36149L18.1696 5.68314L20.848 -3.65492e-07L23.5263 5.68314L29.2095 8.36149Z" fill="#FFC857"/>
        <path id="Star2" d="M11.1486 24.527L7.35986 26.3126L5.5743 30.1013L3.78873 26.3126L-2.79002e-05 24.527L3.78873 22.7415L5.5743 18.9527L7.35986 22.7415L11.1486 24.527Z" fill="#FFC857"/>
        <path id="Star3" d="M29.4325 28.875L26.6288 30.1963L25.3075 33L23.9862 30.1963L21.1825 28.875L23.9862 27.5537L25.3075 24.75L26.6288 27.5537L29.4325 28.875Z" fill="#FFC857"/>
        </g>
        </svg></div> 
          <div className="font-extrabold leading-relaxed tracking-normal text-4xl"><span className="text-stellar">Stellar</span><span className="text-whitey">Code</span>
          </div>
        </div>  
        </Link>




       <Menu/>
      </div>
 
    </div>
  )
}

export default Header
