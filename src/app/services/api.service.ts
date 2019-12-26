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
  getListaCliente():Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.api.url + "getClientes");
  }
  getTotalCliente():Observable<any>{
    return this.http.get<any>(this.api.url + "getQuantidadeClientes").pipe(
      tap(data =>{

      })
    );
  }
  getUltimaAlteracao():Observable<any>{
    return this.http.get<any>(this.api.url + "getUltimaAlteracao").pipe(
      tap(data =>{

      })
    );
  }
  getListaProdutos():Observable<any>{
    return this.http.get<any>(this.api.url + "getProdutos").pipe(
      tap(data =>{

      })
    );
  }








}
