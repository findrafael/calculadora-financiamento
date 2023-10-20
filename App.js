import React from "react";
import { StyleSheet, View } from "react-native";
import Calculadora from "./components/calculadora.js";

const App = () => {
  return (
    <View style={styles.container}>
      <Calculadora />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
