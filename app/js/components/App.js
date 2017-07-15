import React from "react";

import Header from "./Header";

export default class App extends React.Component {
  constructor() {
    super();
    this.header = 'Header';
  }

  render() {
    return (
      <Header title={this.header}/>
    );
  }
}
