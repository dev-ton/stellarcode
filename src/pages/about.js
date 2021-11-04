import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import Layout from "../layouts/Layout"
import SiteMetadata from "../components/SiteMetadata"

const AboutPage = () => (

  
  <StaticQuery
    query={graphql`
    {
      contentfulMyStory {
        title
        subHeadline {
          subHeadline
        }
        firstParagraph {
          firstParagraph
        }
        secondParagraph {
          secondParagraph
        }
        thirdParagraph {
          thirdParagraph
        }
        fourthParagraph {
          fourthParagraph
        }
        fifthParagraph {
          fifthParagraph
        }
        sixthParagraph {
          sixthParagraph
        }
        seventhParagraph {
          seventhParagraph
        }
        eightParagraph {
          eightParagraph
        }
        resume {
          localFile {
            url
          }
        }
        msImage1 {
          fluid(toFormat: WEBP, cropFocus: FACE, maxWidth: 800) {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  `}

    

    render={data => (
  <Layout>
    <SiteMetadata title="About" description="Sample description" />

    
      <div className="container py-12 lg:pb-16 pt-40 md:pt-64">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 xl:w-3/5 pb-8 md:pb-0">
            <h1 className="text-3xl leading-tight font-extrabold tracking-tight text-whitey sm:text-4xl">
            {data.contentfulMyStory.title}
            </h1>

            <h2 className="text-xl leading-tight font-semibold tracking-tight text-stellar sm:text-2xl">
            {data.contentfulMyStory.subHeadline.subHeadline}
            </h2>
            <div className="mt-4 leading-loose">

            <span className=" text-gray-400 pt-3 text-xl">
            {data.contentfulMyStory.firstParagraph.firstParagraph}
          </span>

            </div>
          </div>
          <div className="w-full md:w-1/2 xl:w-2/5 md:pl-12">
            <Img className="rounded-lg" fluid={data.contentfulMyStory.msImage1.fluid} alt={data.contentfulMyStory.msImage1.title} />
          </div>
        </div>
      </div>
    
    
  </Layout>


)}
/>
)

export default AboutPage


