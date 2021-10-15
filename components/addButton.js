import React, { Component } from "react";
import { ReactDom } from "react-dom";
import { useNavigation } from '@react-navigation/native' 
import { TouchableOpacity, StyleSheet, Image, Button, View, SafeAreaView, Text, TextInput, Alert, ScrollView } from 'react-native';


class AddButton extends Component {
    
    render() {
        const {navigation} = this.props
        return (
                <TouchableOpacity
                    styles={styles.container}
                    onPress={() => navigation.navigate('Añadir productos')}>
                    <View>
                        <Image
                            style={styles.imagen}
                            source={require('../assets/img/addButton.png')} />
                    </View>
                    <Text style={styles.texto}>
                        Agregá tu primer producto
                    </Text>
                </TouchableOpacity>

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
    imagen: {
        marginBottom: 15,
        paddingBottom: 15,
        resizeMode: "contain",
        width: "20%",
        left: "40%",
        top: "50%"
    },
    texto: {
        marginTop: 15,
        paddingTop: 15,
        textAlign: "center",
        fontSize: 20,
        color: "#9a999e"
    },
    boton: {
        backgroundColor: "white",
        height: 50,
        alignItems: 'center',
        padding: 15,
        color: "#FFFFFF",
        marginTop: 8,
        borderRadius: 50,

    },
});
export default AddButton