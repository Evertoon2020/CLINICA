import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PortalPacientePage } from './portal-paciente.page';

const routes: Routes = [
  {
    path: '',
    component: PortalPacientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PortalPacientePageRoutingModule {}
