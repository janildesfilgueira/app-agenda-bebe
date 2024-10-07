import { Button,Text,View, TextInput, StyleSheet } from "react-native";

const ViewDadosCrianca = () => {
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
                    style={styles.inputHora}
                    maxLength={2}   inputMode="numeric" 
                />
                <Text style={styles.tituloTexto}>
                :
                </Text>
                <TextInput 
                    style={styles.inputHora}
                    maxLength={2}
                    inputMode="numeric"
                />
            </View>

            <Text style={styles.tituloTexto}>
                Nome da Atividade
            </Text>
            <TextInput style={styles.input} />

            <Button title="Salvar"/>
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