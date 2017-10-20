import React from 'react';
import {
  Button,
} from 'react-native';
import { connect } from 'react-redux';
import ImagePicker from 'react-native-image-picker';
import { fileAddAction } from '../../actions/files.action';

class AddButton extends React.Component {
  onPress = () => {
    const options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images'
      }
    };

    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        this.props.dispatch(fileAddAction({
          fileName: response.fileName,
          fileData: response.data,
          fileType: 'image',
          uploadedAt: response.timestamp,
          fileSize: response.fileSize,
          filePath: response.uri,
        }));
      }
    });
  };
  render() {
    return (
      <Button title="+" onPress={this.onPress} />
    );
  }
}

export default connect()(AddButton);
