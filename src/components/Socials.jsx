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
              facebook
              instagram
              pinterest
              twitter
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
                label="Dribbble" />
            <FooterLink 
                href={links.facebook} 
                icon={FaBehance} 
                label="Behance" />
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
      <li className="inline-block p-3">
        <a
          href={href}
          target="_blank"
          rel="noreferrer noopener"
          className="text-whitey hover:text-blue-600 transition duration-150 ease-in-out"
        >
          <span className="sr-only">{label}</span>
          <Icon className="w-5 h-5 fill-current" />
        </a>
      </li>
    )
  }

export default Socials