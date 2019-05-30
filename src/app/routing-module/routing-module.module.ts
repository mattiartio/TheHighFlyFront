import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from '../login/login.component';
import {BookingComponent} from '../booking/booking.component';
import {NewBookingComponent} from '../new-booking/new-booking.component';
import {BookingDetailComponent} from '../booking-detail/booking-detail.component';

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
  },
  {
   path: 'bookings/:id/detail',
    component: BookingDetailComponent
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
