import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { navigate } from 'utils/navigationService';

const ReportListScreen = () => {
  return (
    <View style={styles.section}>
      <Text>我的鉴定</Text>
      <Button title="发表动态" onPress={() => navigate('PostFeedScreen')} />
    </View>
  );
};
export default ReportListScreen;

const styles = StyleSheet.create({
  section: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
