import { Injectable } from '@angular/core';
import { RequestOptions } from '@angular/http';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import { DataLogin, Api, TokenAutenticacao } from '../model/authentication.model';


import {Observable, throwError} from 'rxjs';
import {catchError, tap, map} from 'rxjs/operators';
import { Cliente } from '../model/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  readonly api:Api = {
    url:"http://192.168.137.1:8000/api/"
  }
  public reqHeader:any;
  constructor(
    private http: HttpClient,
    public authenticationService:AuthenticationService
  ) {
  }
  
  getRequestOption():RequestOptions{
    this.reqHeader = new HttpHeaders({
      'Access-Control-Allow-Origin': this.api.url,
      'Content-Type': 'application/json',
      'Authorization': "Bearer " + this.authenticationService.tokenAutenticacao.access_token,
      'Accept': '*/*',
   });
    return new RequestOptions({ headers: this.reqHeader });
  }
  login(dataLogin:DataLogin):Observable<TokenAutenticacao>{
    return this.http.post<TokenAutenticacao>(this.api.url + "auth/login/", dataLogin).pipe(
       tap(data => this.authenticationService.salvarTokenStorage(data))
    );
  }
  getListaCliente(termo_busca:string):Observable<any>{
    let requestOptions:any = this.getRequestOption();
    return this.http.get<any>(this.api.url + "getClientes?termo_busca=" + termo_busca, requestOptions);
  }
  getTotalCliente():Observable<any>{
    let requestOptions:any = this.getRequestOption();
    return this.http.get<any>(this.api.url + "getQuantidadeClientes", requestOptions).pipe(
      tap(data =>{

      })
    );
  }
  
  getUltimaAlteracao():Observable<any>{
    let requestOptions:any = this.getRequestOption();
    return this.http.get<any>(this.api.url + "getUltimaAlteracao", requestOptions).pipe(
      tap(data =>{

      })
    );
  }
  getListaProdutos(termo_busca:string):Observable<any>{
    let requestOptions:any = this.getRequestOption();
    return this.http.get<any>(this.api.url + "getProdutos?termo_busca="+termo_busca, requestOptions).pipe(
      tap(data =>{

      })
    );
  }
  getProdutosLote(id_produto:number):Observable<any>{
    let requestOptions:any = this.getRequestOption();
    return this.http.get<any>(this.api.url + "getEstoque?id_produto="+id_produto, requestOptions).pipe(
      tap(data=>{

      })
    );
  }

}
