import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-adicionar-produto-dialog',
  templateUrl: './adicionar-produto-dialog.component.html',
  styleUrls: ['./adicionar-produto-dialog.component.scss']
})
export class AdicionarProdutoDialogComponent implements OnInit {

  value:any = "";
  arrProduto:any[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]; 

  constructor(
    public apiService:ApiService
  ) { }

  ngOnInit() {
  }

}
