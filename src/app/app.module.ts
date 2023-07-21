import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { CardConquistaComponent } from './pages/home/card-conquista/card-conquista.component';
import { HeaderComponent } from './pages/home/header/header.component';
import { CardDevsComponent } from './pages/home/card-devs/card-devs.component';
import { MenuSanduicheComponent } from './components/menu/menu-sanduiche/menu-sanduiche.component';
import { ConquistaProjetoComponent } from './pages/conquista-projeto/conquista-projeto.component';
import { HrDivisaoComponent } from './components/hr-divisao/hr-divisao.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    CardConquistaComponent,
    HeaderComponent,
    CardDevsComponent,
    MenuSanduicheComponent,
    ConquistaProjetoComponent,
    HrDivisaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
