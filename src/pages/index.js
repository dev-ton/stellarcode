import { graphql } from "gatsby"
import React from "react"
import Cards from "../components/Cards"
import Hero from "../components/Hero"
import Layout from "../layouts/Layout"
import Newsletter from "../components/Newsletter"
import SiteMetadata from "../components/SiteMetadata"
import AboutMe from "../components/AboutMe"



const IndexPage = ({ data }) => {
  return (
    <Layout className="bg-main">
      <SiteMetadata title="Home" description="Portfolio of John Doe" />

      <Hero />

      <AboutMe/>
      

      
      <div className="container mt-40">

        <div className="flex flex-wrap">

            <div className="w-full container">
                <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight text-whitey">
                My Work
                </h2>
            </div>

            <div className="py-8 lg:py-16 w-full">
              {data.portfolio && data.portfolio.nodes.length > 0 ? (
                <Cards items={data.portfolio.nodes} />
              ) : (
                <div className="container">No projects found.</div>
              )}
            </div>
        
        </div>


      </div>

          

      <Newsletter />
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query HomeQuery {
    portfolio: allContentfulPortfolio {
      nodes {
        ...PortfolioCard
      }
    }
   
  }
`
