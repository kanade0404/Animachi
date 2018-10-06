"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var animeInput_1 = require("../models/animeInput");
var angular_1 = require("nativescript-pro-ui/dataform/angular");
var nativescript_snackbar_1 = require("nativescript-snackbar");
var anime_service_1 = require("../services/anime.service");
var router_1 = require("nativescript-angular/router");
var router_2 = require("@angular/router");
var InputAnimeComponent = /** @class */ (function () {
    function InputAnimeComponent(animeService, router, route) {
        this.animeService = animeService;
        this.router = router;
        this.route = route;
    }
    InputAnimeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = +this.route.snapshot.params["id"];
        if (this.id >= 0) {
            this.is_edit = true;
            this.animeService.getAnime(this.id).subscribe(function (movie) {
                _this.input = new animeInput_1.AnimeInput(movie['title'], movie['description']);
            }, function (error) {
                console.log('error', error);
            });
        }
        else {
            this.is_edit = false;
            this.input = new animeInput_1.AnimeInput('', '');
        }
        this.loading = false;
    };
    InputAnimeComponent.prototype.saveAnime = function () {
        var _this = this;
        if (!this.myMovieFormComp.dataForm.hasValidationErrors()) {
            this.loading = true;
            var movieData = { title: this.input.title, description: this.input.description };
            if (this.is_edit) {
                this.animeService.editAnime(movieData, this.id)
                    .subscribe(function (response) {
                    _this.router.navigate(["/item", _this.id], { clearHistory: true });
                }, function (error) {
                    _this.loading = false;
                    new nativescript_snackbar_1.SnackBar().simple("Incorrect Credentials. Please try again.");
                });
            }
            else {
                this.animeService.addAnime(movieData)
                    .subscribe(function (response) {
                    _this.router.navigate(["/items"], { clearHistory: true });
                }, function (error) {
                    _this.loading = false;
                    new nativescript_snackbar_1.SnackBar().simple("Incorrect Credentials. Please try again.");
                });
            }
        }
        else {
            (new nativescript_snackbar_1.SnackBar()).simple("All Fields Required!");
        }
    };
    __decorate([
        core_1.ViewChild('myMovieForm'),
        __metadata("design:type", angular_1.RadDataFormComponent)
    ], InputAnimeComponent.prototype, "myMovieFormComp", void 0);
    InputAnimeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-input-anime',
            templateUrl: './input-anime.component.html',
            styleUrls: ['./input-anime.component.scss'],
            providers: [anime_service_1.AnimeService]
        }),
        __metadata("design:paramtypes", [anime_service_1.AnimeService, router_1.RouterExtensions,
            router_2.ActivatedRoute])
    ], InputAnimeComponent);
    return InputAnimeComponent;
}());
exports.InputAnimeComponent = InputAnimeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtYW5pbWUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaW5wdXQtYW5pbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTZEO0FBQzdELG1EQUFrRDtBQUNsRCxnRUFBNEU7QUFDNUUsK0RBQWlEO0FBQ2pELDJEQUF5RDtBQUN6RCxzREFBK0Q7QUFDL0QsMENBQWlEO0FBVS9DO0lBU0UsNkJBQW9CLFlBQXlCLEVBQVUsTUFBd0IsRUFDckUsS0FBcUI7UUFEWCxpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQ3JFLFVBQUssR0FBTCxLQUFLLENBQWdCO0lBQUksQ0FBQztJQUVwQyxzQ0FBUSxHQUFSO1FBQUEsaUJBa0JFO1FBakJBLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQzNDLFVBQUEsS0FBSztnQkFDSCxLQUFJLENBQUMsS0FBSyxHQUFHLElBQUksdUJBQVUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQUUsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7WUFDcEUsQ0FBQyxFQUNELFVBQUEsS0FBSztnQkFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztZQUNoQyxDQUFDLENBQ0YsQ0FBQztRQUNKLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSx1QkFBVSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN0QyxDQUFDO1FBQ0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFFdEIsQ0FBQztJQUVGLHVDQUFTLEdBQVQ7UUFBQSxpQkErQkM7UUE5QkMsRUFBRSxDQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN4RCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztZQUNwQixJQUFNLFNBQVMsR0FBRyxFQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUMsQ0FBQTtZQUNoRixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDakIsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUM7cUJBQzVDLFNBQVMsQ0FDTixVQUFDLFFBQVE7b0JBQ1AsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLEVBQUUsS0FBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7Z0JBQ25FLENBQUMsRUFDRCxVQUFDLEtBQUs7b0JBQ0YsS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7b0JBQ3JCLElBQUksZ0NBQVEsRUFBRSxDQUFDLE1BQU0sQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDO2dCQUN0RSxDQUFDLENBQ0osQ0FBQztZQUVOLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDTixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUM7cUJBQ2xDLFNBQVMsQ0FDTixVQUFDLFFBQVE7b0JBQ1AsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO2dCQUMzRCxDQUFDLEVBQ0QsVUFBQyxLQUFLO29CQUNGLEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO29CQUNyQixJQUFJLGdDQUFRLEVBQUUsQ0FBQyxNQUFNLENBQUMsMENBQTBDLENBQUMsQ0FBQztnQkFDdEUsQ0FBQyxDQUNKLENBQUM7WUFDTixDQUFDO1FBQ0gsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sQ0FBQyxJQUFJLGdDQUFRLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBQ2xELENBQUM7SUFDSCxDQUFDO0lBekR5QjtRQUF6QixnQkFBUyxDQUFDLGFBQWEsQ0FBQztrQ0FBa0IsOEJBQW9CO2dFQUFDO0lBTnJELG1CQUFtQjtRQVJqQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsV0FBVyxFQUFFLDhCQUE4QjtZQUMzQyxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQztZQUMzQyxTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO1NBQzFCLENBQUM7eUNBV2lDLDRCQUFZLEVBQWtCLHlCQUFnQjtZQUM5RCx1QkFBYztPQVZwQixtQkFBbUIsQ0FpRS9CO0lBQUQsMEJBQUM7Q0FBQSxBQWpFRCxJQWlFQztBQWpFWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBbmltZUlucHV0IH0gZnJvbSAnLi4vbW9kZWxzL2FuaW1lSW5wdXQnO1xuaW1wb3J0IHsgUmFkRGF0YUZvcm1Db21wb25lbnQgfSBmcm9tICduYXRpdmVzY3JpcHQtcHJvLXVpL2RhdGFmb3JtL2FuZ3VsYXInO1xuaW1wb3J0IHsgU25hY2tCYXIgfSBmcm9tICduYXRpdmVzY3JpcHQtc25hY2tiYXInO1xuaW1wb3J0IHsgQW5pbWVTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvYW5pbWUuc2VydmljZSc7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ2FwcC1pbnB1dC1hbmltZScsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2lucHV0LWFuaW1lLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9pbnB1dC1hbmltZS5jb21wb25lbnQuc2NzcyddLFxuICAgIHByb3ZpZGVyczogW0FuaW1lU2VydmljZV1cbiAgfSlcblxuICBleHBvcnQgY2xhc3MgSW5wdXRBbmltZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBpbnB1dDogQW5pbWVJbnB1dDtcbiAgICBsb2FkaW5nO1xuICAgIGlzX2VkaXQ6IGJvb2xlYW47XG4gICAgaWQ6IG51bWJlcjtcbiAgICBAVmlld0NoaWxkKCdteU1vdmllRm9ybScpIG15TW92aWVGb3JtQ29tcDogUmFkRGF0YUZvcm1Db21wb25lbnQ7XG4gIFxuICBcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFuaW1lU2VydmljZTpBbmltZVNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zLFxuICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUpIHsgfVxuICBcbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgIHRoaXMuaWQgPSArdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXNbXCJpZFwiXTtcbiAgICAgIGlmICh0aGlzLmlkID49IDApIHtcbiAgICAgICAgdGhpcy5pc19lZGl0ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5hbmltZVNlcnZpY2UuZ2V0QW5pbWUodGhpcy5pZCkuc3Vic2NyaWJlKFxuICAgICAgICAgIG1vdmllID0+IHtcbiAgICAgICAgICAgIHRoaXMuaW5wdXQgPSBuZXcgQW5pbWVJbnB1dChtb3ZpZVsndGl0bGUnXSwgbW92aWVbJ2Rlc2NyaXB0aW9uJ10pO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZXJyb3InLCBlcnJvcik7XG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5pc19lZGl0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaW5wdXQgPSBuZXcgQW5pbWVJbnB1dCgnJywgJycpO1xuICAgICAgfVxuICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICBcbiAgICAgfVxuICBcbiAgICBzYXZlQW5pbWUoKXtcbiAgICAgIGlmKCF0aGlzLm15TW92aWVGb3JtQ29tcC5kYXRhRm9ybS5oYXNWYWxpZGF0aW9uRXJyb3JzKCkpIHtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgY29uc3QgbW92aWVEYXRhID0ge3RpdGxlOiB0aGlzLmlucHV0LnRpdGxlLCBkZXNjcmlwdGlvbjogdGhpcy5pbnB1dC5kZXNjcmlwdGlvbn1cbiAgICAgICAgaWYgKHRoaXMuaXNfZWRpdCkge1xuICAgICAgICAgIHRoaXMuYW5pbWVTZXJ2aWNlLmVkaXRBbmltZShtb3ZpZURhdGEsIHRoaXMuaWQpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgIChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2l0ZW1cIiwgdGhpcy5pZF0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBuZXcgU25hY2tCYXIoKS5zaW1wbGUoXCJJbmNvcnJlY3QgQ3JlZGVudGlhbHMuIFBsZWFzZSB0cnkgYWdhaW4uXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5hbmltZVNlcnZpY2UuYWRkQW5pbWUobW92aWVEYXRhKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9pdGVtc1wiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIG5ldyBTbmFja0JhcigpLnNpbXBsZShcIkluY29ycmVjdCBDcmVkZW50aWFscy4gUGxlYXNlIHRyeSBhZ2Fpbi5cIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgKG5ldyBTbmFja0JhcigpKS5zaW1wbGUoXCJBbGwgRmllbGRzIFJlcXVpcmVkIVwiKTtcbiAgICAgIH1cbiAgICB9XG4gIFxuICB9Il19