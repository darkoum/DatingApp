import { AlertifyService } from './../_services/alertify.service';
import { AuthService } from './../_services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
 model: any = {};
  constructor(public authService: AuthService, private alertify: AlertifyService
    , private router: Router) { }

  ngOnInit() {
  }
login() {
  this.authService.login(this.model).subscribe(response => {
this.alertify.success('logged in success');
  }, error => {
this.alertify.error(error);
  },() => {
this.router.navigate(['/members']);
  });
}
loggedIn() {
  return this.authService.loggedIn();
}
logout() {
 localStorage.removeItem('token');
 this.alertify.message('logged out');
 this.router.navigate(['/home']);
}
}
