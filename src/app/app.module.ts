import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AppRoutingModule } from './app-routing.module';

import { ReactiveFormsModule } from '@angular/forms';

import { environment } from '../environments/environment';

import { FlexLayoutModule } from '@angular/flex-layout';

import {
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatSnackBarModule,
  MatSelectModule,
  MatGridListModule,
  MatDividerModule,
  MatMenuModule

} from '@angular/material';

import { TableModule } from 'primeng/table';
import { ChartModule } from 'primeng/chart';
import {CardModule} from 'primeng/card';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PanelLeftComponent } from './drawer-content/drawer-content.component';
import { ListFinancesComponent } from './drawer-content/list-finances/list-finances.component';
import { CreateFinanceComponent } from './drawer-content/create-finance/create-finance.component';
import { EstatisticasComponent } from './drawer-content/estatisticas/estatisticas.component';
import { GraficoPorMesComponent } from './drawer-content/estatisticas/grafico-por-mes/grafico-por-mes.component';
import { GraficoPorCategoriaComponent } from './drawer-content/estatisticas/grafico-por-categoria/grafico-por-categoria.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './drawer-content/dashboard/dashboard.component';
import { CardInformationComponent } from './drawer-content/dashboard/card-information/card-information.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PanelLeftComponent,
    ListFinancesComponent,
    CreateFinanceComponent,
    EstatisticasComponent,
    GraficoPorMesComponent,
    GraficoPorCategoriaComponent,
    LoginComponent,
    DashboardComponent,
    CardInformationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatSelectModule,
    MatGridListModule,
    MatDividerModule,
    MatMenuModule,
    TableModule,
    ChartModule,
    CardModule
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
