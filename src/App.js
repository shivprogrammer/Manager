import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyCteX76S5ztZieAHq9Lx1SivIXlo-yG-N8',
      authDomain: 'shivvymanager.firebaseapp.com',
      databaseURL: 'https://shivvymanager.firebaseio.com',
      projectId: 'shivvymanager',
      storageBucket: 'shivvymanager.appspot.com',
      messagingSenderId: '1016351005250'
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
