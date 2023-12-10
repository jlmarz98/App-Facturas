import { Component } from '@angular/core';
import { ServicioService } from '../servicio.service';
import { Ciudad } from '../app.component';
@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent {
  [x: string]: any;
producto:any[]=[];
listpro:Ciudad[]=[];
nombre: any;
precio: any;
total: any;
inventario:any;
  eliminado: Ciudad[] = [];
  res: any;
  constructor(private servicio:ServicioService){



  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.servicio.getGASTO().subscribe(data=>{

this.listpro.push(data);

this.total= this.listpro.reduce((acc, importe)=>{
  return acc= acc + importe.importe;
},0);


//console.log(this.total);
 //this.producto.push(data);
console.log(data)
    })


  }



eliminar(i:any, importe:any){
this.total= this.total- importe; // facil muy facil y dure todo el dia hallando como restar el total
 

console.log(this.total)
this.listpro.splice(i, 1)
 
}




}




