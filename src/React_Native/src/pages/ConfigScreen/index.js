import React from 'react';
import { View, Text } from 'react-native';
import {useNavigation} from '@react-navigation/native';

const ConfigScreen = () => {
  
  const navigation = useNavigation ();
  
  return (
    <View style={{ flex: 1, alignItems: 'right'}}>
      <Text>Configurações</Text>
      
    </View>
  );
};

export default ConfigScreen;

// ConfigScreen similar a WelcomeScreen, mas com texto "Configurações"
