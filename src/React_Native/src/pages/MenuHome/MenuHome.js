import React from 'react';
import { View, Text, Image, Button, TouchableOpacity } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import { AntDesign } from '@expo/vector-icons';
import {useNavigation } from '@react-navigation/native'

export const MenuHome = () => {

  const navigation = useNavigation();

  const pickSomething = async () => {
    try {
      const docRes = await DocumentPicker.getDocumentAsync({
        type: "*/*",
        copyToCacheDirectory: true,
        multiple: true,
        
      });
      
      console.log(docRes);
    } catch (error) {
      console.log("Error while selecting file: ", error);
    }
  
  };

  return (

    
    <View style={{ flex: 1,
      backgroundColor: '#ffa500', alignItems: 'center', justifyContent: 'center' }}>
       <TouchableOpacity
         //onPress={() => navigation.dispatch(DrawerActions.openDrawer('DrawerContent'))}
         onPress={() => navigation.navigate('DrawerContent')}
         style={{ position: 'absolute', top: 20, left: 10 }}
       >
        
        <AntDesign name="menu-fold" size={24} color="black" />
       </TouchableOpacity>
 
       
      
      <View >
      <Button title="Selecione o arquivo" onPress={pickSomething} />
      </View>
      
      
      
      

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
