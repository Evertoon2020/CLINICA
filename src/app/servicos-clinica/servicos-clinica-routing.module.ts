import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServicosClinicaPage } from './servicos-clinica.page';

const routes: Routes = [
  {
    path: '',
    component: ServicosClinicaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicosClinicaPageRoutingModule {}
