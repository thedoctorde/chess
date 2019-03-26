import React, {Component} from 'react';
import './App.css';
import {ChessTable} from "./component/СhessTable/ChessTable";
import Chess from "chess.js"

let chess = new Chess();
class App extends Component {
  render() {
    return (
      <div className="App">
        <ChessTable
          onClick={()=>{console.log("on app click")}}
          chessEngine={chess}/>
      </div>
    );
  }
}

export default App;
