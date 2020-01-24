import React from "react";
import Line from "./Line";

const Board = (props) => {

  let lines = [];
  for (let i = 0; i < 3; i++) {
    lines.push(
        <Line
            key={i} row={i}
            selectTile={props.selectTile} tiles={props.tiles[i]}
            gameEnded={props.gameEnded} gameStarted={props.gameStarted}
        />
    );
  }

  return (
      <div style={{
        borderRadius: '1.5em',
        marginLeft: 'auto', marginRight: 'auto',
        paddingTop: '20px', paddingBottom: '20px',
        width: '750px', height: '670px', backgroundColor: 'lightgray'
      }}>
        {lines}
      </div>
  )

};

export default Board;
