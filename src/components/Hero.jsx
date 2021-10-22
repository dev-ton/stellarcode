import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Illustration from "./Illustration"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { motion } from "framer-motion";

const Hero = () => {

const data = useStaticQuery(graphql`
{
  contentfulAboutMe {
    portraitImage {
      localFile {
        childImageSharp {
          fluid(maxHeight: 1300) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
}
`)


const appear = {
  hidden: { opacity: 0,
            x:200
          },
  visible: {
    opacity: 1,
    x:0,
    transition: {
      delay: 0.3,
      duration:0.3,
    },
  },
}


  return (


  <motion.section id="home" className="container pb-20 sm:pb-40 shine"
  >


  <div className="topSpace h-8 sm:h-24"></div>

  <div className="flex justify-between sm:flex-row flex-col">
      <div className="w-full sm:w-1/2">




<h1 className="text-2xl sm:text-4xl font-bold leading-snug tracking-tight textGradient text-center sm:text-left"
    >
         <span>
         I’m Antonin,  
         </span>
     <br/>
        <span>
        freelance Front-end developer
        </span>
      <br/>
        <span>
        and UI/UX designer.
        </span>

</h1>



        <h2 className="text-xl sm:text-2xl font-normal text-whitey pt-10 text-center sm:text-left">
        Welcome on my portfolio.<br className="inline sm:hidden"/> You can<br className="hidden sm:inline"/> read more <AnchorLink href="#aboutme" offset="50">
          <span className="text-stellar hover:underline transition duration-150 ease-in-out">about me</span></AnchorLink>, check out <AnchorLink href="#mywork" offset="50"><span className="text-stellar hover:underline transition duration-150 ease-in-out">
            my work</span></AnchorLink><br className="hidden sm:inline"/> and if you have a project for me <br/>then <AnchorLink href="#contactme" offset="50"><span className="text-stellar hover:underline transition duration-150 ease-in-out">send me a message!</span></AnchorLink>
        <br/><br/>I’m looking forward to<br className="inline sm:hidden"/> hear from you!
        </h2>
      </div>

      <motion.div className="w-full sm:w-1/2 pl-0 sm:pl-10 pt-10 sm:pt-0"
      variants={appear}
      initial="hidden"
      animate="visible">
      <Img fluid={data.contentfulAboutMe.portraitImage.localFile.childImageSharp.fluid} alt="image" className="intro-img rounded-lg"/>
      </motion.div>  
    
    </div>

    <div className="mx-auto square50 hidden">
    <AnchorLink offset="50" href="#aboutme">
      <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="bouncyBounce">
      <path d="M14.5833 27.0833L25 37.5L35.4167 27.0833" stroke="#FFC857" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14.5833 12.5L25 22.9167L35.4167 12.5" stroke="#FFC857" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      </AnchorLink>
    </div>
  </motion.section>
)}

export default Hero
