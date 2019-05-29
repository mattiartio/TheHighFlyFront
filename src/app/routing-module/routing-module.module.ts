import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from '../login/login.component';
import {BookingComponent} from '../booking/booking.component';
import {NewBookingComponent} from "../new-booking/new-booking.component";

const routes: Routes = [
    {
      path: '',
      pathMatch: 'full',
      redirectTo: 'login',
    },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'bookings',
    component: BookingComponent,
    runGuardsAndResolvers: 'always'
  },
  {
    path: 'newbookings',
    component: NewBookingComponent,
  }
  ];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { enableTracing: true, onSameUrlNavigation: 'reload' })
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModuleModule { }
