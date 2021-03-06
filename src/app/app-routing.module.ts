import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListFinancesComponent } from './drawer-content/list-finances/list-finances.component';
import { CreateFinanceComponent } from './drawer-content/create-finance/create-finance.component';
import { EstatisticasComponent } from './drawer-content/estatisticas/estatisticas.component';
import { DashboardComponent } from './drawer-content/dashboard/dashboard.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'listarFinanças', pathMatch: 'full'},
  { path: 'listarFinanças', component: ListFinancesComponent},
  { path: 'editarFinanca/:id', component: CreateFinanceComponent},
  { path: 'adicionarFinança', component: CreateFinanceComponent},
  { path: 'estatísticas', component: EstatisticasComponent},
  { path: 'dashboard', component: DashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(
    appRoutes
  )],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
