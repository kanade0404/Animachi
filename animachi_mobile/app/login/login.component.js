"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ApplicationSettings = require("application-settings");
var user_service_1 = require("../services/user.service");
var global_service_1 = require("../services/global.service");
var angular_1 = require("nativescript-pro-ui/dataform/angular");
var nativescript_snackbar_1 = require("nativescript-snackbar");
var loginInput_1 = require("~/models/loginInput");
var router_1 = require("nativescript-angular/router");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(userService, router, globals) {
        this.userService = userService;
        this.router = router;
        this.globals = globals;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loading = false;
        if (ApplicationSettings.getString('account') && ApplicationSettings.getString('token')) {
            this.globals.me = JSON.parse(ApplicationSettings.getString('account'));
            this.router.navigate(["/items"], { clearHistory: true });
        }
        this.input = new loginInput_1.LoginInput("", "");
    };
    LoginComponent.prototype.onLogin = function () {
        var _this = this;
        if (!this.myLoginDataFormComp.dataForm.hasValidationErrors()) {
            this.loading = true;
            var userData = { username: this.input.username, password: this.input.password };
            this.userService.loginUser(userData)
                .subscribe(function (response) {
                ApplicationSettings.setString('token', response['token']);
                _this.globals.me = response['user'];
                _this.router.navigate(["/items"], { clearHistory: true });
            }, function (error) {
                _this.loading = false;
                new nativescript_snackbar_1.SnackBar().simple("Incorrect Credentials. Please try again.");
            });
        }
        else {
            (new nativescript_snackbar_1.SnackBar()).simple("All Fields Required!");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTZEO0FBQzdELDBEQUE0RDtBQUM1RCx5REFBdUQ7QUFDdkQsNkRBQTJEO0FBQzNELGdFQUE0RTtBQUM1RSwrREFBaUQ7QUFDakQsa0RBQWlEO0FBQ2pELHNEQUErRDtBQVMvRDtJQU1JLHdCQUFvQixXQUF3QixFQUFVLE1BQXdCLEVBQVUsT0FBc0I7UUFBMUYsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQWU7SUFDOUcsQ0FBQztJQUVELGlDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNyQixFQUFFLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLElBQUksbUJBQW1CLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN2RixJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ3ZFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUMzRCxDQUFDO1FBQ0QsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLHVCQUFVLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFDRCxnQ0FBTyxHQUFQO1FBQUEsaUJBbUJDO1FBbEJDLEVBQUUsQ0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUM1RCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztZQUNwQixJQUFNLFFBQVEsR0FBRyxFQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUMsQ0FBQTtZQUMvRSxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUM7aUJBQy9CLFNBQVMsQ0FDTixVQUFDLFFBQVE7Z0JBQ1AsbUJBQW1CLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDMUQsS0FBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNuQyxLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7WUFDM0QsQ0FBQyxFQUNELFVBQUMsS0FBSztnQkFDRixLQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztnQkFDckIsSUFBSSxnQ0FBUSxFQUFFLENBQUMsTUFBTSxDQUFDLDBDQUEwQyxDQUFDLENBQUM7WUFDdEUsQ0FBQyxDQUNKLENBQUM7UUFDVixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixDQUFDLElBQUksZ0NBQVEsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFDcEQsQ0FBQztJQUNELENBQUM7SUFoQzZCO1FBQTdCLGdCQUFTLENBQUMsaUJBQWlCLENBQUM7a0NBQXNCLDhCQUFvQjsrREFBQztJQUovRCxjQUFjO1FBUDFCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsV0FBVztZQUNyQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHdCQUF3QjtZQUNyQyxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztZQUNwQyxTQUFTLEVBQUUsQ0FBQywwQkFBVyxDQUFDO1NBQ3pCLENBQUM7eUNBT21DLDBCQUFXLEVBQWtCLHlCQUFnQixFQUFtQiw4QkFBYTtPQU5yRyxjQUFjLENBcUN4QjtJQUFELHFCQUFDO0NBQUEsQUFyQ0gsSUFxQ0c7QUFyQ1Usd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBBcHBsaWNhdGlvblNldHRpbmdzIGZyb20gXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy91c2VyLnNlcnZpY2UnO1xuaW1wb3J0IHsgR2xvYmFsU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2dsb2JhbC5zZXJ2aWNlJztcbmltcG9ydCB7IFJhZERhdGFGb3JtQ29tcG9uZW50IH0gZnJvbSAnbmF0aXZlc2NyaXB0LXByby11aS9kYXRhZm9ybS9hbmd1bGFyJztcbmltcG9ydCB7IFNuYWNrQmFyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1zbmFja2JhclwiO1xuaW1wb3J0IHsgTG9naW5JbnB1dCB9IGZyb20gJ34vbW9kZWxzL2xvZ2luSW5wdXQnO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1sb2dpbicsXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHRlbXBsYXRlVXJsOiAnLi9sb2dpbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2xvZ2luLmNvbXBvbmVudC5jc3MnXSxcbiAgcHJvdmlkZXJzOiBbVXNlclNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIGxvYWRpbmc6IGJvb2xlYW47XG4gICAgaW5wdXQ6IExvZ2luSW5wdXQ7XG4gICAgQFZpZXdDaGlsZCgnbXlMb2dpbkRhdGFGb3JtJykgbXlMb2dpbkRhdGFGb3JtQ29tcDogUmFkRGF0YUZvcm1Db21wb25lbnQ7XG4gIFxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSBnbG9iYWxzOiBHbG9iYWxTZXJ2aWNlKSB7XG4gICAgfVxuICBcbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGlmIChBcHBsaWNhdGlvblNldHRpbmdzLmdldFN0cmluZygnYWNjb3VudCcpICYmIEFwcGxpY2F0aW9uU2V0dGluZ3MuZ2V0U3RyaW5nKCd0b2tlbicpKSB7XG4gICAgICAgICAgdGhpcy5nbG9iYWxzLm1lID0gSlNPTi5wYXJzZShBcHBsaWNhdGlvblNldHRpbmdzLmdldFN0cmluZygnYWNjb3VudCcpKTtcbiAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvaXRlbXNcIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW5wdXQgPSBuZXcgTG9naW5JbnB1dChcIlwiLCBcIlwiKTtcbiAgICB9XG4gICAgb25Mb2dpbigpIHtcbiAgICAgIGlmKCF0aGlzLm15TG9naW5EYXRhRm9ybUNvbXAuZGF0YUZvcm0uaGFzVmFsaWRhdGlvbkVycm9ycygpKSB7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICAgIGNvbnN0IHVzZXJEYXRhID0ge3VzZXJuYW1lOiB0aGlzLmlucHV0LnVzZXJuYW1lLCBwYXNzd29yZDogdGhpcy5pbnB1dC5wYXNzd29yZH1cbiAgICAgICAgdGhpcy51c2VyU2VydmljZS5sb2dpblVzZXIodXNlckRhdGEpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgIChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgQXBwbGljYXRpb25TZXR0aW5ncy5zZXRTdHJpbmcoJ3Rva2VuJywgcmVzcG9uc2VbJ3Rva2VuJ10pO1xuICAgICAgICAgICAgICAgICAgdGhpcy5nbG9iYWxzLm1lID0gcmVzcG9uc2VbJ3VzZXInXTtcbiAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9pdGVtc1wiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIG5ldyBTbmFja0JhcigpLnNpbXBsZShcIkluY29ycmVjdCBDcmVkZW50aWFscy4gUGxlYXNlIHRyeSBhZ2Fpbi5cIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAobmV3IFNuYWNrQmFyKCkpLnNpbXBsZShcIkFsbCBGaWVsZHMgUmVxdWlyZWQhXCIpO1xuICAgIH1cbiAgICB9XG4gIH1cbiAgIl19