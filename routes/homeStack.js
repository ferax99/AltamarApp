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
import Favoritos from "../screens/favoritos";
import Perfil from "../screens/perfil";
import Producto from "../screens/producto";
import MiPerfil from "../screens/miPerfil";
import EditarPerfil from "../screens/editUserP";

const HomeStack = createStackNavigator({
  Home: Home,
  Login: Login,
  EditarPerfil:EditarPerfil,
  "Mis productos": MyProducts,
  Favoritos:Favoritos,
  Producto:Producto,
  "Mi Perfil": MiPerfil,
  Perfil: Perfil,
  "Creando Vendedor": CreateAccountSeller,
  "Creando Comprador": CreateAccountBuyer,
  Info: Info,
  ChooseRole: ChooseRole,
  LoginPw: LoginPw,
  Editor: EditProducts,
  "Añadir productos": AddProducts,

},
  {
    //headerMode: 'false',
    defaultNavigationOptions: { headerTitleAlign: 'center' }

  });


export default createAppContainer(HomeStack);
