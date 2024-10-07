import { StyleSheet, View } from 'react-native';
import Navegacao from './componentes/Navegacao/Navegacao';

export default function App() {
  return (
      <Navegacao />
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


