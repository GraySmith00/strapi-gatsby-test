import React from "react"
import { Link } from "gatsby"
import { FaInstagram, FaFacebook } from "react-icons/fa"

import "./SocialLinks.scss"

const SocialLinks = ({ className }) => {
  return (
    <div className={`social-links ${className || ""}`}>
      <a
        href="https://www.instagram.com/baymeadow_farms/"
        className="social-links__link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram className="social-links__icon" />
      </a>
      <a
        href="https://www.facebook.com/baymeadowfarms"
        className="social-links__link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebook className="social-links__icon" />
      </a>
    </div>
  )
}

export default SocialLinks
