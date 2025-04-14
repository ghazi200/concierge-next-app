import React from "react";


const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Upcoming Shifts</Text>
      <Text>Shift: 8 AM - 4 PM</Text>
      <Text>Location: Main Building</Text>

      <Button title="Call Out" onPress={() => alert("Callout Requested")} />
      <Button title="Call Supervisor" onPress={() => navigation.navigate("CallSupervisor")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
});

export default HomeScreen;
