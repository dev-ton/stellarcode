import React from "react"
import Cards from "../components/Cards"





const MyWork = ({ props }) => {

    const portfolioData = props.pdata
    const portfolioNodes = props.pnodes

    return (

<div className="container">

      <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight text-whitey">
      My Work
      </h2>

      <div className="py-12 lg:py-16">
        {portfolioData && portfolioNodes.length > 0 ? (
          <Cards items={portfolioNodes} />
        ) : (
          <div className="container">No projects found.</div>
        )}
      </div>

</div>

    )}

export default MyWork