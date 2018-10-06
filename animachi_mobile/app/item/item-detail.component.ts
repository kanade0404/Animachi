import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AnimeService } from "../services/anime.service";
import { RouterExtensions } from "nativescript-angular/router";
import { TNSFontIconService } from "nativescript-ngx-fonticon";
import { RatingService } from "../services/rating.service";
import { User } from "../models/user";
import { Subscription } from "rxjs";
import { GlobalService } from "../services/global.service";

@Component({
    selector: "ns-details",
    moduleId: module.id,
    templateUrl: "./item-detail.component.html",
    providers: [AnimeService, RatingService]
})
export class ItemDetailComponent implements OnInit {
    item;
    yourRate: number;
    account: User;
    userSub: Subscription;

    constructor(
        private animeService: AnimeService,
        private route: ActivatedRoute,
        private router: RouterExtensions,
        private fonticon: TNSFontIconService,
        private ratingService: RatingService,
        private global: GlobalService
    ) { }

    ngOnInit(): void {
        this.userSub = this.global.user.subscribe(
            me => this.account = me
        );
        this.yourRate = 0;
        const id = +this.route.snapshot.params["id"];
        this.animeService.getAnime(id).subscribe(
            anime => {
                this.item = anime;
            },
            error => {
                console.log('error', error);
            }
        );
    }
    editClicked(){
        this.router.navigate(['/input', this.item.id]);
    }
    deleteClicked(){
        this.animeService.deleteAnime(this.item.id).subscribe(
            movie => {
                this.router.navigate(['/items'], { clearHistory: true });
            },
            error => {
                console.log('error', error);
            }
        );
    }
    rateClicked(rate){
        this.yourRate = rate;
        this.ratingService.addRating(this.account.id, this.item.id, this.yourRate).subscribe(
            data => {
                this.item = data['result'];
            },
            error => {
                console.log(error);
            }
            
        )
    }
}