"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var anime_service_1 = require("../services/anime.service");
var user_1 = require("~/models/user");
var global_service_1 = require("~/services/global.service");
var ApplicationSettings = require("application-settings");
var router_1 = require("nativescript-angular/router");
var ItemsComponent = /** @class */ (function () {
    function ItemsComponent(animeService, global, router) {
        this.animeService = animeService;
        this.global = global;
        this.router = router;
    }
    ItemsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.items = this.animeService.getAnimes().subscribe(function (animes) {
            _this.items = animes;
        }, function (error) {
            console.log('error', error);
        });
    };
    ItemsComponent.prototype.logoutClicked = function () {
        this.global.me = new user_1.User();
        ApplicationSettings.remove('token');
        ApplicationSettings.remove('account');
        this.router.navigate(['/login'], { clearHistory: true });
    };
    ItemsComponent.prototype.addClicked = function () {
        this.router.navigate(['/input']);
    };
    ItemsComponent = __decorate([
        core_1.Component({
            selector: "ns-items",
            moduleId: module.id,
            templateUrl: "./items.component.html",
            providers: [anime_service_1.AnimeService, global_service_1.GlobalService]
        }),
        __metadata("design:paramtypes", [anime_service_1.AnimeService, global_service_1.GlobalService,
            router_1.RouterExtensions])
    ], ItemsComponent);
    return ItemsComponent;
}());
exports.ItemsComponent = ItemsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBRWxELDJEQUF3RDtBQUN4RCxzQ0FBcUM7QUFDckMsNERBQTBEO0FBRTFELDBEQUE0RDtBQUM1RCxzREFBK0Q7QUFRL0Q7SUFFSSx3QkFBb0IsWUFBMEIsRUFBVSxNQUFxQixFQUNoRSxNQUF3QjtRQURqQixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUFVLFdBQU0sR0FBTixNQUFNLENBQWU7UUFDaEUsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7SUFBSSxDQUFDO0lBRTFDLGlDQUFRLEdBQVI7UUFBQSxpQkFTQztRQVJHLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxTQUFTLENBQ2hELFVBQUEsTUFBTTtZQUNGLEtBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO1FBQ3hCLENBQUMsRUFDRCxVQUFBLEtBQUs7WUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNoQyxDQUFDLENBQ0osQ0FBQztJQUNOLENBQUM7SUFDRCxzQ0FBYSxHQUFiO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEdBQUcsSUFBSSxXQUFJLEVBQUUsQ0FBQztRQUM1QixtQkFBbUIsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDcEMsbUJBQW1CLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBQ0QsbUNBQVUsR0FBVjtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBdkJRLGNBQWM7UUFOMUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsd0JBQXdCO1lBQ3JDLFNBQVMsRUFBRSxDQUFDLDRCQUFZLEVBQUUsOEJBQWEsQ0FBQztTQUMzQyxDQUFDO3lDQUdvQyw0QkFBWSxFQUFrQiw4QkFBYTtZQUN4RCx5QkFBZ0I7T0FINUIsY0FBYyxDQXdCMUI7SUFBRCxxQkFBQztDQUFBLEFBeEJELElBd0JDO0FBeEJZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBBbmltZVNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvYW5pbWUuc2VydmljZVwiXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIn4vbW9kZWxzL3VzZXJcIjtcbmltcG9ydCB7IEdsb2JhbFNlcnZpY2UgfSBmcm9tIFwifi9zZXJ2aWNlcy9nbG9iYWwuc2VydmljZVwiO1xuXG5pbXBvcnQgKiBhcyBBcHBsaWNhdGlvblNldHRpbmdzIGZyb20gJ2FwcGxpY2F0aW9uLXNldHRpbmdzJztcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLWl0ZW1zXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2l0ZW1zLmNvbXBvbmVudC5odG1sXCIsXG4gICAgcHJvdmlkZXJzOiBbQW5pbWVTZXJ2aWNlLCBHbG9iYWxTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBJdGVtc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgaXRlbXM7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhbmltZVNlcnZpY2U6IEFuaW1lU2VydmljZSwgcHJpdmF0ZSBnbG9iYWw6IEdsb2JhbFNlcnZpY2UsXG4gICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucykgeyB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pdGVtcyA9IHRoaXMuYW5pbWVTZXJ2aWNlLmdldEFuaW1lcygpLnN1YnNjcmliZShcbiAgICAgICAgICAgIGFuaW1lcyA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtcyA9IGFuaW1lcztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yJywgZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cbiAgICBsb2dvdXRDbGlja2VkKCkge1xuICAgICAgICB0aGlzLmdsb2JhbC5tZSA9IG5ldyBVc2VyKCk7XG4gICAgICAgIEFwcGxpY2F0aW9uU2V0dGluZ3MucmVtb3ZlKCd0b2tlbicpO1xuICAgICAgICBBcHBsaWNhdGlvblNldHRpbmdzLnJlbW92ZSgnYWNjb3VudCcpO1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9sb2dpbiddLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcbiAgICB9XG4gICAgYWRkQ2xpY2tlZCgpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvaW5wdXQnXSk7XG4gICAgfVxufSJdfQ==