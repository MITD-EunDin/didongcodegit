import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
} from "react-native";

const UpgrateLoginScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const phoneRegex = /^(0[3|5|7|8|9])+([0-9]{8})$/;
  const handleValidate = (phone) => {
    phoneRegex.test(phone) ? alert('Số điện thoại hợp lệ!') : alert('Số điện thoại không hợp lệ!')
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Text style={styles.title}>Tôn Văn Diện</Text>

      <Text style={styles.subtitle}>
        Nhập số điện thoại để kiểm tra tính đúng
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Nhập số điện thoại của bạn"
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />

      <TouchableOpacity
        style={[
          styles.button,
          { backgroundColor: phoneNumber ? "#007BFF" : "#ccc" },
        ]}
        onPress={() =>handleValidate(phoneNumber)}
      >
        <Text style={styles.buttonText}>Kiểm tra</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    fontSize: 16,
    marginBottom: 20,
    padding: 10,
  },
  button: {
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default UpgrateLoginScreen;