import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { Subscription } from 'rxjs';
import { GlobalService } from '../services/global.service';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

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

  constructor(private global: GlobalService, private router: Router, private userService: UserService,
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
  }
  getUser(id){
    console.log('id', id)
    this.userService.getUserById(id).subscribe(
      response => {
        this.user = response;
        console.log('response', response);
        console.log('user', this.user);
      },
      error => {
        console.log('error', error)
        this.snackBar.open('Error getting User', '', {duration: 3000});
      }
    );
  }
}
