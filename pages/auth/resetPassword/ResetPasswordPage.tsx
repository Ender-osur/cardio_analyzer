import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useColorScheme } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import TextLink from '@/components/textLink/TextLink';

import { styles } from './ResetPasswordPage.style';
import CommonButton from '../../../components/commonButton/CommonButton';

const ResetPasswordPage: React.FC = () => {
  const { t } = useTranslation();
  const scheme = useColorScheme();

  const handleResetPassword = () => {
    // Logic to reset password
  };

  return (
    <View style={[styles.container, scheme === "dark" ? {backgroundColor: "#dfffff"}:{backgroundColor: "#004052"}]}>
      <Text style={styles.title}>{t('resetPassword.title')}</Text>
      <TextInput
        style={styles.input}
        placeholder={t('resetPassword.email')}
        keyboardType="email-address"
      />
      <Button title={t('resetPassword.reset')} onPress={handleResetPassword} />
      <TextLink title={`${t("signup.login")}`} route='login' textStyle={[{fontSize: 24, textDecorationLine: 'none'}]}>
              <AntDesign name="arrowleft" size={24} color="default" />
            </TextLink>
    </View>
  );
};

export default ResetPasswordPage;