import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    IonicModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
