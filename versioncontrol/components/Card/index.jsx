import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Card = (props) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.box}
      onPress={() => {
        navigation.navigate("Detalhes", {
          item: props.item,
        });
      }}
    >
      <Text style={styles.titlebox}>{props?.item?.titulo || "Sem titulo"}</Text>
      <Text>{props?.item?.descricao || "Sem descrição"}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  box: {
    flexDirection: "column",
    height: 150,
    padding: 20,
    backgroundColor: "#FEFEFE",
    borderRadius: 10,
    marginBottom: 50,
  },

  titlebox: {
    fontSize: 20,
    borderBottomColor: "black",
    borderBottomWidth: StyleSheet.hairlineWidth,
    padding: 3,
  },
});

export default Card;
