export class Alarme {
    codigo: string;
    hora: Date;
    atividade: string;

    constructor(
        codigo: string, 
        hora: Date, 
        atividade: string
    ){
        this.codigo = codigo;
        this.hora = hora;
        this.atividade = atividade;
    }
}