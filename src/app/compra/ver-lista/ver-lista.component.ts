import { Component, OnInit, HostListener } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-ver-lista',
  templateUrl: './ver-lista.component.html',
  styleUrls: ['./ver-lista.component.scss']
})
export class VerListaComponent implements OnInit {

  arrLista:any[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
  screenHeight:any = 0;
  screenWidth:any = 0;

  constructor(
    public themeService:ThemeService
  ) { }

  ngOnInit() {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
  }
  @HostListener('window:resize', ['$event'])
  onResize(event?) {
     this.screenHeight = window.innerHeight;
     this.screenWidth = window.innerWidth;
  }
  toggleDarkTheme(checked: boolean) {
    this.themeService.setDarkTheme(checked);
  }

}
