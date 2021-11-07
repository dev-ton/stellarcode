import React from "react"
import Layout from "../layouts/Layout"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import SiteMetadata from "../components/SiteMetadata"
import Cards from "../components/Cards"
import Carousel from "../components/Carousel"
import Button from "../components/Button"

const portfolioItem =  (props) => {
  const {
    description,
    gallery,
    name,
    related,
    summary,
    thumbnail,
    url,
  } = props.data.item

  return (
    <Layout>
      <SiteMetadata
        title={name}
        description={summary}
        image={thumbnail.localFile.publicURL}
      />
      
        <div className="container pb-20 sm:pb-40">
        <div className="topSpace h-8 sm:h-24"></div>
          <div className="flex flex-wrap">
            <div className="w-full lg:w-2/3 pb-8">
              {gallery && gallery.length === 1 && (
                <Img
                  fluid={gallery[0].localFile.childImageSharp.fluid}
                  alt={name}
                />
              )}
              {gallery && gallery.length > 1 && <Carousel images={gallery} />}
            </div>
            <div className="w-full lg:w-1/3 lg:pl-8 xl:pl-12">
              <h1 className="text-3xl leading-tight font-extrabold tracking-tight text-whitey sm:text-4xl mb-1">
                {name}
              </h1>
              <h2 className="text-xl leading-tight font-semibold tracking-tight text-stellar sm:text-2xl">
                {summary}
              </h2>
              {description && (
                <div className="my-4 text-base text-gray-500 whitespace-pre-line">
                  {description.description}
                </div>
              )}
              {url && (
                <div className="mt-8">
                  <Button href={url} primary title="More info">More info</Button>
                </div>
              )}
            </div>
          </div>
        </div>
      
      {related && (
        <div className="bg-transparent py-12 lg:py-16 container">
          <div>
            <h2 className="text-3xl sm:text-4xl leading-tight font-extrabold tracking-tight text-stellar mb-8">
              Other projects:
            </h2>
          </div>
          <Cards items={related} hideLastItemOnMobile={false} />
        </div>
      )}
      
    </Layout>
  )
}

export default portfolioItem 

export const query = graphql`
  query PortfolioItemQUery($slug: String!) {
    item: contentfulPortfolio(slug: { eq: $slug }) {
      description {
        description
      }
      gallery {
        id
        localFile {
          childImageSharp {
            fluid(maxWidth: 960, maxHeight: 540, quality: 85) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        title
      }
      name
      related {
        ...PortfolioCard
      }
      summary
      thumbnail {
        localFile {
          publicURL
        }
      }
      url
    }
  }
`
