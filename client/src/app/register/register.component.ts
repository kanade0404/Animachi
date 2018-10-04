import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService]
})
export class RegisterComponent implements OnInit {
  userRegister: FormGroup;
  loading: boolean;
  constructor(private fb: FormBuilder, private router: Router,
    private userService: UserService, private global: GlobalService) {
    this.userRegister = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
     });
  }

  ngOnInit() {
  }
  onRegister() {
    this.loading = true;
    this.userService.registerUser(this.userRegister.value).subscribe(
      response => {
        this.loading = false;
        console.log('response', response);
        this.router.navigate(['/login']);
      },
      error => {
        this.loading = false;
        console.log('error', error);
      }
    ),
    console.log(this.userRegister.value);
  }
}
