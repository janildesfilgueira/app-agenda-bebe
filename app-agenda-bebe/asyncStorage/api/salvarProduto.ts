import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alarme } from "../modelo/alarme";
import { KEY } from "../constants/asyncStorageKey";

export const salvarProduto = async(alarmes: Alarme) => {

    try {
        const jsonValue = JSON.stringify(alarmes)
        await AsyncStorage.setItem(KEY, jsonValue)
    } catch (error) {
        console.log(error)
    }

}