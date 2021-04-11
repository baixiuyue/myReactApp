import React from 'react';
import { propsSetRName } from 'types';
import { useIsFocused, useRoute } from '@react-navigation/native';
import { Button, StyleSheet, Text, View } from 'react-native';
import { navigate } from 'utils/navigationService';

const MapScreen = ({ setRName }: propsSetRName) => {
  const isFocused = useIsFocused();
  const route = useRoute();
  React.useEffect(() => {
    if (isFocused) {
      setRName(route.name);
    }
  }, [isFocused, route.name, setRName]);
  return (
    <View style={styles.section}>
      <Text>附近</Text>
    </View>
  );
};
export default MapScreen;

const styles = StyleSheet.create({
  section: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
