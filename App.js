import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import GettingStartedScreen from "./src/screens/GettingStartedScreen";
import HomeScreen from "./src/screens/HomeScreen";
import ListScreen from "./src/screens/ListScreen";

const navigator = createStackNavigator(
  {
    GettingStarted: GettingStartedScreen,
    List: ListScreen,
    Home: HomeScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
