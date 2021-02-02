import React from "react"
// import Layout from "../../ds-components/layout/layout"
import UniversalHeader from "../../components/universal-header/universal-header"
import "./test-page.scss"
// import ContentHeader from "../../ds-components/content-header/contentHeader"
// import SEO from "../../ds-components/seo"

/*
  sm: 1-5 <599
  md: 1-9 600-1023
  lg: 1-13 1024-1439
  xl: 1-13 <1440
*/

const TestPage = () => (
  <div className="cbp-app">
    {/* <header className="cbp-universal-header">
      <a class="cbp-universal-header__skipnav" href="#main-content">Skip to main content</a>
    
      <nav className="cbp-universal-header__main">
        <ul className="cbp-grid">

          <li className="uh-lg-left cbp-col-lg-6 cbp-col-md-4">
            <b class="cbp-logo">
              <a href="#">
                U.S. Customes & Border Protection<br/>
                <span class="cbp-subhead-text">U.S. Department of Homeland Security</span>
              </a>
            </b>

            <a href="#" id="switchApp"><i class="fas fa-caret-down"></i>App</a>
          </li>
          
          <li className="uh-lg-right cbp-col-lg-6-6 cbp-col-md-4-4 ">
            <a href=""><i class="fas fa-comment"></i>Feedback</a>
            <a href=""><i class="fas fa-caret-down"></i>Wolfeschlegelsteinhausenbergerdorff, John</a>
          </li>

          <li className="uh-lg-up cbp-col-full">
            <b class="cbp-logo">
              <a href="#" class="cbp-heading-4">U.S. CBP</a>
            </b>

            <a href="#">
              <i class="fas fa-bars fa-2x"></i>
            </a>
          </li>

          <li className="uh-lg-down cbp-col-full">
            <a href="#" id="switchApp"><i class="fas fa-caret-down"></i>App</a>
          </li>
        </ul>
      </nav>

      <nav className="cbp-universal-header__sub"></nav>

    </header> */}
    <UniversalHeader />
    <div className="test cbp-grid">

      <section className="cbp-col-full">
        <h1 className="cbp-heading-1 bottom-border">John Doe</h1>

        <div className="cbp-col-full back-to">
          <i className="fas fa-arrow-left"></i>BACK TO MY ACCESS
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
  </div>

)

export default TestPage