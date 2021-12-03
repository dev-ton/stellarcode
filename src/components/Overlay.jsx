import React, { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import PropTypes from "prop-types"
import { FaTimes } from "@react-icons/all-files/fa/FaTimes"

const backgroundVariants = {
  closed: {
    opacity: 0,
    right: 0,
    top: 0,
    width: 0,
    transitionEnd: { 
      display: "none" },
  },
  open: {
    display: "block",
    opacity: 1,
    right: 0,
    top: 0,
    width: '100%',
  },
}

const closeButtonVariants = {
  closed: {
    opacity: 0,
    rotate: 0,
    transition: {
      duration: 0.15,
    },
  },
  open: {
    opacity: 1,
    rotate: 90,
    transition: {
      delay: 0.75,
      duration: 0.5,
    },
  },
}

const childrenVariants = {
  closed: {
    opacity: 0,
  },
  open: {
    opacity: 1,
    transition: {
      delay: 0.25,
    },
  },
}



function Overlay({ children, isOpen, setIsOpen }) {
  function closeOnEscapeKey(event) {
    if (event.keyCode === 27 && isOpen) {
      setIsOpen(false)
    }
  }

  const ref = useRef()

  useEffect(() => {
    window.addEventListener("keydown", closeOnEscapeKey)
    return () => {
      window.removeEventListener("keydown", closeOnEscapeKey)
    }
  })

  useEffect(() => {
    const checkIfClickedOutside = e => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (isOpen && ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", checkIfClickedOutside)
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside)
    }
  }, [isOpen, setIsOpen])



  return (
    <div className="wrapper w-full" ref={ref}>
    <motion.div
      animate={isOpen ? "open" : "closed"}
      className="fixed z-50 block text-whiteLighter"
      initial="closed"
      variants={backgroundVariants}
    >
      <div className="flex flex-col h-full max-h-full">
        <div className="fixed top-0 right-0 mt-4 mr-4">
          <motion.button
            initial="closed"
            animate={isOpen ? "open" : "closed"}
            variants={closeButtonVariants}
            className="text-whiteLighter focus:outline-none select-none highlight-none"
            onClick={() => setIsOpen(false)}
          >
            <FaTimes className="h-8 w-auto fill-current" />
          </motion.button>
        </div>
        <motion.div
          className="flex flex-grow bg-space-dark py-20"
          animate={isOpen ? "open" : "closed"}
          variants={childrenVariants}
        >
          {children}
        </motion.div>
      </div>
    </motion.div>
    </div>
  )
}

Overlay.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
}

export default Overlay
