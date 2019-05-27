import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from '../login/login.component';
import {BookingComponent} from '../booking/booking.component';

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
  }
  ];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { enableTracing: true })
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModuleModule { }
