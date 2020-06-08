/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../header/header"
import Navigation from "../navigation/navigation"

// Development is set when running gatsby
// gastby develop - sets the environment to development
// gatsby build and serve - sets the environment to production
if (process.env.NODE_ENV === `development`) {
  try {
    require("./layout-development.scss")
  } catch (e) {
    console.log(e)
  }
} else {
  try {
    require("./layout.scss")
  } catch (e) {
    console.log(e)
  }
}

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      {/* cbp-ds-grid class is the main grid holder. */}
      <div className="cbp-ds-grid">
        <Header siteTitle={data.site.siteMetadata.title} />
        <Navigation />
        {/* cbp-content holds a pages main content. */}
        <section className="cbp-content">{children}</section>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
