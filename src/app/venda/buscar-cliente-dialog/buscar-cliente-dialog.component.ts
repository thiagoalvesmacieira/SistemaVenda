import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buscar-cliente-dialog',
  templateUrl: './buscar-cliente-dialog.component.html',
  styleUrls: ['./buscar-cliente-dialog.component.scss']
})
export class BuscarClienteDialogComponent implements OnInit {

  value = '';
  arrCliente:any[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40];

  constructor() { }

  ngOnInit() {
  }

}
