import { StyleSheet } from 'react-native';
import { Colors } from '../../../constants/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
  logo: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginTop: 50,
  },
});