import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

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

const styles = StyleSheet.create({
  container: {
    borderBottomColor: "#666",
    borderBottomWidth: 1,
    padding: 10,
  },
});