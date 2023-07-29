import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';

import { CurrencyConvertorPipe } from './pipes/currency-convertor.pipe';
import { AgGridModule } from 'ag-grid-angular';
import { DataGridComponent } from './data-grid/data-grid.component';
import { TextColorDirective } from './directives/text-color.directive';
import { FallbackComponent } from './fallback/fallback/fallback.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { AdminModule } from './admin/admin.module';
import { UserDetailsFormComponent } from './user/user-details-form/user-details-form.component';


@NgModule({
  declarations: [
    AppComponent,
    CurrencyConvertorPipe,
    DataGridComponent,
    TextColorDirective,
    UserDetailsFormComponent,
    FallbackComponent,
    UserDetailsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    AgGridModule,
    //AdminModule have lazy loaded
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
