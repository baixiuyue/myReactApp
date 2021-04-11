import * as React from 'react';
import {
  View,
  Text,
  Button,
  StatusBar,
  // Alert,
  // PermissionsAndroid,
  // Platform,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import { navigationRef, navigate, goBack } from 'utils/navigationService';
import pickImage from 'utils/pickImage';
function HomeScreen() {
  // const [permissionsGranted, setPermissionsGranted] = React.useState(false);
  // const askForPermissions = () => {
  //   const PERMISSIONS = [
  //     PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  //     PermissionsAndroid.PERMISSIONS.CAMERA,
  //   ];
  //   if (Platform.OS === 'android') {
  //     PermissionsAndroid.requestMultiple(PERMISSIONS).then((results) => {
  //       console.log(JSON.stringify(results));
  //       const allPermissionsGranted = Object.values(results).every(
  //         (result) => result === 'granted',
  //       );
  //       if (allPermissionsGranted) {
  //         setPermissionsGranted(true);
  //       }
  //     });
  //   } else {
  //     // Camera.checkDeviceAuthorizationStatus().then(access => {
  //     //   if (access) {
  //     //     setPermissionsGranted(true);
  //     //   }
  //     // });
  //     setPermissionsGranted(true);
  //   }
  // };
  // React.useEffect(() => {
  //   askForPermissions();
  // }, []);
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
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <StatusBar backgroundColor="#f4511e" barStyle="light-content" />
      <Text>Home 页面</Text>
      <Button title="上传图片" onPress={() => uploadImage()} />
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <StatusBar backgroundColor="#f4511e" barStyle="light-content" />
      <Text>Details 页面</Text>
      <Button title="返回" onPress={() => goBack()} />
    </View>
  );
}
function headerRight() {
  return <Text>headerRight</Text>;
}

function headerTitle() {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Button title="home" onPress={() => null} />
      <Button title="detail" onPress={() => null} />
    </View>
  );
}

const { Navigator, Screen } = createStackNavigator();

function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Navigator
        initialRouteName="Home"
        screenOptions={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTitleAlign: 'center',
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerRight: headerRight,
          headerTitle: headerTitle,
          animationTypeForReplace: 'pop',
        }}
      >
        <Screen
          name="Home"
          component={HomeScreen}
          options={{
            gestureEnabled: true,
          }}
        />
        <Screen
          name="Details"
          component={DetailsScreen}
          options={
            {
              // gestureEnabled: true,
            }
          }
        />
      </Navigator>
    </NavigationContainer>
  );
}

export default App;
