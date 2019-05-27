import {Component, OnInit} from '@angular/core';
import {getTemplateUrl} from 'codelyzer/util/ngQuery';
import {exportNgVar} from '@angular/platform-browser/src/dom/util';
import {Router} from '@angular/router';
import {User} from '../_model/user';
import {AuthService} from '../_services/auth-service.service';

@Component({
      selector : 'app-login',
      templateUrl : './login.component.html',
      styleUrls : ['./login.component.css']
})

export class LoginComponent implements OnInit {

  user: User;

  constructor(private router: Router, private authService: AuthService) {
    this.user = new User();
  }
  ngOnInit() {
  }
  login() {
    this.authService.login(this.user.username, this.user.password).subscribe(
      response => {
        const auth = response;
        if (auth) {
          console.log('user authorized');
          this.router.navigate(['bookings']);
        } else {
          console.log('user not authorized');
        }
      }
    );
  }

}
