import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DatatableComponent } from './datatable/datatable.component';
import { ReserveComponent } from './reserve/reserve.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard', component: HomeComponent,
    children: [
      { path: '', redirectTo: 'book-a-meeting', pathMatch: 'full' },
      { path: 'book-a-meeting', component: DatatableComponent },
      { path: 'search-rooms', component: DatatableComponent },
      { path: 'create-reservation', component: ReserveComponent }
    ]
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }