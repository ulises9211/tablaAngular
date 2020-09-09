import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {
  data: any[] = [];
  data1: any[] = [];
  constructor(private servicio: ProductosService) {
    
      this.data1.push(servicio.getVentas());
      this.data = this.data1;
    
   }

  ngOnInit(): void {
  }

}
