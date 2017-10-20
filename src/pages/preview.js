import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import { connect } from 'react-redux';

const BoldText = ({ children }) => <Text style={styles.boldText}>{children}</Text>;

class FilePreviewPage extends React.Component {
  static navigationOptions = {
    title: 'Preview',
  };


  render() {
    const {
      selectedFileIndex,
      files,
    } = this.props;

    if (selectedFileIndex === null) {
      return <View/>;
    }

    const fileData = files[selectedFileIndex];

    return (
      <View>
        <View><BoldText>File Name:</BoldText><Text> {fileData.fileName}</Text></View>
        <View><BoldText>File Size:</BoldText><Text> {fileData.fileSize}</Text></View>
        {fileData.fileType === 'image' &&
        <Image
          source={{ uri: fileData.filePath}}
          style={styles.imagePreview} />
        }
      </View>
    );
  }
}

const mapStateToProps = state => ({
  files: state.files.files,
  selectedFileIndex: state.files.selectedFileIndex,
});

const styles = StyleSheet.create({
  boldText: {
    fontWeight: "bold",
  },
  imagePreview: {
    width: 250,
    height: 250,
  }
});

export default connect(mapStateToProps)(FilePreviewPage);
