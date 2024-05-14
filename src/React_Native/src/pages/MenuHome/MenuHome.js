import React from 'react';
import { View, Text, Image } from 'react-native';

export const MenuHome = () => {

  return (
    <View style={{ flex: 1, backgroundColor: 'lightgray', alignItems: 'center', justifyContent: 'center' }}>
      
            
      
      
      
      

      <Text style={{ fontSize: 24 }}>Documentos Recentes</Text>
    
      
 
      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
        <Image source={require('../../assets/pdf.png')} style={{ width: 80, height: 80, marginRight: 10 }} />
        <Image source={require('../../assets/txt.png')} style={{ width: 80, height: 80, marginRight: 10 }} />
        <Image source={require('../../assets/pdf.png')} style={{ width: 80, height: 80, marginRight: 10 }} />
        <Image source={require('../../assets/txt.png')} style={{ width: 80, height: 80 }} />
      </View>

     
    </View>
  );
}

export default MenuHome; 
