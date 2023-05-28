import { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import * as NavigationBar from "expo-navigation-bar";
import BottomNavigation from "./src/navigation/BottomNavigation";

export default function App() {
  useEffect(() => {
    NavigationBar.setBackgroundColorAsync("white");
    NavigationBar.setBorderColorAsync("#cecece");
  }, []);
  return (
    <View style={styles.container}>
      <BottomNavigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  }
});
