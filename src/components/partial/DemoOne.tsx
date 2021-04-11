import React from 'react';
import {
  Alert,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  PermissionsAndroid,
  Platform,
  Button,
} from 'react-native';

import { useNetInfo } from '@react-native-community/netinfo';

// 获取渠道信息(环境)
import { NativeModules } from 'react-native';
const appInfo = NativeModules.AppInfo;

const DemoOne = () => {
  const [channel, setChannel] = React.useState('channel_name');
  const [permissionsGranted, setPermissionsGranted] = React.useState(false);
  const askForPermissions = () => {
    const PERMISSIONS = [
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      PermissionsAndroid.PERMISSIONS.CAMERA,
    ];
    if (Platform.OS === 'android') {
      PermissionsAndroid.requestMultiple(PERMISSIONS).then((results) => {
        console.log(JSON.stringify(results));
        const allPermissionsGranted = Object.values(results).every(
          (result) => result === 'granted',
        );
        if (allPermissionsGranted) {
          setPermissionsGranted(true);
        }
      });
    } else {
      // Camera.checkDeviceAuthorizationStatus().then(access => {
      //   if (access) {
      //     setPermissionsGranted(true);
      //   }
      // });
      setPermissionsGranted(true);
    }
  };
  React.useEffect(() => {
    console.log(appInfo);
    setChannel(appInfo.ENVIRONMENT || 'mmm');
    askForPermissions();
  }, []);
  const show = (msg: string = 'message', time: number = 1000) => {
    appInfo.show(msg, time);
  };
  const netInfo = useNetInfo() || { type: 'aaa', isConnected: true };
  return (
    <View style={styles.bgColor}>
      <StatusBar backgroundColor="#fc1944" barStyle="light-content" />
      <View style={styles.section}>
        <TouchableOpacity
          activeOpacity={0.2}
          onPress={() => {
            Alert.alert('触屏');
            show('触屏', 2000);
          }}
        >
          <Text style={styles.sectionText}>当前app环境:{channel}</Text>
        </TouchableOpacity>
        <Text style={styles.sectionText}>网络类型: {netInfo.type}</Text>
        <Text style={styles.sectionText}>
          网络是否链接: {netInfo.isConnected?.toString()}
        </Text>
        <Text style={styles.sectionText}>
          是否授权: {permissionsGranted.toString()}
        </Text>
      </View>
      <Button onPress={askForPermissions} title="授权" color="#841584" />
    </View>
  );
};
const styles = StyleSheet.create({
  bgColor: {
    backgroundColor: '#fc1944',
  },
  section: {
    marginTop: 32,
  },
  sectionText: {
    marginLeft: 8,
    fontSize: 18,
    fontWeight: '400',
  },
});
export default DemoOne;
