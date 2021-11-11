import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/login';
import Info from "./screens/info";
import LoginPw from "./screens/loginPw";
import Home from "./screens/home";
import ChooseRole from "./screens/chooseRole";
import CreateAccountSeller from "./screens/createAccountSeller";
import CreateAccountBuyer from "./screens/createAccountBuyer";
import MyProducts from "./screens/misProductos"
import AddProducts from "./screens/addProducts";
import EditProducts from "./screens/editProducts";
import Favoritos from "./screens/favoritos";
import Perfil from "./screens/perfil";
import Producto from "./screens/producto";
import MiPerfil from "./screens/miPerfil";
import EditarPerfil from "./screens/editUserP";
import Prueba from './screens/prueba';
import Prueba2 from './screens/prueba2';
import SearchResult from './screens/searchResult';
import FilterSelection from './screens/filterSelection';
import FilterPrice from './screens/filterPrice';
import FilterLocation from './screens/filterLocation';
import HomeStack from "./routes/homeStack"

const App = () => {
  return (
    <HomeStack/>
  );
};
export default App;

