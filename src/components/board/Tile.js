import React from "react";
import {connect} from "react-redux";
import * as actions from "../../actions/ticTacToeActions";

const Tile = (props) => {
  let sign = props.tiles[props.idx][props.row];
  const backgroundColor = sign === '' ? 'buttonface' : sign === 'X' ? 'HoneyDew' : 'Ivory';
  const style = {
    borderRadius: '1.75em',
    backgroundColor: backgroundColor,
    fontSize: '50px',
    width: "200px", height: "200px",
    marginLeft: '13px', marginRight: '13px',
  };

  const onClick = () => props.selectTile(props.idx, props.row, props.player, props.tiles);

  const disabled = sign !== '' || props.gameEnded || !props.gameStarted;
  return (
      <button
          style={{float: "left", textAlign: "center", ...style}}
          onClick={onClick}
          disabled={disabled}
      >
        {sign}
      </button>
  )

};

Tile.defaultProps = {};

const mapStateToProps = (state) => ({
  player: state.player,
  tiles: state.tiles
});

const mapDispatchToPros = (dispatch) => ({
  selectTile: (x, y, player, tiles) => dispatch(actions.selectTile(x, y, player, tiles)),
});

export default connect(mapStateToProps, mapDispatchToPros) (Tile);