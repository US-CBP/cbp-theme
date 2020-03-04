/* import { Link } from "gatsby" */
import PropTypes from "prop-types"
import React from "react"


//So far there is only contentType = component or 'none' (has no tabs). 
//Need to ditch the if/else statement if we implement additional types

const ContentHeader = ({ title, contentType }) => {
  if(contentType === "component"){
    return (
      <div className="cbp-content__header">
        <h1 className="cbp-masthead-1 heading-pad-temp">{title}</h1>
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
    );

  } else {
    //Omit the Code/Design tabs. 
    return (
      <div className="cbp-content__header">
        <h1 className="cbp-masthead-1 heading-pad-temp">{title}</h1>
      </div>
    );
  }
}

ContentHeader.propTypes = {
  siteTitle: PropTypes.string,
}

ContentHeader.defaultProps = {
  siteTitle: ``,
}

export default ContentHeader
