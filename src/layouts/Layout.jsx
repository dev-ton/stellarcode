import PropTypes from "prop-types"
import { graphql, useStaticQuery } from 'gatsby'
import React from "react"
import "typeface-inter"
import { motion } from "framer-motion"
import "../styles/style.css"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Header2 from "../components/Header2"
import BackgroundImage from 'gatsby-background-image'



const Layout = ({ children, menuToggle }) => {
  const data = useStaticQuery(
    graphql`
      query         {
          file(relativePath: {eq: "landscape-min.png"}) {
            childImageSharp {
              fluid(maxWidth: 2756) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
    `
  )

  const imageData = data.file.childImageSharp.fluid

  return (
    <BackgroundImage
        Tag="div"
        fluid={imageData}
        className="bodyBackground"
        style={{
          backgroundSize: 'contain',
          backgroundPosition: 'bottom center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <>
      {menuToggle ? <Header/> : <Header2/> }
        </>

      <motion.main
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 200 }}
          transition={{
            type: "spring",
            mass: 0.35,
            stiffness: 70,
            duration: 0.3
          }}
        >
      {children}
      </motion.main>
      <Footer />
      </BackgroundImage>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  isHome: PropTypes.bool,
}

export default Layout
