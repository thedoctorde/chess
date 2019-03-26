import React from 'react'

import styles from "./Promotion.module.css"
import {Piece} from "../Piece";
import PropTypes from "prop-types";

export class Promotion extends React.Component {

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.field}>
          <div className={styles.pieces}>
            <Square pieceType={"q"} pieceColor={"w"} onClick={this.props.onSelectPromotion("q")}/>
            <Square pieceType={"r"} pieceColor={"w"} onClick={this.props.onSelectPromotion("r")}/>
            <Square pieceType={"b"} pieceColor={"w"} onClick={this.props.onSelectPromotion("b")}/>
            <Square pieceType={"n"} pieceColor={"w"} onClick={this.props.onSelectPromotion("n")}/>
          </div>
        </div>
      </div>
    )
  }

}

class Square extends React.Component {
  render() {
    return <div
      className={styles.pieceWrapper}
      onClick={this.props.onClick}
    >
      <Piece type={this.props.pieceType} color={this.props.pieceColor} />
    </div>
  }
}

Square.propTypes = {
  pieceType: PropTypes.string.isRequired,
  pieceColor: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
