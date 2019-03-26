import React from 'react'
import PropTypes from 'prop-types';
import styles from './Square.module.css';
import {getColorByPosition} from "../../../helpers/board";
import {Piece} from "./Piece";
import {piecePossibleMove, possibleMove} from "./PossibleMove";

let classNames = require('classnames/bind');
let cx = classNames.bind(styles);

export class Square extends React.Component {

  //todo  сделать оптимизацию рендеринга
  // shouldComponentUpdate(nextProps) {
  //   if (this.props.forceUpdate) {
  //     return true;
  //   }
  //   if (
  //     (this.props.selected === nextProps.selected)
  //     && (this.props.possibleMove === nextProps.possibleMove)
  //   ) {
  //     return false
  //   }
  //
  //   return true;
  // }

  render() {
    console.log("render square", this.props.column + this.props.row);
    return (
      <div
        className={cx(
          styles.square,
          getColorByPosition(this.props.row, this.props.column),
          {
            [styles.selected]: this.props.selected,
            [styles.lastMove]: this.props.lastMove,
          },
        )}
        onClick={this.props.onClick}
      >
        {
          this.props.possibleMove
            ? this.props.piece
              ? piecePossibleMove
              : possibleMove
            : null
        }
        {
          this.props.piece &&
          <Piece
            type={this.props.piece.type}
            color={this.props.piece.color}
          />
        }
      </div>
    )
  }
}


Square.propTypes = {
  row: PropTypes.string.isRequired,
  column: PropTypes.string.isRequired,
  piece: PropTypes.shape({
    type: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
  }),
  lastMove: PropTypes.bool.isRequired,
  forceUpdate: PropTypes.bool.isRequired,
  selected: PropTypes.bool.isRequired,
  possibleMove: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
