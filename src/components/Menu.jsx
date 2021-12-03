import React, { useState } from "react"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Scrollspy from 'react-scrollspy'
import { graphql, useStaticQuery } from "gatsby"
import { FaBars } from "@react-icons/all-files/fa/FaBars"
import MenuMobile from "./MenuMobile"





const Menu = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const { site } = useStaticQuery(graphql`
    query {
      site {
        data: siteMetadata {
          menu {
            name
            to
            spy
          }
        }
      }
    }
  `)

  


  return (
<>
    <nav>
        <button
          className="sm:hidden pt-3 pr-3"
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open Menu"
        >
          <FaBars className="h-6 w-auto text-gray-300 fill-current -mt-1" />
        </button>

        <div className="hidden sm:block">
            <Scrollspy
            items={site.data.menu.map(item => item.spy.toLowerCase())}
            currentClassName="active"
            offset={-150}
            >
                {site.data.menu.map((link, key) => (
                    <AnchorLink
                    key={`menu_desktop_link${key}`}
                    className="ml-6 sm:ml-8 text-2xl sm:text-base font-bold px-px border-b-2 pb-2 border-transparent text-whiteLighter hover:text-stellar transition duration-150 ease-in-out"
                    href={link.to}
                    offset='50'
                    >
                    {link.name}
                    </AnchorLink>
                ))}
            </Scrollspy>
        </div>
      
      
    </nav>
  
  <MenuMobile
  isOpen={isMenuOpen}
  setIsOpen={setIsMenuOpen}
  links={site.data.menu}
/>
</>
  )


}

export default Menu