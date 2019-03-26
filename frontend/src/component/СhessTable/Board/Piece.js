import React from "react";
import PropTypes from "prop-types";

import BishopBlack from "../../../img/pieces/bdt.svg"
import BishopWhite from "../../../img/pieces/blt.svg"
import KingBlack from "../../../img/pieces/kdt.svg"
import KingWhite from "../../../img/pieces/klt.svg"
import KnightBlack from "../../../img/pieces/ndt.svg"
import KnightWhite from "../../../img/pieces/nlt.svg"
import PawnBlack from "../../../img/pieces/pdt.svg"
import PawnWhite from "../../../img/pieces/plt.svg"
import QueenBlack from "../../../img/pieces/qdt.svg"
import QueenWhite from "../../../img/pieces/qlt.svg"
import RockBlack from "../../../img/pieces/rdt.svg"
import RockWhite from "../../../img/pieces/rlt.svg"

import styles from "./Piece.module.css"

export class Piece extends React.PureComponent {
  render() {
    console.log("render piece", this.props.type, this.props.color);
    return (
      getPieceImageByColorAndType(this.props.type, this.props.color)
    )
  }
}

const getPieceImageByColorAndType = (type, color) => {
  const key = type + color;
  let src = "";
  switch (key) {
    case "bb":
      src = BishopBlack;
      break;
    case "bw":
      src = BishopWhite;
      break;
    case "kb":
      src = KingBlack;
      break;
    case "kw":
      src = KingWhite;
      break;
    case "nb":
      src = KnightBlack;
      break;
    case "nw":
      src = KnightWhite;
      break;
    case "pb":
      src = PawnBlack;
      break;
    case "pw":
      src = PawnWhite;
      break;
    case "qb":
      src = QueenBlack;
      break;
    case "qw":
      src = QueenWhite;
      break;
    case "rb":
      src = RockBlack;
      break;
    case "rw":
      src = RockWhite;
      break;
    default:
      break
  }
  if (src.length !== 0) {
    return <img className={styles.piece} src={src} alt=""/>;
  }
  return null;
};

Piece.propTypes = {
  type: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};
