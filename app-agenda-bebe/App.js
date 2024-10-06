import { StyleSheet, View } from 'react-native';
import ViewTelaPrincipal from './componentes/TelaPrincipal/ViewTelaPrincipal';

export default function App() {
  return (
    <View style={styles.container}>
      <ViewTelaPrincipal />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: "100%",
    margin: "100px"
  },
});


