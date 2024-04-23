import {createNativeStackNavigator} from "@react-navigation/native-stack"

import SignIn from "../pages/SignIn"
import SignUp from "../pages/SignUp"
import DrawerContent from "../pages/DrawerContent"
import HomeScreen from "../pages/HomeScreen"
import WelcomeScreen from "../pages/WelcomeScreen"
import DrawerContent from "../pages/CadernosScreen"
import HomeScreen from "../pages/CompartilharScreen"
import WelcomeScreen from "../pages/ConfigScreen"
import HomeScreen from "../pages/FavoritosScreen"
import WelcomeScreen from "../pages/LixeiraScreen"
import CadernoScreen from "../pages/CadernosScreen"
import ConfigScreen from "../pages/ConfigScreen"
import FavoritosScreen from "../pages/FavoritosScreen"

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
              name="WelcomeScreen"
              component={WelcomeScreen}
              options={{headerShown: false}}
            />
             <Stack.Screen
              name="SignIn"
              component={SignIn}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="DrawerContent"
              component={DrawerContent}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="LixeiraScreen"
              component={LixeiraScreen}
              options={{headerShown: false}}
            />
             <Stack.Screen
              name="CadernoScreen"
              component={CadernoScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="CompartilharScreen"
              component={CompartilharScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="ConfigScreen"
              component={ConfigScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="FavoritosScreen"
              component={FavoritosScreen}
              options={{headerShown: false}}
            />
        </Stack.Navigator>
    )
}