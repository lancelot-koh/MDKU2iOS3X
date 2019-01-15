"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PushNotification = /** @class */ (function () {
    function PushNotification() {
        if (PushNotification._instance) {
            throw new Error('Error: Instantiation failed. Use getInstance() instead of new.');
        }
        PushNotification._instance = this;
    }
    PushNotification.getInstance = function () {
        return PushNotification._instance;
    };
    PushNotification.prototype.registerForPushNotification = function (applicationId, baseUrlString, deviceId) {
        return new Promise(function (resolve) { return resolve('Dummy resolve'); });
    };
    PushNotification.prototype.didRegisterForRemoteNotifications = function (deviceToken) {
        //
    };
    PushNotification.prototype.didFailToRegisterNotifications = function (error) {
        //
    };
    PushNotification.prototype.unregisterForPushNotification = function (applicationId, baseUrlString, deviceId) {
        return new Promise(function (resolve) { return resolve('Dummy resolve'); });
    };
    PushNotification._instance = new PushNotification();
    return PushNotification;
}());
exports.PushNotification = PushNotification;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHVzaE5vdGlmaWNhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlB1c2hOb3RpZmljYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtJQVFFO1FBQ0UsRUFBRSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUMvQixNQUFNLElBQUksS0FBSyxDQUFDLGdFQUFnRSxDQUFDLENBQUM7UUFDcEYsQ0FBQztRQUNELGdCQUFnQixDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7SUFDcEMsQ0FBQztJQVhhLDRCQUFXLEdBQXpCO1FBQ0UsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQztJQUNwQyxDQUFDO0lBV00sc0RBQTJCLEdBQWxDLFVBQW1DLGFBQXFCLEVBQUUsYUFBcUIsRUFBRSxRQUFnQjtRQUMvRixNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLElBQUssT0FBQSxPQUFPLENBQUMsZUFBZSxDQUFDLEVBQXhCLENBQXdCLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRU0sNERBQWlDLEdBQXhDLFVBQXlDLFdBQWdCO1FBQ3ZELEVBQUU7SUFDSixDQUFDO0lBRU0seURBQThCLEdBQXJDLFVBQXNDLEtBQVU7UUFDOUMsRUFBRTtJQUNKLENBQUM7SUFFTSx3REFBNkIsR0FBcEMsVUFBcUMsYUFBcUIsRUFBRSxhQUFxQixFQUFFLFFBQWdCO1FBQ2pHLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sSUFBSyxPQUFBLE9BQU8sQ0FBQyxlQUFlLENBQUMsRUFBeEIsQ0FBd0IsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUF2QmMsMEJBQVMsR0FBcUIsSUFBSSxnQkFBZ0IsRUFBRSxDQUFDO0lBd0J0RSx1QkFBQztDQUFBLEFBOUJELElBOEJDO0FBOUJZLDRDQUFnQjtBQThCNUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBQdXNoTm90aWZpY2F0aW9uIHtcbiAgXG4gIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2UoKTogUHVzaE5vdGlmaWNhdGlvbiB7XG4gICAgcmV0dXJuIFB1c2hOb3RpZmljYXRpb24uX2luc3RhbmNlO1xuICB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBQdXNoTm90aWZpY2F0aW9uID0gbmV3IFB1c2hOb3RpZmljYXRpb24oKTtcblxuICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge1xuICAgIGlmIChQdXNoTm90aWZpY2F0aW9uLl9pbnN0YW5jZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFcnJvcjogSW5zdGFudGlhdGlvbiBmYWlsZWQuIFVzZSBnZXRJbnN0YW5jZSgpIGluc3RlYWQgb2YgbmV3LicpO1xuICAgIH1cbiAgICBQdXNoTm90aWZpY2F0aW9uLl9pbnN0YW5jZSA9IHRoaXM7XG4gIH1cblxuICBwdWJsaWMgcmVnaXN0ZXJGb3JQdXNoTm90aWZpY2F0aW9uKGFwcGxpY2F0aW9uSWQ6IHN0cmluZywgYmFzZVVybFN0cmluZzogc3RyaW5nLCBkZXZpY2VJZDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHJlc29sdmUoJ0R1bW15IHJlc29sdmUnKSk7ICAgIFxuICB9XG5cbiAgcHVibGljIGRpZFJlZ2lzdGVyRm9yUmVtb3RlTm90aWZpY2F0aW9ucyhkZXZpY2VUb2tlbjogYW55KSB7XG4gICAgLy9cbiAgfVxuXG4gIHB1YmxpYyBkaWRGYWlsVG9SZWdpc3Rlck5vdGlmaWNhdGlvbnMoZXJyb3I6IGFueSkge1xuICAgIC8vXG4gIH1cblxuICBwdWJsaWMgdW5yZWdpc3RlckZvclB1c2hOb3RpZmljYXRpb24oYXBwbGljYXRpb25JZDogc3RyaW5nLCBiYXNlVXJsU3RyaW5nOiBzdHJpbmcsIGRldmljZUlkOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gcmVzb2x2ZSgnRHVtbXkgcmVzb2x2ZScpKTsgICAgICAgIFxuICB9ICAgIFxufTtcbiJdfQ==