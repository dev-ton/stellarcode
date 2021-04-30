import React from "react"
import Illustration from "./Illustration"
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => (
  <section id="home" className="container pt-40 md:pt-64 lg:pb-16">

<div className="flex">
      <div className="w-full md:w-1/2">
    <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight text-gray-900">
      <span className="text-whitey">
      Welcome{" "}
      <span role="img" aria-label="waving hand">
        👋
      </span>,
      <br/>
      your way to the stellar website starts here.
      </span>
    </h1>
        <h3 className="text-2xl font-bold text-spaceLight pt-10">
        I’m Antonin, freelance Front-end developer and UI/UX designer. You can read more <AnchorLink href="#aboutme" offset="150">
          <span className="text-stellar hover:text-whitey transition duration-150 ease-in-out">about me</span></AnchorLink>, check out <AnchorLink href="#mywork" offset="150"><span className="text-stellar hover:text-whitey transition duration-150 ease-in-out">
            my work</span></AnchorLink> and if you have a project for me then <AnchorLink href="#contactme" offset="150"><span className="text-stellar hover:text-whitey transition duration-150 ease-in-out">send me a message!</span></AnchorLink>
        <br/>I’m looking forward to hear from you!
        </h3>
      </div>

      <div className="pl-56 w-1/2 hidden md:block">
      <Illustration/>
      </div>  

    </div>

    <div className="mx-auto square50 hidden md:block">
    <AnchorLink offset="150" href="#aboutme">
      <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="bouncyBounce">
      <path d="M14.5833 27.0833L25 37.5L35.4167 27.0833" stroke="#FFC857" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M14.5833 12.5L25 22.9167L35.4167 12.5" stroke="#FFC857" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      </AnchorLink>
    </div>
  </section>
)

export default Hero
