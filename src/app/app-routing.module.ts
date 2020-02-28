import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Pais1Component } from './pais1/pais1.component';
import { Pais2Component } from './pais2/pais2.component';
import { Pais3Component } from './pais3/pais3.component';
import { BotonesComponent } from './botones/botones.component';
import { FormularioComponent } from './formulario/formulario.component';
import { FormselecComponent } from './formselec/formselec.component';
import { Formselec2Component } from './formselec2/formselec2.component';
import { Formselec3Component } from './formselec3/formselec3.component';
import { LogComponent } from './log/log.component';



const routes: Routes = [
  {
    path: '',
    component: Pais1Component
  },
  {
    path: 'pais1',
    component: Pais1Component
  },
  {
    path: 'formulario',
    component: FormularioComponent
  },
  {
    path: 'pais2',
    component: Pais2Component
  },
  {
    path: 'pais3',
    component: Pais3Component
  },
  {
    path: 'botones',
    component: BotonesComponent
  },
  {
    path: 'formselec',
    component: FormselecComponent
  },
  {
    path: 'formselec2',
    component: Formselec2Component
  },
  {
    path: 'formselec3',
    component: Formselec3Component
  },
  {
    path: 'log',
    component: LogComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
