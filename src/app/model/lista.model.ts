export interface Lista{
    id:number;
    id_user:number;
    lista_nome:string;
    timestamp:string;
    data:string;
    sync:boolean;
    itens:ListaItem[];
    users:ListaUsers[];
}
export interface ListaItem{
    id:number;
    id_user:number;
    nome:string;
    icone_pequeno:string;
    icone_grande:string;
}
export interface ListaUsers{
    id:number;
    nome:string;
    icone_pequeno:string;
    icone_grande:string;
}