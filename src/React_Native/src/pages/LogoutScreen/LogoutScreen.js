import React from 'react';
import { View, Text, Button } from 'react-native';

const LogoutScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Tem certeza que deseja sair ?</Text>
      <View>
        <Button title='Sim' />
        <Button title='Não' />
      </View>
    </View>
  );
};

export default LogoutScreen;