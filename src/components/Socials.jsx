import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { FaBehance } from "@react-icons/all-files/fa/FaBehance"
import { FaLinkedinIn } from "@react-icons/all-files/fa/FaLinkedinIn"
import { FaDribbble } from "@react-icons/all-files/fa/FaDribbble"
import { FaGitAlt } from "@react-icons/all-files/fa/FaGitAlt"

const Socials = () => {
    const {
      site: {
        meta: { links },
      },
    } = useStaticQuery(graphql`
      query FooterQuery {
        site {
          meta: siteMetadata {
            links {
              dribbble
              behance
              linkedin
              github
            }
          }
        }
      }
    `)

    return (
        
          <ul className="flex justify-center md:order-2">
            <FooterLink 
                href={links.twitter} 
                icon={FaDribbble} 
                label="Dribbble"
                hide={false}
                 />
            <FooterLink 
                href={links.facebook} 
                icon={FaBehance} 
                label="Behance"
                hide={true}
                />
            <FooterLink
                href={links.instagram}
                icon={FaLinkedinIn}
                label="Linkedin"
                hide={false}
            />
            <FooterLink
                href={links.pinterest}
                icon={FaGitAlt}
                label="GitHub"
                hide={false}
            />
          </ul>
    
      )
}


const FooterLink = ({ href, label, icon: Icon, hide }) => {
    return (
      <li style={{display: hide ? 'none' : 'inlineBlock'}} className="cursor-pointer p-3 group">
        <a
          href={href}
          target="_blank"
          rel="noreferrer noopener"
          className="text-whiteyDarker"
        >
          <span className="sr-only">{label}</span>
          <Icon className="w-5 h-5 fill-current relative top-0 z-10" />
          <div className="w-full h-full bg-stellar-dark opacity-0 rounded-full socialBg group-hover:opacity-100 transition-all ease-linear duration-200"></div>
        </a>
      </li>
    )
  }

export default Socials