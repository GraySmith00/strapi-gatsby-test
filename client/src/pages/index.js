import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout/Layout"
import HeroSection from "../components/HeroSection"

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
  }
`

const IndexPage = ({ data }) => {
  const displayArticles = data.allStrapiArticle.edges.map(article => {
    return <p key={article.node.Title}>{article.node.Title}</p>
  })
  console.log("data", data)
  return (
    <Layout>
      <HeroSection heroImage={data.heroImage.childImageSharp.fluid} />
      {displayArticles}
    </Layout>
  )
}

export default IndexPage
