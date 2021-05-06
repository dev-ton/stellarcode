import PropTypes from "prop-types"
import React from "react"
import "typeface-inter"
import { motion } from "framer-motion"
import "../styles/style.css"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Header2 from "../components/Header2"

const Layout = ({ children, location}) => {
  return (
    <>
      <>
    {typeof window !== `undefined` ? window.location.pathname === '/' || window.location.hostname &&
      <Header/> : null
    }
    {typeof window !== `undefined` ? window.location.pathname !== '/' &&
      <Header2/> : null
    }
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
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  isHome: PropTypes.bool,
}

export default Layout
