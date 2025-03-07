import React from 'react';
import { enableScreens } from "react-native-screens";
import { createStackNavigator } from "@react-navigation/stack";
import type { HomeStackParamList } from '@/types/navigation';

import HomePage from "../pages/home/HomePage";
import ProfilePage from "../pages/profile/ProfilePage";
import SettingsPage from "../pages/settings/SettingsPage";
import HelpPage from "@/pages/help/HelpPage";

enableScreens();

const Stack = createStackNavigator<HomeStackParamList>();

const HomeStack: React.FC = () => {
  return (
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: "#004052", },
        }}
      >
        <Stack.Screen name="home" component={HomePage} />
        <Stack.Screen name="profile" component={ProfilePage} />
        <Stack.Screen name="settings" component={SettingsPage} />
        <Stack.Screen name="help" component={HelpPage} />
      </Stack.Navigator>
  );
};

export default HomeStack;
