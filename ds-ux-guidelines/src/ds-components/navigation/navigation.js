import { Link } from "gatsby"
import React, { Component } from "react"

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

class Navigation extends Component {
  state = {
    showDropdown: false,

    categories: [
      {
        name: "Foundation",
        subcategory: [
          {
            name: "Colors",
            link: "/foundation/colors",
            anchors: [
              {
                name: "Color Palette",
                id: "/#palette",
              },
              {
                name: "Section 508 Color Combinations",
                id: "/#section508",
              },
              {
                name: "Data Visualization Palette",
                id: "/#dataVisual",
              },
            ],
          },
          {
            name: "Grid",
            link: "/foundation/grid",
          },
          {
            name: "Icons",
            link: "/foundation/icons",
          },
          {
            name: "Layouts",
            link: "/foundation/layouts",
          },
          {
            name: "Typography",
            link: "/foundation/typography",
          },
        ],
      },
      {
        name: "Components",
        subcategory: [
          {
            name: "Accordian",
            link: "/components/accordian",
          },
          {
            name: "Tables",
            link: "/components/tables",
            // anchors: [
            //   {
            //     name: "Description",
            //     id: "/components/tables/#description",
            //   },
            //   {
            //     name: "Code",
            //     id: "/components/tables/#code",
            //   },
            //   {
            //     name: "Modifiers",
            //     id: "/components/tables/#modifiers",
            //   },
            //   {
            //     name: "General",
            //     id: "/components/tables/#general",
            //   },
            //   {
            //     name: "Usage",
            //     id: "/components/tables/#usage",
            //   },
            //   {
            //     name: "Accessibility",
            //     id: "/components/tables/#accessibility",
            //   },
            // ],
          },
        ],
      },
      {
        name: "Patterns",
        subcategory: [
          {
            name: "Headers",
            link: "/patterns/applicationHeaders",
          },
        ],
      },
    ],
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClose)
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClose)
  }

  menuList = () => {
    const menuList = this.state.categories.map(cat => {
      return (
        <>
          <span className="cbp-heading-6">{cat.name}</span>
          <ul className="menu-list">
            {cat.subcategory.map(subCat => {
              return (
                <li>
                  <Link to={subCat.link}><span className="menu-text cbp-body">{subCat.name}</span></Link>

                  {subCat.anchors !== undefined ||
                  subCat.anchors !== undefined ? (
                    <ul style={{ borderLeft: "solid 1px #4a4a4a" }}>
                      {subCat.anchors.map(anchor => {
                        return (
                          //key prop wip
                          <li key={`.${anchor.name.replace(/\s/g, "")}`}>
                            <Link
                              to={anchor.id}
                              key={`.${anchor.name.replace(/\s/g, "")}-item`}
                            >
                              <span className="menu-text sub-category">{anchor.name}</span>
                            </Link>
                          </li>
                        )
                      })}
                    </ul>
                  ) : null}
                </li>
              )
            })}
          </ul>
          <br />
        </>
      )
    })
    return menuList
  }

  //toggle function for dropdown
  toggleDropdown = e => {
    e.preventDefault()
    const currentState = this.state.showDropdown
    this.setState({ showDropdown: !currentState })
    return
  }

  //dropdown handle close when clicked outside of dropdown
  handleClose = event => {
    if (this.node && !this.node.contains(event.target)) {
      this.setState({ showDropdown: false })
    }

    return
  }

  render() {
    return (
      <>
        {/* cbp-ds-grid class is the main grid holder. */}
        <div className="nav-wrapper">
          <aside className="menu">
            <div className="dropdown-container">
              <div
                ref={node => (this.node = node)}
                className={`dropdown ${
                  this.state.showDropdown ? "is-active" : null
                }`}
              >
                <div className="dropdown-trigger">
                  <button
                    onClick={this.toggleDropdown}
                    className="button is-small"
                    aria-haspopup="true"
                    aria-controls="dropdown-menu"
                    
                  >
                    <span>CBP Theme Version 2.0</span>
                    &nbsp;{" "}
                    <i className="fas fa-angle-down" aria-hidden="true"></i>
                  </button>
                </div>

                <div className="dropdown-menu" id="dropdown-menu" role="menu">
                  <div className="dropdown-content">
                    <a
                      href="https://us-cbp.github.io/cbp-style-guide/docs/index.html"
                      className="dropdown-item cbp-body"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      CBP THEME VERSION 1.11.0
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {this.menuList()}
          </aside>
        </div>
      </>
    )
  }
}

export default Navigation
