import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IndexedDbService {

  banco:any;
  bancoVersao:number = 1;
  bancoNome:string = "SistemaVenda";

  constructor() { 

      this.banco = indexedDB.open(this.bancoNome, this.bancoVersao);

      this.banco.onupgradeneeded = function(event) {
        //fazer a criação das tabelas, indices e popular o banco se necessário
        let db = event.target.result;

        let cliente = db.createObjectStore("cliente", { keyPath: "cliente_id", autoIncrement: true });
        
        cliente.createIndex('cliente_id', 'cliente_id', {unique: true});
        cliente.createIndex('cliente_codigo', 'cliente_codigo', {unique: true});
        cliente.createIndex('cliente_nome', 'cliente_nome', {unique: false});
        cliente.createIndex('cliente_nome_fantasia', 'cliente_nome_fantasia', {unique: false});

        let item = {"cliente_id": "1","cliente_codigo": "1","cliente_nome": "VENDA A VISTA","cliente_nome_fantasia": "VENDA A VISTA"};
        let item2 = {"cliente_id": "2","cliente_codigo": "2","cliente_nome": "VENDA A VISTA","cliente_nome_fantasia": "VENDA A VISTA"};

        cliente.add(item);
        cliente.add(item2);
      /*   console.log("DATA : " + JSON.stringify(cliente.get())); */
/*         cliente.add({clientes: 'Valor 2'});
        cliente.add({clientes: 'Valor 3'}); */

        var transaction = this.db.transaction('cliente', "readwrite");

        var store = transaction.objectStore('cliente');
        var request = store.get(1);

        request.onsuccess = function (event) {
     




            var cursor = event.target.result;
            if (cursor) {
                console.log(cursor.value);
                cursor.continue();
            }



            
        }
   
        // Quando a transação é executada com sucesso
        transaction.oncomplete = function(event) {
  
  
        };
        
        // Quando ocorre algum erro na tansação
        transaction.onerror = function(event) {

      }
      
      this.banco.onsuccess = function (event) { 
          //sucesso ao criar/abrir o banco de dados
        console.log("SUCESSO AO ABRIR O BANCO");

      }
      
      this.banco.onerror = function (event) { 
        console.log("ERRO AO CRIAR O BANCO");
          //erro ao criar/abrir o banco de dados
      }

    

/*       var transaction = this.banco.transaction('cliente', "readwrite");

      var store = transaction.objectStore('contato');
      var request = store.get(1);
      request.onsuccess = function (event) {
          console.log(event.target.result);
      }
 
      // Quando a transação é executada com sucesso
      transaction.oncomplete = function(event) {


      };
      
      // Quando ocorre algum erro na tansação
      transaction.onerror = function(event) {
      }; */
    
  }





  }

}
