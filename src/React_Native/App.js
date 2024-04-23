import React from 'react';
import { StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import {NavigationContainer} from '@react-navigation/native'
import Routes from './src/routes';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={"#ffa500"} barStyle="light-content"/>
      <Routes/>
    </NavigationContainer>
  );
}

import HomeScreen from './src/pages/HomeScreen';
import WelcomeScreen from './src/pages/WelcomeScreen';
import ConfigScreen from './src/pages/ConfigScreen';
import FavoritosScreen from './src/pages/FavoritosScreen';
import CadernosScreen from './src/pages/CadernosScreen';
import CompartilharScreen from './src/pages/CompartilharScreen';
import LixeiraScreen from './src/pages/LixeiraScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
      >
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Bem-Vindo" component={WelcomeScreen} />
        <Drawer.Screen name="Configuração" component={ConfigScreen} />
        <Drawer.Screen name="Favoritos" component={FavoritosScreen} />
        <Drawer.Screen name="Cadernos" component={CadernosScreen} />
        <Drawer.Screen name="Compartilhar" component={CompartilharScreen} />
        <Drawer.Screen name="Lixeira" component={LixeiraScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
