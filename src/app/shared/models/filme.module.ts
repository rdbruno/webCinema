export class Filme {
    constructor(
        public idFilme: number,
        public nome: string,
        public horarioSecao: string,
        public precoIngresso: number,
        public ativo: number
    ) {}
}