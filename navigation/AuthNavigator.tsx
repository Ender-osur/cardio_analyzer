import { enableScreens } from "react-native-screens";
import { createStackNavigator } from "@react-navigation/stack";
import LoginPage from "../pages/auth/login/LoginPage";
import SignupPage from "../pages/auth/signup/SignupPage";
import HelpPage from "../pages/auth/help/HelpPage";
import ResetPasswordPage from "../pages/auth/resetPassword/ResetPasswordPage";

enableScreens();

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="login" component={LoginPage} />
      <Stack.Screen name="signup" component={SignupPage} />
      <Stack.Screen name="help" component={HelpPage} />
      <Stack.Screen name="reset" component={ResetPasswordPage} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
