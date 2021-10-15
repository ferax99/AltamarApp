import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Login from '../screens/login';
import Info  from "../screens/info";
import LoginPw from "../screens/loginPw";
import Home from "../screens/home";
import ChooseRole from "../screens/chooseRole";
import CreateAccountSeller from "../screens/createAccountSeller";
import CreateAccountBuyer from "../screens/createAccountBuyer";
import { defineAnimation } from "react-native-reanimated";





const HomeStack = createStackNavigator({
    Login: Login,
    LoginPw: LoginPw,
    ChooseRole: ChooseRole,
    Home: Home,
    Info:Info,
    CreateAccountSeller: CreateAccountSeller,
    CreateAccountBuyer: CreateAccountBuyer,
  },
  {
    headerMode: 'false',
    defaultNavigationOptions: {headerTitleAlign: 'center'}
  });

export default createAppContainer(HomeStack);

