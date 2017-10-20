import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default () => (
  <View style={styles.container}>
    <Text>You have no items to view</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});