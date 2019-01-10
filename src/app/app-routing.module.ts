import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListFinancesComponent } from './drawer-content/list-finances/list-finances.component';
import { CreateFinanceComponent } from './drawer-content/create-finance/create-finance.component';
import { EstatisticasComponent } from './drawer-content/estatisticas/estatisticas.component';


import { LoginComponent } from './login/login.component';
import { AuthGuardComponent } from './auth-guard/auth-guard.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent, canActivate: [AuthGuardComponent] },
  { path: 'listarFinanças', component: ListFinancesComponent, canActivate: [AuthGuardComponent] },
  { path: 'adicionarFinança', component: CreateFinanceComponent, canActivate: [AuthGuardComponent] },
  { path: 'estatísticas', component: EstatisticasComponent, canActivate: [AuthGuardComponent] }
];

@NgModule({
  imports: [RouterModule.forRoot(
    appRoutes
  )],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
