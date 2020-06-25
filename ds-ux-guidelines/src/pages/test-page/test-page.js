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
      <div className="cbp-col-1-2  cbp-col-md-2-4 cbp-col-lg-3-6">
        Indented Row.
      </div>
      <div className="cbp-col-full">
        Full Row.
      </div>

      <div class="cbp-col-2-12">
        Indented two columns.
      </div>
    </div>


)

export default TestPage