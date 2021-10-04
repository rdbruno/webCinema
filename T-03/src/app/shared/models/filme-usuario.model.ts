export class FilmeUsuario {
    constructor(
        public HorarioSecao: string,
        public IdFilme: number,
        public IdIngresso: number,
        public IdIngressoUsuario: number,
        public IdSala: number,
        public IdUsuario: number,
        public Nome: string,
        public NomeFilme: string,
        public NomeSala: string,
        public PrecoIngresso: number,
        public QuantidadeLugares: number,
        public RgCpf: string,
        public UrlCartaz: string
    ) {}
}