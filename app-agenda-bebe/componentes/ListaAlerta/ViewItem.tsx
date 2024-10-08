import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

type ItemProps = {hora: Date, atividade: string};

const ViewItem = ({hora, atividade}: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.title}>Hora: {hora == undefined ? hora.getHours().toString() : ""}</Text>
    <Text style={styles.title}>Atividade: {atividade}</Text>
  </View>
);

const styles = StyleSheet.create({
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
});

export default ViewItem;