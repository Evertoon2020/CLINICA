import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApiViacepPage } from './api-viacep.page';

const routes: Routes = [
  {
    path: '',
    component: ApiViacepPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApiViacepPageRoutingModule {}
