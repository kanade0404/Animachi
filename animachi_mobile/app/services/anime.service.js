"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var environment_1 = require("../environments/environment");
var ApplicationSettings = require("application-settings");
var AnimeService = /** @class */ (function () {
    function AnimeService(http) {
        this.http = http;
        this.httpHeaders = new http_1.HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
        this.baseUrl = environment_1.environment.apiUrl;
    }
    AnimeService.prototype.getAnimes = function () {
        return this.http.get(this.baseUrl + 'animes/', this.getAuthHeaders());
    };
    AnimeService.prototype.getAnime = function (id) {
        return this.http.get(this.baseUrl + 'animes/' + id + '/', this.getAuthHeaders());
    };
    AnimeService.prototype.addAnime = function (anime) {
        return this.http.post(this.baseUrl + 'animes/', anime, this.getAuthHeaders());
    };
    AnimeService.prototype.editAnime = function (anime, id) {
        return this.http.put(this.baseUrl + 'animes/' + id + '/', anime, this.getAuthHeaders());
    };
    AnimeService.prototype.deleteAnime = function (id) {
        return this.http.delete(this.baseUrl + 'animes/' + id + '/', this.getAuthHeaders());
    };
    AnimeService.prototype.getAuthHeaders = function () {
        var token = ApplicationSettings.getString('token');
        var httpHeaders = new http_1.HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8',
            'Authorization': 'Token ' + token });
        return { headers: httpHeaders };
    };
    AnimeService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], AnimeService);
    return AnimeService;
}());
exports.AnimeService = AnimeService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5pbWUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFuaW1lLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFFM0MsNkNBQStEO0FBQy9ELDJEQUEwRDtBQUUxRCwwREFBNEQ7QUFHNUQ7SUFLRSxzQkFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUhwQyxnQkFBVyxHQUFHLElBQUksa0JBQVcsQ0FBQyxFQUFDLGNBQWMsRUFBRSxpQ0FBaUMsRUFBQyxDQUFDLENBQUM7UUFDbkYsWUFBTyxHQUFXLHlCQUFXLENBQUMsTUFBTSxDQUFDO0lBRUcsQ0FBQztJQUV6QyxnQ0FBUyxHQUFUO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFDRCwrQkFBUSxHQUFSLFVBQVMsRUFBVTtRQUNqQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxTQUFTLEdBQUMsRUFBRSxHQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztJQUMvRSxDQUFDO0lBRUQsK0JBQVEsR0FBUixVQUFTLEtBQUs7UUFDWixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxTQUFTLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO0lBQ2hGLENBQUM7SUFFRCxnQ0FBUyxHQUFULFVBQVUsS0FBSyxFQUFFLEVBQVU7UUFDekIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxHQUFHLEVBQUUsR0FBRyxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO0lBQzFGLENBQUM7SUFDRCxrQ0FBVyxHQUFYLFVBQVksRUFBVTtRQUNwQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxTQUFTLEdBQUcsRUFBRSxHQUFHLEdBQUcsRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztJQUN0RixDQUFDO0lBRU8scUNBQWMsR0FBdEI7UUFDRSxJQUFNLEtBQUssR0FBRyxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDckQsSUFBTSxXQUFXLEdBQUcsSUFBSSxrQkFBVyxDQUNqQyxFQUFDLGNBQWMsRUFBRSxpQ0FBaUM7WUFDbEQsZUFBZSxFQUFFLFFBQVEsR0FBRyxLQUFLLEVBQUMsQ0FBQyxDQUFDO1FBQ3RDLE1BQU0sQ0FBQyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUMsQ0FBQztJQUNqQyxDQUFDO0lBL0JVLFlBQVk7UUFEeEIsaUJBQVUsRUFBRTt5Q0FNZSxpQkFBVTtPQUx6QixZQUFZLENBaUN4QjtJQUFELG1CQUFDO0NBQUEsQUFqQ0QsSUFpQ0M7QUFqQ1ksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IGVudmlyb25tZW50IH0gZnJvbSAnLi4vZW52aXJvbm1lbnRzL2Vudmlyb25tZW50JztcbmltcG9ydCB7IEFuaW1lIH0gZnJvbSAnLi4vbW9kZWxzL2FuaW1lJztcbmltcG9ydCAqIGFzIEFwcGxpY2F0aW9uU2V0dGluZ3MgZnJvbSBcImFwcGxpY2F0aW9uLXNldHRpbmdzXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBbmltZVNlcnZpY2Uge1xuXG4gIGh0dHBIZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLTgnfSk7XG4gIGJhc2VVcmw6IHN0cmluZyA9IGVudmlyb25tZW50LmFwaVVybDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHsgfVxuXG4gIGdldEFuaW1lcygpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuYmFzZVVybCArICdhbmltZXMvJywgdGhpcy5nZXRBdXRoSGVhZGVycygpKTtcbiAgfVxuICBnZXRBbmltZShpZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmJhc2VVcmwgKyAnYW5pbWVzLycraWQrJy8nLCB0aGlzLmdldEF1dGhIZWFkZXJzKCkpO1xuICB9XG5cbiAgYWRkQW5pbWUoYW5pbWUpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLmJhc2VVcmwgKyAnYW5pbWVzLycsIGFuaW1lLCB0aGlzLmdldEF1dGhIZWFkZXJzKCkpO1xuICB9XG5cbiAgZWRpdEFuaW1lKGFuaW1lLCBpZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLnB1dCh0aGlzLmJhc2VVcmwgKyAnYW5pbWVzLycgKyBpZCArICcvJywgYW5pbWUsIHRoaXMuZ2V0QXV0aEhlYWRlcnMoKSk7XG4gIH1cbiAgZGVsZXRlQW5pbWUoaWQ6IG51bWJlcik6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGUodGhpcy5iYXNlVXJsICsgJ2FuaW1lcy8nICsgaWQgKyAnLycsIHRoaXMuZ2V0QXV0aEhlYWRlcnMoKSk7XG4gIH1cblxuICBwcml2YXRlIGdldEF1dGhIZWFkZXJzKCkge1xuICAgIGNvbnN0IHRva2VuID0gQXBwbGljYXRpb25TZXR0aW5ncy5nZXRTdHJpbmcoJ3Rva2VuJyk7XG4gICAgY29uc3QgaHR0cEhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoXG4gICAgICB7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04JyxcbiAgICAgICdBdXRob3JpemF0aW9uJzogJ1Rva2VuICcgKyB0b2tlbn0pO1xuICAgIHJldHVybiB7IGhlYWRlcnM6IGh0dHBIZWFkZXJzfTtcbiAgfVxuXG59Il19