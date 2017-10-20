import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
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
          fileType,
        },
      } = {}
    } = this.props;

    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.onPress}>
          <Text> [{fileType}] {fileName}</Text>
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
      fileType: PropTypes.string.isRequired,
    }),
  }),
};

const styles = StyleSheet.create({
  container: {
    borderBottomColor: "#666",
    borderBottomWidth: 1,
    padding: 10,
  },
});