import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

type ItemProps = {
    hora: Date, 
    atividade: string
};

const ViewItem = ({hora, atividade}: ItemProps) => {
 const novaHora = new Date(hora)
 const horaFormatada = `${novaHora.getHours()}:${novaHora.getMinutes()}`

 return (
  <View style={styles.item}>
    <Text style={styles.title}>Hora: {hora == undefined ? "" : horaFormatada}</Text>
    <Text style={styles.title}>Atividade: {atividade}</Text>
  </View>
  )
};

const styles = StyleSheet.create({
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 25,
    },
});

export default ViewItem;