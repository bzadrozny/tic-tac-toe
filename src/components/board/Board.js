import React from "react";
import Line from "./Line";
import Winner from "./Winner";
import StartBtn from "./StartBtn";
import {connect} from "react-redux";

const Board = (props) => {
  let startBtn;
  let winner;
  let lines = [];

  if (!props.gameStarted) {
    startBtn = <StartBtn/>
  } else if (props.gameEnded) {
    winner = <Winner winner={props.winner}/>;
  } else {
    for (let i = 0; i < 3; i++) {
      lines.push(<Line key={i} row={i}/>);
    }
  }
  let style = {
    borderRadius: '1.5em',
    marginLeft: 'auto', marginRight: 'auto',
    paddingTop: '20px', paddingBottom: '20px',
    width: '750px', height: '670px', backgroundColor: 'lightgray',
    textAnchor: 'middle'
  };
  return (
      <div style={style}>
        {startBtn}
        {winner}
        {lines}
      </div>
  )
};

const mapStateToProps = (state) => ({
  gameStarted: state.gameStarted,
  gameEnded: state.gameEnded,
  winner: state.player
});

export default connect(mapStateToProps)(Board);
