import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';

const Header: React.FC = () => {
  const { t } = useTranslation();
  const appName = t('appName');
  const companyName = t('companyName');
  const currentDate = new Date().toLocaleDateString();

  return (
    <View style={styles.container}>
      <Text style={styles.appName}>{appName}</Text>
      <Text style={styles.date}>{currentDate}</Text>
      <Text style={styles.companyName}>{companyName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f8f9fa',
    alignItems: 'center',
  },
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 16,
    color: '#6c757d',
  },
  companyName: {
    fontSize: 18,
    color: '#343a40',
  },
});

export default Header;