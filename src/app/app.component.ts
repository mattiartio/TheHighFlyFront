import {Component, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'HighFly';
  @Output('notify-login') notifyLogin = new EventEmitter();
  showNavbar: boolean;

  constructor(private authService: AuthService) {
    this.showNavbar = this.authService.isLoggedUser();
  }
  ngOnInit(): void {
  }
  onActivate() {
    this.showNavbar = this.authService.isLoggedUser();
  }
}
