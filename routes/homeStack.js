import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Login from '../screens/login';
import Info  from "../screens/info";
import LoginPw from "../screens/loginPw";
import Home from "../screens/home";
import { defineAnimation } from "react-native-reanimated";





const HomeStack = createStackNavigator({
    Login: Login,
    LoginPw: LoginPw,
    Home: Home,
    Info:Info,
  },
  {
    headerMode: 'false',
  });

export default createAppContainer(HomeStack);

