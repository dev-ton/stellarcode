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
  const image = getImage(thumbnail)

  return (
    <motion.div className=" bg-space-dark cyber-bg h-full shadow-lg rounded-md overflow-hidden group card"
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
            <div className="bg-space-darkest rounded-lg p-2 mb-4 mr-3 text-xs text-whiteyDarker uppercase">Development</div>
            <div className="bg-space-darkest rounded-lg p-2 mb-4 mr-3 text-xs text-whiteyDarker uppercase">Design</div>
          </div>
          <div className="w-full sm:w-8/12 sm:float-left inline-block">
          <h3 className=" text-whiteyDarker font-bold pb-0">{name}</h3>
          <p className="text-stellar">{summary}</p>
          </div>
          <motion.div className="hidden sm:w-4/12 sm:inline-block" variants={arrowMotion}>
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
          gatsbyImageData(
              height: 342
              width:446
              formats: [AUTO, WEBP]
              placeholder: BLURRED
            )
    }
    summary
  }
`
