import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { Subscription } from 'rxjs';
import { GlobalService } from '../services/global.service';
import { longStackSupport } from 'q';
import { Router } from '@angular/router';
import { AnimeService } from '../services/anime.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [AnimeService]
})
export class HomeComponent implements OnInit {

  account: User = new User();
  userSub: Subscription;

  constructor(private global: GlobalService, private router: Router,
     private animeService: AnimeService) { }

  ngOnInit() {
    this.userSub = this.global.user.subscribe(
      me => {
        this.account = me;
      }
    );
    if (localStorage.getItem('token') && localStorage.getItem('account')) {
      this.global.me = JSON.parse(localStorage.getItem('account'));
      this.getAnimes();
    } else {
      this.router.navigate(['/login']);
    }
  }
  getAnimes() {
    console.log('hey');
    this.animeService.getAnimes().subscribe(
      animes => {
        console.log('animes', animes);
      },
      error => {
        console.log('error', error);
      }
    );
  }

}
