import React from 'react';
import {connect} from "react-redux";
import * as actions from "./actions/ticTacToeActions"
import Header from "./components/header/Header";
import Board from "./components/board/Board";
import Footer from "./components/footer/Footer";
import './App.css';

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
    this.props.clearTimer();
  }

  render() {
    const {time, player, gameEnded, gameStarted} = this.props;
    const footer = () => {
      if (gameEnded || gameStarted) {
        return <Footer/>;
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

const mapStateToProps = (state) => ({...state});

const mapDispatchToPros = (dispatch) => ({
  clearTimer: () => dispatch(actions.clearTimer()),
  resetBoard: () => dispatch(actions.resetBoard())
});

export default connect(mapStateToProps, mapDispatchToPros)(App);
