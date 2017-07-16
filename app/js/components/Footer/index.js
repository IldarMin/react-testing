import React from "react";

export default class Footer extends React.Component {

  render() {
    return (
      <div>
        <footer>{this.props.title}</footer>
      </div>
    );
  }
}
