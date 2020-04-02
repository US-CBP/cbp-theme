import React from "react"
import Prism from "prismjs"
import "./prism.css"

export default class CodeSnippet extends React.Component {
  componentDidMount() {
    setTimeout(() => Prism.highlightAll(), 0)
  }

  render() {
    return (
      <pre className="line-numbers">
        <code className={this.props.language}>{this.props.code}</code>
      </pre>
    )
  }
}
