import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  StatusBar,
} from 'react-native';
import ViewItem from './ViewItem';
import { useIsFocused } from '@react-navigation/native';
import { GestorAlarme } from '../../asyncStorage/api/gestorAlarme';

const ViewLista = () => {

  const [listaAlerta, setListaAlerta] = useState([])
  const isFocused = useIsFocused();

  useEffect(() => {
    const gestorAlarme = new GestorAlarme()

    gestorAlarme.listarAlarme().then((lista) => setListaAlerta(lista))

    console.log("listaAlerta", listaAlerta)
  }, [isFocused]);  

  const indentificacaoChave = item => {
    return item.codigo
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={listaAlerta}
        renderItem={({item}) => <ViewItem 
        hora={item.hora} 
        atividade={item.atividade}
        />}
        keyExtractor={indentificacaoChave}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
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

export default ViewLista;