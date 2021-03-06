import React from "react"
import "../styles/style.css";
import PropTypes from "prop-types"
import { motion } from "framer-motion"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Header2 from "../components/Header2"
import ScrollUp from "../components/ScrollUp"




const Layout = ({ children, menuToggle }) => {
  


  return (
    <>
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
            stiffness: 65,
            duration: 0.15
          }}
        >
      {children}
      </motion.main>
      <ScrollUp />
      <Footer />
     </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  menuToggle: PropTypes.string,
}

export default Layout
