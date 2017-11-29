import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';

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
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>
            Hello!
          </Text>
        </View>
      </Provider>
    );
  }
}

export default App;
