import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql, Link } from "gatsby"
import PropTypes from "prop-types"
import { motion } from "framer-motion"
import { FaAngleRight } from "@react-icons/all-files/fa/FaAngleRight"


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

const arrowMotion = {
  rest: { opacity: 0, x: -30, ease: "easeOut", duration: 0.15, type: "tween" },
  hover: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.25,
      type: "tween",
      ease: "easeIn"
    }
  }
};

const Card = props => {

  const { name, slug, summary, thumbnail } = props
  const image = getImage(thumbnail.localFile.childImageSharp)

  return (
    <motion.div className=" bg-space-dark bg-opacity-40 h-full shadow-lg rounded-md overflow-hidden group card"
      initial="rest"
      whileHover="hover"
      animate="rest"
      variants={cardMotion}>
      
      
      <Link to={`/${slug}`}>
        <div className="pt-3 group-hover:opacity-75 transition duration-150 ease-in-out">
        <GatsbyImage image={image} alt={name} />
        </div>
        <div className="p-4 pb-6 sm:p-5">
          <div className="flex">
            <div className="bg-space-darker rounded-lg p-2 mb-4 mr-3 text-xs text-whitey uppercase">Development</div>
            <div className="bg-space-darker rounded-lg p-2 mb-4 mr-3 text-xs  text-whitey uppercase">Design</div>
          </div>
          <div className="w-8/12 float-left inline-block">
          <h1 className="sm:text-lg text-2xl text-whitey font-bold">{name}</h1>
          <p className="text-sm sm:text-base text-stellar">{summary}</p>
          </div>
          <motion.div className="w-4/12 inline-block" variants={arrowMotion}>
            <FaAngleRight className="cardArrow mx-auto opacity-0 group-hover:opacity-100 transition duration-150 ease-in-out"/>
          </motion.div>
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
          gatsbyImageData(
              height: 342
              width:446
              quality: 85
              formats: [AUTO, WEBP]
              placeholder: BLURRED
              transformOptions: {cropFocus: CENTER, fit: COVER}
            )
        }
      }
    }
    summary
  }
`
