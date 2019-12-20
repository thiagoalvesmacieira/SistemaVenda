import { Component, OnInit,ChangeDetectionStrategy } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Cliente } from 'src/app/model/cliente.model';
import { IndexedDbService } from 'src/app/services/indexed-db.service';
import { VendaService } from 'src/app/services/venda.service';
import { StorageService } from 'src/app/services/storage.service';
@Component({
  selector: 'app-buscar-cliente-dialog',
  templateUrl: './buscar-cliente-dialog.component.html',
  styleUrls: ['./buscar-cliente-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BuscarClienteDialogComponent implements OnInit {

  value = '';
  arrCliente:Cliente[] = [];
  arrClienteCache:Cliente[] = [];

  totalClienteApi:Number = 0;
  totalClienteCache:Number = 0;

  buscaRealizada:boolean = false;
  termoBusca:string = "";

  cacheCarregado:boolean = false;

  timestampCache:Number = 0;
  timestampApi:Number = 1;

  constructor(
    public apiService:ApiService,
    public indexedDbService:IndexedDbService,
    public storageService:StorageService,
    public vendaService:VendaService
  ) { }

  ngOnInit() {
    this.getListaClienteCache();
  }
  getListaClienteCache(){

    this.indexedDbService.getCache("CLIENTES").subscribe((data)=>{
      this.cacheCarregado = true;
      this.arrClienteCache = data;
      this.totalClienteCache = this.arrClienteCache.length;
      this.getTimestampCacheApi();
    });

    this.indexedDbService.getCache("CLIENTES_CONTROLE").subscribe((data:any)=>{
      data.map((d)=>{
        this.timestampCache = d.timestamp;
      });
    });

  }
  getTimestampCacheApi(){
    this.apiService.getUltimaAlteracao().subscribe((d:Number)=>{
      this.timestampApi = d;
      this.getListaClienteApi();
    }, error =>{
      this.getListaClienteCache();
    });
  }
  getTotalClienteApi(){
    this.apiService.getTotalCliente().subscribe((d:Number)=>{
      this.cacheCarregado = true;
      this.totalClienteApi = d;
      this.getListaClienteApi();
    }, error =>{
      this.getListaClienteCache();
    });
  }
  getListaClienteApi(){



    if(this.timestampCache < this.timestampApi){

      this.apiService.getListaCliente().subscribe((data:any)=>{
        this.cacheCarregado = true;
        this.arrClienteCache = data.clientes;
        let d = {
          timestamp:data.ultimas_alteracoes
        }

        this.indexedDbService.salvarDados(d, "CLIENTES_CONTROLE");

        this.arrClienteCache.map((d)=>{
          setTimeout(()=>{ 
            this.indexedDbService.salvarDados(d, "CLIENTES");
          }, 10);
        });
     
      }, error=>{
   
        this.getListaClienteCache();
      });
    }
  }
  buscarCliente(){
    this.buscaRealizada = true;
    this.arrCliente = this.arrClienteCache.filter((str)=>{
      return str.cliente_nome_fantasia.toLowerCase().indexOf(this.termoBusca.toLowerCase()) >= 0; 
    });
  }


}
