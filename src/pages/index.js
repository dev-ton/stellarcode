import React from "react"
import Hero from "../components/Hero"
import Layout from "../layouts/Layout"
import SiteMetadata from "../components/SiteMetadata"
import AboutMe from "../components/AboutMe"
import MyWork from "../components/MyWork"
import ContactMe from "../components/ContactMe"



const IndexPage = () => {
  return (
    <Layout className="bg-main">
      <SiteMetadata title="Home" description="Portfolio of Antonin Jech" />

      <Hero />

      <AboutMe/>
      
      <MyWork/>
      
      <ContactMe/>
     
    </Layout>
  )
}

export default IndexPage


