import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';
import { connect } from 'react-redux';
import loadUser from '../API/github.api';
import MainContainer from '../components/main.container';

export default class MenuPage extends React.Component {
  static navigationOptions = {
    title: 'Main Menu',
    header: null,
  };

  gotoGithub = () => {
    console.log("click");
    const { navigate } = this.props.navigation;
    navigate('Github');

  };

  render() {
    return (
      <MainContainer>
        <Button onPress={this.gotoGithub} title="Github" />
      </MainContainer>
    );
  }
}
