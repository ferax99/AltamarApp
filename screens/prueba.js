import React from "react";
import { Button, View, Text, TouchableOpacity,TextInput} from "react-native";
import {  } from "react-native-gesture-handler";
import { useState, useEffect } from "react";

const Prueba = ({ navigation }) => {
    const [text, setText] = useState("")
    const busqueda = () => {
    }

    return (
        <View>
            <TextInput
                value={text}
                onChangeText={(k)=>setText(k)}
            />
            <Text>{text}</Text>

            <TouchableOpacity onPress={()=>navigation.navigate("Prueba2", { titulo:text })}>
                <Text>Me cago en edy</Text>
                </TouchableOpacity>
        </View>
    )
}
export default Prueba