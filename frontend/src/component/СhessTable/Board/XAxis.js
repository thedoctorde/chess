import React from "react";
import styles from "./Board.module.css";
import {Columns} from "../../../constants/board";

var classNames = require('classnames/bind');
let cx = classNames.bind(styles);

export class XAxis extends React.PureComponent {
  render() {
    return (
      <div className={cx(styles.axis, styles["axis--columns"])}>
        {Columns.map(column => {
          return (
            <div
              key={column}
              className={cx(styles["axis-element--columns"], styles["axis-element"])}>
              {column}
            </div>)
        })}
      </div>)
  }
}
