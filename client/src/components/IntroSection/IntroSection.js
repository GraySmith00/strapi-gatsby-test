import React from "react"
import Card from "../Card"
import Img from "gatsby-image"

import "./IntroSection.scss"

const IntroSection = ({ cardImage }) => {
  return (
    <div className="intro-section section">
      <div className="intro-section__inner">
        <div className="intro-section__text">
          <h2 className="intro-section__title section-title">
            <span>FRESH</span>
            <span>CUT</span>
            <span>FLOWERS</span>
          </h2>
          <div className="intro-section__paragraph paragraph-text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste
            ipsam, natus dolorum fugit vel recusandae sapiente molestiae
            officiis cum, quo ea ducimus? Animi numquam eius dolore culpa cumque
            facere natus!
          </div>
        </div>
        <Card className="intro-section__card">
          <Img className="intro-section__card-image" fluid={cardImage} />
        </Card>
      </div>
    </div>
  )
}

export default IntroSection
