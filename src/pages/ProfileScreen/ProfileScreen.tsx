import React from 'react';
import { propsSetRName } from 'types';
import { useIsFocused, useRoute } from '@react-navigation/native';
import { Button, StyleSheet, Text, View } from 'react-native';
import pickImage from 'utils/pickImage';
import { navigate } from 'utils/navigationService';

const ProfileScreen = ({ setRName }: propsSetRName) => {
  const isFocused = useIsFocused();
  const route = useRoute();
  React.useEffect(() => {
    if (isFocused) {
      setRName(route.name);
    }
  }, [isFocused, route.name, setRName]);

  async function uploadImage() {
    // if (!permissionsGranted) {
    //   Alert.alert('相机未授权');
    //   return;
    // }
    const image = await pickImage();
    if (!image) {
      return;
    }
    const formData = new FormData();
    formData.append('file', {
      uri: image.path,
      type: image.mime,
      name: 'file.jpg',
    });
    console.log(image);
  }

  return (
    <View style={styles.section}>
      <Text>我的</Text>
      <Button title="上传图片" onPress={() => uploadImage()} />
    </View>
  );
};
export default ProfileScreen;

const styles = StyleSheet.create({
  section: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
