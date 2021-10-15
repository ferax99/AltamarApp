import React, { Component } from "react";
import { ReactDom } from "react-dom";
import { TouchableOpacity, StyleSheet, Image, Button, View, SafeAreaView, Text, TextInput, Alert, ScrollView } from 'react-native';

class SkipButton extends Component {
    render() {
        const {navigation} = this.props
        return (
            <SafeAreaView styles={styles.container}>
                <TouchableOpacity 
                style={styles.boton} 
                onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.texto}>
                        {this.props.mensaje}
                    </Text>
                </TouchableOpacity>
            </SafeAreaView>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
    boton: {
        backgroundColor: "white",
        height: 50,
        alignItems: 'center',
        color: "#FFFFFF",
        marginTop: 8,
        borderRadius: 50,
        borderWidth: 2,


    },
    texto: {
        fontWeight: "bold",
        color: "#000000",
        fontSize: 20,
        top: "20%",
        justifyContent: 'center'
    },
    footer: {
        fontSize: 14,
        padding: 10
    },
});
export default SkipButton