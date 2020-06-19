import React from "react"
import Layout from "../../ds-components/layout/layout"
import ContentHeader from "../../ds-components/content-header/contentHeader"
import SEO from "../../ds-components/seo"
import { Tabs, TabPanel } from "react-tabs"
import CustomTabList from "../../ds-components/ds-tabs/tabs"

const TableComponentPage = () => (
  <Layout>
    <SEO title="CBP Design System | Tables" />
    <ContentHeader title="Tables" contentType="component" />

    <Tabs className="tabs--scroll">
      <div className="tabs tabs__container">
        {CustomTabList(["Code", "Design Guidelines"])}
      </div>

      <article className="spacing-wrapper">
        <TabPanel>
          <section id="description">
            <h2 className="cbp-heading-2">Introduction</h2>
            <p className="cbp-body ">
              Tables are used to help users scan &amp; compare large amounts of
              data at a glance. When implementing tables into your project, make
              sure to consider other alternatives that may be optimal for the
              data you want to display.
            </p>
          </section>

          <section id="Code" className="cbp-code">
            <h2 className="cbp-heading-2">Code</h2>

            <div className="table">
              <table className="table is-hoverable is-fullwidth">
                <thead>
                  <tr>
                    <th scope="col">Page Updated</th>
                    <th scope="col">Data Field</th>
                    <th scope="col">Previous Value</th>
                    <th scope="col">New Value</th>
                    <th scope="col">Time</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>08/12/19 10:00:01 EST</td>
                    <td>User Profile</td>
                    <td>Seller's First Name</td>
                    <td>Thomas</td>
                    <td>Bill</td>
                  </tr>

                  <tr>
                    <td>10/07/19 02:34:11 EST</td>
                    <td>Product Information</td>
                    <td>Date</td>
                    <td>04/02/18</td>
                    <td>04/04/18</td>
                  </tr>

                  <tr>
                    <td>12/12/19 11:05:49 EST</td>
                    <td>Product Information</td>
                    <td>Seller's First Name</td>
                    <td>Samantha</td>
                    <td>Sam</td>
                  </tr>
                </tbody>
              </table>

              {/* <CodeSnippet language="language-html" code={tableExample} /> */}

              <iframe
                height="358"
                style={{ width: "100%" }}
                scrolling="no"
                title="Table- DSUX"
                src="https://codepen.io/KtowneCreative/embed/mdyWGWN?height=358&theme-id=light&default-tab=html"
                frameBorder="no"
                allowtransparency="true"
                allowFullScreen={true}
              >
                See the Pen{" "}
                <a href="https://codepen.io/KtowneCreative/pen/mdyWGWN">
                  Table- DSUX
                </a>{" "}
                by Creative Services (
                <a href="https://codepen.io/KtowneCreative">@KtowneCreative</a>)
                on <a href="https://codepen.io">CodePen</a>.
              </iframe>
            </div>
          </section>

          <section>
            <h3 id="modifiers" className="cbp-heading-3 ">
              Modifiers
            </h3>

            <table className="table is-hoverable is-fullwidth">
              <thead>
                <tr>
                  <th scope="col">Class</th>
                  <th scope="col">Description</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <th scope="row">
                    <code>is-bordered</code>
                  </th>
                  <td>Adds a border to all the cells</td>
                </tr>

                <tr>
                  <th scope="row">
                    <code>is-hoverable</code>
                  </th>
                  <td>Gives hover effect over data cells</td>
                </tr>

                <tr>
                  <th scope="row">
                    <code>is-narrow</code>
                  </th>
                  <td>Condenses table height</td>
                </tr>

                <tr>
                  <th scope="row">
                    <code>is-striped</code>
                  </th>
                  <td>Alternates color</td>
                </tr>

                <tr>
                  <th scope="row">
                    <code>full-width</code>
                  </th>
                  <td>Makes table fill up the max-width of page</td>
                </tr>
              </tbody>
            </table>
          </section>
        </TabPanel>

        <TabPanel>
          <section id="Design">
            <h2 className="cbp-heading-2 ">Design Guidelines</h2>

            <h3 id="general" className="cbp-heading-3">
              General
            </h3>

            <div className="content">
              <ol>
                <li>
                  For nominal/non-numeric data (e.g., room numbers, zip codes,
                  names),
                  <strong> left-align text.</strong>
                </li>
                <li>
                  For data that involves quantity (e.g., counts, currency,
                  percentages),
                  <strong> right-align text.</strong>
                </li>
                <li>
                  Each table header should have the <code> th </code> tag.{" "}
                </li>

                <li>
                  If the number of rows for data exceed 30, implement pagination
                  on the top and bottom of the table to reduce scrolling.
                </li>
                <li>
                  When there is no data to display in a cell, use placeholder
                  text such as
                  <strong>"--"</strong> or <strong>"N/A"</strong> to indicate
                  that the empty state is not a technical bug or glitch.
                </li>
              </ol>
            </div>

            <h3 id="usage" className="cbp-heading-3 ">
              Usage
            </h3>

            <div className="columns">
              <div className="column ">
                <div className="box tables-usage--box">
                  <p>
                    <span className="is-size-5">
                      <strong>Consider using a table if:</strong>
                    </span>
                  </p>

                  <div className="content">
                    <ol>
                      <li>You have a large quantity of data</li>
                      <li>
                        You want to implement features such as sorting or
                        filtering
                      </li>
                      <li>
                        The user needs to easily compare data quickly &
                        efficiently
                      </li>
                    </ol>
                  </div>
                </div>
              </div>

              <div className="column ">
                <div className="box tables-usage--box">
                  <p>
                    <span className="is-size-5">
                      <strong>You should NOT use a table if:</strong>
                    </span>
                  </p>

                  <div className="content">
                    <ol>
                      <li>You do not have a lot of data to display</li>
                      <em>In this case, consider using a list component.</em>

                      <li>You want to display a summary of your data</li>
                      <em>In this case, consider using graphs or charts.</em>
                    </ol>
                  </div>
                </div>
              </div>
            </div>

            <h3 id="accessibility" className="cbp-heading-3 ">
              Accessibility
            </h3>

            <div className="content">
              <ol>
                <li>
                  Each header cell should have the <code>scope="col"</code> or
                  <code>scope="row"</code> attribute.
                </li>
                <li>
                  When adding a title to a table, include it in a{" "}
                  <code>caption</code> tag inside of the <code>table</code>{" "}
                  element.
                </li>
                <li>
                  Each table header should have the <code> th </code> tag.{" "}
                </li>
              </ol>
            </div>
          </section>
        </TabPanel>
      </article>
    </Tabs>
  </Layout>
)

export default TableComponentPage
