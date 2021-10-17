import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Login from '../screens/login';
import Info from "../screens/info";
import LoginPw from "../screens/loginPw";
import Home from "../screens/home";
import MyProducts from "../screens/misProductos";
import AddProducts from "../screens/addProducts";
import Favoritos from "../screens/favoritos";
import { defineAnimation } from "react-native-reanimated";


const HomeStack = createStackNavigator({
  //X:Favoritos,
  Home: Home,
  "Mis productos": MyProducts,
  "Añadir productos": AddProducts,
  Login: Login,
  LoginPw: LoginPw,
  Info: Info,
},

  {
    defaultNavigationOptions: { headerTitleAlign: 'center' }
  });

export default createAppContainer(HomeStack);

