// 我的动态
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { navigate } from 'utils/navigationService';

const FeedListScreen = () => {
  return (
    <View style={styles.section}>
      <Text>我的动态</Text>
    </View>
  );
};
export default FeedListScreen;

const styles = StyleSheet.create({
  section: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
