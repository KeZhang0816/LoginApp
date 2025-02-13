import React, { useState } from "react";
import { View, Button } from "react-native";
import LoginView from "../../components/LoginView";
import SignupView from "../../components/SignupView";

export default function Layout() {
  const [showSignup, setShowSignup] = useState(false);

  return (
    <View style={{ flex: 1 }}>
      {showSignup ? <SignupView /> : <LoginView />}
      <Button
        title={showSignup ? "Go to Login" : "Go to Signup"}
        onPress={() => setShowSignup(!showSignup)}
      />
    </View>
  );
}
