// import 'whatwg-fetch';
import "react-native-gesture-handler/jestSetup";
import "@testing-library/jest-native/extend-expect";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

jest.mock("react-native-reanimated", () =>
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  require("react-native-reanimated/mock")
);

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");

i18n.use(initReactI18next).init({
  lng: "en",
  resources: {
    en: {
      common: {
        login: {
          emailPlaceholder: "Email",
          passwordPlaceholder: "Password",
        },
      },
    },
  },
});
