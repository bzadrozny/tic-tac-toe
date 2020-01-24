import React from "react";
import Tile from "./Tile";

const Line = (props) => {

  const style = {
    height: '200px', width: '680px',
    marginLeft: 'auto', marginRight: 'auto', marginTop: '20px', marginBottom: '20px',
    paddingLeft: '10px', paddingRight: '10px'
  };

  let tiles = [];
  for (let i = 0; i < 3; i++) {
    tiles.push(
        <Tile
            key={i} row={props.row} idx={i}
            selectTile={props.selectTile} sign={props.tiles[i]}
            gameEnded={props.gameEnded} gameStarted={props.gameStarted}
        />
    );
  }

  return (
      <div style={style}>
        {tiles}
      </div>
  )

};

export default Line;