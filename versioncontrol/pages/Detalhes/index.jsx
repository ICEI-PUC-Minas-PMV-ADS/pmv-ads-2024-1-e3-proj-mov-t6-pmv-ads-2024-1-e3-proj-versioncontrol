import React from "react";
import { Text, View } from "react-native";
import Card from "../../components/Card";
const Detalhes = (props) => {
  const { item } = props.route.params;
  return (
    <View>
      <Card item={item} />
    </View>
  );
};

export default Detalhes;
