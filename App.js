import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import GettingStartedScreen from "./src/screens/GettingStartedScreen";
import HomeScreen from "./src/screens/HomeScreen";
import ListScreen from "./src/screens/ListScreen";
import ImageScreen from "./src/screens/ImageScreen";

const navigator = createStackNavigator(
  {
    GettingStarted: GettingStartedScreen,
    List: ListScreen,
    Home: HomeScreen,
    ImageScreen: ImageScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
