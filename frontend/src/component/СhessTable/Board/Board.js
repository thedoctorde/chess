import React from 'react';
import PropTypes from "prop-types";

import {Rows, Columns} from "../../../constants/board";
import {Square} from "./Square";
import {YAxis} from "./YAxis";
import {XAxis} from "./XAxis";
import styles from "./Board.module.css"
import {Promotion} from "./Promotion/Promotion.js";

const reverseRows = Rows.reverse();


export class Board extends React.Component {
  state = {
    selectedSquare: "",
    possibleMoves: {},
    promotionTo: "",
    promotionFrom: "",
    lastMove: [],
    squaresToUpdate: [],
  };

  isPossibleMove = (to) => {
    let possibleMoves = this.state.possibleMoves;
    debugger;
    if (Object.values(possibleMoves).map(x => x.to).indexOf(to) > -1) {
      return true
    }
    return false;
  };

  checkPromotion = (from, to) => {
    let moves = this.props.chessEngine.moves({square: from, verbose: true}).filter(x => x.to === to && x.promotion);
    if (moves.length > 0) {
      return ({
        from: from,
        to: to
      })
    }
    return {};
  };

  onClickSquare = (key) => (e) => {
    e.preventDefault();
    const engine = this.props.chessEngine;
    console.log("onSquareClick");
    debugger;
    if (this.isPossibleMove(key)) {
      let from = this.state.selectedSquare;
      let to = key;
      let promotion = this.checkPromotion(from, to);
      debugger;
      if (promotion.to === undefined) {
        engine.move({
          from: from,
          to: to,
        });
        console.log("move: ", from, to);
      }
      this.setState({
        selectedSquare: "",
        possibleMoves: {},
        promotionTo: promotion.to,
        promotionFrom: promotion.from,
        lastMove: [from, to],
        squaresToUpdate: [],
      })
    } else if (this.props.chessEngine.get(key) !== null) {
      let possibleMoves = engine.moves({square: key, verbose: true});
      this.setState({
        selectedSquare: key,
        possibleMoves: possibleMoves,
        squaresToUpdate: [],
      })
    }
    else {
      this.setState({
        selectedSquare: "",
        possibleMoves: {},
        squaresToUpdate: [],
      })
    }


  };

  onSelectPromotion = (piece) => (e) => {
    console.log(piece);
    const engine = this.props.chessEngine;
    engine.move({
      from: this.state.promotionFrom,
      to: this.state.promotionTo,
      promotion: piece,
    });
    this.setState({
      promotionTo: "",
      promotionFrom: "",
      selectedSquare: "",
      squaresToUpdate: [this.state.promotionFrom, this.state.promotionTo],
      lastMove: [this.state.promotionTo, this.state.promotionFrom],
      possibleMoves: {},
    })
  };

  isSquarePossibleToMove = (key) => {
    let possibleMoves = Object.values(this.state.possibleMoves).map(x => x.to);
    if (possibleMoves && possibleMoves.length > 0) {
      if (possibleMoves.includes(key)) {
        return true
      }
    }
    return false
  };

  render() {
    return (
      <div className={styles.board}>
        <div className={styles.battlefield}>
          {
            reverseRows.map((row) => {
              return Columns.map(column => {
                let key = column + row;
                return <Square
                  key={key}
                  row={row}
                  column={column}
                  piece={this.props.chessEngine.get(key)}
                  selected={this.state.selectedSquare === key}
                  lastMove={this.state.lastMove.includes(key)}
                  forceUpdate={this.state.squaresToUpdate.includes(key)}
                  possibleMove={this.isSquarePossibleToMove(key)}
                  onClick={this.onClickSquare(key)}
                />
              })
            })
          }
          {
            this.state.promotionTo
            && <Promotion
              onSelectPromotion={this.onSelectPromotion}/>
          }
        </div>
        <YAxis/>
        <XAxis/>

      </div>
    )
  }
}


Board.propTypes = {
  chessEngine: PropTypes.object.isRequired,
};
