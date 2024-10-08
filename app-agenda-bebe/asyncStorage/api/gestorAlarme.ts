import { Alarme } from "../modelo/alarme";
import { obterAlarmes } from "./obterAlarmes";
import { salvarAlarme } from "./salvarAlarme";

export class GestorAlarme {
    public async adicionar(alarme: Alarme){
        salvarAlarme(alarme);
    }

    public async listarAlarme(){
        let lista: Array<Alarme> = await obterAlarmes();
        return lista;
    }
}