import React from 'react';
import { View, Text, Image, Button } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';

export const MenuHome = () => {
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
    <View style={{ flex: 1, backgroundColor: 'lightgray', alignItems: 'center', justifyContent: 'center' }}>
      
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
