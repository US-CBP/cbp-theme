import React from "react"
import Layout from "../../ds-components/layout/layout"
import ContentHeader from "../../ds-components/content-header/contentHeader"
import SEO from "../../ds-components/seo"


const TypographyPage = () => (
  <Layout>
    <SEO title="CBP Design System | Typography" />
    <ContentHeader title="Typography" contentType="foundation"/>

    <article>
      <p class="cbp-body">
        Having a well thought-out and managed typography system drives retention
        and understanding of information, and helps our users make the informed
        decisions that keep our country safe. This isn't simply what typeface we
        would like to use, but also the hierarchy, treatments, spacial
        relationships, and other refinements which augment legibility.
        <br /> <br />
        At its core, values such as consistency, accessibility, and legibility
        should be valued above all others.
      </p>

      <section class="section-spacing">
      <h2 class="cbp-heading-2 section-pad-temp"> Usage </h2>

      <h5 class="cbp-heading-5">Using the 14px Base Scale</h5>
      <br/>

      <h6 class="cbp-heading-6">Pros</h6><br/>
      <ul>
        <li>- Minimal disruption to existing site architectures.</li>
        <li>- A lot of heading values sync up with existing theme values.</li>
        <li>- Keeps base value on the low end of the equation to help our more dense applications.</li>
      </ul>

      <br/>

      <h6 class="cbp-heading-6">Cons</h6><br/>
      <ul class="section-pad-temp">
        <li>- Because the base value is on the lower side (default is 16px), some of our users might become dependent on zoom features.</li>
        <li>- There is still not a lot of size variation between text levels (Although this can be both a pro and a con to have them match up).</li>
      </ul>

      <h5 class="cbp-heading-5">Line Height</h5><br/>
      <p class="cbp-body section-pad-temp">
        Human beings operate on identifying patterns. The Principle of Repetition brings familiarity to different items in a layout. It gives the layout structure.
        When we mix this with typography, we enhance overall legibility because the user's eye is allowed to flow smoothly and is not interrupted by unexpected and jarring relationships between items in the layout.
        <br/><br/>
        This is mostly manifested in what is referred to as the "Baseline Grid". This grid is different from the various other terms referred to as grid in web design in that it specifically refers to a set of 
        "invisible" lines that go down the page to which all layout elements are aligned. Because communication of information is at the heart of all websites and applications, this grid is tightly tied
        to our typography settings. Specifically to the line-height of body copy (because it is the base unit in our typographical system).
        <br/><br/>
        Earlier we established that our body copy will be 14px. It's a good industry standard practice to use a 4px baseline grid, meaning all spacing will be a multiple or factor of 4.
      </p>
    </section>

    <section class="section-spacing">
      <h2 class="cbp-heading-2 section-pad-temp">Specifications</h2>
      <table className="table is-fullwidth">
        <caption style={{textAlign: "left", marginBottom: "1rem", fontWeight: "bold"}}>CBP Design System Type Scale</caption>
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Selector Name</th>
                <th scope="col">Size</th>
                <th scope="col">Font Weight</th>
                <th scope="col">Line Height</th>
                <th scope="col">Aliasing</th>
                <th scope="col">Letter Spacing</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td class="cbp-masthead-1">Masthead 1</td>
                <td><code>.cbp-masthead-1</code></td>
                <td>36px</td>
                <td>100</td>
                <td>44px</td>
                <td>TBD</td>
                <td>0.12 (TBD)</td>
              </tr>

              <tr>
                <td class="cbp-masthead-2">Masthead 2</td>
                <td><code>.cbp-masthead-2</code></td>
                <td>32px</td>
                <td>100</td>
                <td>40px</td>
                <td>TBD</td>
                <td>0.12 (TBD)</td>
              </tr>

              <tr>
                <td class="cbp-heading-1">Heading 1</td>
                <td><code>.cbp-heading-1</code></td>
                <td>28px</td>
                <td>300</td>
                <td>40px</td>
                <td>TBD</td>
                <td>0.12 (TBD)</td>
              </tr>

              <tr>
                <td class="cbp-heading-2">Heading 2</td>
                <td><code>.cbp-heading-2</code></td>
                <td>25px</td>
                <td>400</td>
                <td>32px</td>
                <td>TBD</td>
                <td>0.12 (TBD)</td>
              </tr>

              <tr>
                <td class="cbp-heading-3">Heading 3</td>
                <td><code>.cbp-heading-3</code></td>
                <td>22px</td>
                <td>400</td>
                <td>28px</td>
                <td>TBD</td>
                <td>0.12 (TBD)</td>
              </tr>

              <tr>
                <td class="cbp-heading-4">Heading 4</td>
                <td><code>.cbp-heading-2</code></td>
                <td>20px</td>
                <td>500</td>
                <td>28px</td>
                <td>TBD</td>
                <td>0.12 (TBD)</td>
              </tr>

              <tr>
                <td class="cbp-heading-5">Heading 5</td>
                <td><code>.cbp-heading-5</code></td>
                <td>20px</td>
                <td>500</td>
                <td>24px</td>
                <td>TBD</td>
                <td>0.12 (TBD)</td>
              </tr>

              <tr>
                <td class="cbp-heading-6">Heading 6</td>
                <td><code>.cbp-heading-6</code></td>
                <td>16px</td>
                <td>700</td>
                <td>20px</td>
                <td>TBD</td>
                <td>0.12 (TBD)</td>
              </tr>

              <tr>
                <td class="cbp-body">Body</td>
                <td><code>.cbp-body</code></td>
                <td>14px</td>
                <td>400</td>
                <td>20px</td>
                <td>TBD</td>
                <td>0.12 (TBD)</td>
              </tr>
            </tbody>
          </table>

          <br/><br/>

          <table class="table is-fullwidth">
            <caption style={{textAlign: "left", marginBottom: "1rem", fontWeight: "bold"}}>Support Type Classes</caption>
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Selector Name</th>
                <th scope="col">Size</th>
                <th scope="col">Font Weight</th>
                <th scope="col">Line Height</th>
                <th scope="col">Aliasing</th>
                <th scope="col">Letter Spacing</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="cbp-button-text">Button Text</td>
                <td><code>.cbp-button-text</code></td>
                <td>14px</td>
                <td>500</td>
                <td>normal</td>
                <td>TBD</td>
                <td>0.12 (TBD)</td>
              </tr>

              <tr>
                <td class="cbp-subhead-text">Subhead</td>
                <td><code>.cbp-subhead-text</code></td>
                <td>12px</td>
                <td>500</td>
                <td>20px</td>
                <td>TBD</td>
                <td>0.12 (TBD)</td>
              </tr>
            </tbody>
          </table>
          <br/><br/>
    </section>
    </article>
    
  </Layout>
)

export default TypographyPage
