import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alarme } from "../modelo/alarme";
import { KEY } from "../constants/asyncStorageKey";
import { obterAlarmes } from "./obterAlarmes";

export const salvarAlarme = async(alarme: Alarme) => {
    try {
        const arrayAlarme = await obterAlarmes();
        arrayAlarme.push(alarme)
        const jsonValue = JSON.stringify(arrayAlarme)
        await AsyncStorage.setItem(KEY, jsonValue)
    } catch (error) {
        console.log(error)
    }

}