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
import Favoritos from "../screens/favoritos";
import Perfil from "../screens/perfil";


const HomeStack = createStackNavigator({
  Perfil: Perfil,
  "Creando Vendedor": CreateAccountSeller,
  ChooseRole: ChooseRole,
  "Creando Comprador": CreateAccountBuyer,
  Login: Login,
  X: Home,

  Editor: EditProducts,
  Favoritos: Favoritos,
  Info: Info,
  LoginPw: LoginPw,

  "Mis productos": MyProducts,
  "Añadir productos": AddProducts,
  Home: Home,
},
  {
    //headerMode: 'false',
    defaultNavigationOptions: { headerTitleAlign: 'center' }

  });

export default createAppContainer(HomeStack);

