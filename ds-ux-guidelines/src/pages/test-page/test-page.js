import React from "react"
import Layout from "../../ds-components/layout/layout"
import "./test-page.scss"
// import ContentHeader from "../../ds-components/content-header/contentHeader"
// import SEO from "../../ds-components/seo"

/*
  sm: 1-5 <599
  m: 1-9 600-1023
  lg: 1-13 1024-1439
  xl: 1-13 <1440
*/

const TestPage = () => (
  

    <div className="test cbp-grid">
      <div className="cbp-grid-1-5  md:cbp-grid-1-6 lg:cbp-grid-3-11">
        Full Row
      </div>

      {/* <div className="cbp-grid-2-12">
        Partial Row
      </div> */}
    </div>


)

export default TestPage