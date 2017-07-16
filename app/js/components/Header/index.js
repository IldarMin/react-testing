import React from "react";

import styles from './HeaderStyles.less'
console.log(styles);
export default class Header extends React.Component {
  handleChange = function(e) {
    this.props.onChange(e.target.value);
  }

  render() {
    return (
      <div>
        <header className={styles.div}>{this.props.title}</header>
        <input onChange={this.handleChange.bind(this)}/>
      </div>
    );
  }
}
