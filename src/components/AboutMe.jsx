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
    
    
  <section id="aboutme" className="container pb-20 sm:pb-40">
    <h2 className="text-4xl sm:text-6xl font-extrabold leading-tight tracking-tight text-space-lighter pt-3 pb-8 text-center">{data.aboutme.title}</h2>


    
    <TabComponent tabs={tabs} />
   


  </section>
    
    
    )}
  />
)


export default AboutMe


