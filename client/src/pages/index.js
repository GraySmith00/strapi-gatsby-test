import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout/Layout"
import HeroSection from "../components/HeroSection"
import IntroSection from "../components/IntroSection"

import "./index.scss"
import PeopleSection from "../components/PeopleSection"

export const query = graphql`
  query MyQuery {
    allStrapiArticle {
      edges {
        node {
          id
          Title
        }
      }
    }
    heroImage: file(id: { eq: "4291cbdc-e69b-5539-9a84-f08ab22d96c2" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    introImage: file(id: { eq: "f8c98a50-2ad7-537f-8893-609c917926ad" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const IndexPage = ({ data }) => {
  const displayArticles = data.allStrapiArticle.edges.map(article => {
    return <p key={article.node.Title}>{article.node.Title}</p>
  })

  return (
    <Layout>
      <div className="home-page page">
        <HeroSection heroImage={data.heroImage.childImageSharp.fluid} />
        <IntroSection cardImage={data.introImage.childImageSharp.fluid} />
        <PeopleSection />
      </div>
    </Layout>
  )
}

export default IndexPage
