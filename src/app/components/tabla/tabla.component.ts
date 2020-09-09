import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ProductosService } from 'src/app/services/productos.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  data = [];
  valor = '';
  add = [];
  data2 = [];
  constructor( private http: HttpClient, 
        private servicio: ProductosService, 
        private router: Router) {
    this.add = servicio.getDato();
    http.get('http://pruebas.mark-43.net/mark43-service/v1/productos-examen')
    .subscribe( (data: any) => {
      this.data = data;
      console.log(data);
    })
  }

  buscar(buscarTexto: string) {
    this.valor =  buscarTexto;
  }
  agregar(dato: any[], cantidad: number, cantidadActual: number, index: number, precio: number) {
    const resultado = cantidadActual - cantidad ;
    let nuevoIndex = 0;
    const subtotal = cantidad * precio;
    console.log(subtotal);
    var datoCompra = {
      data: dato,
      description: `${Date()}`,
      cantidad: cantidad,
      subtotal: subtotal
    };
    this.data2.push(datoCompra);
    if( resultado < 0 ){
      alert("No existen tantos productos en inventario");
    }else{
      this.data[index].cantidad = resultado;
      this.add.push(dato);
      nuevoIndex = index + 1;
      this.servicio.setCompra(nuevoIndex, dato);
      this.servicio.setSubtotal(subtotal);
      this.servicio.setDatos(this.add, cantidad, subtotal);
      this.servicio.setVentas(datoCompra);

    }
  }

  ngOnInit(): void {
  }
  ventas() {
    this.router.navigate(['ventas']);
  }

}
