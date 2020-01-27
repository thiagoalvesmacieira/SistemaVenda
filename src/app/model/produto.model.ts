export interface Produto{
    id:number;
    id_user:number;
    nome:string;
    imagem:string;
}
export interface ProdutoBusca{
    idProduto:number;
    nomeProduto:string;
}
export interface ProdutoLote{
    codigoCompra: string;
    DataEmissao: string;
    dataCompra: string;
    NF: string;
    IDPRODUTO: number;
    codigo: number;
    fantasia: string;
    valorCompra: number;
    idItem: number;
    valorCustoItem: number;
    QUANTIDADE: number;
    QUANTIDADESAIDA: number;
    restante: number;
    origem: number;
    DEVOLUCAO: string;
    COMPLEMENTOPRODUTO: string;
    TIPO: number;
    PESO: number;
    undMedida: string;
    CONSIGNADA: number;
    VALORITEMSUGERIDO: number;
}
export interface ProdutoCarrinho{
    produtoBusca:ProdutoBusca;
    produtoLote:ProdutoLote;
}