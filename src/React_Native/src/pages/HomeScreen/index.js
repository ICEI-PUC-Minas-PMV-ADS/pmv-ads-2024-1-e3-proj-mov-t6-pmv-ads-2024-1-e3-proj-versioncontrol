import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import { DrawerActions } from '@react-navigation/native';

 export const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1,
     backgroundColor: '#ffa500', alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        style={{ position: 'absolute', top: 20, left: 10 }}
      >
       
        <Text>☰</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('WelcomeScreen')}
        style={{ position: 'absolute', top: 20, right: 10 }}
      >
        {/* Logo */}
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


export default HomeScreen;
