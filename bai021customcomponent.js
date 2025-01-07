import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";

export default function Bai021customcomponent() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>Tôn Văn Diện</Text>
        <Text style={styles.text}>22810310347</Text>
        <Text style={styles.text}>MIT-D's Corporation</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    padding: 20,
    borderWidth: 2,
    borderColor: "#007bff",
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#007bff",
    textAlign: "center",
  },
});
