import React from "react"
/* import { Link } from "gatsby" */

import Layout from "../ds-components/layout/layout"
import ContentHeader from "../ds-components/content-header/contentHeader"
import SEO from "../ds-components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="CBP Design System | Home" />
    <ContentHeader title="Home Page" />
    <article className="spacing-wrapper">
      <section name="main" id="main">
        <h1 className="cbp-masthead-1">
          CBP <b>Design System</b> Library
        </h1>
      </section>
    </article>
  </Layout>
)

export default IndexPage
