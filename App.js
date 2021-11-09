import React from 'react';
import Login from './screens/login';
import Info from './screens/info';
import Navigator from "./routes/homeStack"
import { TouchableOpacity, StyleSheet, Image, Button, View, SafeAreaView, Text, TextInput, Alert, ScrollView } from 'react-native';

const App = () =>{
  return(
   

      <Navigator/>
   

  );
};

export default App;

