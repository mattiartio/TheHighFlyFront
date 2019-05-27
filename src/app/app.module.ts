import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {LoginComponent} from './login/login.component';
import {UserService} from './_services/user.service';
import {AuthService} from './_services/auth-service.service';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModuleModule} from './routing-module/routing-module.module';
import { BookingComponentComponent } from './booking-component/booking-component.component';
import { BookingComponent } from './booking/booking.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BookingComponentComponent,
    BookingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModuleModule,
    HttpClientModule
  ],
  providers: [UserService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
