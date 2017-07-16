import React from "react";

import Footer from "./Footer";
import Header from "./Header";

import '../../app.less';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {title: 'Header'};
    this.footer = 'Footer';
  }

  onChangeTitle = function (title) {
    if (title.length > 0) {
      this.setState({ title });
    }else {
      this.setState({ title: 'Header' });
    }
  }

  render() {

    return (
      <div>
        <Header title={this.state.title}  onChange={this.onChangeTitle.bind(this)}/>
        <Footer title={this.footer}/>
      </div>
    );
  }
}
