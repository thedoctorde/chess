import React from 'react'
import {Board} from "./Board/Board";
import PropTypes from "prop-types";
import {Tablo} from "./GameStatus/Tablo";


export class ChessTable extends React.Component {
    render() {
        return(
          <div>
            <Board
              chessEngine={this.props.chessEngine}
            />
            <Tablo
              chessEngine={this.props.chessEngine}
            />
          </div>
        )

    }
}

ChessTable.propTypes = {
  chessEngine: PropTypes.object.isRequired,
};
