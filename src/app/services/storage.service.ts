import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  public getData(key:string):Observable<any[]>{
    return Observable.create(observable => {
      observable.next(JSON.parse(localStorage.getItem(key)));
      observable.complete();
    });
  }
  public setData(key:string, data:any){
    localStorage.setItem(key, JSON.stringify(data))
  }
  public removeData(key:string){
    localStorage.removeItem(key);
  }
  public clear(){
    localStorage.clear();
  }
}
