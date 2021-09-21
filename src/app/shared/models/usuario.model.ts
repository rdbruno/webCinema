export class Usuario {
    constructor(
        public nome: string,
        public telefone: string,
        public documento: string,
        public senha: string,
        public dataInserido: string,
        public ativo: number    
    ) {}
}