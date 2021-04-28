import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Socials from "../components/Socials"
import BackgroundBlob from "./BackgroundBlob"
import React from "react"




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


   <div style={{overflow:'hidden',
                position:'absolute',
                top: '100%',
                right: '0',
                zIndex: -1,
                width: '100%',
                height: '150%',
                padding: '2rem',
                }}>
      <BackgroundBlob/>
   </div>

   
    <div className="flex flex-wrap">

      <div className="w-1/3"></div>
      <div className="w-2/3 pl-24">
        <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight text-stellar pt-3 pb-8">{data.aboutme.title}</h2>
      </div>


      <div className=" bg-space-light h-full w-1/3 shadow-lg rounded-md overflow-hidden group">
          <div className="pt-4">
              <Img fluid={data.aboutme.portraitImage.localFile.childImageSharp.fluid} alt={data.aboutme.portraitImage.title} />
            </div>
            <div className="p-4 sm:p-5 w-2/3 mx-auto">
              <div className="flex justify-center flex-col">
                <a href={data.aboutme.resume.file.url}>
                <div className="bg-stellar-dark stellarButton p-3 my-6 text-xs text-whitey uppercase hover:shadow-xl h transition ease-in-out duration-75">Download my resume</div>
                </a>
                <div className="my-6">
                <Socials/>
                </div>
              </div>
            </div>
      </div>


      <div className="w-2/3 pl-24 pr-20">
        <span className=" text-gray-400 pt-3 text-xl"
        dangerouslySetInnerHTML={{
          __html: data.aboutme.textContent.childMarkdownRemark.html,
          }}>
        </span>
      </div>

    </div>
    

  </section>
    
    
    )}
  />
)


export default AboutMe


