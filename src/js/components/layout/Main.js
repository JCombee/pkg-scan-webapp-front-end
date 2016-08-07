import React from "react"

export default class Main extends React.Component {
  render() {
    return (
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-drawer right mdl-layout--fixed-header">
      {this.props.children}
      </div>
    )
  }
}
