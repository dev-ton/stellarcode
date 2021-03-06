import React from "react"
import Layout from "../layouts/Layout"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import SiteMetadata from "../components/SiteMetadata"
import Button from "../components/Button"
import Carousel from "../components/Carousel"
import Cards from "../components/Cards"





const portfolioItem =  (props) => {
  const {
    description,
    gallery,
    name,
    related,
    summary,
    metadata,
    thumbnail,
    fileToDownload,
    url,
  } = props.data.item

const tags = metadata.tags

  return (
    <Layout>
      <SiteMetadata
        title={name}
        description={summary}
        image={thumbnail.gatsbyImageData}
      />
      
        <div className="container pb-20 sm:pb-40">
        <div className="topSpace h-8 sm:h-24"></div>
          <div className="flex flex-wrap">
            <div className="w-full lg:w-2/3 pb-8">
              {gallery && gallery.length === 1 && (
                <GatsbyImage
                  image={gallery[0].gatsbyImageData}
                  alt={name}
                />
              )}
              {gallery && gallery.length > 1 && <Carousel images={gallery} />}
            </div>
            <div className="w-full lg:w-1/3 lg:pl-8 xl:pl-12">
              <h1 className="text-3xl leading-tight font-extrabold tracking-tight heading sm:text-4xl mb-1">
                {name}
              </h1>
              <div className="flex">
                {tags.map((tag, index) => (
                  <div className="bg-space-darkest rounded-lg p-2 mb-4 mr-3 text-xs text-whiteDarker uppercase" key={index}>{tag.name}</div>
                ))}
              </div>
              <h2 className=" text-stellar">
                {summary}
              </h2>
              {description && (
                <p className="my-4 text-whiteDarker whitespace-pre-line">
                  {description.description}
                </p>
              )}
              {url && (
                <div className="mt-8">
                  <Button href={url} primary title="More info">More info</Button>
                </div>
              )}
               {fileToDownload && (
                <div className="mt-8">
                  <Button href={fileToDownload.file.url} primary title={fileToDownload.description}></Button>
                </div>
              )}
            </div>
          </div>
        </div>
      
        {related &&  (
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
            gatsbyImageData(
              height: 540
              width: 960
              formats: [AUTO, WEBP]
              placeholder: BLURRED
            )
        title
      }
      name
      metadata {
        tags {
          name
            }
          }
      related {
        ...PortfolioCard
      }
      summary
      thumbnail {
            gatsbyImageData
      }
      fileToDownload {
          file {
            url
          }
          description
        }
      url
    }
  }
`
