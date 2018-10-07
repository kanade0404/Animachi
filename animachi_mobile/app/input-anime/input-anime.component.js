"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var animeInput_1 = require("~/models/animeInput");
var dataform_directives_1 = require("nativescript-pro-ui/dataform/angular/dataform-directives");
var anime_service_1 = require("~/services/anime.service");
var router_1 = require("nativescript-angular/router");
var nativescript_snackbar_1 = require("nativescript-snackbar");
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
            this.animeService.getAnime(this.id).subscribe(function (anime) {
                _this.input = new animeInput_1.AnimeInput(anime['title'], anime['description']);
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
        if (!this.myAnimeFormComp.dataForm.hasValidationErrors()) {
            this.loading = true;
            var animeData = { title: this.input.title, description: this.input.description };
            if (this.is_edit) {
                this.animeService.editAnime(animeData, this.id).subscribe(function (response) {
                    _this.router.navigate(['/item', _this.id], { clearHistory: true });
                }, function (error) {
                    _this.loading = false;
                    new nativescript_snackbar_1.SnackBar().simple('Incorrect Credentials. Please try again.');
                });
            }
            else {
                this.animeService.addAnime(animeData).subscribe(function (response) {
                    _this.router.navigate(["/items"], { clearHistory: true });
                }, function (error) {
                    _this.loading = false;
                    new nativescript_snackbar_1.SnackBar().simple("Incorrect Credentials. Please try again.");
                });
            }
        }
        else {
            (new nativescript_snackbar_1.SnackBar()).simple('All Fields Required!');
        }
    };
    __decorate([
        core_1.ViewChild('myAnimeForm'),
        __metadata("design:type", dataform_directives_1.RadDataFormComponent)
    ], InputAnimeComponent.prototype, "myAnimeFormComp", void 0);
    InputAnimeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-input-anime',
            templateUrl: './input-anime.component.html',
            styleUrls: ['./input-anime.component.scss'],
            providers: [anime_service_1.AnimeService]
        }),
        __metadata("design:paramtypes", [anime_service_1.AnimeService, router_1.RouterExtensions, router_2.ActivatedRoute])
    ], InputAnimeComponent);
    return InputAnimeComponent;
}());
exports.InputAnimeComponent = InputAnimeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtYW5pbWUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaW5wdXQtYW5pbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTZEO0FBQzdELGtEQUFpRDtBQUNqRCxnR0FBZ0c7QUFDaEcsMERBQXdEO0FBRXhELHNEQUErRDtBQUMvRCwrREFBaUQ7QUFDakQsMENBQWlEO0FBU2pEO0lBTUUsNkJBQW9CLFlBQTBCLEVBQVUsTUFBd0IsRUFBVSxLQUFxQjtRQUEzRixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUFVLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7SUFFOUcsQ0FBQztJQUVGLHNDQUFRLEdBQVI7UUFBQSxpQkFpQkU7UUFoQkEsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1QyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7WUFDcEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FDM0MsVUFBQSxLQUFLO2dCQUNILEtBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSx1QkFBVSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRSxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztZQUNwRSxDQUFDLEVBQ0QsVUFBQSxLQUFLO2dCQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ2hDLENBQUMsQ0FDRixDQUFDO1FBQ0osQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7WUFDckIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLHVCQUFVLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3RDLENBQUM7UUFDRCxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBQ0QsdUNBQVMsR0FBVDtRQUFBLGlCQTRCQztRQTNCQSxFQUFFLENBQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLG1CQUFtQixFQUFFLENBQUMsQ0FBQSxDQUFDO1lBQ3ZELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLElBQU0sU0FBUyxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFBO1lBQ2xGLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUNoQixJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FDdkQsVUFBQyxRQUFRO29CQUNQLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxFQUFFLEtBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO2dCQUNuRSxDQUFDLEVBQ0QsVUFBQyxLQUFLO29CQUNKLEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO29CQUNyQixJQUFJLGdDQUFRLEVBQUUsQ0FBQyxNQUFNLENBQUMsMENBQTBDLENBQUMsQ0FBQztnQkFDcEUsQ0FBQyxDQUNGLENBQUM7WUFDSixDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ04sSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsU0FBUyxDQUM3QyxVQUFDLFFBQVE7b0JBQ1AsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO2dCQUMzRCxDQUFDLEVBQ0QsVUFBQyxLQUFLO29CQUNKLEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO29CQUNyQixJQUFJLGdDQUFRLEVBQUUsQ0FBQyxNQUFNLENBQUMsMENBQTBDLENBQUMsQ0FBQztnQkFDcEUsQ0FBQyxDQUNGLENBQUM7WUFDSixDQUFDO1FBQ0gsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sQ0FBQyxJQUFJLGdDQUFRLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBQ2xELENBQUM7SUFDRixDQUFDO0lBbkR3QjtRQUF6QixnQkFBUyxDQUFDLGFBQWEsQ0FBQztrQ0FBa0IsMENBQW9CO2dFQUFDO0lBTHJELG1CQUFtQjtRQVAvQixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsV0FBVyxFQUFFLDhCQUE4QjtZQUMzQyxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQztZQUMzQyxTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO1NBQzFCLENBQUM7eUNBT2tDLDRCQUFZLEVBQWtCLHlCQUFnQixFQUFpQix1QkFBYztPQU5wRyxtQkFBbUIsQ0EwRC9CO0lBQUQsMEJBQUM7Q0FBQSxBQTFERCxJQTBEQztBQTFEWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBbmltZUlucHV0IH0gZnJvbSAnfi9tb2RlbHMvYW5pbWVJbnB1dCc7XG5pbXBvcnQgeyBSYWREYXRhRm9ybUNvbXBvbmVudCB9IGZyb20gJ25hdGl2ZXNjcmlwdC1wcm8tdWkvZGF0YWZvcm0vYW5ndWxhci9kYXRhZm9ybS1kaXJlY3RpdmVzJztcbmltcG9ydCB7IEFuaW1lU2VydmljZSB9IGZyb20gJ34vc2VydmljZXMvYW5pbWUuc2VydmljZSc7XG5pbXBvcnQgeyBBbmltZSB9IGZyb20gJ34vbW9kZWxzL2FuaW1lJztcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU25hY2tCYXIgfSBmcm9tICduYXRpdmVzY3JpcHQtc25hY2tiYXInO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdhcHAtaW5wdXQtYW5pbWUnLFxuICB0ZW1wbGF0ZVVybDogJy4vaW5wdXQtYW5pbWUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9pbnB1dC1hbmltZS5jb21wb25lbnQuc2NzcyddLFxuICBwcm92aWRlcnM6IFtBbmltZVNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIElucHV0QW5pbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBpbnB1dDogQW5pbWVJbnB1dDtcbiAgbG9hZGluZzogYm9vbGVhbjtcbiAgaXNfZWRpdDogYm9vbGVhbjtcbiAgaWQ6IG51bWJlcjtcbiAgQFZpZXdDaGlsZCgnbXlBbmltZUZvcm0nKSBteUFuaW1lRm9ybUNvbXA6IFJhZERhdGFGb3JtQ29tcG9uZW50O1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFuaW1lU2VydmljZTogQW5pbWVTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUpIHsgXG5cbiAgIH1cblxuICBuZ09uSW5pdCgpIHsgXG4gICAgdGhpcy5pZCA9ICt0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtc1tcImlkXCJdO1xuICAgIGlmICh0aGlzLmlkID49IDApIHtcbiAgICAgIHRoaXMuaXNfZWRpdCA9IHRydWU7XG4gICAgICB0aGlzLmFuaW1lU2VydmljZS5nZXRBbmltZSh0aGlzLmlkKS5zdWJzY3JpYmUoXG4gICAgICAgIGFuaW1lID0+IHtcbiAgICAgICAgICB0aGlzLmlucHV0ID0gbmV3IEFuaW1lSW5wdXQoYW5pbWVbJ3RpdGxlJ10sIGFuaW1lWydkZXNjcmlwdGlvbiddKTtcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yJywgZXJyb3IpO1xuICAgICAgICB9XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlzX2VkaXQgPSBmYWxzZTtcbiAgICAgIHRoaXMuaW5wdXQgPSBuZXcgQW5pbWVJbnB1dCgnJywgJycpO1xuICAgIH1cbiAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgIH1cbiAgIHNhdmVBbmltZSgpIHtcbiAgICBpZighdGhpcy5teUFuaW1lRm9ybUNvbXAuZGF0YUZvcm0uaGFzVmFsaWRhdGlvbkVycm9ycygpKXtcbiAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICBjb25zdCBhbmltZURhdGEgPSB7IHRpdGxlOiB0aGlzLmlucHV0LnRpdGxlLCBkZXNjcmlwdGlvbjogdGhpcy5pbnB1dC5kZXNjcmlwdGlvbiB9XG4gICAgICBpZih0aGlzLmlzX2VkaXQpIHtcbiAgICAgICAgdGhpcy5hbmltZVNlcnZpY2UuZWRpdEFuaW1lKGFuaW1lRGF0YSwgdGhpcy5pZCkuc3Vic2NyaWJlKFxuICAgICAgICAgIChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvaXRlbScsIHRoaXMuaWRdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICBuZXcgU25hY2tCYXIoKS5zaW1wbGUoJ0luY29ycmVjdCBDcmVkZW50aWFscy4gUGxlYXNlIHRyeSBhZ2Fpbi4nKTtcbiAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmFuaW1lU2VydmljZS5hZGRBbmltZShhbmltZURhdGEpLnN1YnNjcmliZShcbiAgICAgICAgICAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9pdGVtc1wiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgbmV3IFNuYWNrQmFyKCkuc2ltcGxlKFwiSW5jb3JyZWN0IENyZWRlbnRpYWxzLiBQbGVhc2UgdHJ5IGFnYWluLlwiKTtcbiAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIChuZXcgU25hY2tCYXIoKSkuc2ltcGxlKCdBbGwgRmllbGRzIFJlcXVpcmVkIScpO1xuICAgIH1cbiAgIH1cblxufVxuIl19