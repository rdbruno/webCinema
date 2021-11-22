export class Carrinho {
    constructor( 
        public IdCarrinho: number,
        public IdUsuario: number,
        public Lugar: number,
        public ValorTotal: number,
        public Nome: string,
        public Telefone: string,
        public NomeSala: string,
        public HorarioSecao: string,
        public NomeFilme: string,
        public PrecoIngresso: number,
        public IdSala: number,
        public ValorDesconto: number
    ) { }
}