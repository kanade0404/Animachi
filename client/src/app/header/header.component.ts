import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../services/global.service';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { Subscription } from 'rxjs';

@Component({
  selector: 'header-root',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  account: User = new User();
  userSub: Subscription;
  constructor(private globalService: GlobalService, private router: Router) { }

  ngOnInit() {
    this.userSub = this.globalService.user.subscribe(
      me => {
        this.account = me;
      }
    );
  }
  clickedProfile(){
    this.router.navigate(['user/' + this.account.id]);
  }
}
