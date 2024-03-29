import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private _darkTheme = new Subject<boolean>();
  public isDarkTheme = this._darkTheme.asObservable();

  constructor() { }


  public setDarkTheme(isDarkTheme: boolean): void {
    this._darkTheme.next(isDarkTheme);
  }


  
}
