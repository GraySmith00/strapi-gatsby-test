import React from "react"
import { Link } from "gatsby"

import "./Nav.scss"
import SocialLinks from "../SocialLinks"

const Nav = () => {
  return (
    <div className="nav">
      <div className="nav__inner">
        <h3 className="nav__brand light-text">BAY MEADOW FARMS</h3>
        <div className="nav__right">
          <nav className="nav__nav">
            <ul>
              <li className="nav__nav-item">
                <Link
                  className="nav__link"
                  activeClassName="nav__link--active"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav__nav-item">
                <Link
                  className="nav__link"
                  activeClassName="nav__link--active"
                  to="/about"
                >
                  About
                </Link>
              </li>
            </ul>
          </nav>
          <SocialLinks />
        </div>
      </div>
    </div>
  )
}

export default Nav
