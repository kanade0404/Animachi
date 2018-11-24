import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { Subscription } from 'rxjs';
import { GlobalService } from '../services/global.service';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
  providers: [UserService]
})
export class UserDetailComponent implements OnInit {
  account: User = new User();
  userSub: Subscription;
  user: User = new User();
  userInput: FormGroup;
  selectedUser;
  isEdit: boolean;

  constructor(private fb: FormBuilder, private global: GlobalService, private router: Router, private userService: UserService,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.userSub = this.global.user.subscribe(
      me => {
        this.account = me;
      }
    );
    if(localStorage.getItem('token') && localStorage.getItem('account')){
      this.global.me = JSON.parse(localStorage.getItem('account'));
      this.getUser(this.account.id);
      this.global.isLoggedIn = true;
    }else{
      this.router.navigate(['/login']);
    }
    this.userInput = this.fb.group({
      username: ['', Validators.required],
      email: [ '', Validators.compose([Validators.required, Validators.email])]
    });
    this.isEdit = false;
  }
  getUser(id){
    this.userService.getUserById(id).subscribe(
      response => {
        this.user = response;
        this.selectedUser = response;
      },
      error => {
        this.snackBar.open('Error getting User', '', {duration: 3000});
      }
    );
  }
  editUserClicked(){
    this.isEdit = true;
    this.userInput = this.fb.group({
      username: [this.selectedUser.username, Validators.required],
      email: [this.selectedUser.email, Validators.compose([Validators.required, Validators.email])]
    });
  }
  submitUser(){
    this.userService.editUser(this.userInput.value, this.account.id).subscribe(
      response => {
        this.user = response;
        this.userInput.reset();
        this.isEdit = false;
      },
      error => {
        this.snackBar.open('Error edit User', '', {duration: 3000});
      }
    )
  }
  closeEditFormClicked(){
    this.isEdit = false;
  }
}
