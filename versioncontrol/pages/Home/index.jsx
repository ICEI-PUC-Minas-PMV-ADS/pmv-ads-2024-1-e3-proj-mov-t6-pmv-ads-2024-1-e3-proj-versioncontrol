import React from "react";
import { Text, ScrollView, StyleSheet } from "react-native";
import Card from "../../components/Card";

const itens = [
  {
    titulo: "Passagens aéreas",
    descricao: `Em nossa agência de viagens você pode reservar passagens aéreas para qualquer destino do mundo. Também oferecemos reserva de ingressos on-line através do nosso site em apenas algumas etapas`,
  },
  {
    titulo: "Viagens e Cruzeiros",
    descricao: `Além de passeios e excursões regulares, também oferecemos uma variedade de cruzeiros e viagens marítimas para diferentes clientes que procuram experiências incríveis.`,
  },
  {
    titulo: "Reservas de hotéis",
    descricao: `Oferecemos uma ampla seleção de hotéis, desde hotéis 5 estrelas até pequenas propriedades localizadas em todo o mundo, para que você possa reservar o hotel de sua preferência.`,
  },
  {
    titulo: "Passeios de verão personalizados",
    descricao: `Nossa agência oferece passeios variados, incluindo passeios de verão personalizados para clientes que buscam férias exclusivas e memoráveis.`,
  },
];

const Home = () => {
  return (
    <ScrollView style={styles.scrollView}>
      <Text style={styles.titleconteiner}>Prateleiras</Text>
      {itens.map((item, index) => (
        <Card item={item} key={index} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "#F7F7F7",
    padding: 10,
    marginHorizontal: 20,
  },

  titleconteiner: {
    fontSize: 30,
    textAlign: "center",
    padding: 20,
  },
});

export default Home;
