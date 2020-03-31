import PropTypes from "prop-types"
import React from "react"
import MenuTab from "../ds-tabs/tabs"

// import { Tab, Tabs, TabList } from "react-tabs"
// import "react-tabs/style/react-tabs.scss"

const ContentHeader = ({ title, contentType }) => {
  if (contentType === "component") {
    return (
      <div className="cbp-content__header">
        <h1 className="cbp-masthead-1 heading-pad-temp">{title}</h1>
        <MenuTab tabContent={["Code", "Design Guidelines"]} />
      </div>
    )
  } else {
    return (
      <div className="cbp-content__header">
        <h1 className="cbp-masthead-1 heading-pad-temp">{title}</h1>
      </div>
    )
  }
}

ContentHeader.propTypes = {
  siteTitle: PropTypes.string,
}

ContentHeader.defaultProps = {
  siteTitle: ``,
}

export default ContentHeader
