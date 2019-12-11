import { Injectable } from '@angular/core';
import { TokenAutenticacao } from '../model/authentication.model';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  tokenAutenticacao:TokenAutenticacao = {
    access_token:null,
    token_type:null,
    expires_in:null,
  }
  autenticado:boolean = false;

  constructor(
    private router: Router
    ) {
    this.getTokenStorage();
  }
  public userAutenticado():boolean{
    if(this.tokenAutenticacao === null){
      return false;
    }else{
      return true;
    }
  }
  public getTimestamp():number{
    return Math.floor(Date.now() / 1000);
  }
  public salvarTokenStorage(tokenAutenticacao:TokenAutenticacao){
    this.tokenAutenticacao.access_token = tokenAutenticacao.access_token;
    this.tokenAutenticacao.token_type = tokenAutenticacao.token_type;
    let tempoDuracao = Math.floor(Date.now() / 1000) + Number(tokenAutenticacao.expires_in);
    this.tokenAutenticacao.expires_in = tempoDuracao;
    this.autenticado = true;
    localStorage.setItem("access_token", JSON.stringify(this.tokenAutenticacao));
  }
  public getTokenStorage(){
    if(localStorage.getItem("access_token")){
      this.tokenAutenticacao = JSON.parse(localStorage.getItem("access_token"));
        if(this.tokenAutenticacao.expires_in < Math.floor(Date.now() / 1000)){
          console.log("Você não esta logado!");
          this.autenticado = false;
          this.tokenAutenticacao = null;
          this.router.navigate(['/Login']);
          localStorage.clear();
        }else{
          this.router.navigate(['/Venda']);
          this.autenticado = true;
          console.log("Você esta logado!");
        }
    }else{
      this.router.navigate(['/Login']);
      this.autenticado = false;
      console.log("Você não esta logado!");
    }
  }
  public getToken(){
    this.getTokenStorage();
    return this.tokenAutenticacao.access_token;
  }
}
