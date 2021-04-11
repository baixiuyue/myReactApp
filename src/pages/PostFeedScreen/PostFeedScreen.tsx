import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { navigate } from 'utils/navigationService';

const PostFeedScreen = () => {
  return (
    <View style={styles.section}>
      <Text>发表动态</Text>
      <Button
        title="我的动态"
        onPress={() => navigate('FeedListScreen', { title: 'aaa' })}
      />
    </View>
  );
};
export default PostFeedScreen;

const styles = StyleSheet.create({
  section: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
