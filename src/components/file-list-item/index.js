import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import PropTypes from 'prop-types';

export default class FileListItem extends React.Component {
  onPress = () => {
    this.props.onPress(this.props.data.index);
  };

  render() {
    const {
      data: {
        item: {
          fileName,
          fileSize,
          filePath,
          fileType,
        },
      } = {}
    } = this.props;

    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.onPress}>
          <View style={{ flexDirection: "row" }}>
            <View style={styles.imageView}>
              {fileType === 'image' &&
                <Image
                  source={{uri: filePath}}
                  style={styles.imageThumb}/>
              }
            </View>
            <View style={styles.textView}><Text>{fileName} / {fileSize}</Text></View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

FileListItem.propTypes = {
  onPress: PropTypes.func.isRequired,
  data: PropTypes.shape({
    index: PropTypes.number.isRequired,
    item: PropTypes.shape({
      fileName: PropTypes.string.isRequired,
      filePath: PropTypes.string.isRequired,
      fileSize: PropTypes.number.isRequired,
    }),
  }),
};

const styles = StyleSheet.create({
  container: {
    borderBottomColor: "#666",
    borderBottomWidth: 1,
    padding: 10,
  },
  imageView: {
    width: 100,
    height: 100,
  },
  imageThumb: {
    width: 100,
    height: 100,
  },
  textView: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
  }
});