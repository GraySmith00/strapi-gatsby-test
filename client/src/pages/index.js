import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

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
  }
`

const IndexPage = ({ data }) => {
  console.log(process.env.ENABLE_GATSBY_REFRESH_ENDPOINT)
  const displayArticles = data.allStrapiArticle.edges.map(article => {
    return <p key={article.node.Title}>{article.node.Title}</p>
  })
  return (
    <Layout>
      <h1>hiiiiiiii</h1>
      {displayArticles}
    </Layout>
  )
}

export default IndexPage
