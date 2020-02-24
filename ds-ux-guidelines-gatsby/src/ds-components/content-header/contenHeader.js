/* import { Link } from "gatsby" */
import PropTypes from "prop-types"
import React from "react"

const ContentHeader = ({ title }) => (
  <div className="cbp-content__header">
    <h1 className="cbp-heading-1 one-half-pad-temp">{ title }</h1>
    <div className="tabs is-boxed">
      <ul>
        <li>
          <a href="#noID">
            <i className="fas fa-code fa-xs">&nbsp;</i>
            Code
          </a>
        </li>
        <li>
          <a href="#noID">
            <i className="fas fa-paint-brush fa-xs">&nbsp;</i>
            Design Guidelines
          </a>
        </li>
      </ul>
    </div>
  </div>
)

ContentHeader.propTypes = {
  siteTitle: PropTypes.string,
}

ContentHeader.defaultProps = {
  siteTitle: ``,
}

export default ContentHeader
