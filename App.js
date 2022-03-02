import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-web';

export default function App() {

  return (
    <View style={styles.container}>
      {/* Titre de la page */}
      <Text style={{
        margin: 20,
        fontSize: 20,
        borderBottomWidth: 3,
        }}
      >Form</Text>
      {/* Input du login */}
      <TextInput
        maxLength={6}
				style={styles.input}
				placeholder="Login"
			/>
      {/* Input du mot de passe */}
      <TextInput 
				style={styles.input}
				placeholder="Password"
        secureTextEntry
			/>
      {/*Bouton d'envoi*/}
      <TouchableOpacity style={styles.send} onPress={}>Envoyer</TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  input: {
      borderWidth: 2,
      width: 150,
      padding: 4,
      margin:5,
      borderRadius: 5,
      borderColor: "lightgrey",
  },
  send: {
      borderWidth: 2,
      width: 150,
      padding: 4,
      margin:5,
      borderRadius: 5,
      backgroundColor: "#0052cc",
      textAlign: "center",
      fontFamily: "Arial",
      color: "white"
  }
});
