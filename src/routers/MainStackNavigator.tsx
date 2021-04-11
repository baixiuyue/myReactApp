import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import TabNavigator from './TabNavigator';
import React, { useState } from 'react';
import ReportListScreen from 'pages/ReportListScreen/ReportListScreen';
import PostFeedScreen from 'pages/PostFeedScreen/PostFeedScreen';
import FeedListScreen from 'pages/FeedListScreen/FeedListScreen';

export type MainStackParamList = {
  /**
   * tab页面
   */
  TabNavigator: undefined;
  /**
   * 我的鉴定
   */
  ReportListScreen: undefined;
  /**
   * 发表动态
   */
  PostFeedScreen: undefined;
  /**
   * 我的动态 navigate('FeedListScreen',{title: 'aaa'})
   */
  FeedListScreen: { title: string; showMyself?: boolean };
};

const { Navigator, Screen } = createStackNavigator<MainStackParamList>();

// tab页标题
const tabNavigatorTitle = {
  HomeScreen: '首页',
  MapScreen: '附近',
  DiscoverScreen: '发现',
  ProfileScreen: '我的',
};

export default function MainStackNavigator() {
  const [tabNavigatorRouterName, setTabNavigatorRouterName] = useState(
    'HomeScreen',
  );
  return (
    <Navigator
      initialRouteName="TabNavigator"
      screenOptions={{
        headerBackTitle: '返回',
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTitleAlign: 'center',
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        gestureEnabled: true,
      }}
    >
      <Screen
        name="TabNavigator"
        component={TabNavigator.bind(TabNavigator, {
          setRName: setTabNavigatorRouterName,
        })}
        options={() => ({
          title:
            tabNavigatorTitle[
              tabNavigatorRouterName as keyof typeof tabNavigatorTitle
            ],
        })}
      />
      <Screen
        name="ReportListScreen"
        component={ReportListScreen}
        options={{
          title: '我的鉴定',
        }}
      />
      <Screen
        name="PostFeedScreen"
        component={PostFeedScreen}
        options={{
          title: '发表动态',
        }}
      />
      <Screen
        name="FeedListScreen"
        component={FeedListScreen}
        options={{
          title: '我的动态',
        }}
      />
    </Navigator>
  );
}
