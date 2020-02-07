const ticTacToeReducer = (state, action) => {
  switch (action.type) {

    case 'RUN_GAME':
      return {
        ...state,
        timer: action.payload.timer,
        time: 15,
        gameStarted: true,
      };

    case 'CLOCK_DOWN': {
      let time = state.time;
      if (time) {
        time--;
        return {
          ...state,
          time
        };
      } else {
        return {
          ...state,
          time: 15,
          player: state.player === 'X' ? 'O' : 'X',
        }
      }
    }

    case 'SELECT_TILE': {
      if (action.payload.winner === 'X' || action.payload.winner === 'O') {
        clearInterval(state.timer);
        return {
          ...state,
          time: 15,
          tiles: action.payload.tiles,
          gameEnded: true
        };
      } else if (action.payload.hasAvailableTiles) {
        return {
          ...state,
          time: 15,
          tiles: action.payload.tiles,
          player: state.player === 'X' ? 'O' : 'X',
        };
      } else {
        clearInterval(state.timer);
        return {
          ...state,
          time: 15,
          tiles: action.payload.tiles,
          player: '',
          gameEnded: true
        };
      }
    }

    case 'RESET_BOARD':
      clearInterval(state.timer);
      return {
        ...state,
        timer: 0,
        time: 15,
        player: 'X',
        tiles: [['', '', ''], ['', '', ''], ['', '', '']],
        gameStarted: false,
        gameEnded: false
      };

    case 'CLEAR_TIMER':
      clearInterval(state.timer);
      return {...state, time: 15};
    default:
      return state;
  }
};

export default ticTacToeReducer;