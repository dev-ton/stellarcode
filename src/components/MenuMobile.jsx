import { motion } from "framer-motion"
import PropTypes from "prop-types"
import React from "react"
import Overlay from "./Overlay"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Scrollspy from 'react-scrollspy'

const menuItem = {
  closed: {
    opacity: 0,
    transition: {
      delay: 0,
      duration: 0,
    },
    x: -20,
  },
  open: key => ({
    opacity: 1,
    transition: {
      delay: 0.25 + key * 0.1,
      type: "tween",
    },
    x: 0,
  }),
}

const MenuMobile = ({ links, isOpen, setIsOpen }) => {
  return (
    <Overlay isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className="container flex flex-col justify-center">
        <ul className="text-center">

        <Scrollspy
            items={links.map(item => item.spy.toLowerCase())}
            currentClassName="active"
            offset={-150}
        >

          {links.map((link, key) => (
            <motion.li
              className="my-3"
              animate={isOpen ? "open" : "closed"}
              custom={key}
              key={`menu_mobile_link${key}`}
              variants={menuItem}
            >
              <AnchorLink
                className="font-semibold text-4xl text-whiteLighter"
                href={link.to}
                offset='150'
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </AnchorLink>
            </motion.li>
          ))}

</Scrollspy>

        </ul>
      </div>
    </Overlay>
  )
}

MenuMobile.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired,
    })
  ),
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
}

export default MenuMobile
