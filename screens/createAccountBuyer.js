import React from 'react';
import { useState, useEffect } from "react";
import { TouchableOpacity, StyleSheet, View, SafeAreaView, Text, TextInput, ScrollView, Alert } from 'react-native';
import colors from '../assets/colors/colors';
import Axios from 'axios';
import Server from '../serverData';

const CreateAccountBuyer = ({ navigation }) => {

  const [nombre, setNombre] = useState('')
  var ValueNombre = nombre;

  const [cedula, setCedula] = useState('')
  var ValueCedula = cedula;

  const [telefono, setTelefono] = useState('')
  var ValueTelefono = telefono;

  const [ubicacion, setUbicacion] = useState('')
  var ValueUbicacion = ubicacion;

  const [correo, setCorreo] = useState('')
  var ValueCorreo = correo;

  const [contraseña, setContraseña] = useState('')
  var ValueContraseña = contraseña;

  const [verifContraseña, setVerifContraseña] = useState('')
  var ValueVerifContraseña = verifContraseña;

  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

  const crearUsuario = () => {
    Axios.post(Server + "/verificarNum", {telefono: telefono}).then(
      (response) => {
        console.log(response.data)
        if (response.data==="True") {
          Alert.alert('Número registrado', 'El número de teléfono ingresado ya se encuentra registrado en la aplicación', [{ text: 'OK' }]);
        } else {
          if(!reg.test(correo) && correo!=='') {
            Alert.alert('Correo inválido', 'Verifique que su dirección de correo está bien escrita', [{ text: 'OK' }]);
          } else if(!(contraseña===verifContraseña)) {
            Alert.alert('Las contraseñas no coinciden', 'Asegurese de que su verificación de contraseña coincide con su contraseña', [{ text: 'OK' }]);
          } else {
            Axios.post(Server + "/crearUsuario", {
              nombre: nombre,
              clave: contraseña,
              cedula: cedula,
              telefono: telefono,
              ubicacion: ubicacion,
              correo: correo,
              rol: 'comprador',
            }).then((response) => {
              console.log(response.data);
              if (response.data == "Falta") {
                Alert.alert('Faltan datos', 'Debe completar todos los datos requeridos', [{ text: 'OK' }]);
              }
              if (response.data == "Success") {
                navigation.navigate('Home')
              }
            });
          }
        }
      }
    )
  };
  return (
    <SafeAreaView >
      <ScrollView style={styles.scrollArea} showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.field}>
            <Text style={styles.fieldTitle} >
              Nombre completo
            </Text>
            <TextInput onChangeText={(ValueNombre) => { setNombre(ValueNombre) }}
              style={styles.input}
              placeholder={"Nombre y Apellidos"}
              dataDetectorTypes="none"
              keyboardType='default'
            />
          </View>

          <View style={styles.field}>
            <Text style={styles.fieldTitle} >
              Cédula
            </Text>
            <TextInput onChangeText={(ValueCedula) => { setCedula(ValueCedula) }}
              style={styles.input}
              placeholder={"Número de cédula"}
              dataDetectorTypes="none"
              keyboardType='numeric'
            />
          </View>

          <View style={styles.field}>
            <Text style={styles.fieldTitle} >
              Número de teléfono
            </Text>
            <TextInput onChangeText={(ValueTelefono) => { setTelefono(ValueTelefono) }}
              style={styles.input}
              placeholder={"Número telefónico"}
              dataDetectorTypes="phoneNumber"
              keyboardType='numeric'
            />
          </View>

          <Text style={telefono==='' ? styles.infoMessageInvisible : styles.infoMessageVisible} >
            Asegurese de que el número de teléfono es correcto ya que es un dato importante.
          </Text>

          <View style={styles.field}>
            <Text style={styles.fieldTitle} >
              Ubicación Habitacional
            </Text>
            <TextInput onChangeText={(ValueUbicacion) => { setUbicacion(ValueUbicacion) }}
              style={styles.input}
              placeholder={"Ubicación"}
              dataDetectorTypes="none"
              keyboardType='default'
            />
          </View>

          <View style={styles.field}>
            <Text style={styles.fieldTitle} >
              Correo ** (opcional)
            </Text>
            <TextInput onChangeText={(ValueCorreo) => { setCorreo(ValueCorreo); }}
              style={styles.input}
              placeholder={"Su correo"}
              dataDetectorTypes="none"
              keyboardType='email-address'
            />
          </View>

          <Text style={reg.test(correo) || correo==='' ? styles.errorMessageInvisible : styles.errorMessageVisible} >
            La dirección de corrrreo no es válida.
          </Text>

          <View style={styles.fieldContraseña}>
            <Text style={styles.fieldTitle} >
              Contraseña
            </Text>
            <TextInput onChangeText={(ValueContraseña) => { setContraseña(ValueContraseña) }}
              style={styles.input}
              placeholder={"Escriba su contraseña"}
              dataDetectorTypes="none"
              keyboardType='default'
              secureTextEntry={true}
            />
          </View>

          <View style={styles.field}>
            <Text style={styles.fieldTitle} >
              Verificación de contraseña
            </Text>
            <TextInput onChangeText={(ValueVerifContraseña) => { setVerifContraseña(ValueVerifContraseña) }}
              style={styles.input}
              placeholder={"Vuelva a escribir la contraseña"}
              dataDetectorTypes="none"
              keyboardType='default'
              secureTextEntry={true}
            />
          </View>

          <Text style={contraseña===verifContraseña ? styles.errorMessageInvisible : styles.errorMessageVisible} >
            Las contraseñas no coinciden.
          </Text>

          <TouchableOpacity style={styles.boton} onPress={() => crearUsuario()} >
            <Text style={{ fontWeight: "bold", color: "#FFFFFF" }}>
              Siguiente
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  scrollArea: {
    backgroundColor: colors.background,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    marginLeft: 10,

    marginRight: 10,

  },
  field: {
    alignItems: "flex-start",

    //width: "100%",
    height: 72,
    top: 24,
    //left: 24,
    backgroundColor: colors.background,
  },
  fieldContraseña: {

    height: 72,
    top: 24,
    //left: 24,
    marginTop: 20,
    backgroundColor: colors.background,
  },
  fieldTitle: {

    fontWeight: 'bold',
    color: colors.blackText,
    fontSize: 14,
    alignSelf: "flex-start",
  },
  input: {

    width: "100%",
    height: 14,
    borderBottomWidth: 1,
    borderColor: colors.greyText,
    color: colors.greyText,
    fontSize: 12,
    position: 'absolute',
    top: 28,
    bottom: 4,
  },
  boton: {

    backgroundColor: colors.greyText,
    height: 48,
    width: "90%",
    alignItems: 'center',
    alignSelf: 'center',
    padding: 15,
    color: "#FFFFFF",
    marginTop: 49,
    marginBottom: 70,
    borderRadius: 50,
  },
  errorMessageVisible: {
    color: 'red',
    fontSize: 10,
    fontWeight: 'bold',
  },
  errorMessageInvisible: {
    color: colors.background,
    fontSize: 10,
    fontWeight: 'bold',
  },
  infoMessageVisible: {
    color: colors.blueUI,
    fontSize: 10,
    fontWeight: 'bold',
  },
  infoMessageInvisible: {
    color: colors.background,
    fontSize: 10,
    fontWeight: 'bold',
  },
});

export default CreateAccountBuyer