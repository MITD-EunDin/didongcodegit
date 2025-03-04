import React, {useState} from "react";
import { TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { View, Text, StyleSheet, StatusBar, Button, TextInput } from "react-native";
import { useAuth } from "./AuthContext";

export default function Signin() {
    const { login } = useAuth();
    const [email, setEmail] = useState("");

     const handleLogin = () => {
        if (email.trim() !== "") {
        login(email);
        }
    };

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <Text style={styles.title}>Sign In</Text>
            
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Email ID</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your email"
                    value={email}
                    onChangeText={setEmail}
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Password</Text>
                <TextInput style={styles.input} secureTextEntry placeholder="Enter your password" />
            </View>

            <Text style={styles.forgotPassword}>Forgot Password?</Text>
            
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>

            <Text style={styles.orText}>Or sign in with</Text>
            
            <View style={styles.socialButtons}>
                <TouchableOpacity style={[styles.socialButton, { backgroundColor: "#db4a39" }]}>
                    <FontAwesome name="google" size={24} color="white" />
                    <Text style={styles.socialText}>Google</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={[styles.socialButton, { backgroundColor: "#4267B2" }]}>
                    <FontAwesome name="facebook" size={24} color="white" />
                    <Text style={styles.socialText}>Facebook</Text>
                </TouchableOpacity>
            </View>


            <Text style={styles.signupText}>Not yet a member? <Text style={styles.signupLink}>Sign Up</Text></Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#f2f2f7",
        justifyContent: "center",
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 30,
        color: "#333",
    },
    inputContainer: {
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#555",
        marginBottom: 8,
    },
    input: {
        height: 50,
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 10,
        paddingHorizontal: 15,
        backgroundColor: "#fff",
        fontSize: 16,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3, // Đổ bóng Android
    },
    forgotPassword: {
        textAlign: "right",
        color: "#5A6CF3",
        marginBottom: 20,
        fontWeight: "bold",
    },
    button: {
        backgroundColor: "#5A6CF3",
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 4,
    },
    buttonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
    orText: {
        textAlign: "center",
        marginVertical: 20,
        fontSize: 16,
        fontWeight: "500",
        color: "#777",
    },
    socialButtons: {
        flexDirection: "row",
        justifyContent: "center",
        gap: 15,
        marginBottom: 20,
    },
    socialButton: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        borderRadius: 50,
        padding: 12,
        width: 160,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.15,
        shadowRadius: 4,
        elevation: 3,
    },
    socialText: {
        fontSize: 16,
        fontWeight: "bold",
        marginLeft: 8,
        color: "#333",
    },
    signupText: {
        textAlign: "center",
        fontSize: 16,
        fontWeight: "500",
        color: "#555",
    },
    signupLink: {
        color: "#5A6CF3",
        fontWeight: "bold",
    },
    socialButton: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50,
        paddingVertical: 12,
        paddingHorizontal: 20,
        width: 160,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.15,
        shadowRadius: 4,
        elevation: 3,
    },
    socialText: {
        fontSize: 16,
        fontWeight: "bold",
        marginLeft: 10,
        color: "white",
    },
    
});
