import React from "react";
import styles from "./Board.module.css";
import {Rows} from "../../../constants/board";

var classNames = require('classnames/bind');
let cx = classNames.bind(styles);

export class YAxis extends React.PureComponent {
  render() {
    return (
      <div className={cx(styles.axis, styles["axis--rows"])}>
        {Rows.map(row => {
          return (
            <div
              key={row}
              className={cx(styles["axis-element--rows"], styles["axis-element"])}>
              {row}
            </div>)
        })}
      </div>)
  }
}
