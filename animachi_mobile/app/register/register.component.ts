import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { RegisterInput } from '~/models/registerInput';
import { RadDataFormComponent } from 'nativescript-pro-ui/dataform/angular';

@Component({
  selector: 'app-register',
  moduleId: module.id,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService]
})
export class RegisterComponent implements OnInit {
  input: RegisterInput;
  loading: boolean;
  @ViewChild('myRegisterDataForm') myRegisterDataFormComp: RadDataFormComponent;

  constructor(private userService: UserService, private router: Router) {}
  
  ngOnInit() {
    this.loading = false;
    this.input = new RegisterInput("", "", "");
  }
  
  onRegister() {
    if(!this.myRegisterDataFormComp.dataForm.hasValidationErrors()) {
      this.loading = true;
      const userData = { username: this.input.username, password: this.input.password, email: this.input.email }
      this.userService.registerUser(userData).subscribe(
        (data) => {
          this.loading = false;
          console.log('data', data);
          this.router.navigate(['/login']);
        },
        (error) => {
          this.loading = false;
          console.log('error', error);
        }
      );
    }
  }
}
