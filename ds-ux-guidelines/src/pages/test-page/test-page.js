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
      {/* <div className="cbp-col-1-2  cbp-col-md-2-4 cbp-col-lg-3-6">
        Indented Row.
      </div> */}

      <section className="cbp-col-full">
        <h1 className="cbp-heading-1 bottom-border">John Doe</h1>

        <div className="cbp-col-full back-to">
          <i class="fas fa-arrow-left"></i>BACK TO MY ACCESS
        </div>

        <h3 className="cbp-col-full cbp-heading-4 duration">
          <span className="cbp-circle green">1</span><span className="cbp-circle blue">2</span>Duration/Reason
        </h3>

        <p className="cbp-heading-5 cbp-spacing-small-bottom">
          For how long would you lorem, ipsum dolor sit amet consectetur adipisicing elit?
        </p>

        <p>All roles access Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum laboriosam unde distinctio dolore doloribus.</p>
      
        <div className="input-elements">
          <div>
            <i className="fas fa-calendar-alt"></i>
            <input type="text" placeholder="07/13/2020" />
          </div>

          to

          <div>
            <i className="fas fa-calendar-alt"></i>
            <input type="text" placeholder="07/13/2020" />
          </div>

        </div>

        <b className="top-margin">Approval Comments:</b>
        <p>Here is a bunch of lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem facere praesentium minima placeat.</p>

        <i className="top-border top-margin">
          Required. 75/250 charaters remaining.
        </i>
      </section>
      
      <footer className="cbp-col-full">
        <button className="cbp-button-text"><i className="fas fa-times"></i>cancel</button>
        <button className="cbp-button-text"><i className="fas fa-arrow-left"></i>previous</button>
        <button className="cbp-button-text active"><i className="fas fa-paper-plane"></i>SUBMIT</button>
      </footer>
    </div>


)

export default TestPage