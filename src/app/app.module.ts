import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {LoginComponent} from './login/login.component';
import {UserService} from './_services/user.service';
import {AuthService} from './_services/auth-service.service';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModuleModule} from './routing-module/routing-module.module';
import { BookingComponent } from './booking/booking.component';
import {BookingService} from './_services/booking.service';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {BookingDetailComponent} from './booking-detail/booking-detail.component';
import {NavComponent} from './nav/nav.component';
import {NewBookingComponent} from './new-booking/new-booking.component';
import { AvailableTransportComponent } from './available-transport/available-transport.component';
import { ModifyBookingComponent } from './modify-booking/modify-booking.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BookingComponent,
    NewBookingComponent,
    NavComponent,
    BookingDetailComponent,
    AvailableTransportComponent,
    ModifyBookingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModuleModule,
    HttpClientModule,
    AngularFontAwesomeModule
  ],
  providers: [UserService, AuthService, BookingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
