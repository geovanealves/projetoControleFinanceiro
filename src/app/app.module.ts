import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AppRoutingModule } from './app-routing.module';

import { ReactiveFormsModule } from '@angular/forms';

import { environment } from '../environments/environment';

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
  MatGridListModule

} from '@angular/material';

import { TableModule } from 'primeng/table';
import {ChartModule} from 'primeng/chart';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PanelLeftComponent } from './drawer-content/drawer-content.component';
import { ListFinancesComponent } from './drawer-content/list-finances/list-finances.component';
import { CreateFinanceComponent } from './drawer-content/create-finance/create-finance.component';
import { EstatisticasComponent } from './drawer-content/estatisticas/estatisticas.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PanelLeftComponent,
    ListFinancesComponent,
    CreateFinanceComponent,
    EstatisticasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    ReactiveFormsModule,
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
    TableModule,
    ChartModule
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
