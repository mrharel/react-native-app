import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import { StackNavigator } from 'react-navigation';
import createReducer from './src/reducers';
import API from './src/API';
//import GithubPage from './src/pages/github';
//import MenuPage from './src/pages/menu';
import MainPage from './src/pages/main';
import FilePreviewPage from './src/pages/preview';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const configureStore = (initialState = {}) => {
  const logger = createLogger();
  const middlewares = [
    logger,
  ];

  const enhancers = [
    applyMiddleware(...middlewares),
  ];

  return createStore(
    createReducer(),
    initialState,
    compose(...enhancers),
  );
};

const store = configureStore({});
API.setStore(store);

const AppNavigation = StackNavigator({
  Home: { screen: MainPage },
  FilePreview: { screen: FilePreviewPage },
});

export default class App extends Component<{}> {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          {/*<Text style={styles.welcome}>
            Welcome to React Native!
          </Text>
          <Text style={styles.instructions}>
            To get started, edit App.js
          </Text>
          <Text style={styles.instructions}>
            {instructions}
          </Text>*/}
          <AppNavigation />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: '#fdfffd',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
