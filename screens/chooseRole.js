import React from 'react';
import { useState } from "react";
import { TouchableOpacity, StyleSheet, SafeAreaView, View,Text, Alert, Image, ViewBase } from 'react-native';
import colors from '../assets/colors/colors';

const ChooseRole = ({ navigation }) => {

  const [selectedButton, setSelectedButton] = useState('')

  return(
  
  <SafeAreaView  style={styles.container}>
      <Text style={styles.title}>
          ¿Qué tipo de cuenta desea tener?
      </Text>

      <TouchableOpacity 
        style={selectedButton === 'button1' ? styles.optionCompradorChecked : styles.optionComprador} 
        onPress={() => setSelectedButton('button1')}>
          <Image
          style={styles.logo}
          source={selectedButton === 'button1' ? require('../assets/img/logoWhite.png') : selectedButton === 'button2' ? require('../assets/img/logoBlack.png') : require('../assets/img/logoOrange.png')}
          />
      </TouchableOpacity>

      <Text style={styles.textComprador}>
        Comprador
      </Text>

      <TouchableOpacity 
        style={selectedButton === 'button2' ? styles.optionVendedorChecked : styles.optionVendedor} 
        onPress={() => setSelectedButton('button2')} >
          <Image
          style={styles.logo}
          source={selectedButton === 'button2' ? require('../assets/img/logoWhite.png') : selectedButton === 'button1' ? require('../assets/img/logoBlack.png') : require('../assets/img/logoBlue.png')}
          />
      </TouchableOpacity>

      <Text style={styles.textVendedor}>
        Vendedor
      </Text>

      <TouchableOpacity 
        style={selectedButton === 'button1' ? styles.botonCompradorPressed : selectedButton === 'button2' ? styles.botonVendedorPressed : styles.boton} 
        onPress={() => selectedButton === 'button1' ? navigation.navigate('Creando Comprador') : selectedButton === 'button2' ? navigation.navigate('Creando Vendedor') : Alert.alert('Seleccione tipo de cuenta', 'Debe seleccionar el tipo de cuenta que desea crear', [{ text: 'OK' }])} >
          <Text style={{ fontWeight: "bold", color: "#FFFFFF" }}>
            Siguiente
          </Text>
      </TouchableOpacity>
  </SafeAreaView>
  
  )
}

const styles = StyleSheet.create({
    container: {
      padding: 20,
      alignItems: 'center',
      backgroundColor: colors.background,
      flex: 1,
      justifyContent: 'flex-start',
      fontFamily: "TT Norms",
    },
    title: {
      padding: 20,
      flex: 1,
      marginTop: 20,
      alignItems: 'center',
      textAlign: 'center',
      fontSize: 30,
      
      fontWeight: "bold",
      color: colors.blackText
    },
    boton: {
      backgroundColor: colors.greyText,
      height: 48,
      width: "90%",
      alignItems: 'center',
      padding: 15,
      color: "#FFFFFF",
      marginTop: 8,
      borderRadius: 50,
      position: 'absolute',
      top: 684,
    },
    botonCompradorPressed: {
      backgroundColor: colors.orangeUI,
      height: 48,
      width: "90%",
      alignItems: 'center',
      padding: 15,
      color: "#FFFFFF",
      marginTop: 8,
      borderRadius: 50,
      position: 'absolute',
      top: 684,
    },
    botonVendedorPressed: {
      backgroundColor: colors.blueUI,
      height: 48,
      width: "90%",
      alignItems: 'center',
      padding: 15,
      color: "#FFFFFF",
      marginTop: 8,
      borderRadius: 50,
      position: 'absolute',
      top: 684,
    },
    optionComprador: {
      backgroundColor: colors.whiteButtons,
      alignItems: 'center',
      position: 'absolute',
      top: 192,
      bottom: 480,
      width: 140,
      height: 140,
      borderRadius: 6,
      elevation: 10,
    },
    optionCompradorChecked: {
      backgroundColor: colors.orangeUI,
      alignItems: 'center',
      position: 'absolute',
      top: 192,
      bottom: 480,
      width: 140,
      height: 140,
      borderRadius: 6,
      elevation: 10,
    },
    optionVendedor: {
      backgroundColor: colors.whiteButtons,
      alignItems: 'center',
      position: 'absolute',
      top: 419,
      bottom: 253,
      width: 140,
      height: 140,
      borderRadius: 6,
      elevation: 10,
    },
    optionVendedorChecked: {
      backgroundColor: colors.blueUI,
      alignItems: 'center',
      position: 'absolute',
      top: 419,
      bottom: 253,
      width: 140,
      height: 140,
      borderRadius: 6,
      elevation: 10,
    },
    textComprador: {
      fontWeight: 'bold',
      color: colors.blackText,
      width: 397.95,
      height: 26.27,
      alignItems: 'center',
      textAlign: 'center',
      fontSize: 18,
      position: 'absolute',
      top: 341.1,
      bottom: 444.63,
    },
    textVendedor: {
      fontWeight: 'bold',
      color: colors.blackText,
      width: 397.95,
      height: 26.27,
      alignItems: 'center',
      textAlign: 'center',
      fontSize: 18,
      position: 'absolute',
      top: 574,
      bottom: 214,
    },
    logo: {
      width: 72,
      height: 95,
      resizeMode: 'contain',
      alignItems: 'center',
      top: 20,
    },
});

export default ChooseRole