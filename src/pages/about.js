import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import Layout from "../layouts/Layout"
import SiteMetadata from "../components/SiteMetadata"

const AboutPage = () => (
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
  <Layout>
    <SiteMetadata title="About" description="Sample description" />

    
      <div className="container py-12 lg:pb-16 pt-40 md:pt-64">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 xl:w-3/5 pb-8 md:pb-0">
            <h1 className="text-3xl leading-tight font-extrabold tracking-tight text-whitey sm:text-4xl">
            {data.aboutme.title}
            </h1>

            <h2 className="text-xl leading-tight font-semibold tracking-tight text-stellar sm:text-2xl">
              Interdum et malesuada fames ac ante.
            </h2>
            <div className="mt-4 leading-loose">

            <span className=" text-gray-400 pt-3 text-xl"
        dangerouslySetInnerHTML={{
          __html: data.aboutme.textContent.childMarkdownRemark.html,
          }}>
        </span>

            </div>
          </div>
          <div className="w-full md:w-1/2 xl:w-2/5 md:pl-12">
            <Img className="rounded-lg" fluid={data.aboutme.portraitImage.localFile.childImageSharp.fluid} alt={data.aboutme.portraitImage.title} />
          </div>
        </div>
      </div>
    
    
  </Layout>


)}
/>
)

export default AboutPage


