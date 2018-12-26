import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListFinancesComponent } from './drawer-content/list-finances/list-finances.component';
import { CreateFinanceComponent } from './drawer-content/create-finance/create-finance.component';

const appRoutes: Routes = [
  { path: '', component: ListFinancesComponent },
  { path: 'listarFinanças', component: ListFinancesComponent },
  { path: 'adicionarFinança', component: CreateFinanceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(
    appRoutes
  )],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
