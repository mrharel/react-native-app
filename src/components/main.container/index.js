import React from 'react';
import {
  Platform,
  View
} from 'react-native';
import StatusBarSizeIOS from 'react-native-status-bar-size';

export default ({ children }) => {
  const paddingTop = 0;//(Platform.OS === 'ios' ? StatusBarSizeIOS.currentHeight : 0) || 0;
  return (
    <View style={{ flex: 1, paddingTop }}>{children}</View>
  );
}

