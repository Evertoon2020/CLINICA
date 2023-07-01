import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApiViacepPageRoutingModule } from './api-viacep-routing.module';

import { ApiViacepPage } from './api-viacep.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApiViacepPageRoutingModule
  ],
  declarations: [ApiViacepPage]
})
export class ApiViacepPageModule {}
