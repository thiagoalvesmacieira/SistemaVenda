import { Component, AfterViewInit } from '@angular/core';
import { ThemeService } from './services/theme.service';
import { 
  Router, NavigationStart, NavigationCancel, NavigationEnd 
} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title:string = 'SistemaVenda';

  loading:boolean = true;

  constructor(
    private router: Router,
    public themeService:ThemeService
  ){
      
  }

  ngAfterViewInit() {
    this.router.events.subscribe((event) => {
      if(event instanceof NavigationStart) {
          this.loading = true;
      }
      else if (event instanceof NavigationEnd || event instanceof NavigationCancel) {
          this.loading = false;
      }
    });
  }

}
