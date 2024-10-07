import { Button,Text,View, TextInput, StyleSheet } from "react-native";

const ViewDadosCrianca = () => {
    return (
        <View style={styles.container}>
            <Text>Hora</Text>
            <TextInput />
            <Text>Nome da Atividade</Text>
            <TextInput/>
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
      padding: "30px",
      height: "90%",
      width: "90%"
    },
    tituloTexto: {
      fontSize: 20,
      fontWeight: 'bold',
    },
});
  
export default ViewDadosCrianca;