import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
} from 'react-native';
import { connect } from 'react-redux';
import ImagePicker from 'react-native-image-picker';
import { DocumentPicker, DocumentPickerUtil } from 'react-native-document-picker';

import { fileAddAction } from '../../actions/files.action';

class AddButton extends React.Component {
  onPress = () => {
    DocumentPicker.show({
      filetype: [DocumentPickerUtil.images(), DocumentPickerUtil.pdf()],
    },(error,res) => {
      // Android

      console.log(res, error);

    });
    // const options = {
    //   title: 'Select Image',
    //   storageOptions: {
    //     skipBackup: true,
    //     path: 'images'
    //   }
    // };
    //
    // ImagePicker.showImagePicker(options, (response) => {
    //   console.log('Response = ', response);
    //
    //   if (response.didCancel) {
    //     console.log('User cancelled image picker');
    //   } else if (response.error) {
    //     console.log('ImagePicker Error: ', response.error);
    //   } else {
    //     this.props.dispatch(fileAddAction({
    //       fileName: response.fileName,
    //       fileData: response.data,
    //       fileType: 'image',
    //       uploadedAt: response.timestamp,
    //       fileSize: response.fileSize,
    //       filePath: response.uri,
    //     }));
    //   }
    // });
  };
  render() {
    return (
      <Button title="+" onPress={this.onPress} />
    );
  }
}

AddButton.propTypes = {
  onPress: PropTypes.func.isRequired,
};

export default connect()(AddButton);
