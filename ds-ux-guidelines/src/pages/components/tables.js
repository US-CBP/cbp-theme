import React from "react"
/* import { Link } from "gatsby" */

import Layout from "../../ds-components/layout/layout"
import ContentHeader from "../../ds-components/content-header/contentHeader"

/* import Image from "../../ds-components/image" */
import SEO from "../../ds-components/seo"

const TableComponentPage = () => (

  <Layout>
    <SEO title="CBP Design System | Tables" />
    <ContentHeader title="Tables" contentType="component"/>
    <article>

      <div id="description" className="container section-pad-temp">
        <p>
          Tables are used to help users scan &amp; compare large amounts of data
          at a glance. When implementing tables into your project, make sure
          to consider other alternatives that may be optimal for the data
          you want to display.
        </p>
      </div>

      <div id="code" className="container cbp-code">
        <div id="code" className="cbp-heading-2 section-pad-temp">Code</div>

        <div id="table">

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
                <td>
                  User Profile
                </td>
                <td>Seller's First Name</td>
                <td>Thomas</td>
                <td>Bill</td>
              </tr>

              <tr>
                <td>10/07/19 02:34:11 EST</td>
                <td>
                  Product Information
                </td>
                <td>Date</td>
                <td>04/02/18</td>
                <td>04/04/18</td>
              </tr>

              <tr>
                <td>12/12/19 11:05:49 EST</td>
                <td>
                  Product Information
                </td>
                <td>Seller's First Name</td>
                <td>Samantha</td>
                <td>Sam</td>
              </tr>
            </tbody>
          </table>
          <br/>

          <iframe height="358" style={{width: "100%"}} scrolling="no" title="Table- DSUX" src="https://codepen.io/KtowneCreative/embed/mdyWGWN?height=358&theme-id=light&default-tab=html" frameBorder="no" allowtransparency="true" allowFullScreen={true}>
            See the Pen <a href='https://codepen.io/KtowneCreative/pen/mdyWGWN'>Table- DSUX</a> by Creative Services
            (<a href='https://codepen.io/KtowneCreative'>@KtowneCreative</a>) on <a href='https://codepen.io'>CodePen</a>.
          </iframe>

{/*           <p className="codepen" data-height="357" data-theme-id="light" data-default-tab="html" data-user="KtowneCreative" data-slug-hash="mdyWGWN" style={{height: '357px', boxSizing: 'border-box', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid', margin: '1em 0', padding: '1em'}} data-pen-title="Table- DSUX">
            <span>
              See the Pen <a href="https://codepen.io/KtowneCreative/pen/mdyWGWN"> Table- DSUX</a> by Creative Services (<a href="https://codepen.io/KtowneCreative">@KtowneCreative</a>) on <a href="https://codepen.io">CodePen</a>.
            </span>
          </p>        
          <script async src="https://static.codepen.io/assets/embed/ei.js"></script> */}
        </div>
        <br/><br/>
        
        <h3 id="modifiers" className="cbp-heading-3 section-pad-temp">Modifiers</h3>
        <div className="modifiers">
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
                  <td>
                    Adds a border to all the cells
                  </td>
                </tr>

                <tr>
                  <th scope="row">
                    <code>is-hoverable</code>
                  </th>
                  <td>
                    Gives hover effect over data cells
                  </td>
                </tr>

                <tr>
                  <th scope="row">
                    <code>is-narrow</code>
                  </th>
                  <td>
                    Condenses table height
                  </td>
                </tr>

                <tr>
                  <th scope="row">
                    <code>is-striped</code>
                  </th>
                  <td>
                    Alternates color
                  </td>
                </tr>

                <tr>
                  <th scope="row">
                    <code>full-width</code>
                  </th>
                  <td>
                    Makes table fill up the max-width of page
                  </td>
                </tr>


              </tbody>

          </table>
        </div>
        <br/><br/>

        <section id="usage">
          <h2 className="cbp-heading-2 section-pad-temp">Design Guideline</h2>

          <h2 id="general" className="cbp-heading-3">General</h2>
          <br/>

          <ol>
            <li className="li-margin">For nominal/non-numeric data (e.g., room numbers, zip codes, names),
              <strong> left-align text.</strong></li>
            <li className="li-margin">For data that involves quantity (e.g., counts, currency, percentages),
              <strong> right-align text.</strong></li>
            <li className="li-margin">Each table header should have the <code> th </code> tag. </li>

            <li className="li-margin">If the number of rows for data exceed 30, implement pagination on the top
              and bottom of the table to reduce scrolling.</li>
            <li className="li-margin">When there is no data to display in a cell, use placeholder text such as
              <strong>"--"</strong> or <strong>"N/A"</strong> to indicate that the empty state is not a technical bug
              or glitch.</li>
          </ol>

          <br/><br/>
          
          <h2 id="usage" className="cbp-heading-3">Usage</h2>
          <br/>

          <div className="columns">
              <div className="column">
                <div className="box tables-usage--box">
                  <p><span className="is-size-5"><strong> <span role="img" aria-label="Check mark.">✅</span> Consider using a table if:</strong></span>
                  </p>
                  <br />
                  <ol>
                    <li className="li-margin">You have a large quantity of data</li>
                    <li className="li-margin">You want to implement features such as sorting or filtering</li>
                    <li className="li-margin">The user needs to easily compare data quickly & efficiently</li>
                  </ol>
                </div>

              </div>

              <div className="column">
                <div className="box tables-usage--box">
                  <p><span className="is-size-5"><strong> <span role="img" aria-label="X Mark.">❌</span> You should NOT use a table if:</strong></span>
                  </p>

                  <br />
                  <ol>
                    <li className="li-margin">You do not have a lot of data to display</li>
                    <div className="li-margin">

                    <em>In this case, consider using a list component.</em>

                    </div>
                    <br />
                    <li className="li-margin">You want to display a summary of your data</li>
                    <div className="li-margin">

                    <em>In this case, consider using graphs or charts.</em>

                    </div>
                  </ol>

                </div>
              </div>
            </div>

          <h2 id="accessibility" className="cbp-heading-3">Accessibility</h2>
            <br />
            <ol>
              <li className="li-margin">Each header cell should have the <code>scope="col"</code> or
                <code>scope="row"</code> attribute.</li>
              <li className="li-margin">When adding a title to a table, include it in a <code>caption</code> tag
                inside of the <code>table</code> element.</li>
              <li className="li-margin">Each table header should have the <code> th </code> tag. </li>
            </ol>

        </section>
        <br/>
      </div>
    </article>
    
  </Layout>
)

export default TableComponentPage