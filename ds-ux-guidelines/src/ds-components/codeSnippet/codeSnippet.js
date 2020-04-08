import React from "react"
import Prism from "prismjs"
import "./codeSnippet.scss"

export default class CodeSnippet extends React.Component {
  componentDidMount() {
    setTimeout(() => Prism.highlightAll(), 0)
  }

  render() {
    return (
      <div className="code-snippet-container">
        <pre className="apply-border-radius">
          <code className={this.props.language}>{this.props.code}</code>
        </pre>
      </div>
    )
  }
}
