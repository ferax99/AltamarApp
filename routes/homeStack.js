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


const HomeStack = createStackNavigator({
  Home: Home,
  SearchResult: SearchResult,
  "Creando Vendedor": CreateAccountSeller,
  "Creando Comprador": CreateAccountBuyer,
  Login: Login,
  ChooseRole: ChooseRole, 
  Editor: EditProducts,
  Favoritos: Favoritos,
 
  Info: Info,
  LoginPw: LoginPw,
  
  "Mis productos": MyProducts,
  "Añadir productos": AddProducts,
},
  {
    headerMode: 'false',
    defaultNavigationOptions: { headerTitleAlign: 'center' }

  });

export default createAppContainer(HomeStack);

