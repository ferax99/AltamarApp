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


const EditProducts = ({ navigation,route }) => {

    const [listOfProd, setListOfProd] = useState([]);   
    const [estado, setEstado] = useState("")
    const datos = route.params.datos;
    const id = datos._id;
    const [tipo, setTipo] = useState("")
    const [cantidad, setCantidad] = useState(0)
    const [precio, setPrecio] = useState(0)
    const [fecha, setFecha] = useState("")
    const [ubicacion, setUbicacion] = useState("")
    useEffect(() => {
        
        setCantidad(datos.cantidad );
        setFecha(datos.fecha);
        setTipo(datos.tipo);
        setPrecio(datos.precio);
        setUbicacion(datos.localizacion);
        setEstado(datos.estado);
        const fetchPostList = async () => {
            const {data} = await Axios(Server+"/readPeces")
            setListOfProd(data)
        }
        fetchPostList()

        }, [setListOfProd])
    //console.log(listOfProd)
    let peces = listOfProd.map(order => order.nombre)
    

    const setEstadoServer = (estadoTemp) => {
        Axios.put(Server + "/updateEstado", { id:id,estado:estadoTemp }
        ).then((response) => {
            console.log("True");
            
        }).catch(() => {
            console.log("Error consulta");
            console.log(estadoTemp+" : "+id);
            
        });
    }
    const cambiarEstado = () => {
        let temp ="";
        if (estado=="activo"){temp =("vendido");console.log("entro")}
        else {temp =("activo")}
        console.log(temp);
        setEstadoServer(temp);
        
        
        navigation.pop();
        //window.location.reload(false);
    }

    const editarProducto = () => {
        if (Moment(fecha, 'DD/MM/YYYY', true).isValid() == false) {
            Alert.alert('El formato de la fecha es incorrecto', 'El formato es: dd/mm/aaaa', [{ text: 'OK' }]);
            
        }
        else {
            Axios.put(Server + "/editarProducto", {
                //Hay que pasarlo por props
                id: id,
                tipo: tipo,
                cantidad: cantidad,
                precio: precio,
                fecha: fecha,
                localizacion: ubicacion,
                estado: estado,
            }).then((response) => {
                //console.log(response.data);
                if (response.data == "Failed") {
                    Alert.alert('Hubo un problema', 'No se ha podido editar el producto', [{ text: 'OK' }]);
                }
                if (response.data == "Updated") {
                    navigation.pop();
                }

            });
        }
        
    };
    
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.formulario}>

                <View style={styles.fila}>
                    <View style={styles.inputWrap}>

                        <Text style={styles.texto}>
                            Tipo de Producto
                        </Text>
                        <Text style={styles.texto}>
                            Cantidad
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
                            data={peces}
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
                            defaultButtonText={datos.tipo.toString()}
                            

                            dropdownStyle={styles.dropdown1DropdownStyle}
                            rowStyle={styles.dropdown1RowStyle}
                            rowTextStyle={styles.dropdown1RowTxtStyle}
                        />
                        <View style={styles.fila}>
                            <View style={styles.inputWrap}></View>
                            <TextInput
                                onChangeText={(vcantidad) => { setCantidad(vcantidad) }}
                                placeholder="00,00"
                                value={cantidad.toString()}
                                
                                style={styles.input}
                                keyboardType='numeric'
                            />
                            <Text style={styles.etiqueta}>
                                KG
                            </Text>
                        </View>
                        <TextInput
                            onChangeText={(vprecio) => { setPrecio(vprecio) }}
                            style={styles.input}
                            placeholder="₡0.000" 
                            value={precio.toString()}
                            keyboardType='numeric'/>
                        <TextInput
                            onChangeText={(vfecha) => { setFecha(vfecha) }}
                            placeholder="dd/mm/aaaa"
                            value={fecha}
                           
                
                            style={styles.input} />
                    </View>
                </View>
                <View>
                    <TextInput
                        onChangeText={(vubicacion) => { setUbicacion(vubicacion) }}
                        placeholder="Ubicación de venta"
                        value={ubicacion}
                        placeholderTextColor={colors.blackText}
                        fontWeight='bold'
                        style={styles.inputUicacion} />

                </View>

            </View>

            <TouchableOpacity style={styles.boton} onPress={() => editarProducto()} >
                <Text style={{ fontWeight: "bold", color: "#FFFFFF" }}>
                    Listo
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={(estado!="activo") ? styles.botonVendidoPressed : styles.botonVendido} onPress={() => cambiarEstado()}>
                <Text style={(estado!="activo")  ? styles.botonTextPressed : styles.botonText}>
                    {(estado!="activo") ? "Desmarcar vendido" : "Marcar vendido"}
                </Text>
            </TouchableOpacity>


        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop:20,
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
        margin: 7
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
        backgroundColor: colors.blueUI,
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
    botonVendido: {
        //flex:1,
        backgroundColor: colors.whiteButtons,
        color: colors.blackText,
        width: 327,
        height: 48,
        bottom: 34,
        alignItems: 'center',
        padding: 15,
        marginTop: 20,
        borderRadius: 50,
        alignSelf: 'center',
        borderWidth: 2,
    },
    botonVendidoPressed: {
        //flex:1,
        backgroundColor: colors.whiteButtons,
        color: 'red',
        width: 327,
        height: 48,
        bottom: 34,
        alignItems: 'center',
        padding: 15,
        marginTop: 20,
        borderRadius: 50,
        borderColor: 'red',
        alignSelf: 'center',
        borderWidth: 2,
    },
    botonText: {
        fontWeight: "bold", 
        color: colors.blackText,
        bottom: 4,
    },
    botonTextPressed: {
        fontWeight: "bold", 
        color: 'red',
        bottom: 4,
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
export default EditProducts