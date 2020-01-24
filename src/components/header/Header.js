import React from "react";

const Header = (props) => {
  let startBtn = '';
  if (!props.gameStarted) {
    let startBtnStyle = {
      borderRadius: '0.5em',
      width: '200px', height: '80px',
      fontSize: '25px'
    };
    startBtn = (
        <p>
          <button onClick={() => props.runGame()} style={startBtnStyle}>Wanna play the game?</button>
        </p>
    );
  }
  return (
      <div style={{
        backgroundColor: 'WhiteSmoke', borderRadius: '2em',
        width: '50%',
        marginTop: '10px', marginBottom: '15px', marginLeft: 'auto', marginRight: 'auto',
        borderSpacing: '10px',
        paddingTop: '1px',
        border: '1px solid gray',
        fontSize: '2em'
      }}>
        <p>Player: {props.player}</p>
        <p>Pozostały czas na ruch: {props.time}</p>
        {startBtn}
      </div>
  )

};

export default Header;