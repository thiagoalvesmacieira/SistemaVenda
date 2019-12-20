import { Cliente } from './cliente.model';
import { Produto } from './produto.model';

export interface Venda{
    emissao:string;
    cliente:Cliente;
    emitirNotaFiscal:boolean;
    produtos:Produto[];
}

