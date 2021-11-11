import React from "react"
import Layout from "../layouts/Layout"
import SiteMetadata from "../components/SiteMetadata"
import { graphql, StaticQuery } from "gatsby"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"



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
          file {
          url
        }
        }
      msImage2 {
            gatsbyImageData(
              height: 800
              formats: [AUTO, WEBP]
              placeholder: BLURRED
            )
        title
      }
      }
    }
  `}

    

    render={data => (
  <Layout>
    <SiteMetadata title="About" description="Sample description" />

      

      <div className="container py-12 lg:pb-16">
      <StaticImage src="../images/bild.jpg" alt="meine wenigkeit" placeholder="blurred" layout="constrained"/>
       <div className="topSpace h-12 sm:h-24"></div>

        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 xl:w-3/5 pb-8 md:pb-0">
          

            <article>
            <h1 className="text-stellarDarker tracking-wide">
            {data.contentfulMyStory.title}
            </h1>

            <h2 className="text-whiteyDarker">
            {data.contentfulMyStory.subHeadline.subHeadline}
            </h2>
            

            <h3 className="text-whiteyDarker font-bold">
            {data.contentfulMyStory.firstParagraph.firstParagraph}
            </h3>

            <p className="text-whiteyDarker">
            {data.contentfulMyStory.secondParagraph.secondParagraph}
            </p>

            <blockquote className="text-whiteyDarker">
            {data.contentfulMyStory.thirdParagraph.thirdParagraph}
            </blockquote>

            <ul className="text-whiteyDarker list-disc list-inside py-2 sm:py-3 lg:py-4 xl:py-5 pl-4">
              <li>First item</li>
              <li>Second item</li>
              <li>Third item</li>
              <li>Fourth item</li>
              <li>Fifth item</li>
            </ul>

            </article>

         
                  <article className="text-whiteyDarker">
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
          <div className="w-full md:w-1/2 xl:w-2/5 md:pl-12">
            <GatsbyImage className="space-dark-shadow rounded-md img-height-regulator" image={data.contentfulMyStory.msImage2.gatsbyImageData} loading="lazy" alt={data.contentfulMyStory.msImage2.title} />
          </div>
        </div>
      </div>
    
    
  </Layout>


)}
/>
)

export default AboutPage


