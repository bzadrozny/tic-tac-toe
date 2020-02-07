import React from "react";
import * as actions from "../../actions/ticTacToeActions";
import {connect} from "react-redux";

const StartBtn = (props) => {
  let startBtnStyle = {
    borderRadius: '0.5em',
    marginTop: '35%',
    width: '90%', height: '20%',
    fontSize: '2em'
  };
  return  <button style={startBtnStyle} onClick={() => props.runGame()}>Wanna play the game?</button>;
};


const mapDispatchToPros = (dispatch) => ({
  runGame: () => dispatch(actions.runGame(dispatch)),
});

export default connect(() => ({}), mapDispatchToPros) (StartBtn);