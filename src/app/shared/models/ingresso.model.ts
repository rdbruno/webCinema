export class Ingresso {
    constructor (
        public idIngresso: number,
        public idSala: number,
        public idFilme: number,
        public idUsuario: number,
        public lugar: string,
        public dataInserido: string,
        public ativo: number
    ) {}
}