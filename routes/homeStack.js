import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer, StackRouter } from "react-navigation";
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
import Perfil from "../screens/editUserP";
import KK from "../screens/perfil"


const HomeStack = createStackNavigator({
  //X:Perfil,
  Perfil: KK,
  //Home: Home,
  Login: Login,
  "Mis productos": MyProducts,
  Favoritos:Favoritos,
  Info: Info,
  ChooseRole: ChooseRole,
  X:Home,
  "Creando Vendedor": CreateAccountSeller,
  "Creando Comprador": CreateAccountBuyer,
  LoginPw: LoginPw,
  
  "Añadir productos": AddProducts,
 
},
  {
    //headerMode: 'false',
    defaultNavigationOptions: { headerTitleAlign: 'center' }

  });


export default createAppContainer(HomeStack);
