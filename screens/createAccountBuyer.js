import React from 'react';
import { TouchableOpacity, StyleSheet, View, SafeAreaView, Text, TextInput, ScrollView } from 'react-native';
import colors from '../assets/colors/colors';

const CreateAccountBuyer = ({ navigation }) => {
  return(
    <SafeAreaView style={styles.container}>
      <ScrollView style ={styles.scrollArea} showsVerticalScrollIndicator={false}>

        <View style={styles.field}>
          <Text style={styles.fieldTitle} >
            Nombre completo
          </Text>
          <TextInput onChangeText={(Value) => { setTex(Value) }}
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
          <TextInput onChangeText={(Value) => { setTex(Value) }}
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
          <TextInput onChangeText={(Value) => { setTex(Value) }}
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
          <TextInput onChangeText={(Value) => { setTex(Value) }}
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
          <TextInput onChangeText={(Value) => { setTex(Value) }}
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
          <TextInput onChangeText={(Value) => { setTex(Value) }}
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
          <TextInput onChangeText={(Value) => { setTex(Value) }}
            style={styles.input}
            placeholder={"Vuelva a escribir la contraseña"}
            dataDetectorTypes="none"
            keyboardType='default'
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

export default CreateAccountBuyer