import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ConquistaProjetoComponent } from './pages/conquista-projeto/conquista-projeto.component';
import { GaleriaComponent } from './pages/galeria/galeria.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'galeria',
    component: GaleriaComponent
  },
  {
    path:'projeto/:id',
    component: ConquistaProjetoComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
