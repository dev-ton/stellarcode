import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { FaBehance, FaLinkedinIn, FaDribbble, FaGitAlt } from "react-icons/fa"

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
                 />
            <FooterLink 
                href={links.facebook} 
                icon={FaBehance} 
                label="Behance"
                />
            <FooterLink
                href={links.instagram}
                icon={FaLinkedinIn}
                label="Linkedin"
            />
            <FooterLink
                href={links.pinterest}
                icon={FaGitAlt}
                label="GitHub"
            />
          </ul>
    
      )
}


const FooterLink = ({ href, label, icon: Icon }) => {
    return (
      <li className="inline-block cursor-pointer p-3 bg-stellar-dark bg-opacity-0 rounded-full hover:bg-opacity-100 transition-opacity ease-in-out duration-100">
        <a
          href={href}
          target="_blank"
          rel="noreferrer noopener"
          className="text-whitey"
        >
          <span className="sr-only">{label}</span>
          <Icon className="w-5 h-5 fill-current" />
        </a>
      </li>
    )
  }

export default Socials