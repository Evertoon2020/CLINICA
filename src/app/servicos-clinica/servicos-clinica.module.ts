import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServicosClinicaPageRoutingModule } from './servicos-clinica-routing.module';

import { ServicosClinicaPage } from './servicos-clinica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServicosClinicaPageRoutingModule
  ],
  declarations: [ServicosClinicaPage]
})
export class ServicosClinicaPageModule {}
