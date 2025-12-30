import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ScreenOne from "../Screens/ScreenOne";
import { RouteStackList } from "./RouteStack/RouteStackList";
import { ScreenList } from "./RouteStack/ScreenList";
import ScreenTwo from "../Screens/ScreenTwo";

const Stack = createNativeStackNavigator<RouteStackList>();

const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen component={ScreenOne} name={ScreenList.ScreenOne} options={{ headerShown: false }} />
                <Stack.Screen component={ScreenTwo} name={ScreenList.ScreenTwo} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;