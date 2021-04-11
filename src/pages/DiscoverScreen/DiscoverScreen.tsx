import React from 'react';
import { propsSetRName } from 'types';
import { useIsFocused, useRoute } from '@react-navigation/native';
import { Button, StyleSheet, Text, View } from 'react-native';
import { navigate } from 'utils/navigationService';

const DiscoverScreen = ({ setRName }: propsSetRName) => {
  const isFocused = useIsFocused();
  const route = useRoute();
  React.useEffect(() => {
    if (isFocused) {
      setRName(route.name);
    }
  }, [isFocused, route.name, setRName]);
  return (
    <View style={styles.section}>
      <Text>发现</Text>
    </View>
  );
};
export default DiscoverScreen;

const styles = StyleSheet.create({
  section: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
