import React from "react";
import { Button, View, Text } from "react-native";
import { useState, useEffect } from "react";
import { TextInput } from "react-native-gesture-handler";

const Prueba2 = ({ route, navigation }) => {
  const { titulo } = route.params
  console.log(titulo)
  useEffect(() => {
    navigation.setOptions({
      title: titulo,
    });
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile screen</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  )
}
export default Prueba2