import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 

const DrawerContent = ({ navigation }) => {
  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
    navigation.closeDrawer(); 
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.drawerItem}
        onPress={() => navigateToScreen('Favoritos')}
      >
        <MaterialIcons name="favorite" size={24} color="black" />
        <Text style={styles.drawerItemText}>Favoritos</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.drawerItem}
        onPress={() => navigateToScreen('Cadernos')}
      >
        <MaterialIcons name="book" size={24} color="black" />
        <Text style={styles.drawerItemText}>Cadernos</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.drawerItem}
        onPress={() => navigateToScreen('Compartilhar')}
      >
        <MaterialIcons name="share" size={24} color="black" />
        <Text style={styles.drawerItemText}>Compartilhar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.drawerItem}
        onPress={() => navigateToScreen('Lixeira')}
      >
        <MaterialIcons name="delete" size={24} color="black" />
        <Text style={styles.drawerItemText}>Lixeira</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  drawerItemText: {
    marginLeft: 20,
    fontSize: 16,
  },
});

export default DrawerContent;
