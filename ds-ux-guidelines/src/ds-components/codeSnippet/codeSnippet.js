import React from "react"
import Prism from "prismjs";

const code =
` p {
    font-feature-settings: "liga";
    -webkit-font-feature-settings: "liga";
    -moz-font-feature-settings: "liga";
    text-rendering: optimizeLegibility;
  }
`.trim()

export default class CodeSnippet extends React.Component {
  componentDidMount(){
    setTimeout(() => Prism.highlightAll(), 0)
  }

  render() {
    return (
      <pre className="line-numbers">
        <code className="language-css">
          {code}
        </code>
      </pre>
    )
  }
}
