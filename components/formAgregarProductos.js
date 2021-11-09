import React from "react";
import { useState} from "react";
import { TouchableOpacity, StyleSheet, SafeAreaView, Text, TextInput, Alert, View } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown'
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Axios from "axios";
import Server from "../serverData";
import Moment from 'moment';
import colors from "../assets/colors/colors";
import userData from '../local_data/userData.json';

const FormAgregarProductos = ({ navigation }) => {

    const countries = ["Corvina", "Pargo", "Atún"]
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
            Alert.alert('El formato de la fecha es incorrecto', 'El formato es: dd/mm/aaaa', [{ text: 'OK' }]);
        }
        else {

            Axios.post(Server + "/insertaProducto", {
                //Hay que pasarlo por props
                telefono: userData.telefono,
                tipo: tipo,
                cantidad: cantidad,
                precio: precio,
                fecha: fecha,
                localizacion: ubicacion,
                vendido: false,
            }).then((response) => {
                console.log(response.data);
                if (response.data == "False") {
                    Alert.alert('La inserción falló', 'Tenemos problemas', [{ text: 'OK' }]);
                }
                if (response.data == "True") {
                    navigation.navigate('Mis productos')
                }

            });
        }
    };
    return (

        //   <View style={styles.row}>
        //     <View style={styles.inputWrap}>
        //       <Text style={styles.label}>CVV</Text>
        //       <Text style={styles.label}>Expiration date</Text>
        //     </View>

        //     <View style={styles.inputWrap}>
        //       <TextInput style={styles.inputcvv} maxLength={17} />
        //       <TextInput style={styles.inputdate} />
        //     </View>
        //   </View>

        <SafeAreaView style={styles.container}>
            <View style={styles.formulario}>

                <View style={styles.fila}>
                    <View style={styles.inputWrap}>

                        <Text style={styles.texto}>
                            Tipo de Producto
                        </Text>
                        <Text style={styles.texto}>
                            Cantidad (KG)
                        </Text>
                        <Text style={styles.texto}>
                            Precio x Kilo
                        </Text>

                        <Text style={styles.texto}>
                            Fecha de pesca
                        </Text>

                    </View>
                    <View style={styles.inputWrap}>
                        <SelectDropdown
                            data={countries}
                            onSelect={(selectedItem, index) => {
                                setTipo(selectedItem)
                            }}
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
                            defaultButtonText={" "}

                            dropdownStyle={styles.dropdown1DropdownStyle}
                            rowStyle={styles.dropdown1RowStyle}
                            rowTextStyle={styles.dropdown1RowTxtStyle}
                        />
                        <View style={styles.fila}>
                            <View style={styles.inputWrap}></View>
                            <TextInput
                                onChangeText={(vcantidad) => { setCantidad(vcantidad) }}
                                placeholder="00,00"
                                keyboardType='numeric'
                                style={styles.input}
                            />
                            
                        </View>
                        <TextInput
                            onChangeText={(vprecio) => { setPrecio(vprecio) }}
                            style={styles.input}
                            keyboardType='numeric'
                            placeholder="₡0.000" />
                        <TextInput
                            onChangeText={(vfecha) => { setFecha(vfecha) }}
                            placeholder="dd/mm/aaaa"
                            style={styles.input} />
                    </View>
                </View>
                <View>
                    <TextInput
                        onChangeText={(vubicacion) => { setUbicacion(vubicacion) }}
                        placeholder="Ubicación de venta"
                        placeholderTextColor={colors.blackText}
                        fontWeight='bold'
                        style={styles.inputUicacion} />

                </View>

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
        paddingTop: 50,
        flex: 1,
        flexDirection: "column",
        backgroundColor: colors.background
    },
    formulario: {
        flex: 1,
        backgroundColor: colors.background
    },
    fila: {
        //flex: 1,
        flexDirection: 'row',
    },
    inputWrap: {
        flex: 1,
        
        alignContent: "flex-end"
    },
    texto: {
        //flex:1,
        fontWeight: 'bold',
        fontSize: 14,
        color: colors.blackText,
        margin: 10
    },
    dropdown1BtnStyle: {
        //flex:1,
        width: 174,
        height: 26,
        //right: 20,
        //alignSelf: 'flex-end',
        marginTop: 5,
        marginLeft: 5,
        marginRight: 5,
        marginBottom: 10,
        backgroundColor: colors.whiteButtons
    },
    boton: {
        //flex:1,
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
    input: {
        alignSelf: 'flex-end',
        margin: 5,
        backgroundColor: colors.whiteButtons
    },
    inputUicacion: {
        margin: 10,
        backgroundColor: colors.whiteButtons
    },
    etiqueta: {
        color: colors.greyText,
        alignSelf: 'center',
        marginRight: 10
    }
});
export default FormAgregarProductos