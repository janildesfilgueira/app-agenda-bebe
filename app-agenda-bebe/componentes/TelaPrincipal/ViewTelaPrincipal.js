import React from 'react';
import {Button, View, Text, StyleSheet} from 'react-native';

const ViewTelaPrincipal = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.tituloTexto}>Lembretes</Text>
      <Button
        title="Adicionar o Lembrete"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: 'center',
    justifyContent: "space-between",
    height: "90%",
    width: "90%"
  },
  tituloTexto: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});


export default ViewTelaPrincipal;