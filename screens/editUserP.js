import React from "react";
import { useState, useEffect } from "react";
import { TouchableOpacity, StyleSheet, SafeAreaView, Text, TextInput, Alert, View } from 'react-native';
import Axios from "axios";
import Server from "../serverData";
import colors from "../assets/colors/colors";
import UserData from "../userData"
import AsyncStorage from "@react-native-async-storage/async-storage";


const EditUserP = ({ navigation }) => {

    //const countries = ["Sandina azul", "Pargo", "Marlin blanco"]
    var vnombre = nombre
    var vclave = clave
    var vcedula = cedula
    var vubicacion = ubicacion
    
    const [nombre, setNombre] = useState("")
    const [clave, setClave] = useState("")
    const [cedula, setCedula] = useState("")
    const [ubicacion, setUbicacion] = useState("")
    useEffect(() => {
        setCedula(UserData.cedula._W);
        setUbicacion(UserData.ubicacion._W);
        setNombre(UserData.nombre._W)
    }, []);

    const guardar =async()=>{
        try{
      await AsyncStorage.removeItem("cedula");
      await AsyncStorage.removeItem("nombre");
      await AsyncStorage.removeItem("ubicacion");

          await AsyncStorage.setItem("nombre",nombre);
          await AsyncStorage.setItem("ubicacion",ubicacion);
          await AsyncStorage.setItem("cedula",cedula);
        }catch (err){
            console.log(err)
        }
    }
    const editarUsuario = () => {
        Axios.put(Server + "/editarUsuario", {
            telefono: UserData.telefono._W,
            nombre: nombre,
            clave: clave,
            cedula: cedula,
            ubicacion: ubicacion,
        }).then((response) => {
            //console.log(response.data);
            if (response.data == "Failed") {
                Alert.alert('Hubo un problema', 'No se han podido editar los datos de la cuenta', [{ text: 'OK' }]);
            }
            if (response.data == "Updated") {
                navigation.pop();
            }

        });
        guardar()
    };
    
    

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.formulario}>

                <View style={styles.fila}>
                    <View style={styles.inputWrap}>

                        <Text style={styles.texto}>
                            Nuevo Nombre
                        </Text>
                        <Text style={styles.texto}>
                            Nueva Clave
                        </Text>
                        <Text style={styles.texto}>
                            Nueva Cedula
                        </Text>

                        <Text style={styles.texto}>
                            Ubicaci??n
                        </Text>

                    </View>
                    <View style={styles.inputWrap}>
                        
                        <TextInput
                                onChangeText={(vnombre) => { setNombre(vnombre) }}
                                placeholder="Nombre"
                                value={nombre}
                                style={styles.input}
                            />
                        <TextInput
                                onChangeText={(vclave) => { setClave(vclave) }}
                                placeholder="************"
                                value={clave}
                                style={styles.input}
                            />
                        <TextInput
                            onChangeText={(vcedula) => { setCedula(vcedula) }}
                            style={styles.input}
                            placeholder="xxxxxxxxx" 
                            keyboardType='numeric'
                            value={cedula}/>
                        <TextInput
                        onChangeText={(vubicacion) => { setUbicacion(vubicacion) }}
                        placeholder="Ubicaci??n del usuario"
                        value={ubicacion}
                        style={styles.input} />
                    </View>
                </View>
            </View>

            <TouchableOpacity style={UserData.rol._W == "comprador" ? styles.botonComprador : styles.botonVendedor}
            onPress={() => editarUsuario()} >
                <Text style={{ fontWeight: "bold", color: "#FFFFFF" }}>
                    Listo
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
        margin: 7
    },
    botonComprador: {
        backgroundColor: colors.orangeUI,
        height: 48,
        width: "90%",
        alignItems: 'center',
        padding: 15,
        color: "#FFFFFF",
        marginLeft: "5%",
        // marginTop: "5%",
        marginBottom: "5%",
        borderRadius: 50,
    },
    botonVendedor: {
        backgroundColor: colors.blueUI,
        height: 48,
        width: "90%",
        alignItems: 'center',
        padding: 15,
        color: "#FFFFFF",
        marginLeft: "5%",
        // marginTop: "5%",
        marginBottom: "5%",
        borderRadius: 50,
    },
    input: {
        alignSelf: 'flex-end',
        margin: 7,
        backgroundColor: colors.whiteButtons
    }
});
export default EditUserP;