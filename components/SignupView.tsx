import React from "react";
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function SignupView() {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => console.log("Go back clicked")} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      <Text style={styles.title}>Sign Up</Text>

      <Text style={styles.label}>Full Name:</Text>
      <TextInput style={styles.input} placeholder="Enter your full name" />

      <Text style={styles.label}>Email:</Text>
      <TextInput style={styles.input} placeholder="Enter your email" keyboardType="email-address" />

      <Text style={styles.label}>Password:</Text>
      <TextInput style={styles.input} placeholder="Enter your password" secureTextEntry />

      <Text style={styles.label}>Confirm Password:</Text>
      <TextInput style={styles.input} placeholder="Confirm your password" secureTextEntry />

      <Button title="Sign Up" onPress={() => console.log("Sign Up button clicked")} />

      <TouchableOpacity onPress={() => console.log("Go to login clicked")}>
        <Text style={styles.link}>Already have an account? Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  backButton: {
    position: "absolute",
    top: 50,
    left: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  label: {
    alignSelf: "flex-start",
    marginLeft: 20,
    fontSize: 16,
    marginTop: 10,
  },
  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  link: {
    color: "blue",
    marginTop: 10,
  },
});
