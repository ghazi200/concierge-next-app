import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import axios from "axios";

const CallSupervisorScreen = () => {
  const callSupervisor = async () => {
    await axios.post("https://yourbackend.com/call-supervisor", {
      employeePhone: "+1234567890",
      supervisorPhone: "+0987654321",
    });
    alert("Calling Supervisor...");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Need Help?</Text>
      <Button title="Call Supervisor" onPress={callSupervisor} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
});

export default CallSupervisorScreen;
