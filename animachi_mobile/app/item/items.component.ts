import { Component, OnInit } from "@angular/core";
import { AnimeService } from "../services/anime.service";
import { User } from '../models/user';
import * as ApplicationSettings from 'tns-core-modules/application-settings';
import { GlobalService } from "../services/global.service";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
    providers: [AnimeService]
})
export class ItemsComponent implements OnInit {
    items;

    constructor(private animeService: AnimeService, private global: GlobalService,
        private router: RouterExtensions) { }

    ngOnInit(): void {
        this.animeService.getAnimes().subscribe(
            animes => {
                this.items = animes;
            },
            error => {
                console.log('error', error);
            }
        );
    }
    logoutClicked(){
        this.global.me = new User();
        ApplicationSettings.remove('token');
        ApplicationSettings.remove('account');
        this.router.navigate(['/login'], { clearHistory: true });
    }
    addClicked(){
        this.router.navigate(['/input', -1]);
    }

}