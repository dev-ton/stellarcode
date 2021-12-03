import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql, Link } from "gatsby"
import PropTypes from "prop-types"
import { motion } from "framer-motion"



const cardMotion = {
  rest: {
    scale: 1.00,
    transition: {
      duration: 0.15,
      type: "spring",
      stiffness: 100
    }
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.15,
      type: "spring",
      stiffness: 100
    }
  }
};


const Card = props => {

  const { name, slug, summary, thumbnail, metadata } = props
  const image = getImage(thumbnail)
  const tags = metadata.tags

  return (
    <motion.div className="bg-space-dark cyber-bg h-full shadow-lg rounded-md overflow-hidden group card"
      initial="rest"
      whileHover="hover"
      animate="rest"
      variants={cardMotion}>
      
      
      <Link to={`/${slug}`}>
        <div className="pt-3 opacity-80 group-hover:opacity-100 transition duration-150 ease-in-out">
        <GatsbyImage image={image} alt={name} loading="lazy" />
        </div>
        <div className="p-4 pb-6 sm:p-5">
          <div className="flex">
          {tags.map((tag, index) => (
            <div className="bg-space-darkest rounded-lg p-2 mb-4 mr-3 text-xs text-whiteDarker uppercase" key={index}>{tag.name}</div>
          ))}
          </div>
          <div className="w-full flex flex-col">
          <h3 className=" text-whiteLighter font-bold pb-0 group-hover:text-white transition duration-150 ease-in-out">{name}</h3>
          <p className=" text-stellarDarker group-hover:text-stellar transition duration-150 ease-in-out">{summary}</p>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  metadata: PropTypes.object.isRequired,
  thumbnail: PropTypes.shape({
    localFile: PropTypes.object,
  }),
}

export default Card

export const query = graphql`
  fragment PortfolioCard on ContentfulPortfolio {
    id
    name
    slug
    thumbnail {
          gatsbyImageData(
              height: 342
              width:446
              formats: [AUTO, WEBP]
              placeholder: BLURRED
            )
    }
    summary
    metadata {
      tags {
        name
      }
    }
  }
`
