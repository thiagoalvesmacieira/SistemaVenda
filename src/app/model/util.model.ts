export interface ConfirmDialog{
    titulo:string;
    texto:string;
}
export interface UnidadeMedida{
    unidade:UnidMedida;
    nome:string;
}
export enum UnidMedida{
    Caixa = '1',
    Bandeja = '2',
    Kilo = '3',
    Pacote = '4',
    Saco = '5',
    Unidade = '6',
    Bin = '7'
}
export const arrUnidadeMedida:UnidadeMedida[] = [
    {
        unidade:UnidMedida.Caixa,
        nome:"Caixa"
    },
    {
        unidade:UnidMedida.Bandeja,
        nome:"Bandeja"
    },
    {
        unidade:UnidMedida.Kilo,
        nome:"Kilo"
    },
    {
        unidade:UnidMedida.Pacote,
        nome:"Pacote"
    },
    {
        unidade:UnidMedida.Saco,
        nome:"Saco"
    },
    {
        unidade:UnidMedida.Unidade,
        nome:"Unidade"
    },
    {
        unidade:UnidMedida.Bin,
        nome:"Bin"
    }
];