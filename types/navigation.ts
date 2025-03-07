import { DrawerNavigationProp } from "@react-navigation/drawer";
import { StackNavigationProp } from "@react-navigation/stack";

export type RootDrawerParamList = {
  homepage: undefined;
  profile: undefined;
  settings: undefined;
  Help: undefined;
};

export type HomeStackParamList = {
  Home: undefined;
  Details: { id: string };
  // Agrega aquí otras rutas del HomeStack
};

export type DrawerNavigationProps = DrawerNavigationProp<RootDrawerParamList>;
export type HomeStackNavigationProps = StackNavigationProp<HomeStackParamList>;

export type ECGData = {
  frequencyRanges: {
    range: string;
    percentage: number;
  }[];
  maxMin: {
    max: number;
    min: number;
    timestamp: string;
  };
}; 