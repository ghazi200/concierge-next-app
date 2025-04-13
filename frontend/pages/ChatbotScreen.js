import React, { useState } from "react";
import { View, TextInput, Button, Text, StyleSheet } from "react-native";
import axios from "axios";

const ChatbotScreen = () => {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  const sendMessage = async () => {
    const res = await axios.post("https://yourbackend.com/chatbot", { message });
    setResponse(res.data.reply);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>AI Chatbot</Text>
      <TextInput style={styles.input} placeholder="Ask about shifts..." onChangeText={setMessage} />
      <Button title="Send" onPress={sendMessage} />
      <Text>{response}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
  input: { borderWidth: 1, padding: 10, marginBottom: 10 },
});

export default ChatbotScreen;
