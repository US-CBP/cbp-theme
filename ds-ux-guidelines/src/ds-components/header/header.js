import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ title }) => (
  <header className="cbp-header">
    <a className="cbp-header__skipnav" href="#main-content">
      Skip to main content
    </a>
    <nav className="cbp-header__main level">
      <div className="level-left">
        <div className="level-item">
          {/* <!-- CBP Logo  --> */}
          <Link to="/" className="cbp-logo">
            <strong>CBP</strong>
            &nbsp;
            <span> Design System </span>
          </Link>
        </div>
      </div>

      <div className="level-right">
        <a href="#noId" className="is-size-7">
          &nbsp; &nbsp; Changelog
        </a>
        &nbsp;
        <a href="https://github.com/US-CBP/cbp-theme" className="is-size-7">
          <i className="fab fa-github"></i>
          &nbsp; View on Github
        </a>
      </div>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
