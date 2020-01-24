import React from "react";

const Tile = (props) => {

  const backgroundColor = props.sign === '' ? 'buttonface' : props.sign === 'X' ? 'HoneyDew' : 'Ivory';
  const style = {
    borderRadius: '1.75em',
    backgroundColor: backgroundColor,
    fontSize: '50px',
    width: "200px", height: "200px",
    marginLeft: '13px', marginRight: '13px',
  };


  const onClick = () => props.selectTile(props.row, props.idx);
  const disabled = props.sign !== '' || props.gameEnded || !props.gameStarted;
  return (
      <button
          style={{float: "left", textAlign: "center", ...style}}
          onClick={() => onClick()}
          disabled={disabled}
      >
        {props.sign}
      </button>
  )

};

Tile.defaultProps = {

};

export default Tile;