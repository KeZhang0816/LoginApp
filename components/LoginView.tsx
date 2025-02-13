import React from "react";
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet } from "react-native";

export default function LoginView() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      
      <Text style={styles.label}>Username:</Text>
      <TextInput style={styles.input} placeholder="Enter your username" />

      <Text style={styles.label}>Password:</Text>
      <TextInput style={styles.input} placeholder="Enter your password" secureTextEntry />

      <Button title="Login" onPress={() => console.log("Login button clicked")} />

      <TouchableOpacity onPress={() => console.log("Signup clicked")}>
        <Text style={styles.link}>Don't have an account? Sign up</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => console.log("Forgot password clicked")}>
        <Text style={styles.link}>Forgot your password?</Text>
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
