import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/login';
import Info from "../screens/info";
import LoginPw from "../screens/loginPw";
import Home from "../screens/home";
import ChooseRole from "../screens/chooseRole";
import CreateAccountSeller from "../screens/createAccountSeller";
import CreateAccountBuyer from "../screens/createAccountBuyer";
import MyProducts from "../screens/misProductos"
import AddProducts from "../screens/addProducts";
import EditProducts from "../screens/editProducts";
import Favoritos from "../screens/favoritos";
import Perfil from "../screens/perfil";
import Producto from "../screens/producto";
import MiPerfil from "../screens/miPerfil";
import EditarPerfil from "../screens/editUserP";
import MiProducto from '../components/miProducto';
import Prueba from '../screens/prueba';
import Prueba2 from '../screens/prueba2';
import SearchResult from '../screens/searchResult';
import FilterSelection from '../screens/filterSelection';
import FilterPrice from '../screens/filterPrice';
import FilterLocation from '../screens/filterLocation';

const Stack = createNativeStackNavigator();
const RutasMisProductos = () => {
  return (
    <Stack.Navigator>

      <Stack.Screen
        name="Mis productos"
        component={MyProducts}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Mi producto"
        component={MiProducto}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Editor"
        component={EditProducts}
        options={{ headerShown: false }}
      />

    </Stack.Navigator>


  );
};




export default RutasMisProductos;