import { Link } from "gatsby"
import React, { Component } from "react"

class UniversalHeader extends Component {
  
  state = {
    isExpanded:false
  }

  expandHeader = (e) => {
    this.setState({isExpanded: !this.state.isExpanded})
  }

  render() {
    //console.log(this.state.isExpanded)
    const isExpanded = this.state.isExpanded;
    
    return (
      <header className="cbp-universal-header">
        <a className="cbp-header__skipnav" href="#main-content">
          Skip to main content
        </a>

        <nav className={ isExpanded ? "cbp-universal-header__main expanded" : "cbp-universal-header__main"  }>
          <ul className="cbp-grid">

            <li className="uh-lg-left cbp-col-lg-6 cbp-col-md-4">
              <b className="cbp-logo">
                <a href="#">
                  U.S. Customes & Border Protection<br/>
                  <span className="cbp-subhead-text">U.S. Department of Homeland Security</span>
                </a>
              </b>

              <a href="#" id="switchApp"><i className="fas fa-caret-down"></i>App</a>
            </li>
            
            <li className="uh-lg-right cbp-col-lg-6-6 cbp-col-md-4-4 ">
              <a href=""><i className="fas fa-comment"></i>Feedback</a>
              <a href=""><i className="fas fa-caret-down"></i>Wolfeschlegelsteinhausenbergerdorff, John</a>
            </li>

            <li className="uh-lg-up cbp-col-full">
              <b className="cbp-logo">
                <a href="#" className="cbp-heading-4">U.S. CBP</a>
              </b>

              <a href="#">
                <i className="fas fa-bars fa-2x" onClick={this.expandHeader}></i>
              </a>
            </li>

            <li className="uh-lg-down cbp-col-full">
              <a href="#"><i className="fas fa-caret-down"></i>App</a>
              <div className="right-sm-nav">
                <a href=""><i className="fas fa-comment"></i>Feedback</a>
                <a href=""><i className="fas fa-caret-down"></i>Wolfeschlegelsteinhausenbergerdorff, John</a>
              </div>   
            </li>
          </ul>
        </nav>

        <nav className="cbp-universal-header__sub"></nav>

      </header>      
    )
  }
}

export default UniversalHeader