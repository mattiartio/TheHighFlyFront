import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AuthService} from '../_services/auth-service.service';
import {Router} from '@angular/router';
import {User} from "../_model/user";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  @Input('showNavbar') showNavbar: boolean;
  user: User;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.showNavbar = this.authService.isLoggedUser();
    this.user = this.authService.getLoggedUserFromSessionStorage();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['login', { outlets: { start: 'compose'}}]);
  }
  show() {
    this.showNavbar = true;
  }
}
