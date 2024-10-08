import { Button,Text,View, TextInput, StyleSheet } from "react-native";
import { useState } from "react";
import { GestorAlarme } from "../../asyncStorage/api/gestorAlarme";
import { Alarme } from "../../asyncStorage/modelo/alarme";

import uuid from 'react-native-uuid';

const ViewDadosCrianca = ({ navigation }) => {
    const [hora, onChangeHora] = useState("00");
    const [minuto, onChangeMinuto] = useState("00");
    const [nomeAtividade, onChangeNomeAtividade] = useState("Mamentação");

    function salvarDadosCrianca() {
        const gestorAlarme = new GestorAlarme();

        const data = new Date()
        data.setHours(hora, minuto, 0);

        gestorAlarme.adicionar(
            new Alarme(uuid.v4(), data, nomeAtividade)
        )

        navigation.goBack()
    }

    return (
        <View style={styles.container}>
            <Text style={styles.tituloTexto}>
                Adicione a próxima notificação
            </Text>

            <Text style={styles.tituloTexto}>
                Hora
            </Text>
            <View style={styles.containerLinha}>
                <TextInput
                    value={hora}
                    style={styles.inputHora}
                    maxLength={2}   
                    inputMode="numeric"
                    onChangeText={onChangeHora}
                />
                <Text style={styles.tituloTexto}>
                :
                </Text>
                <TextInput
                    value={minuto}
                    style={styles.inputHora}
                    onChangeText={onChangeMinuto}
                    maxLength={2}
                    inputMode="numeric"
                />
            </View>

            <Text style={styles.tituloTexto}>
                Nome da Atividade
            </Text>
            <TextInput
                onChangeText={onChangeNomeAtividade}
                value={nomeAtividade} 
                style={styles.input} 
            />

            <Button 
                onPress={() => salvarDadosCrianca()}title="Salvar"
            />

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      margin: 10,
      gap: 20,
      height: "90%",
      width: "90%"
    },
    containerLinha: {
        display: "flex", 
        flexDirection:"row"
    },
    tituloTexto: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    inputHora: {
        width: "30%",
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    input: {
        width: "90%",
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});
  
export default ViewDadosCrianca;