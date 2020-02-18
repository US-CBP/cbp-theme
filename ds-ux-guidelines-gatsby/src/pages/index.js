import React from "react"
/* import { Link } from "gatsby" */

import Layout from "../ds-components/layout/layout"
import ContentHeader from "../ds-components/content-header/contenHeader"
/* import Image from "../ds-components/image" */
import SEO from "../ds-components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="CBP Design System | Home" />
    <ContentHeader title="Home Page" />
    <article>
      <h1 className="cbp-masthead-1">CBP <b>Design System</b> Library</h1>
    </article>
    
  </Layout>
)

export default IndexPage
