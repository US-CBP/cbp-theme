import React from "react"
import { Tab, Tabs, TabList } from "react-tabs"
import "./tabs.scss"

const MenuTab = props => {
  return (
    <Tabs className="tabs is-boxed margin--tab">
      <TabList>
        {props.tabContent.map(name => {
          return (
            <Tab selectedClassName="is-active">
              <a href={"#" + name}>{name}</a>
            </Tab>
          )
        })}
      </TabList>
    </Tabs>
  )
}

MenuTab.tabsRole = "Tab"

export default MenuTab
