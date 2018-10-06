"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var anime_service_1 = require("../services/anime.service");
var router_2 = require("nativescript-angular/router");
//import { TNSFontIconService } from "nativescript-ngx-fonticon";
var rating_service_1 = require("../services/rating.service");
var global_service_1 = require("../services/global.service");
var ItemDetailComponent = /** @class */ (function () {
    function ItemDetailComponent(animeService, route, router, 
    //private fonticon: TNSFontIconService,
    ratingService, global) {
        this.animeService = animeService;
        this.route = route;
        this.router = router;
        this.ratingService = ratingService;
        this.global = global;
    }
    ItemDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userSub = this.global.user.subscribe(function (me) { return _this.account = me; });
        this.yourRate = 0;
        var id = +this.route.snapshot.params["id"];
        this.animeService.getAnime(id).subscribe(function (anime) {
            _this.item = anime;
        }, function (error) {
            console.log('error', error);
        });
    };
    ItemDetailComponent.prototype.editClicked = function () {
        this.router.navigate(['/input', this.item.id]);
    };
    ItemDetailComponent.prototype.deleteClicked = function () {
        var _this = this;
        this.animeService.deleteAnime(this.item.id).subscribe(function (movie) {
            _this.router.navigate(['/items'], { clearHistory: true });
        }, function (error) {
            console.log('error', error);
        });
    };
    ItemDetailComponent.prototype.rateClicked = function (rate) {
        var _this = this;
        this.yourRate = rate;
        this.ratingService.addRating(this.account.id, this.item.id, this.yourRate).subscribe(function (data) {
            _this.item = data['result'];
        }, function (error) {
            console.log(error);
        });
    };
    ItemDetailComponent = __decorate([
        core_1.Component({
            selector: "ns-details",
            moduleId: module.id,
            templateUrl: "./item-detail.component.html",
            providers: [anime_service_1.AnimeService, rating_service_1.RatingService]
        }),
        __metadata("design:paramtypes", [anime_service_1.AnimeService,
            router_1.ActivatedRoute,
            router_2.RouterExtensions,
            rating_service_1.RatingService,
            global_service_1.GlobalService])
    ], ItemDetailComponent);
    return ItemDetailComponent;
}());
exports.ItemDetailComponent = ItemDetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbS1kZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDBDQUFpRDtBQUNqRCwyREFBeUQ7QUFDekQsc0RBQStEO0FBQy9ELGlFQUFpRTtBQUNqRSw2REFBMkQ7QUFHM0QsNkRBQTJEO0FBUTNEO0lBTUksNkJBQ1ksWUFBMEIsRUFDMUIsS0FBcUIsRUFDckIsTUFBd0I7SUFDaEMsdUNBQXVDO0lBQy9CLGFBQTRCLEVBQzVCLE1BQXFCO1FBTHJCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBRXhCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLFdBQU0sR0FBTixNQUFNLENBQWU7SUFDN0IsQ0FBQztJQUVMLHNDQUFRLEdBQVI7UUFBQSxpQkFjQztRQWJHLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUNyQyxVQUFBLEVBQUUsSUFBSSxPQUFBLEtBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxFQUFqQixDQUFpQixDQUMxQixDQUFDO1FBQ0YsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFDbEIsSUFBTSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUNwQyxVQUFBLEtBQUs7WUFDRCxLQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztRQUN0QixDQUFDLEVBQ0QsVUFBQSxLQUFLO1lBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDaEMsQ0FBQyxDQUNKLENBQUM7SUFDTixDQUFDO0lBQ0QseUNBQVcsR0FBWDtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBQ0QsMkNBQWEsR0FBYjtRQUFBLGlCQVNDO1FBUkcsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQ2pELFVBQUEsS0FBSztZQUNELEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUM3RCxDQUFDLEVBQ0QsVUFBQSxLQUFLO1lBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDaEMsQ0FBQyxDQUNKLENBQUM7SUFDTixDQUFDO0lBQ0QseUNBQVcsR0FBWCxVQUFZLElBQUk7UUFBaEIsaUJBV0M7UUFWRyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNyQixJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUNoRixVQUFBLElBQUk7WUFDQSxLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMvQixDQUFDLEVBQ0QsVUFBQSxLQUFLO1lBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2QixDQUFDLENBRUosQ0FBQTtJQUNMLENBQUM7SUF0RFEsbUJBQW1CO1FBTi9CLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsWUFBWTtZQUN0QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDhCQUE4QjtZQUMzQyxTQUFTLEVBQUUsQ0FBQyw0QkFBWSxFQUFFLDhCQUFhLENBQUM7U0FDM0MsQ0FBQzt5Q0FRNEIsNEJBQVk7WUFDbkIsdUJBQWM7WUFDYix5QkFBZ0I7WUFFVCw4QkFBYTtZQUNwQiw4QkFBYTtPQVp4QixtQkFBbUIsQ0F1RC9CO0lBQUQsMEJBQUM7Q0FBQSxBQXZERCxJQXVEQztBQXZEWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IEFuaW1lU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9hbmltZS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuLy9pbXBvcnQgeyBUTlNGb250SWNvblNlcnZpY2UgfSBmcm9tIFwibmF0aXZlc2NyaXB0LW5neC1mb250aWNvblwiO1xuaW1wb3J0IHsgUmF0aW5nU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9yYXRpbmcuc2VydmljZVwiO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi9tb2RlbHMvdXNlclwiO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7IEdsb2JhbFNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvZ2xvYmFsLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtZGV0YWlsc1wiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9pdGVtLWRldGFpbC5jb21wb25lbnQuaHRtbFwiLFxuICAgIHByb3ZpZGVyczogW0FuaW1lU2VydmljZSwgUmF0aW5nU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgSXRlbURldGFpbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgaXRlbTtcbiAgICB5b3VyUmF0ZTogbnVtYmVyO1xuICAgIGFjY291bnQ6IFVzZXI7XG4gICAgdXNlclN1YjogU3Vic2NyaXB0aW9uO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgYW5pbWVTZXJ2aWNlOiBBbmltZVNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucyxcbiAgICAgICAgLy9wcml2YXRlIGZvbnRpY29uOiBUTlNGb250SWNvblNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgcmF0aW5nU2VydmljZTogUmF0aW5nU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBnbG9iYWw6IEdsb2JhbFNlcnZpY2VcbiAgICApIHsgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMudXNlclN1YiA9IHRoaXMuZ2xvYmFsLnVzZXIuc3Vic2NyaWJlKFxuICAgICAgICAgICAgbWUgPT4gdGhpcy5hY2NvdW50ID0gbWVcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy55b3VyUmF0ZSA9IDA7XG4gICAgICAgIGNvbnN0IGlkID0gK3RoaXMucm91dGUuc25hcHNob3QucGFyYW1zW1wiaWRcIl07XG4gICAgICAgIHRoaXMuYW5pbWVTZXJ2aWNlLmdldEFuaW1lKGlkKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICBhbmltZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtID0gYW5pbWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJvcicsIGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG4gICAgZWRpdENsaWNrZWQoKXtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvaW5wdXQnLCB0aGlzLml0ZW0uaWRdKTtcbiAgICB9XG4gICAgZGVsZXRlQ2xpY2tlZCgpe1xuICAgICAgICB0aGlzLmFuaW1lU2VydmljZS5kZWxldGVBbmltZSh0aGlzLml0ZW0uaWQpLnN1YnNjcmliZShcbiAgICAgICAgICAgIG1vdmllID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9pdGVtcyddLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yJywgZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cbiAgICByYXRlQ2xpY2tlZChyYXRlKXtcbiAgICAgICAgdGhpcy55b3VyUmF0ZSA9IHJhdGU7XG4gICAgICAgIHRoaXMucmF0aW5nU2VydmljZS5hZGRSYXRpbmcodGhpcy5hY2NvdW50LmlkLCB0aGlzLml0ZW0uaWQsIHRoaXMueW91clJhdGUpLnN1YnNjcmliZShcbiAgICAgICAgICAgIGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaXRlbSA9IGRhdGFbJ3Jlc3VsdCddO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgKVxuICAgIH1cbn0iXX0=