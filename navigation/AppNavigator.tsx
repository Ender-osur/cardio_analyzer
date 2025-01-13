import "react-native-gesture-handler";
import React from "react";
import { useSelector } from "react-redux";
import { createStackNavigator } from "@react-navigation/stack";

import AuthNavigator from "./AuthNavigator";
import HomeStack from "./HomeStack";

const Stack = createStackNavigator();

const AppNavigator = (): React.JSX.Element => {
  const isAuth = useSelector((state: any) => state.auth.isAuthenticated);

  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="auth"
    >
      {isAuth ? (
        <Stack.Screen name="Home" component={HomeStack} />
      ) : (
        <Stack.Screen name="Auth" component={AuthNavigator} />
      )}
    </Stack.Navigator>
  );
};

export default AppNavigator;
