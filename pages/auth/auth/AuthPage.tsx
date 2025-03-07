import React, { useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  ActivityIndicator,
} from "react-native";
import { useTranslation } from "react-i18next";
import { useColorScheme } from "react-native";
import { useDispatch } from "react-redux";
import AntDesign from "@expo/vector-icons/AntDesign";
import { COLORS } from "@/constants/theme";
import LogoWithBorder from "@/components/logos/LogoWithBorder";
import { styles } from "./AuthPage.style";
import CommonButton from "@/components/commonButton/CommonButton";
import TextLink from "@/components/textLink/TextLink";
import PasswordInput from "@/components/passwordInput/PasswordInput";
import { registerService } from "@/services/authService";
import { handleLogin } from "../../../services/authService";

const AuthPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const scheme = useColorScheme();
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const toggleForm = () => {
    setIsLogin((prev) => !prev);
    setErrors({ email: "", password: "", confirmPassword: "" });
  };

  const validateInputs = () => {
    let isValid = true;
    let newErrors = { email: "", password: "", confirmPassword: "" };

    if (!email.trim()) {
      newErrors.email = t("error.required");
      isValid = false;
    } else if (!email.includes("@")) {
      newErrors.email = t("error.invalidEmail");
      isValid = false;
    }

    if (!password.trim()) {
      newErrors.password = t("error.required");
      isValid = false;
    } else if (password.length < 6) {
      newErrors.password = t("error.shortPassword");
      isValid = false;
    }

    if (!isLogin) {
      if (!confirmPassword.trim()) {
        newErrors.confirmPassword = t("error.required");
        isValid = false;
      } else if (password !== confirmPassword) {
        newErrors.confirmPassword = t("error.passwordMismatch");
        isValid = false;
      }
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async () => {
    if (!validateInputs()) return;

    setIsLoading(true);
    try {
      if (isLogin) {
        const response = await handleLogin(email, password, dispatch, t);
        if (response && response.message) {
          return;
        }
      } else {
        await registerService(email, password);
        setIsLogin(true);
      }
    } catch (error: any) {
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView
        style={[
          styles.container,
          {
            backgroundColor: scheme === "dark" ? "#dfffff" : COLORS.background,
          },
        ]}
      >
        {/* Header */}
        <View style={styles.header}>
          <LogoWithBorder />
          <Text style={styles.textLogo}>
            {isLogin ? t("login.title") : t("signup.title")}
          </Text>
        </View>

        {/* Formulario */}
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder={t("signup.email")}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            editable={!isLoading}
          />
          {errors.email ? (
            <Text style={styles.errorText}>{errors.email}</Text>
          ) : null}

          <PasswordInput
            placeholder={t("signup.password")}
            value={password}
            onChangeText={setPassword}
          />
          {errors.password ? (
            <Text style={styles.errorText}>{errors.password}</Text>
          ) : null}

          {!isLogin && (
            <>
              <PasswordInput
                placeholder={t("signup.confirmPassword")}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
              />
              {errors.confirmPassword ? (
                <Text style={styles.errorText}>{errors.confirmPassword}</Text>
              ) : null}
            </>
          )}

          {isLoading ? (
            <ActivityIndicator size="large" color={COLORS.primary} />
          ) : (
            <CommonButton
              title={isLogin ? t("login.title") : t("signup.title")}
              onPress={handleSubmit}
            />
          )}
        </View>

        {/* Navegación */}
        <View style={styles.navContainer}>
          {isLogin ? (
            <>
              <View style={styles.navRow}>
                <Text style={styles.navText}>{t("login.haventAccount")}</Text>
                <TextLink title={t("login.signup")} onPress={toggleForm} />
              </View>
              <View style={styles.navRow}>
                <Text style={styles.navText}>{t("login.forgot")}</Text>
                <TextLink title={t("login.reset")} route="reset" />
              </View>
            </>
          ) : (
            <TextLink
              title={`${t("signup.login")}`}
              onPress={toggleForm}
              textStyle={[{ fontSize: 24, textDecorationLine: "none" }]}
            >
              <AntDesign name="arrowleft" size={24} color="default" />
            </TextLink>
          )}
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default AuthPage;
