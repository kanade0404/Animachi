"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var environment_prod_1 = require("../environments/environment.prod");
var ApplicationSettings = require("application-settings");
var AnimeService = /** @class */ (function () {
    function AnimeService(http) {
        this.http = http;
        this.httpHeaders = new http_1.HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
        this.baseUrl = environment_prod_1.environment.apiUrl;
    }
    AnimeService.prototype.getAnimes = function () {
        return this.http.get(this.baseUrl + 'anime/', this.getAuthHeaders());
    };
    AnimeService.prototype.getAnime = function (id) {
        return this.http.get(this.baseUrl + 'anime/' + id + '/', this.getAuthHeaders());
    };
    AnimeService.prototype.addAnime = function (anime) {
        return this.http.post(this.baseUrl + 'anime/', anime, this.getAuthHeaders());
    };
    AnimeService.prototype.editAnime = function (anime, id) {
        return this.http.put(this.baseUrl + 'anime/' + id + '/', anime, this.getAuthHeaders());
    };
    AnimeService.prototype.deleteAnime = function (id) {
        return this.http.delete(this.baseUrl + 'anime/' + id + '/', this.getAuthHeaders());
    };
    AnimeService.prototype.getAuthHeaders = function () {
        var token = ApplicationSettings.getString('token');
        var httpHeaders = new http_1.HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8',
            'Authorization': 'Token ' + token });
        return { headers: httpHeaders };
    };
    AnimeService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], AnimeService);
    return AnimeService;
}());
exports.AnimeService = AnimeService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5pbWUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFuaW1lLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MsNkNBQStEO0FBRS9ELHFFQUErRDtBQUUvRCwwREFBNEQ7QUFLNUQ7SUFJRSxzQkFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUhwQyxnQkFBVyxHQUFHLElBQUksa0JBQVcsQ0FBQyxFQUFDLGNBQWMsRUFBRSxpQ0FBaUMsRUFBQyxDQUFDLENBQUM7UUFDbkYsWUFBTyxHQUFXLDhCQUFXLENBQUMsTUFBTSxDQUFDO0lBRUcsQ0FBQztJQUV6QyxnQ0FBUyxHQUFUO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsUUFBUSxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7SUFDRCwrQkFBUSxHQUFSLFVBQVMsRUFBVTtRQUNqQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxRQUFRLEdBQUcsRUFBRSxHQUFHLEdBQUcsRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztJQUNsRixDQUFDO0lBQ0QsK0JBQVEsR0FBUixVQUFTLEtBQUs7UUFDWixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxRQUFRLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO0lBQy9FLENBQUM7SUFDRCxnQ0FBUyxHQUFULFVBQVUsS0FBSyxFQUFFLEVBQVU7UUFDekIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsUUFBUSxHQUFHLEVBQUUsR0FBRyxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO0lBQ3pGLENBQUM7SUFDRCxrQ0FBVyxHQUFYLFVBQVksRUFBVTtRQUNwQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxRQUFRLEdBQUcsRUFBRSxHQUFHLEdBQUcsRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztJQUNyRixDQUFDO0lBRU8scUNBQWMsR0FBdEI7UUFDRSxJQUFNLEtBQUssR0FBRyxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDckQsSUFBTSxXQUFXLEdBQUcsSUFBSSxrQkFBVyxDQUNqQyxFQUFDLGNBQWMsRUFBRSxpQ0FBaUM7WUFDcEQsZUFBZSxFQUFFLFFBQVEsR0FBRyxLQUFLLEVBQUMsQ0FDakMsQ0FBQztRQUNGLE1BQU0sQ0FBQyxFQUFDLE9BQU8sRUFBRSxXQUFXLEVBQUMsQ0FBQztJQUNoQyxDQUFDO0lBN0JVLFlBQVk7UUFIeEIsaUJBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7eUNBSzBCLGlCQUFVO09BSnpCLFlBQVksQ0E4QnhCO0lBQUQsbUJBQUM7Q0FBQSxBQTlCRCxJQThCQztBQTlCWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBIZWFkZXJzLCBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tICcuLi9lbnZpcm9ubWVudHMvZW52aXJvbm1lbnQucHJvZCc7XG5pbXBvcnQgeyBBbmltZSB9IGZyb20gJy4uL21vZGVscy9hbmltZSc7XG5pbXBvcnQgKiBhcyBBcHBsaWNhdGlvblNldHRpbmdzIGZyb20gJ2FwcGxpY2F0aW9uLXNldHRpbmdzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQW5pbWVTZXJ2aWNlIHtcbiAgaHR0cEhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCd9KTtcbiAgYmFzZVVybDogc3RyaW5nID0gZW52aXJvbm1lbnQuYXBpVXJsO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkgeyB9XG5cbiAgZ2V0QW5pbWVzKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5iYXNlVXJsICsgJ2FuaW1lLycsIHRoaXMuZ2V0QXV0aEhlYWRlcnMoKSk7XG4gIH1cbiAgZ2V0QW5pbWUoaWQ6IG51bWJlcik6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5iYXNlVXJsICsgJ2FuaW1lLycgKyBpZCArICcvJywgdGhpcy5nZXRBdXRoSGVhZGVycygpKTtcbiAgfVxuICBhZGRBbmltZShhbmltZSk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMuYmFzZVVybCArICdhbmltZS8nLCBhbmltZSwgdGhpcy5nZXRBdXRoSGVhZGVycygpKTtcbiAgfVxuICBlZGl0QW5pbWUoYW5pbWUsIGlkOiBudW1iZXIpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAucHV0KHRoaXMuYmFzZVVybCArICdhbmltZS8nICsgaWQgKyAnLycsIGFuaW1lLCB0aGlzLmdldEF1dGhIZWFkZXJzKCkpO1xuICB9XG4gIGRlbGV0ZUFuaW1lKGlkOiBudW1iZXIpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKHRoaXMuYmFzZVVybCArICdhbmltZS8nICsgaWQgKyAnLycsIHRoaXMuZ2V0QXV0aEhlYWRlcnMoKSk7XG4gIH1cblxuICBwcml2YXRlIGdldEF1dGhIZWFkZXJzKCkge1xuICAgIGNvbnN0IHRva2VuID0gQXBwbGljYXRpb25TZXR0aW5ncy5nZXRTdHJpbmcoJ3Rva2VuJyk7XG4gICAgY29uc3QgaHR0cEhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoXG4gICAgICB7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04JyxcbiAgICAnQXV0aG9yaXphdGlvbic6ICdUb2tlbiAnICsgdG9rZW59XG4gICAgKTtcbiAgICByZXR1cm4ge2hlYWRlcnM6IGh0dHBIZWFkZXJzfTtcbiAgfVxufVxuIl19