export class Alarme {
    codigo: number;
    hora: Date;
    atividade: string;

    constructor(
        codigo: number, 
        hora: Date, 
        atividade: string
    ){
        this.codigo = codigo;
        this.hora = hora;
        this.atividade = atividade;
    }
}