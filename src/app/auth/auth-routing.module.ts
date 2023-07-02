import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'camera',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./pages/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'chucknorris',
    loadChildren: () => import('./services/api/api-chucknorris/chucknorris.module').then( m => m.ChucknorrisPageModule)
  },
  {
    path: 'api-viacep',
    loadChildren: () => import('./services/api/api-viacep/api-viacep.module').then( m => m.ApiViacepPageModule)
  },
  {
    path: 'random-user',
    loadChildren: () => import('./services/api/api-random-user/random-user.module').then( m => m.RandomUserPageModule)
  },
  {
    path: 'page-component',
    loadChildren: () => import('./pages/page-component/page-component.module').then( m => m.PageComponentPageModule)
  },
  {
    path: 'camera',
    loadChildren: () => import('./capacitores/camera/camera.module').then( m => m.CameraPageModule)
  },
  {
    path: 'local-notification',
    loadChildren: () => import('./capacitores/local-notification/local-notification.module').then( m => m.LocalNotificationPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
