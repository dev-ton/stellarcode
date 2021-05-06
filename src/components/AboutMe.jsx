import { StaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { FaBezierCurve, FaCode, FaDownload, FaUserAlt } from "react-icons/fa"
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
    <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight text-stellar pt-3 pb-8">{data.aboutme.title}</h2>

  


      <div className=" bg-space-light h-full w-full shadow-lg rounded-md relative">
            <div className="absolute" style={{left:'calc(50% - 7.5rem)', top:'-7.5rem'}}>
              <Img fluid={data.aboutme.portraitImage.localFile.childImageSharp.fluid} alt={data.aboutme.portraitImage.title} className="rounded-full" style={{width:'15rem',height:'15rem' }} />
            </div>
            
            <div className="about">
              <div className="aboutLeft border-space-DEFAULT border-solid border-r-2">
                <div className="mx-auto text-center pt-8 sm:pt-20">
                <FaBezierCurve className="aboutIcon"/>
                <h3 className="text-2xl leading-relaxed text-stellar font-bold text-center py-4">Design</h3>
                <p className="text-whitey py-8 px-12 text-xl">I value simple content structure, clean design patterns, and thoughtful interactions.</p>
                <h4 className="text-xl leading-relaxed text-stellar font-normal text-center py-4">Focus: </h4>
                <p className="text-whitey py-4 px-12">Always doing my best to see things
                from the user perspective. I enjoy designing web & mobile apps.</p>
                <h4 className="text-xl leading-relaxed text-stellar font-normal text-center py-4">Tools: </h4>
                <div className="flex flex-wrap justify-center py-4 px-12 pb-12">
                <div className=" bg-space-dark rounded-lg p-2 mb-4 mr-3 text-xs text-whitey uppercase">Figma</div>
                <div className="bg-space-dark  rounded-lg p-2 mb-4 mr-3 text-xs text-whitey uppercase">Adobe XD</div>
                <div className="bg-space-dark  rounded-lg p-2 mb-4 mr-3 text-xs text-whitey uppercase">Sketch</div>
                <div className="bg-space-dark  rounded-lg p-2 mb-4 mr-3 text-xs text-whitey uppercase">Zeplin</div>
                <div className="bg-space-dark  rounded-lg p-2 mb-4 mr-3 text-xs text-whitey uppercase">Adobe Illustrator</div>
                <div className="bg-space-dark  rounded-lg p-2 mb-4 mr-3 text-xs text-whitey uppercase">Adobe Animate</div>
                <div className="bg-space-dark  rounded-lg p-2 mb-4 mr-3 text-xs text-whitey uppercase">Adobe Photoshop</div>
                </div>
                </div>
              </div>

              <div className="aboutRight">
              <div className="mx-auto text-center pt-8 sm:pt-20">
                <FaCode className="aboutIcon"/>
                <h3 className="text-2xl leading-relaxed text-stellar font-bold text-center py-4">Front-end development</h3>
                <p className="text-whitey py-8 px-12 text-xl">I enjoy to create fast interface with smooth transitions and perfect accessibility.</p>
                <h4 className="text-xl leading-relaxed text-stellar font-normal text-center py-4">Languages: </h4>
                <p className="text-whitey py-4 px-12">HTML, CSS, JS, JSX<br/><br/></p>
                <h4 className="text-xl leading-relaxed text-stellar font-normal text-center py-4">Tools/Frameworks: </h4>
                <div className="flex flex-wrap justify-center pt-4 px-12 pb-12">
                <div className="bg-space-dark  rounded-lg p-2 mb-4 mr-3 text-xs text-whitey uppercase">Bootstrap</div>
                <div className="bg-space-dark  rounded-lg p-2 mb-4 mr-3 text-xs text-whitey uppercase">Tailwind</div>
                <div className="bg-space-dark  rounded-lg p-2 mb-4 mr-3 text-xs text-whitey uppercase">Bulma</div>
                <div className="bg-space-dark  rounded-lg p-2 mb-4 mr-3 text-xs text-whitey uppercase">Styled Components</div>
                <div className="bg-space-dark  rounded-lg p-2 mb-4 mr-3 text-xs text-whitey uppercase">Framer Motion</div>
                <div className="bg-space-dark  rounded-lg p-2 mb-4 mr-3 text-xs text-whitey uppercase">ReactJS</div>
                <div className="bg-space-dark  rounded-lg p-2 mb-4 mr-3 text-xs text-whitey uppercase">GatsbyJS</div>
                <div className="bg-space-dark  rounded-lg p-2 mb-4 mr-3 text-xs text-whitey uppercase">GraphQL</div>
                <div className="bg-space-dark  rounded-lg p-2 mb-4 mr-3 text-xs text-whitey uppercase">Hubspot</div>
                <div className="bg-space-dark  rounded-lg p-2 mb-4 mr-3 text-xs text-whitey uppercase">npm</div>
                <div className="bg-space-dark  rounded-lg p-2 mb-4 mr-3 text-xs text-whitey uppercase">Github</div>
                <div className="bg-space-dark  rounded-lg p-2 mb-4 mr-3 text-xs text-whitey uppercase">VS code</div>
                </div>

                </div>
                </div>
                
              <div className="flex justify-center aboutBottom border-space-DEFAULT border-solid border-t-2 py-6">
                <a href={data.aboutme.resume.file.url}>
                <div className="bg-stellar-dark border-2 border-stellar-dark stellarButton p-3 my-6 mr-6 text-xs text-whitey uppercase hover:shadow-xl h transition ease-in-out duration-150"><FaDownload className="float-left mr-2"/>Download my resume</div>
                </a>
                <Link to="/about">
                <div className=" text-whitey bg-transparent border-2 border-stellar-dark stellarButton p-3 my-6 text-xs uppercase hover:shadow-xl hover:text-whitey hover:bg-stellar-dark h transition ease-in-out duration-150"><FaUserAlt className="float-left mr-3"/>My biography</div>
                </Link>
              </div>
            </div>
      </div>


   

    
    

  </section>
    
    
    )}
  />
)


export default AboutMe


