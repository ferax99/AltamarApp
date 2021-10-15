import React, { Component } from "react";
import { ReactDom } from "react-dom";
import { useNavigation } from '@react-navigation/native'
import { useState, useEffect } from "react";
import { TouchableOpacity, StyleSheet, SafeAreaView, Text, TextInput, Alert, View } from 'react-native';
import { event } from "react-native-reanimated";
import SelectDropdown from 'react-native-select-dropdown'
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Axios from "axios";
import Server from "../serverData";
import Moment from 'moment';


const FormAgregarProductos = ({ navigation }) => {

    const countries = ["Corvina", "Pargo", "Atún"]
    const [listOfProd, setListOfProd] = useState([]);
    const [tipo, setTipo] = useState("")
    const [cantidad, setCantidad] = useState(0)
    const [precio, setPrecio] = useState(0)
    const [fecha, setFecha] = useState("")
    const [ubicacion, setUbicacion] = useState("")

    var vtipo = tipo
    var vcantidad = cantidad
    var vprecio = precio
    var vfecha = fecha
    var vubicacion = ubicacion

    const insertarProducto = () => {
        if(Moment(fecha, 'DD/MM/YYYY', true).isValid()==false){
            Alert.alert('El formato de la fecha es incorrecto', 'El formato es: dd/mm/aaaa', [{ text: 'Ta Güeno' }]);
        }
        else{

            Axios.post(Server + "/insertaProducto", {
                //Hay que pasarlo por props
                telefono: "1",
                tipo: tipo,
                cantidad: cantidad,
                precio: precio,
                fecha: fecha,
                localizacion: ubicacion,
                estado: "activo",
            }).then((response) => {
                console.log(response.data);
                if (response.data == "False") {
                    Alert.alert('La inserción falló', 'Tenemos problemas', [{ text: 'OK' }]);
                }
                if (response.data == "True") {
                    navigation.navigate('Home')
                }
    
            });
        }
    };
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text>
                    Tipo de Producto
                </Text>
                <SelectDropdown
                    data={countries}
                    // defaultValueByIndex={1}
                    // defaultValue={'Egypt'}
                    onSelect={(selectedItem, index) => {
                        setTipo(selectedItem)
                        console.log(selectedItem, index);
                    }}
                    defaultButtonText={" "}
                    buttonTextAfterSelection={(selectedItem, index) => {
                        return selectedItem;
                    }}
                    rowTextForSelection={(item, index) => {
                        return item;
                    }}
                    buttonStyle={styles.dropdown1BtnStyle}
                    buttonTextStyle={styles.dropdown1BtnTxtStyle}
                    renderDropdownIcon={() => {
                        return (
                            <FontAwesome name="chevron-down" color={"#444"} size={18} />
                        );
                    }}
                    dropdownIconPosition={"right"}
                    dropdownStyle={styles.dropdown1DropdownStyle}
                    rowStyle={styles.dropdown1RowStyle}
                    rowTextStyle={styles.dropdown1RowTxtStyle}
                />
                <Text>
                    Cantidad
                </Text>
                <TextInput
                    onChangeText={(vcantidad) => { setCantidad(vcantidad) }}
                    placeholder="00,00"
                />
                <Text>
                    Precio x Kilo
                </Text>
                <TextInput
                    onChangeText={(vprecio) => { setPrecio(vprecio) }}

                    placeholder="₡0.000" />
                <Text>
                    Fecha de pesca
                </Text>
                <TextInput
                    onChangeText={(vfecha) => { setFecha(vfecha) }}
                    placeholder="dd/mm/aaaa" />

                <TextInput
                    onChangeText={(vubicacion) => { setUbicacion(vubicacion) }}
                    placeholder="Ubicación de venta" />
                <TouchableOpacity style={styles.boton} onPress={() => insertarProducto()} >
                    <Text style={{ fontWeight: "bold", color: "#FFFFFF" }}>
                        Confirmar
                    </Text>
                </TouchableOpacity>
            </View>


        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        justifyContent: "space-between",
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
        backgroundColor: "#14A2FC",
        height: 50,
        alignItems: 'center',
        padding: 15,
        color: "#FFFFFF",
        marginTop: 8,
        borderRadius: 50,

    },
});
export default FormAgregarProductos