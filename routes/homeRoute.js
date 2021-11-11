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

const HomeRoute = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={({ route }) => ({ title: route.params.titulo }), { headerShown: false }}
      />
       <Stack.Screen
          name="Añadir productos"
          component={AddProducts}
          options={({ route }) => ({ title: route.params.titulo }), { headerShown: true,headerTitleAlign: 'center', }}
        />
        
        <Stack.Screen
          name="Perfil"
          component={Perfil}
          options={{
            headerShown: true,
            headerTitleAlign: "center"
          }}
        />
        <Stack.Screen
          name="Producto"
          component={Producto}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Búsqueda"
          component={SearchResult}
          options={{
            headerShown: true,
            headerTitleAlign: 'center',
          }}
        />
          <Stack.Screen
          name="Filtros"
          component={FilterSelection}
          options={{
            headerShown: true,
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="Rango de pago"
          component={FilterPrice}
          options={{
            headerShown: true,
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="Ubicación"
          component={FilterLocation}
          options={{
            headerShown: true,
            headerTitleAlign: 'center',
          }}
        />

    </Stack.Navigator>


  );
};



export default HomeRoute;