import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Board from "./components/board/Board";
import Footer from "./components/footer/Footer";

class App extends React.Component {

  state = {
    timer: 0,
    time: 15,
    player: 'X',
    tiles: [['', '', ''], ['', '', ''], ['', '', '']],
    gameStarted: false,
    gameEnded: false
  };

  componentWillUnmount() {
    clearInterval(this.state.timer)
  }

  runGame = () => {
    let timer = setInterval(this.clockDown, 1000);
    this.setState({
      timer,
      gameStarted: true,
    })
  };

  clockDown = () => {
    let time = this.state.time;
    if (time) {
      time--;
      this.setState({time})
    } else {
      this.setState(prev => ({
        time: 15,
        player: prev.player === 'X' ? 'O' : 'X',
      }))
    }
  };

  selectTile = (y, x) => {
    let tiles = this.state.tiles;
    tiles[y][x] = this.state.player;
    this.setState({
      time: 15,
      tiles,
    });
    let winner = this.isWinner(tiles);
    if (winner === 'X' || winner === 'O') {
      clearInterval(this.state.timer);
      this.setState({
        gameEnded: true
      });
    } else if (this.hasAvailableTiles(tiles)) {
      this.setState(prev => ({
        player: prev.player === 'X' ? 'O' : 'X',
      }));
    } else {
      clearInterval(this.state.timer);
      this.setState({
        player: '',
        gameEnded: true
      });
    }
  };

  isWinner = function (tiles) {
    for (let i = 0; i < 3; i++) {
      if (tiles[i][0] !== '' && tiles[i][0] === tiles[i][1] && tiles[i][1] === tiles[i][2]) {
        return tiles[i][0]
      }
    }
    for (let i = 0; i < 3; i++) {
      if (tiles[0][i] !== '' && tiles[0][i] === tiles[1][i] && tiles[1][i] === tiles[2][i]) {
        return tiles[i][0]
      }
    }

    if (tiles[0][0] !== '' && tiles[0][0] === tiles[1][1] && tiles[1][1] === tiles[2][2]) {
      return tiles[0][0]
    }

    if (tiles[0][2] !== '' && tiles[0][2] === tiles[1][1] && tiles[1][1] === tiles[2][0]) {
      return tiles[0][2]
    }
  };

  hasAvailableTiles = function (tiles) {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (tiles[i][j] === '')
          return true
      }
    }
    return false;
  };

  resetBoard = () => {
    clearInterval(this.state.timer);
    this.setState({
      timer: 0,
      time: 15,
      player: 'X',
      tiles: [['', '', ''], ['', '', ''], ['', '', '']],
      gameStarted: false,
      gameEnded: false
    });
  };

  render() {
    const {time, player, tiles, gameEnded, gameStarted} = this.state;
    const footer = () => {
      if (gameEnded || gameStarted) {
        return <Footer resetBoard={this.resetBoard}/>;
      }
    };
    return (
        <div className="App">
          <Header time={time} player={player} gameStarted={gameStarted}/>
          <Board selectTile={this.selectTile} runGame={this.runGame} tiles={tiles}
                 gameEnded={gameEnded}
                 gameStarted={gameStarted}
                 winner={player}/>
          {footer()}
        </div>
    );
  }

}

export default App;
