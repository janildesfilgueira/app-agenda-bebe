import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import ViewTelaPrincipal from '../TelaPrincipal/ViewTelaPrincipal';
import ViewDadosCrianca from '../DadosCrianca/ViewDadosCrianca';

const Stack = createNativeStackNavigator();

const Navegacao = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="TelaPrincipal">
            <Stack.Screen
                name="TelaPrincipal"
                component={ViewTelaPrincipal}
                options={{
                  headerStyle: {
                    backgroundColor: '#f9c2ff',
                  },
                  title: 'Lembrentes'
                }}
            />
            <Stack.Screen
                name="DadosCrianca"
                component={ViewDadosCrianca}
                options={{
                    headerStyle: {
                        backgroundColor: '#f9c2ff',
                    },
                    title: 'Dados da criança'
                }}
            />
        </Stack.Navigator>
    </NavigationContainer>
)

export default Navegacao;