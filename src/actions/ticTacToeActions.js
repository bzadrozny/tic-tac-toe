export const runGame = (dispatch) => {
  let timer = setInterval(() => clockDown(dispatch), 1000);
  return {
    type: 'RUN_GAME',
    payload: {
      timer
    }
  };
};

const clockDown = (dispatch) => {
  dispatch({
    type: 'CLOCK_DOWN'
  })
};

export const selectTile = (x, y, player, tiles) => {
  tiles[x][y] = player;
  let winner = isWinner(tiles);
  let hasAvailableTiles = hasAnyAvailableTiles(tiles);
  console.log(winner, hasAvailableTiles);
  return {
    type: 'SELECT_TILE',
    payload: {
      tiles,
      winner,
      hasAvailableTiles
    }
  }
};

const isWinner = function (tiles) {
  for (let i = 0; i < 3; i++) {
    if (tiles[i][0] !== '' && tiles[i][0] === tiles[i][1] && tiles[i][1] === tiles[i][2]) {
      return tiles[i][0]
    }
  }
  for (let i = 0; i < 3; i++) {
    if (tiles[0][i] !== '' && tiles[0][i] === tiles[1][i] && tiles[1][i] === tiles[2][i]) {
      return tiles[0][i]
    }
  }

  if (tiles[0][0] !== '' && tiles[0][0] === tiles[1][1] && tiles[1][1] === tiles[2][2]) {
    return tiles[0][0]
  }

  if (tiles[0][2] !== '' && tiles[0][2] === tiles[1][1] && tiles[1][1] === tiles[2][0]) {
    return tiles[0][2]
  }
};

const hasAnyAvailableTiles = function (tiles) {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (tiles[i][j] === '')
        return true
    }
  }
  return false;
};


export const resetBoard = () => {
  return {
    type: 'RESET_BOARD'
  }
};

export const clearTimer = () => {
  return {
    type: 'CLEAR_TIMER'
  }
};