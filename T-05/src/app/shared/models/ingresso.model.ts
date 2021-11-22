export class Ingresso {
    constructor (
        public IdIngressoUsuario: number,
        public IdUsuario: number,
        public IdSala: number,
        public Lugar: number,
        public IdPagamentoUsuario: number,
        public ValorTotal: number,
        public RgCpf: string
    ) {}
}