"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var environment_prod_1 = require("../environments/environment.prod");
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.httpHeaders = new http_1.HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
        this.baseUrl = environment_prod_1.environment.apiUrl;
    }
    UserService.prototype.loginUser = function (userData) {
        return this.http.post(this.baseUrl + 'authenticate/', userData, { headers: this.httpHeaders });
    };
    UserService.prototype.registerUser = function (userData) {
        return this.http.post(this.baseUrl + 'users/', userData, { headers: this.httpHeaders });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLDZDQUErRDtBQUUvRCxxRUFBK0Q7QUFLL0Q7SUFLRSxxQkFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUhwQyxnQkFBVyxHQUFHLElBQUksa0JBQVcsQ0FBQyxFQUFDLGNBQWMsRUFBRSxpQ0FBaUMsRUFBQyxDQUFDLENBQUM7UUFDbkYsWUFBTyxHQUFXLDhCQUFXLENBQUMsTUFBTSxDQUFDO0lBRUcsQ0FBQztJQUV6QywrQkFBUyxHQUFULFVBQVUsUUFBYTtRQUNyQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxlQUFlLEVBQUUsUUFBUSxFQUFFLEVBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUMsQ0FBQyxDQUFDO0lBQy9GLENBQUM7SUFDRCxrQ0FBWSxHQUFaLFVBQWEsUUFBYTtRQUN4QixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxRQUFRLEVBQUUsUUFBUSxFQUFFLEVBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUMsQ0FBQyxDQUFDO0lBQ3hGLENBQUM7SUFaVSxXQUFXO1FBSHZCLGlCQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO3lDQU0wQixpQkFBVTtPQUx6QixXQUFXLENBYXZCO0lBQUQsa0JBQUM7Q0FBQSxBQWJELElBYUM7QUFiWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tICcuLi9lbnZpcm9ubWVudHMvZW52aXJvbm1lbnQucHJvZCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFVzZXJTZXJ2aWNlIHtcblxuICBodHRwSGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyh7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04J30pO1xuICBiYXNlVXJsOiBzdHJpbmcgPSBlbnZpcm9ubWVudC5hcGlVcmw7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7IH1cblxuICBsb2dpblVzZXIodXNlckRhdGE6IGFueSk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMuYmFzZVVybCArICdhdXRoZW50aWNhdGUvJywgdXNlckRhdGEsIHtoZWFkZXJzOiB0aGlzLmh0dHBIZWFkZXJzfSk7XG4gIH1cbiAgcmVnaXN0ZXJVc2VyKHVzZXJEYXRhOiBhbnkpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLmJhc2VVcmwgKyAndXNlcnMvJywgdXNlckRhdGEsIHtoZWFkZXJzOiB0aGlzLmh0dHBIZWFkZXJzfSk7XG4gIH1cbn1cbiJdfQ==