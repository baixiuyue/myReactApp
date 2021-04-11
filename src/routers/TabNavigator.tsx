import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from 'pages/HomeScreen/HomeScreen';
import MapScreen from 'pages/MapScreen/MapScreen';
import DiscoverScreen from 'pages/DiscoverScreen/DiscoverScreen';
import ProfileScreen from 'pages/ProfileScreen/ProfileScreen';

import { propsSetRName } from 'types';
export type TabParamList = {
  /*首页*/
  HomeScreen: undefined;
  /*附近*/
  MapScreen: undefined;
  /*发现*/
  DiscoverScreen: undefined;
  /*我的*/
  ProfileScreen: undefined;
};

const { Navigator, Screen } = createBottomTabNavigator<TabParamList>();

function TabNavigator({ setRName }: propsSetRName) {
  return (
    <Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          const routeName = route.name;
          let iconName = '';
          if (routeName === 'HomeScreen') {
            iconName = 'home';
          } else if (routeName === 'MapScreen') {
            iconName = 'map-marker';
          } else if (routeName === 'ProfileScreen') {
            iconName = 'user';
          } else if (routeName === 'DiscoverScreen') {
            iconName = 'compass';
          }
          return <Icon name={iconName} size={size} color={color!} />;
        },
      })}
    >
      <Screen
        name="HomeScreen"
        component={HomeScreen.bind(HomeScreen, { setRName })}
        options={{ tabBarLabel: '首页' }}
      />
      <Screen
        name="MapScreen"
        component={MapScreen.bind(MapScreen, { setRName })}
        options={{ tabBarLabel: '附近' }}
      />
      <Screen
        name="DiscoverScreen"
        component={DiscoverScreen.bind(DiscoverScreen, { setRName })}
        options={{ tabBarLabel: '发现' }}
      />
      <Screen
        name="ProfileScreen"
        component={ProfileScreen.bind(ProfileScreen, { setRName })}
        options={{ tabBarLabel: '我的' }}
      />
    </Navigator>
  );
}

export default TabNavigator;
