import { Component } from '@angular/core';
import { Ciudad } from '../app.component';
import { ServicioService } from '../servicio.service';
@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent {
  stock:any;
  total:any;
model:any={};
importe:any=0;
  cantidad:number=0;
seleccionado:any;
mayorQueelRestante:boolean;
  lista:Ciudad[]=[
{id:1, nombre:"mantequilla", precio:50, stock:10, cantidad:0 , importe:0},
{id:2,nombre:"mayonesa",precio:10, stock:5,cantidad:0 , importe:0},
{id:3,nombre:"salsa de tomate",precio:20, stock:6,cantidad:0 , importe:0}
];
  inventario: number;
  
  
  constructor(private service:ServicioService) { 
this.mayorQueelRestante=false;
this.inventario=0;


  }

  ngOnInit() {
    /*this.lista.push(new Ciudad("1","santander","ciudad al lado del mar"))
    this.lista.push(new Ciudad("2","donosti","ciudad gastronomica"))
    this.lista.push(new Ciudad("3","bilbao","ciudad cultural"))*/

   




  }

cantidadMayor(){
 
  

  if(this.seleccionado.stock > this.cantidad  )
 {this.mayorQueelRestante=false;
  this.cantidad++
this.importe = this.cantidad * this.seleccionado.precio;
 

return;}

else{
  this.mayorQueelRestante=true;
  
  this.cantidad=0;
  this.seleccionado.stock
}

  
  
}

cantidadMenor(){
  if(this.cantidad > 0)
 { this.cantidad--;
  this.importe= this.cantidad * this.seleccionado.precio;
 
}}

enviarSeleccionado(stock:any){
this.seleccionado.stock=stock-this.cantidad; // otra vez resuelto 
  const SELECCIONADOS={
id:this.seleccionado.id,
nombre:this.seleccionado.nombre,
precio:this.seleccionado.precio,
stock:this.seleccionado.stock,
cantidad:this.cantidad,
importe:this.importe,
inventario:this.inventario


}

this.service.importe=this.importe;

this.service.agregarGasto(SELECCIONADOS);

this.cantidad=0;
}

enviarAlista(){
this.lista.push(this.model);
}






}

