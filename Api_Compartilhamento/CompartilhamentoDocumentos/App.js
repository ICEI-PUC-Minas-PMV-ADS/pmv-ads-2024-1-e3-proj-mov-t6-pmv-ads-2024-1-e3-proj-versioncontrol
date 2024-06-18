import React, { useState, useEffect } from 'react';
import { View, Button, Text, FlatList, StyleSheet, Alert } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import axios from 'axios';

const API_URL = 'http://192.168.1.3:3001'; //  alterar o ip sempre 

export default function App() {
  const [documentos, setDocumentos] = useState([]);
  const [nomeDocumento, setNomeDocumento] = useState('');

  useEffect(() => {
    listarDocumentos();
  }, []);

  const escolherDocumento = async () => {
    const resultado = await DocumentPicker.getDocumentAsync({});
    if (resultado.type === 'success') {
      console.log('Documento selecionado:', resultado);
      setNomeDocumento(resultado.name);
      enviarDocumento(resultado);
    }
  };

  const enviarDocumento = async (documento) => {
    const formData = new FormData();
    formData.append('file', {
      uri: documento.uri,
      name: documento.name,
      type: documento.mimeType || 'application/octet-stream',
    });

    try {
        const resposta = await axios.post(`${API_URL}/uploads`, formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
      console.log('Resposta do servidor:', resposta.data);
      Alert.alert('Sucesso', 'Arquivo enviado com sucesso');
      listarDocumentos();
    } catch (erro) {
      console.error('Erro ao enviar o documento:', erro);
      Alert.alert('Erro', 'Não foi possível enviar o arquivo');
    }
  };

  const listarDocumentos = async () => {
    try {
      const resposta = await axios.get(`${API_URL}/arquivos`);
      console.log('Documentos recebidos do servidor:', resposta.data);
      setDocumentos(resposta.data);
    } catch (erro) {
      console.error('Erro ao listar os documentos:', erro);
    }
  };

  return (
    <View style={estilos.container}>
      <Button title="Escolher Documento" onPress={escolherDocumento} />
      {nomeDocumento ? <Text>Documento Selecionado: {nomeDocumento}</Text> : null}
      <FlatList
        data={documentos}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text>{item}</Text>}
        style={estilos.lista}
      />
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  lista: {
    marginTop: 20,
    width: '100%',
  },
});
