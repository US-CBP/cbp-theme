import React from "react"
import { Tab, TabList } from "react-tabs"
import "./tabs.scss"

// TabList component of react-tabs. Takes props of tab names from the parent and renders tabs.
//Important to make sure that the number of tabs matches the number of TabPanels.
//react-tabs structure (must be followed, or else tabs won't display/function correctly):
//<Tab> the entire react-tabs structure needs to be under this component.
//<TabList> custom component located here (tabs.js) that populates the required tabs
//<Tabs></Tabs>
//</TabList>
//<TabPanel></TabPanel> Content for each tab
//</Tab>

function CustomTabs(category) {
  return (
    <TabList>
      {category.map(name => {
        return (
          <Tab selectedClassName="is-active">
            <a href="#">{name}</a>
          </Tab>
        )
      })}
    </TabList>
  )
}
CustomTabs.tabsRole = "TabList"
export default CustomTabs
