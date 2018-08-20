import React, { Component } from "react";
import { css } from "aphrodite/no-important";
import { styles } from "./Item.styles";

class Item extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { title, link, prio } = this.props;

    return (
      <a
        href={link}
        target="_blank"
        className={css([styles.item, prio && styles.prioStyles])}
      >
        <h2 className={css(styles.title)}>{title}</h2>
      </a>
    );
  }
}

export default Item;
