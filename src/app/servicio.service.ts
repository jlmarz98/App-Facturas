import { EventEmitter, Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Ciudad } from './app.component';


@Injectable({
  providedIn: 'root'
})
export class ServicioService {


  constructor() {
    
   }

 
importe:any;
productos$= new Subject<any>();





agregarGasto(pProducto:any){
  this.productos$.next(pProducto)
}

getGASTO():Observable<any>{
return this.productos$.asObservable()
}




}
