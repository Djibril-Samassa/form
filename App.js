import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Login from "./components/Login";
import Home from "./components/Home"
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NativeRouter as Router, Routes, Route} from "react-router-native";

export default function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path ="/login" exact element={<Login/>}/>
      </Routes>
    </Router>
  );
}

const styles = StyleSheet.create({
  
});
