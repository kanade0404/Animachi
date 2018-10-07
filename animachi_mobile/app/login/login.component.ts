import { Component, OnInit, ViewChild } from '@angular/core';
import * as ApplicationSettings from 'application-settings';
import { UserService } from '../services/user.service';
import { GlobalService } from '../services/global.service';
import { LoginInput } from '~/models/loginInput';
import { RouterExtensions } from 'nativescript-angular/router';

import { SnackBar } from 'nativescript-snackbar';
import { RadDataFormComponent } from 'nativescript-pro-ui/dataform/angular';

@Component({
  selector: 'app-login',
  moduleId: module.id,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {
  
  loading: boolean;
  input:  LoginInput;
  @ViewChild('myLoginDataForm') myLoginDataFormComp: RadDataFormComponent;
  
  constructor(private userService: UserService, private router: RouterExtensions, private global: GlobalService) {
  }

  ngOnInit() {
    this.loading = false;
    if(ApplicationSettings.getString('token') && ApplicationSettings.getString('account')) {
      this.global.me = JSON.parse(ApplicationSettings.getString('account'));
      this.router.navigate(['/items'], { clearHistory: true });
    }
    this.input = new LoginInput("", "");
  }

  onLogin() {
    if(!this.myLoginDataFormComp.dataForm.hasValidationErrors()){
      this.loading = true;
      const userData = { username: this.input.username, password: this.input.password }
      this.userService.loginUser(userData).subscribe(
        (response) => {
          ApplicationSettings.setString('token', response['token']);
          this.global.me = response['user'];
          this.router.navigate(['/items'], { clearHistory: true });
        },
        (error) => {
          this.loading = false;
          (new SnackBar()).simple('Wrong Credentials!');
        }
      );
    } else {
      (new SnackBar()).simple('All Fields Required!');
    }
  }
}
