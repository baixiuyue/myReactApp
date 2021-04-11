import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from 'utils/navigationService';
import MainStackNavigator from './MainStackNavigator';
import AuthStackNavigator from './AuthStackNavigator';
import { useSelector } from 'react-redux';
import { selectToken } from 'reduxState/selectors';
import SplashScreen from 'react-native-splash-screen'; // 启动页

const RootScreen = () => {
  const token = useSelector(selectToken);
  React.useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  }, []); //隐藏启动页
  return (
    <NavigationContainer ref={navigationRef}>
      {token ? <MainStackNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
};

export default RootScreen;
