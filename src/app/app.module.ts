import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VentaComponent } from './components/venta/venta.component';
import { TablaComponent } from './components/tabla/tabla.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { BuscadorPipe } from './pipes/buscador.pipe';
import { FiltrarPipe } from './pipes/filtrar.pipe';
import { SearchComponent } from './components/search/search.component';
import { VentasComponent } from './components/ventas/ventas.component';

@NgModule({
  declarations: [
    AppComponent,
    VentaComponent,
    TablaComponent,
    NavbarComponent,
    BuscadorPipe,
    FiltrarPipe,
    SearchComponent,
    VentasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
