import "expo-dev-client";
import { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import * as NavigationBar from "expo-navigation-bar";
import RootNavigation from "./src/navigation/RootNavigation";

export default function App() {
  useEffect(() => {
    NavigationBar.setBackgroundColorAsync("white");
    NavigationBar.setBorderColorAsync("#cecece");
  }, []);
  return (
    <View style={styles.container}>
      <RootNavigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  }
});
