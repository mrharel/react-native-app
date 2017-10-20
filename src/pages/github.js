import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { connect } from 'react-redux';
import loadUser from '../API/github.api';
import MainContainer from '../components/main.container';

class GithubPage extends React.Component {
  static navigationOptions = {
    title: 'Welcome'
  };

  componentDidMount() {
    loadUser('mrharel');
  }

  render() {
    const { userName, fetching, error, userData } = this.props;
    return (
      <MainContainer>
        <Text>Hi</Text>
        {fetching && <Text>Loading...</Text>}
        {!fetching && userName && <Text>{userName}</Text>}
        {error && <Text>Error</Text>}
      </MainContainer>
    );
  }
}

const mapStateToProps = state => ({
  fetching: state.github.fetching,
  userName: state.github.userName,
  userData: state.github.userData,
  error: state.github.error,
});

export default connect(mapStateToProps)(GithubPage);
