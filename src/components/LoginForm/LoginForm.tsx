import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { Input, PasswordContainer, PasswordInput, ErrorMessage } from "./styled";

interface Props {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  focusedField: string | null;
  setFocusedField: React.Dispatch<React.SetStateAction<string | null>>;
  emailError: string;
  passwordError: string;
}

const LoginForm: React.FC<Props> = ({ email, setEmail, password, setPassword, focusedField, setFocusedField, emailError, passwordError }) => {
  const { t } = useTranslation("common");
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <Input
        placeholder={t("login.emailPlaceholder")}
        value={email}
        onChangeText={setEmail}
        onFocus={() => setFocusedField("email")}
        onBlur={() => setFocusedField(null)}
        style={[focusedField === "email" && !emailError ? { borderColor: "#3C7D47" } : emailError ? { borderColor: "#c63450" } : null]}
      />
      {emailError ? <ErrorMessage>{emailError}</ErrorMessage> : null}
      <PasswordContainer style={[focusedField === "password" && { borderColor: "#3C7D47" }]}>
        <PasswordInput
          testID="password-input"
          placeholder={t("login.passwordPlaceholder")}
          value={password}
          secureTextEntry={!showPassword}
          onChangeText={setPassword}
          onFocus={() => setFocusedField("password")}
          onBlur={() => setFocusedField(null)}
          style={[focusedField === "password" && !passwordError ? { borderColor: "#3C7D47" } : passwordError ? { borderColor: "#c63450" } : null]}
        />
        <TouchableOpacity testID="eye-icon" onPress={toggleShowPassword} style={styles.eyeIcon}>
          <Text style={{ fontSize: 12, fontWeight: "bold" }}>{showPassword ? "hide" : "show"}</Text>
        </TouchableOpacity>
      </PasswordContainer>
      {passwordError ? <ErrorMessage>{passwordError}</ErrorMessage> : null}
    </>
  );
};

const styles = StyleSheet.create({
  eyeIcon: {
    position: "absolute",
    right: 10,
  },
});

export default LoginForm;
