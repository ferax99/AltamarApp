import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
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
import { defineAnimation } from "react-native-reanimated";
import Favoritos from "../screens/favoritos";
import SearchResult from "../screens/searchResult";
import Perfil from "../screens/perfil"
import FilterSelection from "../screens/filterSelection"
import FilterLocation from "../screens/filterLocation"
import FilterPrice from "../screens/filterPrice";


const HomeStack = createStackNavigator({
  "Creando Comprador": CreateAccountBuyer,
  "Creando Vendedor": CreateAccountSeller,
  Home: Home,
  "Búsqueda": SearchResult,
  "Filtros": FilterSelection,
  Perfil: Perfil,
  "Añadir productos": AddProducts,
  Login: Login,
  ChooseRole: ChooseRole, 
  Editor: EditProducts,
  Favoritos: Favoritos,
  Info: Info,
  LoginPw: LoginPw,
  "Ubicación": FilterLocation,
  "Rango de pago": FilterPrice,
  "Mis productos": MyProducts,
},
  {
    // headerMode: 'false',
    defaultNavigationOptions: { headerTitleAlign: 'center' }

  });

export default createAppContainer(HomeStack);

