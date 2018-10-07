"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var environment_1 = require("../environments/environment");
var http_1 = require("@angular/common/http");
var ApplicationSettings = require("application-settings");
var RatingService = /** @class */ (function () {
    function RatingService(http) {
        this.http = http;
        this.httpHeaders = new http_1.HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
        this.baseUrl = environment_1.environment.apiUrl;
    }
    RatingService.prototype.addRating = function (user_id, anime_id, rating) {
        var body = {
            user: user_id,
            anime: anime_id,
            stars: rating,
        };
        return this.http.post(this.baseUrl + 'ratings/rate_anime/', body, this.getAuthHeaders());
    };
    RatingService.prototype.getAuthHeaders = function () {
        var token = ApplicationSettings.getString('token');
        var httpHeaders = new http_1.HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8',
            'Authorization': 'Token ' + token });
        return { headers: httpHeaders };
    };
    RatingService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], RatingService);
    return RatingService;
}());
exports.RatingService = RatingService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmF0aW5nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyYXRpbmcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUUzQywyREFBMEQ7QUFDMUQsNkNBQStEO0FBQy9ELDBEQUE0RDtBQUc1RDtJQUtFLHVCQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBSHBDLGdCQUFXLEdBQUcsSUFBSSxrQkFBVyxDQUFDLEVBQUMsY0FBYyxFQUFFLGlDQUFpQyxFQUFDLENBQUMsQ0FBQztRQUNuRixZQUFPLEdBQVcseUJBQVcsQ0FBQyxNQUFNLENBQUM7SUFFRyxDQUFDO0lBRXpDLGlDQUFTLEdBQVQsVUFBVSxPQUFlLEVBQUUsUUFBZ0IsRUFBRSxNQUFjO1FBQ3pELElBQU0sSUFBSSxHQUFHO1lBQ1gsSUFBSSxFQUFFLE9BQU87WUFDYixLQUFLLEVBQUUsUUFBUTtZQUNmLEtBQUssRUFBRSxNQUFNO1NBQ2QsQ0FBQztRQUNGLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLHFCQUFxQixFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztJQUMzRixDQUFDO0lBRU8sc0NBQWMsR0FBdEI7UUFDRSxJQUFNLEtBQUssR0FBRyxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDckQsSUFBTSxXQUFXLEdBQUcsSUFBSSxrQkFBVyxDQUNqQyxFQUFDLGNBQWMsRUFBRSxpQ0FBaUM7WUFDbEQsZUFBZSxFQUFFLFFBQVEsR0FBRyxLQUFLLEVBQUMsQ0FBQyxDQUFDO1FBQ3RDLE1BQU0sQ0FBQyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUMsQ0FBQztJQUNqQyxDQUFDO0lBdEJVLGFBQWE7UUFEekIsaUJBQVUsRUFBRTt5Q0FNZSxpQkFBVTtPQUx6QixhQUFhLENBd0J6QjtJQUFELG9CQUFDO0NBQUEsQUF4QkQsSUF3QkM7QUF4Qlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBlbnZpcm9ubWVudCB9IGZyb20gJy4uL2Vudmlyb25tZW50cy9lbnZpcm9ubWVudCc7XG5pbXBvcnQgeyBIdHRwSGVhZGVycywgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCAqIGFzIEFwcGxpY2F0aW9uU2V0dGluZ3MgZnJvbSBcImFwcGxpY2F0aW9uLXNldHRpbmdzXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBSYXRpbmdTZXJ2aWNlIHtcblxuICBodHRwSGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyh7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04J30pO1xuICBiYXNlVXJsOiBzdHJpbmcgPSBlbnZpcm9ubWVudC5hcGlVcmw7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7IH1cblxuICBhZGRSYXRpbmcodXNlcl9pZDogbnVtYmVyLCBhbmltZV9pZDogbnVtYmVyLCByYXRpbmc6IG51bWJlcik6IE9ic2VydmFibGU8YW55PiB7XG4gICAgY29uc3QgYm9keSA9IHtcbiAgICAgIHVzZXI6IHVzZXJfaWQsXG4gICAgICBhbmltZTogYW5pbWVfaWQsXG4gICAgICBzdGFyczogcmF0aW5nLFxuICAgIH07XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMuYmFzZVVybCArICdyYXRpbmdzL3JhdGVfYW5pbWUvJywgYm9keSwgdGhpcy5nZXRBdXRoSGVhZGVycygpKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0QXV0aEhlYWRlcnMoKSB7XG4gICAgY29uc3QgdG9rZW4gPSBBcHBsaWNhdGlvblNldHRpbmdzLmdldFN0cmluZygndG9rZW4nKTtcbiAgICBjb25zdCBodHRwSGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyhcbiAgICAgIHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLTgnLFxuICAgICAgJ0F1dGhvcml6YXRpb24nOiAnVG9rZW4gJyArIHRva2VufSk7XG4gICAgcmV0dXJuIHsgaGVhZGVyczogaHR0cEhlYWRlcnN9O1xuICB9XG5cbn0iXX0=