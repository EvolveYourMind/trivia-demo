import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from "react-navigation-stack"
import * as Screens from "./src/screens/";

const MainNavigator = createStackNavigator(
  {
    Home: Screens.Home,
    Questions: Screens.Questions,
    Result: Screens.Result,
  },
  { headerMode: "none" }
);

const AppContainer = createAppContainer(MainNavigator);

export default function App() {
  return (<AppContainer />);
}
