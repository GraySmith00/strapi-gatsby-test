import React from "react"
import "./Card.scss"

const Card = ({ children, className }) => {
  return <div className={`card ${className || ""}`}>{children}</div>
}

export default Card
