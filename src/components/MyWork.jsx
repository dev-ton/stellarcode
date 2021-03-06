import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Cards from "./Cards"







const MyWork = () => {
  const data = useStaticQuery(graphql`
  query MyWorkQuery {
    portfolio: allContentfulPortfolio(filter: {node_locale: {eq: "en-US"}}) {
      nodes {
        ...PortfolioCard
      }
    }
   
  }
`)



  

    return (

     

<section id="mywork" className="sm:container pb-20 sm:pb-40">

    <div className="flex justify-center">
      <h2 className="text-4xl sm:text-6xl heading font-extrabold leading-tight tracking-tight pt-3 text-center">
      My Work
      </h2>
    </div>

      <div className="pb-0 sm:pb-12 lg:pb-16">
        {data.portfolio && data.portfolio.nodes.length > 0 ? (
          <Cards items={data.portfolio.nodes} />
        ) : (
          <div className="container">No projects found.</div>
        )}
      </div>

</section>

    )}

export default MyWork