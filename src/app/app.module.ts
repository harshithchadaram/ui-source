import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { DatatableParentComponent } from './datatable-parent/datatable-parent.component';
import { DatatableComponent } from './datatable/datatable.component';
import { SelectedDatatableComponent } from './selected-datatable/selected-datatable.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AgGridModule } from 'ag-grid-angular';
import { ButtonRendererComponent } from './button-renderer/button-renderer.component';
import { HomeComponent } from './home/home.component';
import { ReserveComponent } from './reserve/reserve.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    DatatableParentComponent,
    DatatableComponent,
    SelectedDatatableComponent,
    ButtonRendererComponent,
    HomeComponent,
    ReserveComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    BrowserAnimationsModule,
    MatTabsModule,
    NgxDatatableModule,
    AgGridModule.withComponents([ButtonRendererComponent]),
    AppRoutingModule,
  ], exports: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
