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
import Favoritos from "../screens/favoritos";
import { defineAnimation } from "react-native-reanimated";


const HomeStack = createStackNavigator({
  X:Favoritos,
  "Mis productos": MyProducts,
  Login: Login,
  Info: Info,
  LoginPw: LoginPw,
  ChooseRole: ChooseRole,
  CreateAccountSeller: CreateAccountSeller,
  "Añadir productos": AddProducts,
  CreateAccountBuyer: CreateAccountBuyer,
  Home: Home,
},
  {
    // headerMode: 'false',
    defaultNavigationOptions: { headerTitleAlign: 'center' }

  });

export default createAppContainer(HomeStack);

