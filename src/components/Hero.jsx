import React from "react"
import Illustration from "./Illustration"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { motion } from "framer-motion";

const Hero = () => {

const line1 = "Welcome,"
const line2 = "your way to the stellar website starts here."

const sentence = {
  hidden: { opacity: 0},
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
}

const letter = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity:  1,
    y: 0
  },
}




  return (


  <section id="home" className="container pb-20 sm:pb-40">


  <div className="topSpace h-8 sm:h-24"></div>

  <div className="flex justify-between">
      <div className="w-full md:w-1/2">

    <motion.h1 className="text-2xl sm:text-4xl font-extrabold leading-tight tracking-tight textGradient"
    variants={sentence}
    initial="hidden"
    animate="visible"
    >
   {line1.split("").map((char,index) => {
       return (
         <motion.span key={char + "-" + index} variants={letter}>
           {char}
         </motion.span>
       )
     })}
     <br/>
    {line2.split("").map((char, index) => {
      return (
        <motion.span key={char + "-" + index} variants={letter}>
          {char}
        </motion.span>
      )
    })}


    </motion.h1>
        <h2 className="text-xl sm:text-2xl font-bold text-spaceLight pt-10">
        I’m Antonin, freelance Front-end developer and UI/UX designer. You can read more <AnchorLink href="#aboutme" offset="50">
          <span className="text-stellar hover:text-whitey transition duration-150 ease-in-out">about me</span></AnchorLink>, check out <AnchorLink href="#mywork" offset="50"><span className="text-stellar hover:text-whitey transition duration-150 ease-in-out">
            my work</span></AnchorLink> and if you have a project for me then <AnchorLink href="#contactme" offset="50"><span className="text-stellar hover:text-whitey transition duration-150 ease-in-out">send me a message!</span></AnchorLink>
        <br/>I’m looking forward to hear from you!
        </h2>
      </div>

      <div className=" max-w-sm w-1/2 hidden md:block">
      <Illustration/>
      </div>  

    </div>

    <div className="mx-auto square50 hidden">
    <AnchorLink offset="50" href="#aboutme">
      <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="bouncyBounce">
      <path d="M14.5833 27.0833L25 37.5L35.4167 27.0833" stroke="#FFC857" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14.5833 12.5L25 22.9167L35.4167 12.5" stroke="#FFC857" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      </AnchorLink>
    </div>
  </section>
)}

export default Hero
