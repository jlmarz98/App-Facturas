import { Component } from '@angular/core';
import { ServicioService } from './servicio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App-Factura';
nombre:string="";
precio:number=0;
stock:number=0;
cantidad:number=0;
importe:number=0;
id:number=0;
total:number=0;
producto=[
{nombre:"Pan", precio:10},
{nombre:"agua", precio:15}

]

constructor(private servicios:ServicioService){

}
agregar(){
 const PRODUCTO={
nombre:this.nombre,
precio:this.precio

 } 

this.servicios.agregarGasto(PRODUCTO);

}
}

export class Ciudad {
[x: string]: any;
cantidad: any;
  importe!: any;
 

  constructor( public id:number, public nombre?:string, public precio?:number, public stock?:number) {


  }
}