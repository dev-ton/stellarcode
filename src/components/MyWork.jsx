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

<section id="mywork" className="container mt-20">

      <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight text-stellar pb-8">
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