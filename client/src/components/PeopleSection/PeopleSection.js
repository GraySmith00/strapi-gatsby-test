import React from "react"
import { useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import Card from "../Card"

import "./PeopleSection.scss"

const PeopleSection = () => {
  const data = useStaticQuery(graphql`
    query {
      bayImage: file(relativePath: { eq: "IMG_0402-crop-web-res.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      winnieImage: file(relativePath: { eq: "IMG_0463-crop-web-res.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      margoImage: file(relativePath: { eq: "IMG_0409-crop-web-res.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  console.log("data", data)

  const people = [
    { name: "Bay Elizabeth", image: data.bayImage },
    { name: "Winnie", image: data.winnieImage },
    { name: "Margo Jo", image: data.margoImage },
  ]

  const displayPeople = people.map(person => {
    console.log(person.image.childImageSharp.fluid)
    return (
      <Card className="people-section__name-card">
        <div className="people-section__image-wrapper">
          <Img
            fluid={person.image.childImageSharp.fluid}
            className="people-section__image"
          />
        </div>
        <p className="people-section__name">{person.name}</p>
      </Card>
    )
  })

  return (
    <div className="people-section section">
      <div className="people-section__inner">{displayPeople}</div>
    </div>
  )
}

export default PeopleSection
