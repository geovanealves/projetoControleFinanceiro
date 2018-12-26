import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListFinancesComponent } from './drawer-content/list-finances/list-finances.component';

const appRoutes: Routes = [
  { path: '', component: ListFinancesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(
    appRoutes
  )],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
