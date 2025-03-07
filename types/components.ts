import { ViewStyle, TextStyle } from 'react-native';

export interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  initiallyOpen?: boolean;
  style?: ViewStyle;
}

export interface CustomDrawerContentProps {
  navigation: import('@react-navigation/drawer').DrawerNavigationProp<any>;
}

export interface MenuButtonProps {
  onPress: () => void;
  style?: ViewStyle;
}

export interface ECGData {
  frequencyRanges: Array<{
    range: string;
    percentage: number;
  }>;
  maxMin: {
    max: number;
    min: number;
    timestamp: string;
  };
} 