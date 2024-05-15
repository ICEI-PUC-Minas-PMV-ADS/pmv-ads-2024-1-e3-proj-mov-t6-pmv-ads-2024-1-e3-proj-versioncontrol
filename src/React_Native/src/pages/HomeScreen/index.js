import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { DrawerActions } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import MyDrawer from '../../routes/MainMenu';
import FavoritosScreen from "../FavoritosScreen";
import LixeiraScreen from "../LixeiraScreen";
import DrawerContent from "../DrawerContent"
import MenuHome from "../MenuHome/MenuHome";

import { createDrawerNavigator } from '@react-navigation/drawer';
import LibraryScreen from '../LibraryScreen';
import CompartilharScreen from '../CompartilharScreen';
import ConfigScreen from '../ConfigScreen';
import LogoutScreen from '../LogoutScreen/LogoutScreen';


const Drawer = createDrawerNavigator();


export default function MyDrawer2() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={MenuHome}/>
      <Drawer.Screen name="FavoritosScreen" component={FavoritosScreen}   />
      <Drawer.Screen name="LibraryScreen" component={LibraryScreen}   />
      <Drawer.Screen name="CompartilharScreen" component={CompartilharScreen}   />
      <Drawer.Screen name="ConfigScreen" component={ConfigScreen}   />
      <Drawer.Screen name="LixeiraScreen" component={LixeiraScreen} />
      <Drawer.Screen name="LogoutScreen" component={LogoutScreen} />
      
    </Drawer.Navigator>
  );
}




























 /*export const HomeScreen = ({ navigation }) => {

  return (
    <View style={{ flex: 1, backgroundColor: 'lightgray', alignItems: 'center', justifyContent: 'center' }}>
      
       <TouchableOpacity
       // onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        onPress={() =>navigation.navigate ('DrawerContent')} //DrawerContent
        style={{ position: 'absolute', top: 20, left: 10 }}
      >
       
       <AntDesign name="menu-fold" size={24} color="black" />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Welcome')}
        style={{ position: 'absolute', top: 20, right: 10 }}
      >
        {/* Logo */ //}
      
      /*  
      
      
      <Image source={require('../../assets/logo.png')} style={{ width: 40, height: 40 }} />
      </TouchableOpacity>

      <Text style={{ fontSize: 24 }}>Documentos Recentes</Text>
    
      
 
      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
        <Image source={require('../../assets/pdf.png')} style={{ width: 80, height: 80, marginRight: 10 }} />
        <Image source={require('../../assets/txt.png')} style={{ width: 80, height: 80, marginRight: 10 }} />
        <Image source={require('../../assets/pdf.png')} style={{ width: 80, height: 80, marginRight: 10 }} />
        <Image source={require('../../assets/txt.png')} style={{ width: 80, height: 80 }} />
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Config')}
          style={{ position: 'absolute', top: 20, right: 10 }}
        >
         
        </TouchableOpacity>
        <TouchableOpacity
          
        >
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen; */
