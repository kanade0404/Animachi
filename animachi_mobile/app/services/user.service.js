"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var environment_1 = require("../environments/environment");
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.httpHeaders = new http_1.HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
        this.baseUrl = environment_1.environment.apiUrl;
    }
    UserService.prototype.loginUser = function (userData) {
        return this.http.post(this.baseUrl + 'authenticate/', userData);
    };
    UserService.prototype.registerUser = function (userData) {
        return this.http.post(this.baseUrl + 'users/', userData);
    };
    UserService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLDZDQUErRDtBQUUvRCwyREFBMEQ7QUFLMUQ7SUFLRSxxQkFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUhwQyxnQkFBVyxHQUFHLElBQUksa0JBQVcsQ0FBQyxFQUFDLGNBQWMsRUFBRSxpQ0FBaUMsRUFBQyxDQUFDLENBQUM7UUFDbkYsWUFBTyxHQUFXLHlCQUFXLENBQUMsTUFBTSxDQUFDO0lBRUcsQ0FBQztJQUV6QywrQkFBUyxHQUFULFVBQVUsUUFBYTtRQUNyQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxlQUFlLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUNELGtDQUFZLEdBQVosVUFBYSxRQUFhO1FBQ3hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBWlUsV0FBVztRQUh2QixpQkFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQzt5Q0FNMEIsaUJBQVU7T0FMekIsV0FBVyxDQWF2QjtJQUFELGtCQUFDO0NBQUEsQUFiRCxJQWFDO0FBYlksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGVudmlyb25tZW50IH0gZnJvbSAnLi4vZW52aXJvbm1lbnRzL2Vudmlyb25tZW50JztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgVXNlclNlcnZpY2Uge1xuXG4gIGh0dHBIZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLTgnfSk7XG4gIGJhc2VVcmw6IHN0cmluZyA9IGVudmlyb25tZW50LmFwaVVybDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHsgfVxuXG4gIGxvZ2luVXNlcih1c2VyRGF0YTogYW55KTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5iYXNlVXJsICsgJ2F1dGhlbnRpY2F0ZS8nLCB1c2VyRGF0YSk7XG4gIH1cbiAgcmVnaXN0ZXJVc2VyKHVzZXJEYXRhOiBhbnkpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLmJhc2VVcmwgKyAndXNlcnMvJywgdXNlckRhdGEpO1xuICB9XG59XG4iXX0=