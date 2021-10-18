import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Cards from "../components/Cards"





const MyWork = () => {
  const data = useStaticQuery(graphql`
  query MyWorkQuery {
    portfolio: allContentfulPortfolio {
      nodes {
        ...PortfolioCard
      }
    }
   
  }
`)

  

    return (

<section id="mywork" className="container pb-20 sm:pb-40">

      <h2 className="text-4xl sm:text-6xl font-extrabold leading-tight tracking-tight text-space-lighter pt-3 pb-8 text-center">
      My Work
      </h2>

      <div className="pb-12 lg:pb-16">
        {data.portfolio && data.portfolio.nodes.length > 0 ? (
          <Cards items={data.portfolio.nodes} />
        ) : (
          <div className="container">No projects found.</div>
        )}
      </div>

</section>

    )}

export default MyWork