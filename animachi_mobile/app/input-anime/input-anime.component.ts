import { Component, OnInit, ViewChild } from '@angular/core';
import { AnimeInput } from '../models/animeInput';
import { RadDataFormComponent } from 'nativescript-pro-ui/dataform/angular';
import { SnackBar } from 'nativescript-snackbar';
import { AnimeService } from '../services/anime.service';
import { RouterExtensions } from 'nativescript-angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'app-input-anime',
    templateUrl: './input-anime.component.html',
    styleUrls: ['./input-anime.component.scss'],
    providers: [AnimeService]
  })

  export class InputAnimeComponent implements OnInit {

    input: AnimeInput;
    loading;
    is_edit: boolean;
    id: number;
    @ViewChild('myMovieForm') myMovieFormComp: RadDataFormComponent;
  
  
    constructor(private animeService:AnimeService, private router: RouterExtensions,
      private route: ActivatedRoute) { }
  
    ngOnInit() {
      this.id = +this.route.snapshot.params["id"];
      if (this.id >= 0) {
        this.is_edit = true;
        this.animeService.getAnime(this.id).subscribe(
          movie => {
            this.input = new AnimeInput(movie['title'], movie['description']);
          },
          error => {
              console.log('error', error);
          }
        );
      } else {
        this.is_edit = false;
        this.input = new AnimeInput('', '');
      }
      this.loading = false;
      
     }
  
    saveAnime(){
      if(!this.myMovieFormComp.dataForm.hasValidationErrors()) {
        this.loading = true;
        const movieData = {title: this.input.title, description: this.input.description}
        if (this.is_edit) {
          this.animeService.editAnime(movieData, this.id)
            .subscribe(
                (response) => {
                  this.router.navigate(["/item", this.id], { clearHistory: true });
                },
                (error) => {
                    this.loading = false;
                    new SnackBar().simple("Incorrect Credentials. Please try again.");
                }
            );
          
        } else {
          this.animeService.addAnime(movieData)
            .subscribe(
                (response) => {
                  this.router.navigate(["/items"], { clearHistory: true });
                },
                (error) => {
                    this.loading = false;
                    new SnackBar().simple("Incorrect Credentials. Please try again.");
                }
            );
        }
      } else {
        (new SnackBar()).simple("All Fields Required!");
      }
    }
  
  }