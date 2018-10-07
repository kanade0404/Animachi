import { Component, OnInit, ViewChild } from '@angular/core';
import { AnimeInput } from '~/models/animeInput';
import { RadDataFormComponent } from 'nativescript-pro-ui/dataform/angular/dataform-directives';
import { AnimeService } from '~/services/anime.service';
import { Anime } from '~/models/anime';
import { RouterExtensions } from 'nativescript-angular/router';
import { SnackBar } from 'nativescript-snackbar';
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
  loading: boolean;
  is_edit: boolean;
  id: number;
  @ViewChild('myAnimeForm') myAnimeFormComp: RadDataFormComponent;
  constructor(private animeService: AnimeService, private router: RouterExtensions, private route: ActivatedRoute) { 

   }

  ngOnInit() { 
    this.id = +this.route.snapshot.params["id"];
    if (this.id >= 0) {
      this.is_edit = true;
      this.animeService.getAnime(this.id).subscribe(
        anime => {
          this.input = new AnimeInput(anime['title'], anime['description']);
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
   saveAnime() {
    if(!this.myAnimeFormComp.dataForm.hasValidationErrors()){
      this.loading = true;
      const animeData = { title: this.input.title, description: this.input.description }
      if(this.is_edit) {
        this.animeService.editAnime(animeData, this.id).subscribe(
          (response) => {
            this.router.navigate(['/item', this.id], { clearHistory: true });
          },
          (error) => {
            this.loading = false;
            new SnackBar().simple('Incorrect Credentials. Please try again.');
          }
        );
      } else {
        this.animeService.addAnime(animeData).subscribe(
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
      (new SnackBar()).simple('All Fields Required!');
    }
   }

}
