import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {

const data = useStaticQuery(graphql`
{
  contentfulIntroSection {
    portraitPhoto {
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



  return (


  <section id="home" className="container pb-20 sm:pb-40 shine"
  >


  <div className="topSpace h-12 sm:h-24"></div>

  <div className="flex justify-between sm:flex-row flex-col">
      <div className="w-full sm:w-1/2">




<h1 className="text-2xl sm:text-4xl font-bold leading-snug tracking-tight textGradient text-center sm:text-left"
    >
         <span>
         I’m Antonin,  
         </span>
     <br/>
        <span>
        freelance front-end developer
        </span>
      <br/>
        <span>
        and UI/UX designer.
        </span>

</h1>



        <h2 className="text-xl sm:text-2xl font-normal text-whiteyDarker pt-12 text-center sm:text-left">
        Welcome on my portfolio.<br className="inline sm:hidden"/> You can<br className="hidden sm:inline"/> read more <AnchorLink href="#aboutme" offset="50" className="fade_underlink">
          <span className="text-stellar">about me</span></AnchorLink>, check out <AnchorLink href="#mywork" offset="50" className="fade_underlink"><span className="text-stellar">
            my work</span></AnchorLink><br className="hidden sm:inline"/> and if you have a project for me <br/>then <AnchorLink href="#contactme" offset="50" className="fade_underlink"><span className="text-stellar">send me a message!</span></AnchorLink>
        <br/><br/>I’m looking forward to<br className="inline sm:hidden"/> hear from you!
        </h2>
      </div>

      <div className="w-full sm:w-1/2 pl-0 sm:pl-10 pt-12 sm:pt-0">
      <Img fluid={data.contentfulIntroSection.portraitPhoto.localFile.childImageSharp.fluid} alt="image" className="intro-img rounded-md"/>
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
