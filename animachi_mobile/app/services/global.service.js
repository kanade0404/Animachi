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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJnbG9iYWwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyw2QkFBdUM7QUFDdkMsdUNBQXNDO0FBQ3RDLDBEQUE0RDtBQUs1RDtJQUhBO1FBS1UsZUFBVSxHQUFHLElBQUksc0JBQWUsQ0FBTyxJQUFJLFdBQUksRUFBRSxDQUFDLENBQUM7UUFDM0QsU0FBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUFFLENBQUM7SUFLeEMsQ0FBQztJQUpDLHNCQUFJLDZCQUFFO2FBQU4sVUFBTyxJQUFVO1lBQ2YsbUJBQW1CLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDL0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0IsQ0FBQzs7O09BQUE7SUFQVSxhQUFhO1FBSHpCLGlCQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO09BQ1csYUFBYSxDQVF6QjtJQUFELG9CQUFDO0NBQUEsQUFSRCxJQVFDO0FBUlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi9tb2RlbHMvdXNlcic7XG5pbXBvcnQgKiBhcyBBcHBsaWNhdGlvblNldHRpbmdzIGZyb20gJ2FwcGxpY2F0aW9uLXNldHRpbmdzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgR2xvYmFsU2VydmljZSB7XG5cbiAgcHJpdmF0ZSB1c2VyU291cmNlID0gbmV3IEJlaGF2aW9yU3ViamVjdDxVc2VyPihuZXcgVXNlcigpKTtcbiAgdXNlciA9IHRoaXMudXNlclNvdXJjZS5hc09ic2VydmFibGUoKTtcbiAgc2V0IG1lKHVzZXI6IFVzZXIpIHtcbiAgICBBcHBsaWNhdGlvblNldHRpbmdzLnNldFN0cmluZygnYWNjb3VudCcsIEpTT04uc3RyaW5naWZ5KHVzZXIpKTtcbiAgICB0aGlzLnVzZXJTb3VyY2UubmV4dCh1c2VyKTtcbiAgfVxufVxuIl19