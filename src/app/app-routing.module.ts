import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TablaComponent } from './components/tabla/tabla.component';
import { VentaComponent } from './components/venta/venta.component';
import { VentasComponent } from './components/ventas/ventas.component';

const routes: Routes = [
  { path: 'tabla', component: TablaComponent },
  { path: 'venta', component: VentaComponent },
  { path: 'ventas', component: VentasComponent },
  { path: '', redirectTo: 'tabla', pathMatch: 'full'  },

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
