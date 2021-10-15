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
import colors from "../assets/colors/colors";
import { Colors } from "react-native/Libraries/NewAppScreen";


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
        if (Moment(fecha, 'DD/MM/YYYY', true).isValid() == false) {
            Alert.alert('El formato de la fecha es incorrecto', 'El formato es: dd/mm/aaaa', [{ text: 'Ta Güeno' }]);
        }
        else {

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

    //   <View style={styles.row}>
    //     <View style={styles.inputWrap}>
    //       <Text style={styles.label}>Expiration date</Text>
    //       <TextInput style={styles.inputdate} />
    //     </View>

    //     <View style={styles.inputWrap}>
    //       <Text style={styles.label}>CVV</Text>
    //       <TextInput style={styles.inputcvv} maxLength={17} />
    //     </View>
    //   </View>

        <SafeAreaView style={styles.container}>
            <View style={styles.formulario}>
                <Text style={styles.texto}>
                    Tipo de Producto
                </Text>
                <SelectDropdown
                    data={countries}
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
                <Text style={styles.texto}>
                    Cantidad
                </Text>
                <TextInput
                    onChangeText={(vcantidad) => { setCantidad(vcantidad) }}
                    placeholder="00,00"
                />
                <Text style={styles.texto}>
                    Precio x Kilo
                </Text>
                <TextInput
                    onChangeText={(vprecio) => { setPrecio(vprecio) }}

                    placeholder="₡0.000" />
                <Text style={styles.texto}>
                    Fecha de pesca
                </Text>
                <TextInput
                    onChangeText={(vfecha) => { setFecha(vfecha) }}
                    placeholder="dd/mm/aaaa" />

                <TextInput
                    onChangeText={(vubicacion) => { setUbicacion(vubicacion) }}
                    placeholder="Ubicación de venta" 
                    placeholderTextColor= {colors.blackText}
                    fontWeight= 'bold'/>
            </View>

            <TouchableOpacity style={styles.boton} onPress={() => insertarProducto()} >
                <Text style={{ fontWeight: "bold", color: "#FFFFFF" }}>
                    Confirmar
                </Text>
            </TouchableOpacity>


        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        justifyContent: "space-between",
        backgroundColor: colors.blueUI
    },
    formulario: {
        backgroundColor: colors.orangeUI
    },
    fila: {
        flex: 1,
        flexDirection: 'row',
    },
    inputWrap: {
        flex: 1,
    },
    texto: {
        fontWeight: 'bold',
        fontSize: 14,
        color: colors.blackText,
    },
    dropdown1BtnStyle: {
        width: 174,
        height: 26,
        right: 20,
        alignSelf: 'flex-end',
    },
    boton: {
        backgroundColor: colors.greyText,
        width: 327,
        height: 48,
        bottom: 34,
        alignItems: 'center',
        padding: 15,
        color: "#FFFFFF",
        marginTop: 8,
        borderRadius: 50,
        alignSelf: 'center'

    },
});
export default FormAgregarProductos