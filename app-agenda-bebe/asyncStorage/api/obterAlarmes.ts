import AsyncStorage from "@react-native-async-storage/async-storage";
import { KEY } from "../constants/asyncStorageKey";

export const obterAlarmes = async () => {
    try {
      const alarmeJson = await AsyncStorage.getItem(KEY);

      return alarmeJson != null ? JSON.parse(alarmeJson) : null;
    } catch(e) { 
      console.log(e) 
    }
}