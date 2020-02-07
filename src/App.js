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

  render() {
    const {time, player, tiles, gameEnded, gameStarted} = this.state;
    const footer = () => {
      if (gameEnded || gameStarted) {
        return <Footer resetBoard={this.resetBoard}/>;
      }
    };
    return (
        <div className="App">
          <Header time={time} player={player}/>
          <Board />
          {footer()}
        </div>
    );
  }

}

export default App;
