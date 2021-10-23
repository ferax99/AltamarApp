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


const HomeStack = createStackNavigator({
  Editor: EditProducts,
  Login: Login,
  Info: Info,
  LoginPw: LoginPw,
  ChooseRole: ChooseRole,
  "Creando Comprador": CreateAccountBuyer,
  "Creando Vendedor": CreateAccountSeller,
  "Mis productos": MyProducts,
  "Añadir productos": AddProducts,
  Home: Home,
},
  {
    // headerMode: 'false',
    defaultNavigationOptions: { headerTitleAlign: 'center' }

  });

export default createAppContainer(HomeStack);

