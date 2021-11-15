import React from "react"
import Layout from "../layouts/Layout"
import SiteMetadata from "../components/SiteMetadata"
import { graphql, StaticQuery } from "gatsby"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import ContactMe from "../components/ContactMe"




const AboutPage = () => (

  
  <StaticQuery
    query={graphql`
    {
      contentfulMyStory {
        title
        subHeadline {
          subHeadline
        }
        firstParagraph {
          firstParagraph
        }
        secondParagraph {
          secondParagraph
        }
        thirdParagraph {
          thirdParagraph
        }
        fourthParagraph {
          fourthParagraph
        }
        fifthParagraph {
          fifthParagraph
        }
        sixthParagraph {
          sixthParagraph
        }
        seventhParagraph {
          seventhParagraph
        }
        eightParagraph {
          eightParagraph
        }
        resume {
          file {
          url
        }
        }
        msImage1 {
            gatsbyImageData(
              height: 400
              width: 400
              formats: [AUTO, WEBP]
              placeholder: BLURRED
            )
        title
      }
      msImage2 {
            gatsbyImageData(
              height: 400
              width: 400
              formats: [AUTO, WEBP]
              placeholder: BLURRED
            )
        title
      }
      msImage3 {
            gatsbyImageData(
              height: 400
              width: 400
              formats: [AUTO, WEBP]
              placeholder: BLURRED
            )
        title
      }
      }
    }
  `}

    

    render={data => (
  <Layout>
    <SiteMetadata title="About" description="Sample description" />

   

      <div className="container py-12 lg:pb-16">
      
       <div className="topSpace h-0 sm:h-12"></div>

    

        <section className="flex flex-wrap pb-5">
            <header className="w-8/12 pr-0 sm:pr-16">
            <h1 className="text-whiteyDarker tracking-wide heading -mb-8 sm:-mb-0">
            {data.contentfulMyStory.title}
            </h1>
            </header>

            <div className="w-4/12 block sm:hidden">
            <GatsbyImage className="space-dark-shadow rounded-full block sm:hidden w-16 h-16 mx-8" image={data.contentfulMyStory.msImage2.gatsbyImageData} loading="lazy" alt={data.contentfulMyStory.msImage2.title} />
            </div>
        </section>

        <section className="flex flex-wrap pb-10 sm:pt-6">
            <article className="w-full sm:w-8/12 pr-0 sm:pr-16">
            <h2 className="text-whiteyDarker">
            {data.contentfulMyStory.subHeadline.subHeadline}
            </h2>

            <p className="text-whiteyDarker pt-10 sm:pt-0">
            {data.contentfulMyStory.firstParagraph.firstParagraph}
            </p>
            </article>

            <div className="w-full sm:w-4/12">
            <GatsbyImage className="space-dark-shadow rounded-md hidden sm:block" image={data.contentfulMyStory.msImage2.gatsbyImageData} loading="lazy" alt={data.contentfulMyStory.msImage2.title} />
            </div>
        </section>

        <section className="py-6 sm:py-12">
        <blockquote className="text-whiteyDarker">
            {data.contentfulMyStory.thirdParagraph.thirdParagraph}
        </blockquote>
        </section>

        <section className="flex flex-wrap py-10">

            <div className="w-full sm:w-4/12 block sm:hidden">
            <StaticImage className="w-full block sm:hidden" src="../images/auc_icon.svg" alt="design with accessibility and usability in mind" placeholder="blurred" layout="constrained" objectPosition="50% 50%" objectFit="contain"/>
            </div>

            <article className="w-full sm:w-8/12 pr-0 sm:pr-16">
            <p className="text-whiteyDarker">
            {data.contentfulMyStory.secondParagraph.secondParagraph}
            </p>
            </article>

            <div className="w-full sm:w-4/12 hidden sm:block">
            <StaticImage className="w-full hidden sm:block" src="../images/auc_icon.svg" alt="design with accessibility and usability in mind" placeholder="blurred" layout="constrained" objectPosition="50% 50%" objectFit="contain"/>
            </div>
        </section>


        <section className="flex flex-wrap pt-0 sm:pt-5 pb-6 sm:pb-10">

            <div className="w-full sm:w-4/12 hidden sm:block">
            <GatsbyImage className="space-dark-shadow rounded-md hidden sm:block" image={data.contentfulMyStory.msImage1.gatsbyImageData} loading="lazy" alt={data.contentfulMyStory.msImage1.title} />
            </div>

            <article className="w-full sm:w-8/12 pl-0 sm:pl-16">
            <h3 className="font-bold text-stellarDarker">
                  {data.contentfulMyStory.fourthParagraph.fourthParagraph}
            </h3>

            <p className="text-whiteyDarker py-6 sm:py-6">
            {data.contentfulMyStory.fifthParagraph.fifthParagraph}
            </p>

            <div className="w-full py-6 sm:py-0 block sm:hidden">
            <GatsbyImage className="space-dark-shadow rounded-md block sm:hidden" image={data.contentfulMyStory.msImage1.gatsbyImageData} loading="lazy" alt={data.contentfulMyStory.msImage1.title} />
            </div>

            <p className="text-whiteyDarker py-6 sm:py-0">
            {data.contentfulMyStory.sixthParagraph.sixthParagraph}
            </p>
            </article>

           
        </section>


        <section className="flex flex-wrap pt-0 sm:pt-5 pb-6 sm:pb-10">

        <div className="w-full sm:w-4/12 pb-6 sm:pb-0 block sm:hidden">
          <GatsbyImage className="space-dark-shadow rounded-md block sm:hidden" image={data.contentfulMyStory.msImage3.gatsbyImageData} loading="lazy" alt={data.contentfulMyStory.msImage3.title} />
          </div>

          <article className="w-full sm:w-8/12 pr-0 sm:pr-16">

          <p className="text-whiteyDarker py-6 sm:py-0">
          {data.contentfulMyStory.seventhParagraph.seventhParagraph}
          </p>

          <p className="text-whiteyDarker font-bold">
          {data.contentfulMyStory.eightParagraph.eightParagraph}
          </p>
          </article>

          <div className="w-full sm:w-4/12 hidden sm:block">
          <GatsbyImage className="space-dark-shadow rounded-md hidden sm:block" image={data.contentfulMyStory.msImage3.gatsbyImageData} loading="lazy" alt={data.contentfulMyStory.msImage3.title} />
          </div>


        </section>

        <ContactMe hasContainer={false}/>
        
      </div>
    

  </Layout>


)}
/>
)

export default AboutPage


