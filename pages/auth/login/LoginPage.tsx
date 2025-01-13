import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { useTranslation } from "react-i18next";

import { styles } from "./LoginPage.style";
import CommonButton from "../../../components/commonButton/CommonButton";


const LoginPage = () => {
  const { t } = useTranslation();

  return (
    <SafeAreaView style={styles.container}>
      <Text>{t("login.title")}</Text>
      <CommonButton title={t("login.signup")} route="signup" />
      <CommonButton title={t("login.help")} route="help" />
      <CommonButton title={t("login.reset")} route="reset" />
    </SafeAreaView>
  );
};

export default LoginPage;
