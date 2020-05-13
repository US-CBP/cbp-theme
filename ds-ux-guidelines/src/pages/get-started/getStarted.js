import React from "react"
import Layout from "../../ds-components/layout/layout"
import ContentHeader from "../../ds-components/content-header/contentHeader"
import SEO from "../../ds-components/seo"
import CodeSnippet from "../../ds-components/codeSnippet/codeSnippet"

const npmInstall = `npm install cbp-ds --save`

const getStarted = () => (
  <Layout>
    <SEO title="CBP Design System | Get Started" />
    <ContentHeader title="Get Started" contentType="" />
    <article className="spacing-wrapper">
      <section>
        <div id="description">
          <p className="cbp-body">
            This is the successor to the{" "}
            <a
              href="https://us-cbp.github.io/cbp-style-guide/"
              target="__blank"
            >
              CBP Theme.
            </a>{" "}
            It is a design system that consists of the UX guidance and CSS to
            support that guideance. It builds on the CBP Theme but is more
            focused on the guidance.
          </p>
        </div>

        <h2 className="cbp-heading-2 section-pad-temp">Quick Start</h2>
        <h3 className="cbp-heading-3">Installation</h3>

        <p className="cbp-body">
          The recommended way to get the latest CBP DS CSS is by saving as a
          dependency via{" "}
          <a
            href="https://docs.npmjs.com/about-npm/index.html"
            target="__blank"
          >
            npm.
          </a>
          <br />
          <br />
          From your npm project, simply run:
        </p>
        <CodeSnippet language="language-bash" code={npmInstall} />

        <h2 className="cbp-heading-2">Contributing</h2>

        <p className="cbp-body">
          We welcome contributions, please see our{" "}
          <a
            href="https://github.com/US-CBP/open-source-policy/blob/master/CONTRIBUTING.md"
            target="__blank"
          >
            Contribution Policy.
          </a>
          To get started developing, see Developer-README.md.
        </p>

        <h2 className="cbp-heading-2">License</h2>

        <p className="cbp-body">
          Please refer to{" "}
          <a
            href="https://github.com/US-CBP/open-source-policy/blob/master/LICENSE.md"
            target="__blank"
          >
            CBP Open Source License.
          </a>
        </p>
      </section>
    </article>
  </Layout>
)

export default getStarted
