import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  dato = [];
  cantidad = 0;
  subtotal = 0;
  nuevoIndex = 0;
  dato2 = {};
  subtotl = 0;
  datoCompra = {};
  constructor( private http: HttpClient) { }

  setDatos(dato: any[],cantidad: number, subtotal: number) {
    this.cantidad = cantidad;
    this.subtotal = subtotal;
    this.dato.push(dato);
    console.log(this.dato);
  }
  getDato() {
    console.log(this.dato);
    return this.dato
  }
  getCantidad() {
    return this.cantidad;
  }
  getSubtotal() {
    console.log('subtotl', this.subtotal);
    return this.subtotal;
  }
  setCompra(nuevoIndex: number, dato2: {}){
    this.nuevoIndex = nuevoIndex;
    this.dato2 = dato2;
    console.log(this.nuevoIndex);
    console.log(this.dato2);
  }
  getCompra() {
    
    
    this.http.put(`http://localhost:3000/usuarios/${this.nuevoIndex}`,this.dato2)
      .subscribe( dato => {
        console.log(dato);
          
      });
  }

  setSubtotal(subtotal: number){
    this.subtotl = this.subtotl + subtotal;
    console.log(this.subtotl);
  }
  getSubtota() {
    return this.subtotl;
  }
  setVentas( datoCompra: {}) {
    this.datoCompra = datoCompra;
    console.log('consulta', this.datoCompra);
  }
  getVentas() {
    console.log(this.datoCompra);
    return this.datoCompra;
    
  }
}
