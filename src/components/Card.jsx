import Img from "gatsby-image"
import { graphql, Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { motion } from "framer-motion"

const Card = props => {
  const { name, slug, summary, thumbnail } = props

  return (
    <motion.div className=" bg-space-light h-full shadow-lg rounded-md overflow-hidden group card" whileHover={{ scale: 1.05,}} >
      
      
      <Link to={`/${slug}`}>
        <div className="pt-3 group-hover:opacity-75 transition duration-150 ease-in-out">
          <Img fluid={thumbnail.localFile.childImageSharp.fluid} alt={name} />
        </div>
        <div className="p-4 sm:p-5">
          <div className="flex">
            <div className="bg-stellar-dark rounded-lg p-2 mb-4 mr-3 text-xs text-whitey uppercase">Development</div>
            <div className="bg-stellar-dark rounded-lg p-2 mb-4 mr-3 text-xs  text-whitey uppercase">Design</div>
          </div>
          <h1 className="sm:text-lg text-2xl text-whitey font-bold">{name}</h1>
          <p className="text-sm sm:text-base text-stellar">{summary}</p>
        </div>
      </Link>
    </motion.div>
  )
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
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
      localFile {
        childImageSharp {
          fluid(maxWidth: 444, maxHeight: 342, quality: 85) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
    summary
  }
`
