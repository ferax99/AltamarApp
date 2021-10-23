import React from 'react';
import { useState } from "react";
import { StyleSheet, SafeAreaView, View, Text } from 'react-native';
import Axios from "axios";
import Server from "../serverData";
import colores from '../assets/colors/colors';
import FormEditarProductos from '../components/formEditarProductos';

const EditProducts = ({ navigation }) => {
  
  return (
      <FormEditarProductos navigation={navigation}/>
  )

}

export default EditProducts