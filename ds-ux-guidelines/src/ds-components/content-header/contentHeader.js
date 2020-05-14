import PropTypes from "prop-types"
import React from "react"
// import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
// import "react-tabs/style/react-tabs.scss"

import MenuTab from "../ds-tabs/tabs"

const ContentHeader = ({ title, contentType }) => {
  if (contentType === "component") {
    return (
      <div className="cbp-content__header">
        <h1 className="cbp-masthead-1 cbp-spacing-stretch--regular">{title}</h1>
        {/* <MenuTab tabContent={["Code", "Design Guidelines"]} /> */}
      </div>
    )
  } else if (contentType === "foundation") {
    return (
      <div className="cbp-content__header">
        <h1 className="cbp-masthead-1 cbp-spacing-stretch--regular">{title}</h1>
        {/* <MenuTab tabContent={["Basics", "Research & References"]} /> */}
      </div>
    )
  } else {
    return (
      <div className="cbp-content__header">
        <h1 className="cbp-masthead-1 cbp-spacing-stretch--regular">{title}</h1>
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
