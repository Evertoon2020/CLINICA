import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PortalPacientePageRoutingModule } from './portal-paciente-routing.module';

import { PortalPacientePage } from './portal-paciente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PortalPacientePageRoutingModule
  ],
  declarations: [PortalPacientePage]
})
export class PortalPacientePageModule {}
