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
    this.setState(prev => ({
      time: 15,
      player: prev.player === 'X' ? 'O' : 'X',
      tiles,
    }))
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
          <Header time={time} player={player} gameStarted={gameStarted} runGame={this.runGame}/>
          <Board selectTile={this.selectTile} tiles={tiles} gameEnded={gameEnded} gameStarted={gameStarted}/>
          {footer()}
        </div>
    );
  }

}

export default App;
