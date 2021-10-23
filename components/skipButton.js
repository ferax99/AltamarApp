import React, { Component } from "react";
import { ReactDom } from "react-dom";
import { TouchableOpacity, StyleSheet, Image, Button, View, SafeAreaView, Text, TextInput, Alert, ScrollView } from 'react-native';
import colors from "../assets/colors/colors";

class SkipButton extends Component {
    render() {
        const {navigation} = this.props
        return (
            
                <TouchableOpacity 
                style={styles.boton} 
                onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.texto}>
                        {this.props.mensaje}
                    </Text>
                </TouchableOpacity>
            

        )
    }
}

const styles = StyleSheet.create({
    boton: {
        backgroundColor: colors.whiteButtons,
        width: 327,
        height: 56,
        alignItems: 'center',
        alignSelf: 'center',
        color: colors.blackText,
        marginTop: 8,
        borderRadius: 50,
        borderWidth: 2,
        top: 430

    },
    texto: {
        fontWeight: "bold",
        color: "#000000",
        fontSize: 20,
        top: "20%",
        justifyContent: 'center'
    },
});
export default SkipButton