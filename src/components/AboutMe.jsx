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
    
    
  <section id="aboutme" className="container mt-20">
    <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight text-stellar pt-3 pb-8">{data.aboutme.title}</h2>

    <TabComponent tabs={tabs} />
   


  </section>
    
    
    )}
  />
)


export default AboutMe


