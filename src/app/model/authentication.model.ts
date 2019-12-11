
export interface Api{
    url:string;
}
export interface TokenAutenticacao{
    access_token:string;
    token_type:string;
    expires_in:number;
}
export interface DataLogin{
    email:string;
    password:string;
}