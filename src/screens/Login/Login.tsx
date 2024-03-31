import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Image,
} from "react-native";
import { useTranslation } from "react-i18next";
import { SafeScreen } from "@/components/template";
import ActionSheet, { ActionSheetRef } from "react-native-actions-sheet";
import {
  Container,
  ImageContainer,
  LoginButton,
  LoginButtonText,
  TextWrapper,
} from "./styled";
import validateUserCredentials from "@/services/users/fetchOne";
import HomeImage from "../../assets/images/homeIcon.png";
import { useNavigation } from "@react-navigation/native";
import BottomImageScreen from "../../components/BottomImage";
import LoginForm from "@/components/LoginForm/LoginForm";

function Login() {
  const { t } = useTranslation(["welcome", "common"]);
  const actionSheetRef = useRef<ActionSheetRef>(null);

  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleLogin = useCallback(async () => {
    if (!email) {
      setEmailError(t("common:login.required.emailMessage"));
    } else {
      setEmailError("");
    }

    if (!password) {
      setPasswordError(t("common:login.required.passwordMessage"));
    } else {
      setPasswordError("");
    }

    // Perform login logic if email and password are not empty
    if (email && password) {
      try {
        const credentials: Credentials = {
          email,
          password,
        };
        const isValid: boolean = await validateUserCredentials(credentials);

        if (isValid) {
          navigation.navigate("Success" as never);
        } else {
          console.log("Invalid email or password.");
          actionSheetRef.current?.show();
        }
      } catch (error: TObject) {
        console.error("Error during login:", error.message as unknown);
      }
    }
  }, [email, password]);

  return (
    <SafeScreen>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <BottomImageScreen>
          <ActionSheet ref={actionSheetRef}>
            <View style={{ margin: 30 }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  color: "black",
                  marginBottom: 20,
                }}
              >
                {t("common:login.actionSheet.text")}
              </Text>
              <Text style={{ color: "black", marginBottom: 15 }}>
                {t("common:login.actionSheet.subText")}
              </Text>
              <TouchableOpacity
                style={{
                  backgroundColor: "#C8324C",
                  padding: 10,
                  borderRadius: 30,
                  marginTop: 10,
                }}
                onPress={() => {
                  setEmail("");
                  setPassword("");
                  setEmailError("");
                  setPasswordError("");
                  actionSheetRef.current?.hide();
                }}
              >
                <Text style={{ color: "white", textAlign: "center" }}>
                  {t("common:login.actionSheet.tryAgainButtonText")}
                </Text>
              </TouchableOpacity>
            </View>
          </ActionSheet>

          <Container style={{ marginTop: 80 }}>
            <ImageContainer>
              <Image source={HomeImage} resizeMode="contain" />
            </ImageContainer>
            <Container>
              <LoginForm
                email={email}
                setEmail={(value) => {
                  setEmail(value);
                  if (value !== "") {
                    setEmailError("");
                  } else {
                    setEmailError(t("common:login.required.emailMessage"));
                  }
                }}
                password={password}
                setPassword={(value) => {
                  setPassword(value);
                  if (value !== "") {
                    setPasswordError("");
                  } else {
                    setPasswordError(t("common:login.required.passwordMessage"));
                  }
                }}
                focusedField={focusedField}
                setFocusedField={setFocusedField}
                emailError={emailError}
                passwordError={passwordError}
              />
            </Container>
            <TextWrapper
              style={{
                justifyContent: "center",
                alignItems: "center",
                margin: 30,
              }}
            >
              <Text
                style={{ fontSize: 16, color: "#398049", fontWeight: "bold" }}
              >
                {t("common:login.needHelpText")}
              </Text>
              <Text style={{ fontSize: 12, color: "#A1A1A1", margin: 10 }}>
                {t("common:login.needHelpSubText")}
              </Text>
            </TextWrapper>
          </Container>

          <LoginButton
            onPress={handleLogin}
            style={!email || !password ? styles.disabledButton : null}
            disabled={!email || !password}
          >
            <LoginButtonText>Log in</LoginButtonText>
          </LoginButton>
        </BottomImageScreen>
      </ScrollView>
    </SafeScreen>
  );
}

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: "center",
    backgroundColor: "white",
  },
  disabledButton: {
    backgroundColor: "#6EE095",
    opacity: 0.2,
  },
});

export default Login;
