import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  auth: undefined;
};

export type AuthStackParamList = {
  login: undefined;
  signup: undefined;
  reset: undefined;
  help: undefined;
};

export type NavigationProp = StackNavigationProp<AuthStackParamList>;

export type HomeStackParamList = {
  Home: undefined;
  Details: undefined;
};