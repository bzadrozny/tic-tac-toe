import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import ReactDOM from 'react-dom';

import App from './App';
import ticTacToeReducer from './reducers/ticTacToeReducer'
import preloadedState from './reducers/preloadedState'
import './index.css';

import * as serviceWorker from './serviceWorker';

const store = createStore(ticTacToeReducer, preloadedState, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>
    , document.getElementById('root')
);

serviceWorker.unregister();