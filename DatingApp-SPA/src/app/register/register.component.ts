import { AlertifyService } from './../_services/alertify.service';
import { AuthService } from './../_services/auth.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
model: any = {};
@Output() cancelRegister = new EventEmitter();
  constructor(private auth: AuthService, private alertify: AlertifyService) { }

  ngOnInit() {
  }
  register() {
    this.auth.register(this.model).subscribe(()=>{
this.alertify.success('register success');
    }, error => {
      this.alertify.error('register success');
    });
  }
  cancel() {
    this.cancelRegister.emit(false);
  }

}
