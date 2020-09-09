import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.css']
})
export class VentaComponent implements OnInit {

  data = [];
  newData = [];
  subtotal = 0;
  total = 0;
  constructor(private servico: ProductosService) {
    this.data = servico.getDato();
    this.subtotal = servico.getSubtotal();
    this.total = this.servico.getSubtota();
    var d = {
      nombre: 1,
      id: 2  
    };
    
  }


  ngOnInit(): void {
  }
  limpiar() {
    this.data.splice(0,this.data.length);
    this.total = 0;
  }
  comprar() {
  this.servico.getCompra();
  this.limpiar();
  this.total = 0;
  }

}
