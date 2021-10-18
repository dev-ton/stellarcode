import React from "react"
import PropTypes from "prop-types"
import { motion } from "framer-motion"
import "../styles/style.css"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Header2 from "../components/Header2"
import Headroom from 'react-headroom'



const Layout = ({ children, menuToggle }) => {
  


  return (
    <>
        <Headroom>
      {menuToggle ? <Header/> : <Header2/> }
        </Headroom>

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
