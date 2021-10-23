import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import TabComponent from "../components/TabComponent"
import tabs from "./tabs"





const AboutMe = () => (

  
  <StaticQuery
    query={graphql`
    {
      aboutme: contentfulAboutMe {
        portraitImage {
          localFile {
            childImageSharp {
              fluid(maxWidth: 444, maxHeight: 342, quality: 85) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          title
        }
        resume {
          file {
            url
          }
        }
        textContent {
          childMarkdownRemark {
            html
          }
        }
        title
      }
    }
    `}

    

    render={data => (
    
  <div className="about-height">
  <section id="aboutme" className="container pb-20 sm:pb-40 sticky-top-60">

    <div className="flex justify-center">
    <h2 className="text-4xl heading sm:text-6xl font-extrabold leading-tight tracking-tight text-space-lighter">{data.aboutme.title}</h2>
    </div>



  

    
    <TabComponent tabs={tabs} />
   


  </section>
  </div>
    
    )}
  />
)


export default AboutMe


