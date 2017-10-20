import React from 'react';
import {
  Text,
  View,
  FlatList,
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import EmptyList from '../components/empty-list';
import AddFileButton from '../components/add-button';
import FileListItem from '../components/file-list-item';
import { setSelectedFileAction } from '../actions/files.action';

class MainPage extends React.Component {
  static navigationOptions = {
    title: 'Main',
    headerRight: <AddFileButton />
  };

  renderItem = (data) => {
    return <FileListItem data={data} onPress={this.onItemPress} />
  };

  onItemPress = (index) => {
    const { navigate } = this.props.navigation;
    this.props.dispatch(setSelectedFileAction(index));
    navigate('FilePreview');
  };

  keyExtractor = (item, index) => index;

  render() {
    const { files, error } = this.props;

    if (files.length === 0) {
      return <EmptyList/>;
    }

    return (
      <View>
        <Text>You have {files.length} files</Text>
        <FlatList
          data={files}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
          />
      </View>
    );
  }
}

MainPage.propTypes = {
  files: PropTypes.arrayOf({
    fileName: PropTypes.string.isRequired,
    fileData: PropTypes.any,
    uploadedAt: PropTypes.number.isRequired,
    fileSize: PropTypes.number.isRequired,
    filePath: PropTypes.string.isRequired,
    fileType: PropTypes.string.isRequired,
  }),
  error: PropTypes.string,
  navigation: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  files: state.files.files,
  error: state.files.error,
});

export default connect(mapStateToProps)(MainPage);
