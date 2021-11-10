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
              formats: [AUTO, WEBP]
              placeholder: BLURRED
            )
          }
        }
        title
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

            <article className="prose prose-sm prose-lg">
            <h1>
            {data.contentfulMyStory.title}
            </h1>

            <h2>
            {data.contentfulMyStory.subHeadline.subHeadline}
            </h2>
            

            <h3>
            {data.contentfulMyStory.firstParagraph.firstParagraph}
            </h3>

            <p>
            {data.contentfulMyStory.secondParagraph.secondParagraph}
            </p>

            <blockquote>
            {data.contentfulMyStory.thirdParagraph.thirdParagraph}
            </blockquote>

            <ul>
              <li>First item</li>
              <li>Second item</li>
              <li>Third item</li>
              <li>Fourth item</li>
              <li>Fifth item</li>
            </ul>

            </article>

         
            <article className="prose prose-sm prose-lg">
          <p>
            {data.contentfulMyStory.fourthParagraph.fourthParagraph}
          </p>

          <p>
            {data.contentfulMyStory.fifthParagraph.fifthParagraph}
          </p>

          <p>
            {data.contentfulMyStory.sixthParagraph.sixthParagraph}
          </p>

          <p>
            {data.contentfulMyStory.seventhParagraph.seventhParagraph}
          </p>

          <p>
            {data.contentfulMyStory.eightParagraph.eightParagraph}
          </p>

          </article>

            </div>
          </div>
          <div className="w-full md:w-1/2 xl:w-2/5 md:pl-12">
            <GatsbyImage className="space-dark-shadow rounded-md img-height-regulator" image={data.contentfulMyStory.msImage2.localFile.childImageSharp.gatsbyImageData} alt={data.contentfulMyStory.msImage2.title} />
          </div>
        </div>
      </div>
    
    
  </Layout>


)}
/>
)

export default AboutPage


