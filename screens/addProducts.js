import React from 'react';
import { useState } from "react";
import { StyleSheet, SafeAreaView, View, Text } from 'react-native';
import Axios from "axios";
import Server from "../serverData";
import colores from '../assets/colors/colors';
import FormAgregarProductos from '../components/formAgregarProductos';


const AddProducts = ({ navigation }) => {
  
  return (
      <FormAgregarProductos navigation={navigation}/>
  )

}

export default AddProducts