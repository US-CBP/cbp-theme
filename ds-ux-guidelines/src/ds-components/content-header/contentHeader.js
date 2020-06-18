import PropTypes from "prop-types"
import React from "react"

const ContentHeader = ({ title }) => {
  return (
    <div className="cbp-content__header">
      <h1 className="cbp-masthead-1 heading--main">
        <strong>{title}</strong>
      </h1>
    </div>
  )
}

ContentHeader.propTypes = {
  siteTitle: PropTypes.string,
}

ContentHeader.defaultProps = {
  siteTitle: ``,
}

export default ContentHeader
