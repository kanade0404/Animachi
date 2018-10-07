"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_service_1 = require("../services/user.service");
var router_1 = require("@angular/router");
var registerInput_1 = require("~/models/registerInput");
var angular_1 = require("nativescript-pro-ui/dataform/angular");
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.loading = false;
        this.input = new registerInput_1.RegisterInput("", "", "");
    };
    RegisterComponent.prototype.onRegister = function () {
        var _this = this;
        if (!this.myRegisterDataFormComp.dataForm.hasValidationErrors()) {
            this.loading = true;
            var userData = { username: this.input.username, password: this.input.password, email: this.input.email };
            this.userService.registerUser(userData).subscribe(function (data) {
                _this.loading = false;
                console.log('data', data);
                _this.router.navigate(['/login']);
            }, function (error) {
                _this.loading = false;
                console.log('error', error);
            });
        }
    };
    __decorate([
        core_1.ViewChild('myRegisterDataForm'),
        __metadata("design:type", angular_1.RadDataFormComponent)
    ], RegisterComponent.prototype, "myRegisterDataFormComp", void 0);
    RegisterComponent = __decorate([
        core_1.Component({
            selector: 'app-register',
            moduleId: module.id,
            templateUrl: './register.component.html',
            styleUrls: ['./register.component.css'],
            providers: [user_service_1.UserService]
        }),
        __metadata("design:paramtypes", [user_service_1.UserService, router_1.Router])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVnaXN0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTZEO0FBQzdELHlEQUF1RDtBQUN2RCwwQ0FBeUM7QUFDekMsd0RBQXVEO0FBQ3ZELGdFQUE0RTtBQVM1RTtJQUtFLDJCQUFvQixXQUF3QixFQUFVLE1BQWM7UUFBaEQsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQUcsQ0FBQztJQUV4RSxvQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLDZCQUFhLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQsc0NBQVUsR0FBVjtRQUFBLGlCQWdCQztRQWZDLEVBQUUsQ0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMvRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztZQUNwQixJQUFNLFFBQVEsR0FBRyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUE7WUFDMUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUMvQyxVQUFDLElBQUk7Z0JBQ0gsS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7Z0JBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUMxQixLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDbkMsQ0FBQyxFQUNELFVBQUMsS0FBSztnQkFDSixLQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztnQkFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDOUIsQ0FBQyxDQUNGLENBQUM7UUFDSixDQUFDO0lBQ0gsQ0FBQztJQXpCZ0M7UUFBaEMsZ0JBQVMsQ0FBQyxvQkFBb0IsQ0FBQztrQ0FBeUIsOEJBQW9CO3FFQUFDO0lBSG5FLGlCQUFpQjtRQVA3QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGNBQWM7WUFDeEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSwyQkFBMkI7WUFDeEMsU0FBUyxFQUFFLENBQUMsMEJBQTBCLENBQUM7WUFDdkMsU0FBUyxFQUFFLENBQUMsMEJBQVcsQ0FBQztTQUN6QixDQUFDO3lDQU1pQywwQkFBVyxFQUFrQixlQUFNO09BTHpELGlCQUFpQixDQTZCN0I7SUFBRCx3QkFBQztDQUFBLEFBN0JELElBNkJDO0FBN0JZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvdXNlci5zZXJ2aWNlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBSZWdpc3RlcklucHV0IH0gZnJvbSAnfi9tb2RlbHMvcmVnaXN0ZXJJbnB1dCc7XG5pbXBvcnQgeyBSYWREYXRhRm9ybUNvbXBvbmVudCB9IGZyb20gJ25hdGl2ZXNjcmlwdC1wcm8tdWkvZGF0YWZvcm0vYW5ndWxhcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1yZWdpc3RlcicsXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHRlbXBsYXRlVXJsOiAnLi9yZWdpc3Rlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MnXSxcbiAgcHJvdmlkZXJzOiBbVXNlclNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIFJlZ2lzdGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgaW5wdXQ6IFJlZ2lzdGVySW5wdXQ7XG4gIGxvYWRpbmc6IGJvb2xlYW47XG4gIEBWaWV3Q2hpbGQoJ215UmVnaXN0ZXJEYXRhRm9ybScpIG15UmVnaXN0ZXJEYXRhRm9ybUNvbXA6IFJhZERhdGFGb3JtQ29tcG9uZW50O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7fVxuICBcbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgdGhpcy5pbnB1dCA9IG5ldyBSZWdpc3RlcklucHV0KFwiXCIsIFwiXCIsIFwiXCIpO1xuICB9XG4gIFxuICBvblJlZ2lzdGVyKCkge1xuICAgIGlmKCF0aGlzLm15UmVnaXN0ZXJEYXRhRm9ybUNvbXAuZGF0YUZvcm0uaGFzVmFsaWRhdGlvbkVycm9ycygpKSB7XG4gICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgY29uc3QgdXNlckRhdGEgPSB7IHVzZXJuYW1lOiB0aGlzLmlucHV0LnVzZXJuYW1lLCBwYXNzd29yZDogdGhpcy5pbnB1dC5wYXNzd29yZCwgZW1haWw6IHRoaXMuaW5wdXQuZW1haWwgfVxuICAgICAgdGhpcy51c2VyU2VydmljZS5yZWdpc3RlclVzZXIodXNlckRhdGEpLnN1YnNjcmliZShcbiAgICAgICAgKGRhdGEpID0+IHtcbiAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICBjb25zb2xlLmxvZygnZGF0YScsIGRhdGEpO1xuICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2xvZ2luJ10pO1xuICAgICAgICB9LFxuICAgICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICBjb25zb2xlLmxvZygnZXJyb3InLCBlcnJvcik7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfVxuICB9XG59XG4iXX0=