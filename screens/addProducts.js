import React from 'react';
import FormAgregarProductos from '../components/formAgregarProductos';

const AddProducts = ({ route, navigation }) => {
  const {numVendedor}= route.params
  
  return (
      <FormAgregarProductos navigation={navigation} numVendedor={numVendedor}/>
  )

}

export default AddProducts