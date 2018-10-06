"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var user_1 = require("../models/user");
var ApplicationSettings = require("application-settings");
var GlobalService = /** @class */ (function () {
    function GlobalService() {
        this.userSource = new rxjs_1.BehaviorSubject(new user_1.User());
        this.user = this.userSource.asObservable();
    }
    Object.defineProperty(GlobalService.prototype, "me", {
        set: function (user) {
            ApplicationSettings.setString('account', JSON.stringify(user));
            this.userSource.next(user);
        },
        enumerable: true,
        configurable: true
    });
    GlobalService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], GlobalService);
    return GlobalService;
}());
exports.GlobalService = GlobalService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJnbG9iYWwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyw2QkFBdUM7QUFDdkMsdUNBQXNDO0FBQ3RDLDBEQUE0RDtBQUs1RDtJQUhBO1FBS1UsZUFBVSxHQUFHLElBQUksc0JBQWUsQ0FBTyxJQUFJLFdBQUksRUFBRSxDQUFDLENBQUM7UUFDM0QsU0FBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUFFLENBQUM7SUFLeEMsQ0FBQztJQUpDLHNCQUFJLDZCQUFFO2FBQU4sVUFBTyxJQUFVO1lBQ2YsbUJBQW1CLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDL0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0IsQ0FBQzs7O09BQUE7SUFQVSxhQUFhO1FBSHpCLGlCQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO09BQ1csYUFBYSxDQVF6QjtJQUFELG9CQUFDO0NBQUEsQUFSRCxJQVFDO0FBUlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi9tb2RlbHMvdXNlcic7XG5pbXBvcnQgKiBhcyBBcHBsaWNhdGlvblNldHRpbmdzIGZyb20gXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBHbG9iYWxTZXJ2aWNlIHtcblxuICBwcml2YXRlIHVzZXJTb3VyY2UgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PFVzZXI+KG5ldyBVc2VyKCkpO1xuICB1c2VyID0gdGhpcy51c2VyU291cmNlLmFzT2JzZXJ2YWJsZSgpO1xuICBzZXQgbWUodXNlcjogVXNlcikge1xuICAgIEFwcGxpY2F0aW9uU2V0dGluZ3Muc2V0U3RyaW5nKCdhY2NvdW50JywgSlNPTi5zdHJpbmdpZnkodXNlcikpO1xuICAgIHRoaXMudXNlclNvdXJjZS5uZXh0KHVzZXIpO1xuICB9XG59XG4iXX0=