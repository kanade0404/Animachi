"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ApplicationSettings = require("application-settings");
var user_service_1 = require("../services/user.service");
var global_service_1 = require("../services/global.service");
var loginInput_1 = require("~/models/loginInput");
var router_1 = require("nativescript-angular/router");
var nativescript_snackbar_1 = require("nativescript-snackbar");
var angular_1 = require("nativescript-pro-ui/dataform/angular");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(userService, router, global) {
        this.userService = userService;
        this.router = router;
        this.global = global;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loading = false;
        if (ApplicationSettings.getString('token') && ApplicationSettings.getString('account')) {
            this.global.me = JSON.parse(ApplicationSettings.getString('account'));
            this.router.navigate(['/items'], { clearHistory: true });
        }
        this.input = new loginInput_1.LoginInput("", "");
    };
    LoginComponent.prototype.onLogin = function () {
        var _this = this;
        if (!this.myLoginDataFormComp.dataForm.hasValidationErrors()) {
            this.loading = true;
            var userData = { username: this.input.username, password: this.input.password };
            this.userService.loginUser(userData).subscribe(function (response) {
                ApplicationSettings.setString('token', response['token']);
                _this.global.me = response['user'];
                _this.router.navigate(['/items'], { clearHistory: true });
            }, function (error) {
                _this.loading = false;
                (new nativescript_snackbar_1.SnackBar()).simple('Wrong Credentials!');
            });
        }
        else {
            (new nativescript_snackbar_1.SnackBar()).simple('All Fields Required!');
        }
    };
    __decorate([
        core_1.ViewChild('myLoginDataForm'),
        __metadata("design:type", angular_1.RadDataFormComponent)
    ], LoginComponent.prototype, "myLoginDataFormComp", void 0);
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            moduleId: module.id,
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css'],
            providers: [user_service_1.UserService]
        }),
        __metadata("design:paramtypes", [user_service_1.UserService, router_1.RouterExtensions, global_service_1.GlobalService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTZEO0FBQzdELDBEQUE0RDtBQUM1RCx5REFBdUQ7QUFDdkQsNkRBQTJEO0FBQzNELGtEQUFpRDtBQUNqRCxzREFBK0Q7QUFFL0QsK0RBQWlEO0FBQ2pELGdFQUE0RTtBQVM1RTtJQU1FLHdCQUFvQixXQUF3QixFQUFVLE1BQXdCLEVBQVUsTUFBcUI7UUFBekYsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQWU7SUFDN0csQ0FBQztJQUVELGlDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNyQixFQUFFLENBQUEsQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksbUJBQW1CLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN0RixJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ3RFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUMzRCxDQUFDO1FBQ0QsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLHVCQUFVLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRCxnQ0FBTyxHQUFQO1FBQUEsaUJBa0JDO1FBakJDLEVBQUUsQ0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLENBQUEsQ0FBQztZQUMzRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztZQUNwQixJQUFNLFFBQVEsR0FBRyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQTtZQUNqRixJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLENBQzVDLFVBQUMsUUFBUTtnQkFDUCxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUMxRCxLQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ2xDLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztZQUMzRCxDQUFDLEVBQ0QsVUFBQyxLQUFLO2dCQUNKLEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO2dCQUNyQixDQUFDLElBQUksZ0NBQVEsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLG9CQUFvQixDQUFDLENBQUM7WUFDaEQsQ0FBQyxDQUNGLENBQUM7UUFDSixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixDQUFDLElBQUksZ0NBQVEsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFDbEQsQ0FBQztJQUNILENBQUM7SUFoQzZCO1FBQTdCLGdCQUFTLENBQUMsaUJBQWlCLENBQUM7a0NBQXNCLDhCQUFvQjsrREFBQztJQUo3RCxjQUFjO1FBUDFCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsV0FBVztZQUNyQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHdCQUF3QjtZQUNyQyxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztZQUNwQyxTQUFTLEVBQUUsQ0FBQywwQkFBVyxDQUFDO1NBQ3pCLENBQUM7eUNBT2lDLDBCQUFXLEVBQWtCLHlCQUFnQixFQUFrQiw4QkFBYTtPQU5sRyxjQUFjLENBcUMxQjtJQUFELHFCQUFDO0NBQUEsQUFyQ0QsSUFxQ0M7QUFyQ1ksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBBcHBsaWNhdGlvblNldHRpbmdzIGZyb20gJ2FwcGxpY2F0aW9uLXNldHRpbmdzJztcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvdXNlci5zZXJ2aWNlJztcbmltcG9ydCB7IEdsb2JhbFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9nbG9iYWwuc2VydmljZSc7XG5pbXBvcnQgeyBMb2dpbklucHV0IH0gZnJvbSAnfi9tb2RlbHMvbG9naW5JbnB1dCc7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgU25hY2tCYXIgfSBmcm9tICduYXRpdmVzY3JpcHQtc25hY2tiYXInO1xuaW1wb3J0IHsgUmFkRGF0YUZvcm1Db21wb25lbnQgfSBmcm9tICduYXRpdmVzY3JpcHQtcHJvLXVpL2RhdGFmb3JtL2FuZ3VsYXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtbG9naW4nLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICB0ZW1wbGF0ZVVybDogJy4vbG9naW4uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9sb2dpbi5jb21wb25lbnQuY3NzJ10sXG4gIHByb3ZpZGVyczogW1VzZXJTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIFxuICBsb2FkaW5nOiBib29sZWFuO1xuICBpbnB1dDogIExvZ2luSW5wdXQ7XG4gIEBWaWV3Q2hpbGQoJ215TG9naW5EYXRhRm9ybScpIG15TG9naW5EYXRhRm9ybUNvbXA6IFJhZERhdGFGb3JtQ29tcG9uZW50O1xuICBcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zLCBwcml2YXRlIGdsb2JhbDogR2xvYmFsU2VydmljZSkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgaWYoQXBwbGljYXRpb25TZXR0aW5ncy5nZXRTdHJpbmcoJ3Rva2VuJykgJiYgQXBwbGljYXRpb25TZXR0aW5ncy5nZXRTdHJpbmcoJ2FjY291bnQnKSkge1xuICAgICAgdGhpcy5nbG9iYWwubWUgPSBKU09OLnBhcnNlKEFwcGxpY2F0aW9uU2V0dGluZ3MuZ2V0U3RyaW5nKCdhY2NvdW50JykpO1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvaXRlbXMnXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XG4gICAgfVxuICAgIHRoaXMuaW5wdXQgPSBuZXcgTG9naW5JbnB1dChcIlwiLCBcIlwiKTtcbiAgfVxuXG4gIG9uTG9naW4oKSB7XG4gICAgaWYoIXRoaXMubXlMb2dpbkRhdGFGb3JtQ29tcC5kYXRhRm9ybS5oYXNWYWxpZGF0aW9uRXJyb3JzKCkpe1xuICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgIGNvbnN0IHVzZXJEYXRhID0geyB1c2VybmFtZTogdGhpcy5pbnB1dC51c2VybmFtZSwgcGFzc3dvcmQ6IHRoaXMuaW5wdXQucGFzc3dvcmQgfVxuICAgICAgdGhpcy51c2VyU2VydmljZS5sb2dpblVzZXIodXNlckRhdGEpLnN1YnNjcmliZShcbiAgICAgICAgKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgQXBwbGljYXRpb25TZXR0aW5ncy5zZXRTdHJpbmcoJ3Rva2VuJywgcmVzcG9uc2VbJ3Rva2VuJ10pO1xuICAgICAgICAgIHRoaXMuZ2xvYmFsLm1lID0gcmVzcG9uc2VbJ3VzZXInXTtcbiAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9pdGVtcyddLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgKGVycm9yKSA9PiB7XG4gICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgKG5ldyBTbmFja0JhcigpKS5zaW1wbGUoJ1dyb25nIENyZWRlbnRpYWxzIScpO1xuICAgICAgICB9XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICAobmV3IFNuYWNrQmFyKCkpLnNpbXBsZSgnQWxsIEZpZWxkcyBSZXF1aXJlZCEnKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==