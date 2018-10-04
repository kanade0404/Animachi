import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { Subscription } from 'rxjs';
import { GlobalService } from '../services/global.service';
import { Router } from '@angular/router';
import { AnimeService } from '../services/anime.service';
import { Anime } from '../models/anime';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { RatingService } from '../services/rating.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [AnimeService, RatingService]
})
export class HomeComponent implements OnInit {

  account: User = new User();
  userSub: Subscription;
  animes;
  selectedAnime: Anime;
  animeInput: FormGroup;
  isAddEditMode: boolean;
  isEdit: boolean;
  loading: boolean;
  my_rating: number;

  constructor(private fb: FormBuilder, private global: GlobalService, private router: Router,
     private animeService: AnimeService, public snackBar: MatSnackBar, private ratingService: RatingService) { }

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
    this.isAddEditMode = false;
    this.isEdit = false;
    this.loading = false;
    this.animeInput = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    });
    this.my_rating = 3;
  }
  getAnimes() {
    this.animeService.getAnimes().subscribe(
      response => {
        this.animes = response;
      },
      error => {
        this.snackBar.open('Error getting Animes', '', {duration: 3000});
      }
    );
  }
  editAnimeClicked() {
    this.isEdit = true;
    this.isAddEditMode = true;
    this.animeInput = this.fb.group({
      title: [this.selectedAnime.title, Validators.required],
      description: [this.selectedAnime.description, Validators.required]
    });
  }
  addAnimeClicked() {
    this.isEdit = false;
    this.isAddEditMode = true;
    this.selectedAnime = null;
    this.animeInput.reset();
  }
  submitAnime() {
    if (this.isEdit) {
      this.isAddEditMode = true;
      this.animeService.editAnime(this.animeInput.value, this.selectedAnime.id).subscribe(
        response => {
          const animeIndex = this.animes.map(function(e) { return e.id; }).indexOf(this.selectedAnime.id);
          if (animeIndex >= 0) {
            this.animes[animeIndex] = response;
            this.selectedAnime = response;
          }
        this.animeInput.reset();
        this.isAddEditMode = false;
      },
      error => {
        this.snackBar.open('Error edit Animes', '', {duration: 3000});
      });
    } else {
      this.isAddEditMode = true;
      this.animeService.addAnime(this.animeInput.value).subscribe(
        response => {
        this.animes.push(response);
        this.animeInput.reset();
        this.isAddEditMode = false;
      },
      error => {
        this.snackBar.open('Error adding Animes', '', {duration: 3000});
      });
    }
  }
  deleteAnimeClicked() {
    this.animeService.deleteAnime(this.selectedAnime.id).subscribe(
      response => {
        const animeIndex = this.animes.map(function(e) { return e.id; }).indexOf(this.selectedAnime.id);
          if (animeIndex >= 0) {
            this.animes.splice(animeIndex, 1);
            this.selectedAnime = null;
          }
        this.isAddEditMode = false;
      },
      error => {
        this.snackBar.open('Error deleting Animes', '', {duration: 3000});
      }
    );
  }
  animeClicked(anime: Anime) {
    this.selectedAnime = anime;
    this.isAddEditMode = false;
  }
  newRate(my_rating) {
    this.ratingService.addRating(this.account.id, this.selectedAnime.id, my_rating).subscribe(
      data => {
        const animeIndex = this.animes.map(function(e) { return e.id; }).indexOf(this.selectedAnime.id);
        if (animeIndex >= 0) {
          this.animes[animeIndex] = data['result'];
        }
        this.selectedAnime = data['result'];
      },
      error => this.snackBar.open('Error. Please Try Again.', '', {duration: 3000 })
    );
  }
  logoutClicked() {
    this.global.me = new User();
    localStorage.removeItem('token');
    localStorage.removeItem('account');
    this.router.navigate(['/login']);
  }

}
