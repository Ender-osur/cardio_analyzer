import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useTranslation } from 'react-i18next';
import { styles } from './ResetPasswordPage.style';
import CommonButton from '@/components/commonButton/commonButton';

const ResetPasswordPage: React.FC = () => {
  const { t } = useTranslation();

  const handleResetPassword = () => {
    // Logic to reset password
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('resetPassword.title')}</Text>
      <TextInput
        style={styles.input}
        placeholder={t('resetPassword.email')}
        keyboardType="email-address"
      />
      <Button title={t('resetPassword.reset')} onPress={handleResetPassword} />
      <CommonButton title={t('resetPassword.back')} route={'login'} />
    </View>
  );
};

export default ResetPasswordPage;