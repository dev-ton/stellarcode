import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {

const data = useStaticQuery(graphql`
{
  contentfulIntroSection {
    portraitPhoto {
          gatsbyImageData(
              height: 1300
              formats: [AUTO, WEBP]
              placeholder: BLURRED
            )
      title
    }
  }
}
`)

const image = getImage(data.contentfulIntroSection.portraitPhoto)

  return (


  <section id="home" className="container pb-20 sm:pb-40"
  >


  <div className="topSpace h-12 sm:h-24"></div>

  <div className="flex justify-between sm:flex-row flex-col">
      <div className="w-full sm:w-1/2">



<div className="sm:pr-6">

<h1 className="textGradient text-center sm:text-left tracking-wide">
   
I’m Antonin,  
<br/>
freelance front-end developer
<br/>
and UI/UX designer.

</h1>



        <h2 className="text-whiteyDarker text-center sm:text-left">
        Welcome on my portfolio.<br className="inline sm:hidden"/> You can<br className="hidden sm:inline"/> read more <AnchorLink href="#aboutme" offset="50" className="fade_underlink">
          <span className="text-stellar">about me</span></AnchorLink>, check out <AnchorLink href="#mywork" offset="50" className="fade_underlink"><span className="text-stellar">
            my work</span></AnchorLink><br className="hidden sm:inline"/> and if you have a project for me <br/>then <AnchorLink href="#contactme" offset="50" className="fade_underlink"><span className="text-stellar">send me a message!</span></AnchorLink>
        <br/><br/>I’m looking forward to<br className="inline sm:hidden"/> hear from you!
        </h2>

      </div>
      </div>

      <div className="w-full sm:w-1/2 pl-0 sm:pl-10 pt-12 sm:pt-0">
      <GatsbyImage image={image} loading="eager" alt="image" className="space-dark-shadow rounded-md img-height-regulator"/>
      </div>  
    
    </div>

  </section>
)}

export default Hero
