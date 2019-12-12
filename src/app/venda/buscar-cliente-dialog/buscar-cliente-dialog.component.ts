import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Cliente } from 'src/app/model/cliente.model';

@Component({
  selector: 'app-buscar-cliente-dialog',
  templateUrl: './buscar-cliente-dialog.component.html',
  styleUrls: ['./buscar-cliente-dialog.component.scss']
})
export class BuscarClienteDialogComponent implements OnInit {

  value = '';
  arrCliente:Cliente[] = []; 

  constructor(
    public apiService:ApiService
  ) { }

  ngOnInit() {
    this.apiService.getListaCliente().subscribe((d)=>{
      this.arrCliente = d;
    });




  }

}
