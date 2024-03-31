import { SafeAreaView, StatusBar, StyleSheet } from "react-native";

import type { PropsWithChildren } from "react";

function SafeScreen({ children }: PropsWithChildren) {

  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SafeScreen;
