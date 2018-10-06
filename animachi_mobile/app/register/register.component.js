"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_service_1 = require("../services/user.service");
var router_1 = require("@angular/router");
var angular_1 = require("nativescript-pro-ui/dataform/angular");
var registerInput_1 = require("../models/registerInput");
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
            var userData = { username: this.input.username, password: this.input.password,
                email: this.input.email };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVnaXN0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXFFO0FBQ3JFLHlEQUF1RDtBQUN2RCwwQ0FBeUM7QUFDekMsZ0VBQTRFO0FBQzVFLHlEQUF3RDtBQVN4RDtJQU1JLDJCQUFvQixXQUF3QixFQUFVLE1BQWM7UUFBaEQsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQUcsQ0FBQztJQUV4RSxvQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLDZCQUFhLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUMsc0NBQVUsR0FBVjtRQUFBLGlCQWlCQztRQWhCQyxFQUFFLENBQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDL0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7WUFDcEIsSUFBTSxRQUFRLEdBQUcsRUFBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUTtnQkFDN0QsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFDLENBQUE7WUFDekMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUM3QyxVQUFDLElBQUk7Z0JBQ0gsS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7Z0JBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUMxQixLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDckMsQ0FBQyxFQUNELFVBQUMsS0FBSztnQkFDRixLQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztnQkFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDaEMsQ0FBQyxDQUNKLENBQUM7UUFDSixDQUFDO0lBQ0gsQ0FBQztJQTFCZ0M7UUFBaEMsZ0JBQVMsQ0FBQyxvQkFBb0IsQ0FBQztrQ0FBeUIsOEJBQW9CO3FFQUFDO0lBSnJFLGlCQUFpQjtRQVA3QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGNBQWM7WUFDeEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSwyQkFBMkI7WUFDeEMsU0FBUyxFQUFFLENBQUMsMEJBQTBCLENBQUM7WUFDdkMsU0FBUyxFQUFFLENBQUMsMEJBQVcsQ0FBQztTQUN6QixDQUFDO3lDQU9tQywwQkFBVyxFQUFrQixlQUFNO09BTjNELGlCQUFpQixDQWdDM0I7SUFBRCx3QkFBQztDQUFBLEFBaENILElBZ0NHO0FBaENVLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbmplY3QsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy91c2VyLnNlcnZpY2UnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFJhZERhdGFGb3JtQ29tcG9uZW50IH0gZnJvbSAnbmF0aXZlc2NyaXB0LXByby11aS9kYXRhZm9ybS9hbmd1bGFyJztcbmltcG9ydCB7IFJlZ2lzdGVySW5wdXQgfSBmcm9tICcuLi9tb2RlbHMvcmVnaXN0ZXJJbnB1dCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1yZWdpc3RlcicsXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHRlbXBsYXRlVXJsOiAnLi9yZWdpc3Rlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MnXSxcbiAgcHJvdmlkZXJzOiBbVXNlclNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIFJlZ2lzdGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIHByaXZhdGUgaW5wdXQ6IFJlZ2lzdGVySW5wdXQ7XG4gICAgcHJpdmF0ZSBsb2FkaW5nOiBib29sZWFuO1xuICAgIEBWaWV3Q2hpbGQoJ215UmVnaXN0ZXJEYXRhRm9ybScpIG15UmVnaXN0ZXJEYXRhRm9ybUNvbXA6IFJhZERhdGFGb3JtQ29tcG9uZW50O1xuICBcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge31cbiAgXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMuaW5wdXQgPSBuZXcgUmVnaXN0ZXJJbnB1dChcIlwiLCBcIlwiLCBcIlwiKTtcbiAgfVxuICBcbiAgICBvblJlZ2lzdGVyICgpIHtcbiAgICAgIGlmKCF0aGlzLm15UmVnaXN0ZXJEYXRhRm9ybUNvbXAuZGF0YUZvcm0uaGFzVmFsaWRhdGlvbkVycm9ycygpKSB7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICAgIGNvbnN0IHVzZXJEYXRhID0ge3VzZXJuYW1lOiB0aGlzLmlucHV0LnVzZXJuYW1lLCBwYXNzd29yZDogdGhpcy5pbnB1dC5wYXNzd29yZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICBlbWFpbDogdGhpcy5pbnB1dC5lbWFpbH1cbiAgICAgICAgdGhpcy51c2VyU2VydmljZS5yZWdpc3RlclVzZXIodXNlckRhdGEpLnN1YnNjcmliZShcbiAgICAgICAgICAgIChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkYXRhJywgZGF0YSk7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvbG9naW4nXSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yJywgZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgXG4gIH0iXX0=