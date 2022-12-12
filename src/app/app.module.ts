import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.componet'
import { FooterComponent } from './footer/footer.componet';
import { DirectivaComponent } from './directiva/directiva.component';
import { HomeComponent } from './home/home.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ClienteService } from './clientes/cliente.service';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {path: '', redirectTo: '/home' , pathMatch: 'full'},
  {path:  'clientes' , component: ClientesComponent},
  {path:  'home' , component: HomeComponent},

 ];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DirectivaComponent,
    HomeComponent,
    ClientesComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
