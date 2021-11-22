export class Pagamento {
    constructor( 
        public IdPagamentoUsuario: number,
        public IdPagamento: number,
        public NumeroCartao: number,
        public DataExpiracao: string,
        public CodigoSeguranca: number
    ) { }
}