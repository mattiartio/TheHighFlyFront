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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BookingComponent
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
