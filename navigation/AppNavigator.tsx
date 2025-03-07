import "react-native-gesture-handler";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { createStackNavigator } from "@react-navigation/stack";

import AuthNavigator from "./AuthNavigator";
import { RootState } from "@/redux/store";
import DrawerNavigator from "./DrawerNavigator";

const Stack = createStackNavigator();

const AppNavigator = (): React.JSX.Element => {
  const isAuth = useSelector(
    (state: RootState) => state.auth.user.isAuthenticated
  );
  useEffect(() => {}, [isAuth]);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      
        cardStyle: { backgroundColor: "#004052" },
      }}
      initialRouteName="auth"
    >
      {!isAuth ? (
        <Stack.Screen name="Home" component={DrawerNavigator} />
      ) : (
        <Stack.Screen name="Auth" component={AuthNavigator} />
      )}
    </Stack.Navigator>
  );
};

export default AppNavigator;
