import { useEffect, useRef, useState } from "react";
import {
  View,
  ActivityIndicator,
  Text,
  TouchableOpacity,
  ScrollView,
  Alert,
  TextInput,
  StyleSheet,
} from "react-native";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { SafeScreen } from "@/components/template";
import { fetchOne } from "@/services/users";
import { validateUserCredentials } from "@/services/users/fetchOne";
import ActionSheet, { ActionSheetRef } from "react-native-actions-sheet";

function Login() {
  const { t } = useTranslation(["welcome", "common"]);
  const actionSheetRef = useRef<ActionSheetRef>(null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async () => {
    if (!email) {
      setEmailError("Email is required.");
    } else {
      setEmailError("");
    }

    if (!password) {
      setPasswordError("Password is required.");
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
          console.log("Login successful.");
        } else {
          console.log("Invalid email or password.");
          actionSheetRef.current?.show();
        }
      } catch (error: TObject) {
        console.error("Error during login:", error.message as unknown);
      }
    }
  };
  return (
    <SafeScreen>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <ActionSheet ref={actionSheetRef}>
          <View style={{ margin: 30 }}>
            <Text
              style={{
                fontSize:20,
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
                // Handle try again action here
              }}
            >
              <Text style={{ color: "white", textAlign: "center" }}>
                {t("common:login.actionSheet.tryAgainButtonText")}
              </Text>
            </TouchableOpacity>
          </View>
        </ActionSheet>
        <View style={{ marginTop: 80 }}>
          <View style={styles.container}>
            <TextInput
              style={[styles.input, focusedField === "email" && styles.focused]}
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              onFocus={() => setFocusedField("email")}
              onBlur={() => setFocusedField(null)}
            />
            {emailError ? (
              <Text style={styles.errorMessage}>{emailError}</Text>
            ) : null}
            <View
              style={[
                styles.passwordContainer,
                focusedField === "password" && styles.focused,
              ]}
            >
              <TextInput
                style={[styles.input, styles.passwordInput]}
                placeholder="Password"
                value={password}
                secureTextEntry={!showPassword}
                onChangeText={setPassword}
                onFocus={() => setFocusedField("password")}
                onBlur={() => setFocusedField(null)}
              />
              <TouchableOpacity
                onPress={toggleShowPassword}
                style={styles.eyeIcon}
              >
                {/* <MaterialIcons name={showPassword ? 'visibility-off' : 'visibility'} size={24} color="black" /> */}
              </TouchableOpacity>
            </View>
            {passwordError ? (
              <Text style={styles.errorMessage}>{passwordError}</Text>
            ) : null}
          </View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              margin: 40,
            }}
          >
            <Text
              style={{ fontSize: 16, color: "#398049", fontWeight: "bold" }}
            >
              {t("common:login.needHelpText")}
            </Text>
            <Text style={{ fontSize: 12, color: "#A1A1A1", margin: 16 }}>
              {t("common:login.needHelpSubText")}
            </Text>
          </View>
          <TouchableOpacity
            onPress={handleLogin}
            style={[
              styles.loginButton,
              (!email || !password) && styles.disabledButton,
            ]}
          >
            <Text style={styles.loginButtonText}>Log in</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: "center",
    backgroundColor: "white",
  },
  input: {
    height: 40,
    borderBottomWidth: 2,
    borderColor: "lightgray",
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  focused: {
    borderColor: "#3C7D47",
  },
  error: {
    borderColor: "#C63450",
  },
  errorMessage: {
    color: "#C63450",
    marginBottom: 5,
    fontSize: 12,
    fontWeight: "500",
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  passwordInput: {
    flex: 1,
  },
  eyeIcon: {
    position: "absolute",
    right: 10,
  },
  loginButton: {
    backgroundColor: "#6EE095",
    alignItems: "center",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  loginButtonText: {
    color: "black",
    fontWeight: "bold",
  },
  disabledButton: {
    backgroundColor: "#6EE095",
    opacity: 0.2,
  },
});

export default Login;
