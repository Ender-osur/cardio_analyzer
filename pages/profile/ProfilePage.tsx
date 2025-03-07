import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import type { DrawerNavigationProps } from '@/types/navigation';

interface ProfilePageProps {
  navigation: DrawerNavigationProps;
}

const ProfilePage: React.FC<ProfilePageProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile Page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default ProfilePage;