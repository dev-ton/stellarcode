import React from "react"
import Layout from "../layouts/Layout"
import SiteMetadata from "../components/SiteMetadata"
import { graphql, StaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"



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
      msImage2 {
        localFile {
          childImageSharp {
            gatsbyImageData(
              height: 800
              quality: 85
              formats: [AUTO, AVIF]
              placeholder: BLURRED
            )
          }
        }
      }
      }
    }
  `}

    

    render={data => (
  <Layout>
    <SiteMetadata title="About" description="Sample description" />

    
      <div className="container py-12 lg:pb-16">
      <div className="topSpace h-12 sm:h-24"></div>

        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 xl:w-3/5 pb-8 md:pb-0">
          <div className="mt-4">

            <article className="prose lg:prose-xl">
            <h1>
            {data.contentfulMyStory.title}
            </h1>

            <h2>
            {data.contentfulMyStory.subHeadline.subHeadline}
            </h2>
            

            <p>
            {data.contentfulMyStory.firstParagraph.firstParagraph}
            </p>

            <p>
            {data.contentfulMyStory.secondParagraph.secondParagraph}
            </p>
            </article>

          <span className=" text-gray-400 pt-3 text-xl">
            {data.contentfulMyStory.thirdParagraph.thirdParagraph}
          </span>

          <span className=" text-gray-400 pt-3 text-xl">
            {data.contentfulMyStory.fourthParagraph.fourthParagraph}
          </span>

          <span className=" text-gray-400 pt-3 text-xl">
            {data.contentfulMyStory.fifthParagraph.fifthParagraph}
          </span>

          <span className=" text-gray-400 pt-3 text-xl">
            {data.contentfulMyStory.sixthParagraph.sixthParagraph}
          </span>

          <span className=" text-gray-400 pt-3 text-xl">
            {data.contentfulMyStory.seventhParagraph.seventhParagraph}
          </span>

          <span className=" text-gray-400 pt-3 text-xl">
            {data.contentfulMyStory.eightParagraph.eightParagraph}
          </span>

            </div>
          </div>
          <div className="w-full md:w-1/2 xl:w-2/5 md:pl-12">
            <GatsbyImage className="rounded-lg" image={data.contentfulMyStory.msImage2.localFile.childImageSharp.gatsbyImageData} alt={data.contentfulMyStory.msImage2.title} />
          </div>
        </div>
      </div>
    
    
  </Layout>


)}
/>
)

export default AboutPage


