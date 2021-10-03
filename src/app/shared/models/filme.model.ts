export class Filme {
    constructor(
        public IdFilme: number,
        public NomeFilme: string,
        public UrlCartaz: string,
        public PrecoIngresso: number,
        public Sala1: string,
        public Sala2: string,
        public IdSala1: number,
        public IdSala2: number,
        public HorarioSecao1: string,
        public HorarioSecao2: string
    ) {}
}