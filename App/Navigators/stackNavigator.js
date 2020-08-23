import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import Home from "./../Screens/Home";

const HomeNav = createStackNavigator({
  Home: { screen: Home, navigationOptions:{ headerShown: false } },
  
});

export const HomeNavigator = createAppContainer(HomeNav);