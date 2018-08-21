import React, { Component } from "react";
import { css } from "aphrodite/no-important";
import { styles } from "./Item.styles";
import Tag from "./Tag";

class Item extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { title, link, prio, twoFA, centrica } = this.props;

    return (
      <a
        href={link}
        target="_blank"
        className={css([styles.item, prio && styles.prioStyles])}
      >
        <h2 className={css(styles.title)}>{title}</h2>
        {twoFA && <Tag title="Two Factor Auth" />}
        {centrica && <Tag title="Centrica Network Only" />}
      </a>
    );
  }
}

export default Item;
