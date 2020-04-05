import React from "react"
import BackgroundImage from "gatsby-background-image"
import logo from "../../images/transparentLogo.png"

import "./HeroSection.scss"

const HeroSection = ({ heroImage }) => {
  return (
    <div className="hero-section">
      <BackgroundImage
        Tag="section"
        className="hero-section__background-image"
        fluid={heroImage}
        backgroundColor={`#040e18`}
      >
        <div className="hero-section__overlay"></div>
        <img src={logo} className="hero-section__logo" />
      </BackgroundImage>
    </div>
  )
}

export default HeroSection
