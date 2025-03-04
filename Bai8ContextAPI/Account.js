import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { useAuth } from "./AuthContext";

export default function Account() {
    const { user, logout } = useAuth();
    
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tôn Văn Diện</Text>
      <Text style={styles.email}>{user?.email}</Text>
      <Text style={styles.description}>
        I have over 5 years of experience in native mobile app development, now learning React Native.
      </Text>

      <TouchableOpacity style={styles.button} onPress={logout}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20 },
  title: { fontSize: 22, fontWeight: "bold" },
  subtitle: { fontSize: 18, color: "gray", marginBottom: 10 },
  description: { textAlign: "center", marginBottom: 20 },
  button: { backgroundColor: "red", padding: 10, borderRadius: 5 },
  buttonText: { color: "#fff", fontWeight: "bold" },
});
