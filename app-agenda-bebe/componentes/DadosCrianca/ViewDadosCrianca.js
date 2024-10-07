import { Button,Text,View, TextInput } from "react-native";

const ViewDadosCrianca = () => {
    return (
        <View>
            <Text>Hora</Text>
            <TextInput />
            <Text>Nome da Atividade</Text>
            <TextInput/>
            <Button title="Salvar"/>
        </View>
    )
}

export default ViewDadosCrianca;