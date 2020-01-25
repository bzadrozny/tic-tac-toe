import React from "react";

const StartBtn = (props) => {
  let startBtnStyle = {
    borderRadius: '0.5em',
    marginTop: '35%',
    width: '90%', height: '20%',
    fontSize: '2em'
  };
  return  <button style={startBtnStyle} onClick={() => props.runGame()}>Wanna play the game?</button>;
};

export default StartBtn;
