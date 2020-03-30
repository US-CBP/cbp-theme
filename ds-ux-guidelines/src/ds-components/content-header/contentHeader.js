/* import { Link } from "gatsby" */
import PropTypes from "prop-types"
import React from "react"
import { Tab, Tabs, TabList } from "react-tabs"
// import "react-tabs/style/react-tabs.scss"

// import menuTab from "../ds-tabs/tabs"

const ContentHeader = ({ title, contentType }) => {
  if (contentType === "component") {
    return (
      <div className="cbp-content__header">
        <h1 className="cbp-masthead-1 heading-pad-temp">{title}</h1>
        <Tabs className="tabs is-boxed" style={{ margin: "0 20px" }}>
          <TabList>
            <Tab selectedClassName="is-active">
              <a href="#Code" className="tab--text">
                Code
              </a>
            </Tab>
            <Tab selectedClassName="is-active">
              <a className="tab--text" href="#Design Guidelines">
                Design Guidelines
              </a>
            </Tab>
          </TabList>
        </Tabs>
        {/* <menuTab tabContent={["Code", "Design Guidelines"]} /> */}
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
