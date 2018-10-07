"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var anime_service_1 = require("~/services/anime.service");
var router_2 = require("nativescript-angular/router");
var nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
var rating_service_1 = require("~/services/rating.service");
var global_service_1 = require("~/services/global.service");
var ItemDetailComponent = /** @class */ (function () {
    function ItemDetailComponent(animeService, route, router, fonticon, ratingService, global) {
        this.animeService = animeService;
        this.route = route;
        this.router = router;
        this.fonticon = fonticon;
        this.ratingService = ratingService;
        this.global = global;
    }
    ItemDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userSub = this.global.user.subscribe(function (me) { return _this.account = me; });
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
        this.animeService.deleteAnime(this.item.id).subscribe(function (anime) {
            _this.router.navigate(['/items'], { clearHistory: true });
        }, function (error) {
            console.log('error', error);
        });
    };
    ItemDetailComponent.prototype.rateClicked = function (rate) {
        var _this = this;
        this.yourRate = rate;
        this.ratingService.addRating(this.account.id, this.item.id, this.yourRate).subscribe(function (anime) {
            _this.item = anime['result'];
        }, function (error) {
            console.log('error', error);
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
            nativescript_ngx_fonticon_1.TNSFontIconService,
            rating_service_1.RatingService,
            global_service_1.GlobalService])
    ], ItemDetailComponent);
    return ItemDetailComponent;
}());
exports.ItemDetailComponent = ItemDetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbS1kZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDBDQUFpRDtBQUNqRCwwREFBd0Q7QUFDeEQsc0RBQStEO0FBQy9ELHVFQUErRDtBQUMvRCw0REFBMEQ7QUFHMUQsNERBQTBEO0FBUTFEO0lBTUksNkJBQ1ksWUFBMEIsRUFDMUIsS0FBcUIsRUFDckIsTUFBd0IsRUFDeEIsUUFBNEIsRUFDNUIsYUFBNEIsRUFDNUIsTUFBcUI7UUFMckIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFDeEIsYUFBUSxHQUFSLFFBQVEsQ0FBb0I7UUFDNUIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsV0FBTSxHQUFOLE1BQU0sQ0FBZTtJQUM3QixDQUFDO0lBRUwsc0NBQVEsR0FBUjtRQUFBLGlCQWFDO1FBWkcsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQ3JDLFVBQUEsRUFBRSxJQUFJLE9BQUEsS0FBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLEVBQWpCLENBQWlCLENBQzFCLENBQUM7UUFDRixJQUFNLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQ3BDLFVBQUEsS0FBSztZQUNELEtBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLENBQUMsRUFDRCxVQUFBLEtBQUs7WUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNoQyxDQUFDLENBQ0osQ0FBQztJQUNOLENBQUM7SUFDRCx5Q0FBVyxHQUFYO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFDRCwyQ0FBYSxHQUFiO1FBQUEsaUJBU0M7UUFSRyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FDakQsVUFBQSxLQUFLO1lBQ0QsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFDLFlBQVksRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO1FBQzNELENBQUMsRUFDRCxVQUFBLEtBQUs7WUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNoQyxDQUFDLENBQ0osQ0FBQztJQUNOLENBQUM7SUFDRCx5Q0FBVyxHQUFYLFVBQVksSUFBWTtRQUF4QixpQkFVQztRQVRHLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLENBQ2hGLFVBQUEsS0FBSztZQUNELEtBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2hDLENBQUMsRUFDRCxVQUFBLEtBQUs7WUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNoQyxDQUFDLENBQ0osQ0FBQztJQUNOLENBQUM7SUFwRFEsbUJBQW1CO1FBTi9CLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsWUFBWTtZQUN0QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDhCQUE4QjtZQUMzQyxTQUFTLEVBQUUsQ0FBQyw0QkFBWSxFQUFFLDhCQUFhLENBQUM7U0FDM0MsQ0FBQzt5Q0FRNEIsNEJBQVk7WUFDbkIsdUJBQWM7WUFDYix5QkFBZ0I7WUFDZCw4Q0FBa0I7WUFDYiw4QkFBYTtZQUNwQiw4QkFBYTtPQVp4QixtQkFBbUIsQ0FxRC9CO0lBQUQsMEJBQUM7Q0FBQSxBQXJERCxJQXFEQztBQXJEWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IEFuaW1lU2VydmljZSB9IGZyb20gXCJ+L3NlcnZpY2VzL2FuaW1lLnNlcnZpY2VcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBUTlNGb250SWNvblNlcnZpY2UgfSBmcm9tIFwibmF0aXZlc2NyaXB0LW5neC1mb250aWNvblwiO1xuaW1wb3J0IHsgUmF0aW5nU2VydmljZSB9IGZyb20gXCJ+L3NlcnZpY2VzL3JhdGluZy5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIn4vbW9kZWxzL3VzZXJcIjtcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQgeyBHbG9iYWxTZXJ2aWNlIH0gZnJvbSBcIn4vc2VydmljZXMvZ2xvYmFsLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtZGV0YWlsc1wiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9pdGVtLWRldGFpbC5jb21wb25lbnQuaHRtbFwiLFxuICAgIHByb3ZpZGVyczogW0FuaW1lU2VydmljZSwgUmF0aW5nU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgSXRlbURldGFpbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgaXRlbTtcbiAgICB5b3VyUmF0ZTogbnVtYmVyO1xuICAgIGFjY291bnQ6IFVzZXI7XG4gICAgdXNlclN1YjogU3Vic2NyaXB0aW9uO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgYW5pbWVTZXJ2aWNlOiBBbmltZVNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucyxcbiAgICAgICAgcHJpdmF0ZSBmb250aWNvbjogVE5TRm9udEljb25TZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHJhdGluZ1NlcnZpY2U6IFJhdGluZ1NlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgZ2xvYmFsOiBHbG9iYWxTZXJ2aWNlXG4gICAgKSB7IH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnVzZXJTdWIgPSB0aGlzLmdsb2JhbC51c2VyLnN1YnNjcmliZShcbiAgICAgICAgICAgIG1lID0+IHRoaXMuYWNjb3VudCA9IG1lXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IGlkID0gK3RoaXMucm91dGUuc25hcHNob3QucGFyYW1zW1wiaWRcIl07XG4gICAgICAgIHRoaXMuYW5pbWVTZXJ2aWNlLmdldEFuaW1lKGlkKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICBhbmltZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtID0gYW5pbWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJvcicsIGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG4gICAgZWRpdENsaWNrZWQoKSB7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2lucHV0JywgdGhpcy5pdGVtLmlkXSk7XG4gICAgfVxuICAgIGRlbGV0ZUNsaWNrZWQoKSB7XG4gICAgICAgIHRoaXMuYW5pbWVTZXJ2aWNlLmRlbGV0ZUFuaW1lKHRoaXMuaXRlbS5pZCkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgYW5pbWUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2l0ZW1zJ10sIHtjbGVhckhpc3Rvcnk6IHRydWV9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yJywgZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cbiAgICByYXRlQ2xpY2tlZChyYXRlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy55b3VyUmF0ZSA9IHJhdGU7XG4gICAgICAgIHRoaXMucmF0aW5nU2VydmljZS5hZGRSYXRpbmcodGhpcy5hY2NvdW50LmlkLCB0aGlzLml0ZW0uaWQsIHRoaXMueW91clJhdGUpLnN1YnNjcmliZShcbiAgICAgICAgICAgIGFuaW1lID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW0gPSBhbmltZVsncmVzdWx0J107XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJvcicsIGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG59XG4iXX0=