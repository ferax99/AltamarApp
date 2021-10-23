import React from 'react';
import { useState, useEffect } from "react";
import { TouchableOpacity, StyleSheet, View, SafeAreaView, Text, TextInput, ScrollView, Alert } from 'react-native';
import colors from '../assets/colors/colors';
import Axios from 'axios';
import Server from '../serverData';

const CreateAccountSeller = ({ navigation }) => {

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

  const [whatsapp, setWhatsapp] = useState('')
  var ValueWhatsapp = whatsapp;

  const [telegram, setTelegram] = useState('')
  var ValueTelegram = telegram;

  const [simpe, setSimpe] = useState('')
  var ValueSimpe = simpe;

  const crearUsuario = () => {
    Axios.post(Server + "/crearUsuario", {
      nombre: nombre,
      clave: contraseña,
      cedula: cedula,
      telefono: telefono,
      ubicacion: ubicacion,
      correo: correo,
      rol: 'vendedor',
      whatsapp: whatsapp,
      telegram: telegram,
      simpe: simpe,
    }).then((response) => {
      console.log(response.data);
      if (response.data == "Falta") {
        Alert.alert('Faltan datos', 'Debe completar todos los datos requeridos', [{ text: 'OK' }]);
      }
      if (response.data == "Success") {
        navigation.navigate('Mis productos')
      }

    });
  };

  return(
    <SafeAreaView>
      <ScrollView style ={styles.scrollArea} showsVerticalScrollIndicator={false}>

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
          <TextInput onChangeText={(ValueCorreo) => { setCorreo(ValueCorreo) }}
            style={styles.input}
            placeholder={"Su correo"}
            dataDetectorTypes="none"
            keyboardType='email-address'
          />
        </View>

        <View style={styles.fieldContraseña}>
          <Text style={styles.fieldTitle} >
            Contraseña
          </Text>
          <TextInput onChangeText={(ValueContraseña) => { setContraseña(ValueContraseña) }}
            style={styles.input}
            placeholder={"Escriba su contraseña"}
            dataDetectorTypes="none"
            keyboardType='default'
            secureTextEntry= {true}
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
            secureTextEntry= {true}
          />
        </View>

        <Text style={styles.sectionTitle} >
            Para que lo contacten
        </Text>

        <View style={styles.field}>
          <Text style={styles.fieldTitle} >
            Whatsapp ** (opcional)
          </Text>
          <TextInput onChangeText={(ValueWhatsapp) => { setWhatsapp(ValueWhatsapp) }}
            style={styles.input}
            placeholder={"8888-8888"}
            dataDetectorTypes="phoneNumber"
            keyboardType='numeric'
          />
        </View>

        <View style={styles.field}>
          <Text style={styles.fieldTitle} >
            Telegram ** (opcional)
          </Text>
          <TextInput onChangeText={(ValueTelegram) => { setTelegram(ValueTelegram) }}
            style={styles.input}
            placeholder={"8888-8888"}
            dataDetectorTypes="phoneNumber"
            keyboardType='numeric'
          />
        </View>

        <View style={styles.field}>
          <Text style={styles.fieldTitle} >
            SIMPE Móvil ** (opcional)
          </Text>
          <TextInput onChangeText={(ValueSimpe) => { setSimpe(ValueSimpe) }}
            style={styles.input}
            placeholder={"8888-8888"}
            dataDetectorTypes="phoneNumber"
            keyboardType='numeric'
          />
        </View>

        <TouchableOpacity style={styles.boton} onPress={() => crearUsuario()} >
          <Text style={{ fontWeight: "bold", color: "#FFFFFF" }}>
            Siguiente
          </Text>
        </TouchableOpacity>

      </ScrollView>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  scrollArea: {
    backgroundColor: colors.background,
  },
  field: {
    flex: 1,
    width: 345,
    height: 72,
    top: 24,
    left: 24,
    backgroundColor: colors.background,
  },
  fieldContraseña: {
    flex: 1,
    width: 345,
    height: 72,
    top: 24,
    left: 24,
    marginTop: 20,
    backgroundColor: colors.background,
  },
  fieldTitle: {
    flex: 1,
    fontWeight: 'bold',
    color: colors.blackText,
    fontSize: 14,
  },
  input: {
    flex: 1,
    width: 345,
    height: 14,
    borderBottomWidth: 1,
    borderColor: colors.greyText,
    color: colors.greyText,
    fontSize: 12,
    position: 'absolute',
    top: 28,
    bottom: 4,
  },
  sectionTitle: {
    flex: 1,
    fontWeight: 'bold',
    color: colors.blackText,
    height: 40,
    fontSize: 20,
    left: 24,
    top: 30,
    marginBottom: 10,
    marginTop: 30,
  },
  boton: {
    flex: 1,
    backgroundColor: colors.greyText,
    height: 48,
    width: 327,
    alignItems: 'center',
    alignSelf: 'center',
    padding: 15,
    color: "#FFFFFF",
    marginTop: 49,
    marginBottom: 34,
    borderRadius: 49,
  },
});

export default CreateAccountSeller