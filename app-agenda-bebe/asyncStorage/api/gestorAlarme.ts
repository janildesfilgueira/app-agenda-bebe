import { Alarme } from "../modelo/alarme";
import { salvarAlarme } from "./salvarAlarme";

export class GestorAlarme {
    public async adicionar(alarme: Alarme){
        salvarAlarme(alarme);
    }
}