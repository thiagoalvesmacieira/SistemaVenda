import { Injectable } from '@angular/core';
import { Lista } from '../model/lista.model';
import { Produto } from '../model/produto.model';

@Injectable({
  providedIn: 'root'
})
export class IndexedDbService {

  databaseName: string = "listaDb";
  version: number = 2;
  request: any;
  db: any;

  constructor() { 
    this.createDatabase();
  }
  createDatabase() {
    let request: any;
    let db: any;
    request = window.indexedDB.open(this.databaseName);

    request.onsuccess = function (event) {
      db = request.result;
      console.log('Banco de dados aberto com sucesso!');
      return db;
    };

    request.onupgradeneeded = function (event) {

      db = event.target.result;

      let objectTableListas: any;

      if (!db.objectStoreNames.contains('LISTAS')) {
        //#########################################################################
        //#########################################################################
        //Criação da tabela Lista
        objectTableListas = db.createObjectStore('LISTAS', { keyPath: 'id' });
        objectTableListas.createIndex('id', 'id', { unique: true });
        objectTableListas.createIndex('id_user', 'id_user', { unique: false });
        objectTableListas.createIndex('lista_nome', 'lista_nome', { unique: false });
        objectTableListas.createIndex('timestamp', 'timestamp', { unique: false });
        //#########################################################################
        //#########################################################################
      }

      if (!db.objectStoreNames.contains('PRODUTOS')) {
        //#########################################################################
        //#########################################################################
        //Criação da tabela Lista
        objectTableListas = db.createObjectStore('PRODUTOS', { keyPath: 'id' });
        objectTableListas.createIndex('id', 'id', { unique: true });
        objectTableListas.createIndex('id_user', 'id_user', { unique: false });
        objectTableListas.createIndex('nome', 'nome', { unique: false });
        objectTableListas.createIndex('imagem', 'imagem', { unique: false });
        objectTableListas.createIndex('timestamp', 'timestamp', { unique: false });
        //#########################################################################
        //#########################################################################
      }


      return db;
    }
    request.onerror = function (event) {
      console.log('Falha ao abrir banco de dados!');
    };
  }
  getDados(tabela:string){
    let request: any;
    let db: any;
    request = window.indexedDB.open(this.databaseName);
    request.onsuccess = function (e) {
      db = request.result;
      let data:any = db.transaction(tabela, "readwrite").objectStore(tabela).getAll();
      data.onsuccess = function(event){
        let cursor = event.target.result
        return cursor;
      }
    };
    request.onerror = function (event) {
      console.log('The database is opened failed');
    };
  }
  salvarDados(dados:any, tabela:string){
    let request: any;
    let db: any;
    request = window.indexedDB.open(this.databaseName);
    request.onsuccess = function (event) {
      db = request.result;
      db.transaction(tabela, 'readwrite').objectStore(tabela).add(dados);
    };
    request.onerror = function (event) {
      console.log('The database is opened failed');
    };
  }
  deletarDados(id_item:any, tabela:string){
    let request: any;
    let db: any;
    request = window.indexedDB.open(this.databaseName);
    request.onsuccess = function (e) {
      db = request.result;
      let data:any = db.transaction(tabela, "readwrite").objectStore(tabela).delete(id_item);
      data.onsuccess = function(event){
        let cursor = event.target.result
        return cursor;
      }
    };
    request.onerror = function (event) {
      console.log('The database is opened failed');
    };
  }
  atualizarDados(dados:any, tabela:string){
    let request: any;
    let db: any;
    request = window.indexedDB.open(this.databaseName);
    request.onsuccess = function (e) {
      db = request.result;
      let data:any = db.transaction(tabela, "readwrite").objectStore(tabela).put(dados);
      data.onsuccess = function(event){
        let cursor = event.target.result
        return cursor;
      }
    };
    request.onerror = function (event) {
      console.log('The database is opened failed');
    };

    //Date.now()



  }

























  
  
 /*  criarNovaLista(lista:Lista){
    let request: any;
    let db: any;
    request = window.indexedDB.open(this.databaseName);
    request.onsuccess = function (event) {
      db = request.result;
      db.transaction(['LISTAS'], 'readwrite').objectStore('LISTAS').add({
          id: lista.id,
          id_user: lista.id_user,
          lista_nome:lista.lista_nome
        });
    };
    request.onerror = function (event) {
      console.log('The database is opened failed');
    };
  }
  getLista(){
    let request: any;
    let db: any;
    request = window.indexedDB.open(this.databaseName);
    request.onsuccess = function (e) {
      db = request.result;
      let data:any = db.transaction("LISTAS", "readwrite").objectStore('LISTAS').getAll();
      data.onsuccess = function(event){
        let cursor = event.target.result;
        if(cursor){
          console.log("DATA : " + JSON.stringify(cursor));
        }
      }
    };
    request.onerror = function (event) {
      console.log('The database is opened failed');
    };
  }


  criarProduto(){
    let request: any;
    let db: any;
    request = window.indexedDB.open(this.databaseName);

    request.onsuccess = function (event) {

      db = request.result;

      for(let i = 0; i <= 20; i++){

        db.transaction(['PRODUTOS'], 'readwrite').objectStore('PRODUTOS').add({
          id:i,
          id_user:1,
          nome:"PRODUTO " + i,
          imagem:"https://images.vexels.com/media/users/3/143152/isolated/preview/3969b58afeeddbe056f8a8d64401f5b9---cone-de-cluster-de-uvas-by-vexels.png"
        });
      }

    };

    request.onerror = function (event) {
      console.log('The database is opened failed');
    };

  }


getProdutos(){
    let request: any;
    let db: any;

    request = window.indexedDB.open(this.databaseName);

    request.onsuccess = function (e) {

      db = request.result;
      let data:any = db.transaction("PRODUTOS", "readwrite").objectStore('PRODUTOS').getAll();
      data.onsuccess = function(event){
        let cursor = event.target.result;
        if(cursor){
          console.log("PRODUTOS : " + JSON.stringify(cursor));
        }
      }
    };

    request.onerror = function (event) {
      console.log('The database is opened failed');
    };
    
  } 


  insereTeste(){
    let produto:Produto = {
      id:2,
      id_user:2,
      nome:"PRODUTO 2",
      imagem:"https://images.vexels.com/media/users/3/143152/isolated/preview/3969b58afeeddbe056f8a8d64401f5b9---cone-de-cluster-de-uvas-by-vexels.png"
    }

    this.salvarDados(produto, "PRODUTOS");
  } */




}
