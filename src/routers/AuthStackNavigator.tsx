import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from 'pages/LoginScreen';
import RegisterScreen from 'pages/RegisterScreen';
import React from 'react';

export type AuthStackParamList = {
  LoginScreen: undefined;
  RegisterScreen: undefined;
};

const { Navigator, Screen } = createStackNavigator<AuthStackParamList>();

const AuthStackNavigator = () => {
  return (
    <Navigator screenOptions={{ headerBackTitle: '返回' }}>
      <Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{ title: '注册' }}
      />
    </Navigator>
  );
};
export default AuthStackNavigator;
