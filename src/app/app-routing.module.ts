import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'clinica',
    loadChildren: () => import('./clinica/clinica.module').then( m => m.ClinicaPageModule)
  },
  {
    path: 'portal-paciente',
    loadChildren: () => import('./portal-paciente/portal-paciente.module').then( m => m.PortalPacientePageModule)
  },
  {
    path: 'agendamento',
    loadChildren: () => import('./agendamento/agendamento.module').then( m => m.AgendamentoPageModule)
  },
  {
    path: 'servicos-clinica',
    loadChildren: () => import('./servicos-clinica/servicos-clinica.module').then( m => m.ServicosClinicaPageModule)
  },
  {
    path: 'cadastro-paciente',
    loadChildren: () => import('./cadastro-paciente/cadastro-paciente.module').then( m => m.CadastroPacientePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
