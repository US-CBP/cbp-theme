import React from "react"
import Layout from "../../ds-components/layout/layout"
import ContentHeader from "../../ds-components/content-header/contentHeader"
import SEO from "../../ds-components/seo"
import CodeSnippet from "../../ds-components/codeSnippet/codeSnippet"

const ligatureCode = ` p {
    font-feature-settings: "liga";
    -webkit-font-feature-settings: "liga";
    -moz-font-feature-settings: "liga";
    text-rendering: optimizeLegibility;
  }
`.trim()

const LayoutPage = () => (
  <Layout>
    <SEO title="CBP Design System | Layouts" />
    <ContentHeader title="Layouts" contentType="foundation" />

    <article>
      <CodeSnippet code={ligatureCode} language="language-css" />
      <p class="cbp-body section-pad-temp">
        We need more paper products need full resourcing and support from a
        cross-functional team in order to be built, maintained, and evolved.
        Bleeding edge. It's about managing expectations overcome key issues to
        meet key milestones, and product launch and table the discussion offline
        this discussion nor can you ballpark the cost per unit for me, yet
        guerrilla marketing.
        <br />
        <br />
        We want to see more charts big data or five-year strategic plan you
        better eat a reality sandwich before you walk back in that boardroom.
        First-order optimal strategies powerPointless a loss a day will keep you
        focus, product management breakout fastworks. Clear blue water viral
        engagement. Take five, punch the tree, and come back in here with a
        clear head manage expectations, race without a finish line anti-pattern
        parallel path but upstream selling but we need to build it so that it
        scales.
      </p>

      <section class="section-spacing">
        <h1 class="cbp-heading-1 section-pad-temp">Stuff About Layouts</h1>
        <p class="cbp-body">
          Drop-dead date optics we need to dialog around your choice of work
          attire. You gotta smoke test your hypothesis powerPointless, for your
          work on this project has been really impactful corporate synergy can
          you ballpark the cost per unit for me. Run it up the flag pole closing
          these latest prospects is like putting socks on an octopus what do you
          feel you would bring to the table if you were hired for this position.
        </p>
      </section>
    </article>
  </Layout>
)

export default LayoutPage
