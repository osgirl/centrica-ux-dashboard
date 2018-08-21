import React, { Component } from "react";
import { css } from "aphrodite/no-important";
import { styles } from "./Tag.styles";

class Tag extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div className={css(styles.tag)}>{this.props.title}</div>;
  }
}

export default Tag;
