import React from 'react';
import { useState, useEffect } from "react";
import { TouchableOpacity, StyleSheet, View, SafeAreaView, Text, TextInput, ScrollView } from 'react-native';
import colors from '../assets/colors/colors';

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

  return(
    <SafeAreaView style={styles.container}>
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
          />
        </View>

        <Text style={styles.sectionTitle} >
            Para que lo contacten
        </Text>

        <View style={styles.field}>
          <Text style={styles.fieldTitle} >
            Whatsapp
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
            Telegram
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
            SIMPE Móvil
          </Text>
          <TextInput onChangeText={(ValueSimpe) => { setSimpe(ValueSimpe) }}
            style={styles.input}
            placeholder={"8888-8888"}
            dataDetectorTypes="phoneNumber"
            keyboardType='numeric'
          />
        </View>

      </ScrollView>

      <TouchableOpacity style={styles.boton} /*onPress={() => }*/ >
          <Text style={{ fontWeight: "bold", color: "#FFFFFF" }}>
            Siguiente
          </Text>
      </TouchableOpacity>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 8,
    paddingBottom: 120,
    backgroundColor: colors.background,
    flex: 1,
    justifyContent: 'flex-start',
    fontFamily: "TT Norms",
  },
  scrollArea: {
    backgroundColor: colors.background,
    top: 8,
  },
  field: {
    width: 345,
    height: 72,
    top: 24,
    left: 24,
    backgroundColor: colors.background,
  },
  fieldContraseña: {
    width: 345,
    height: 72,
    top: 24,
    left: 24,
    marginTop: 20,
    backgroundColor: colors.background,
  },
  fieldTitle: {
    fontWeight: 'bold',
    color: colors.blackText,
    fontSize: 14,
  },
  input: {
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
    backgroundColor: colors.greyText,
    height: 48,
    width: 327,
    alignItems: 'center',
    alignSelf: 'center',
    padding: 15,
    color: "#FFFFFF",
    marginTop: 8,
    borderRadius: 50,
    position: 'absolute',
    top: 684,
  },
});

export default CreateAccountSeller