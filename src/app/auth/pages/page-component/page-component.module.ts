import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageComponentPageRoutingModule } from './page-component-routing.module';

import { PageComponentPage } from './page-component.page';
import { Component1Component } from '../../components/component1/component1.component';
import { Component2Component } from '../../components/component2/component2.component';
import { Component3Component } from '../../components/component3/component3.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageComponentPageRoutingModule
  ],
  declarations: [PageComponentPage, Component1Component, Component2Component, Component3Component]
})
export class PageComponentPageModule {}
