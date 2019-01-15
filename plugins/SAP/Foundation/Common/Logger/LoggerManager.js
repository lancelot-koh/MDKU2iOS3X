"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LoggerManager = /** @class */ (function () {
    function LoggerManager() {
        //
    }
    LoggerManager.init = function (logFileName, maxSizeOfRolloverInMegaBytes) {
        if (logFileName === void 0) { logFileName = undefined; }
        if (maxSizeOfRolloverInMegaBytes === void 0) { maxSizeOfRolloverInMegaBytes = undefined; }
        //
    };
    LoggerManager.getInstance = function () {
        return '';
    };
    LoggerManager.clearLog = function () {
        //
    };
    LoggerManager.prototype.toggle = function () {
        return new Promise(function (resolve, reject) { return resolve(''); });
    };
    LoggerManager.prototype.on = function () {
        return new Promise(function (resolve, reject) { return resolve(''); });
    };
    LoggerManager.prototype.off = function () {
        return new Promise(function (resolve, reject) { return resolve(''); });
    };
    LoggerManager.prototype.isTurnedOn = function () {
        return false;
    };
    LoggerManager.prototype.isLogSeverityHigher = function (severity) {
        return false;
    };
    LoggerManager.prototype.getLevel = function () {
        return '';
    };
    LoggerManager.prototype.setLevel = function (logLevel) {
        return new Promise(function (resolve, reject) { return resolve(''); });
    };
    LoggerManager.prototype.log = function (message, severity) {
        if (severity === void 0) { severity = undefined; }
        return new Promise(function (resolve, reject) { return resolve(''); });
    };
    LoggerManager.prototype.uploadLogFile = function (backendURL, applicationID) {
        return new Promise(function (resolve, reject) { return resolve(''); });
    };
    return LoggerManager;
}());
exports.LoggerManager = LoggerManager;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9nZ2VyTWFuYWdlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkxvZ2dlck1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtJQWNFO1FBQ0UsRUFBRTtJQUNKLENBQUM7SUFkYSxrQkFBSSxHQUFsQixVQUFtQixXQUF1QixFQUFFLDRCQUF3QztRQUFqRSw0QkFBQSxFQUFBLHVCQUF1QjtRQUFFLDZDQUFBLEVBQUEsd0NBQXdDO1FBQ2xGLEVBQUU7SUFDSixDQUFDO0lBRWEseUJBQVcsR0FBekI7UUFDRSxNQUFNLENBQUMsRUFBRSxDQUFDO0lBQ1osQ0FBQztJQUVhLHNCQUFRLEdBQXRCO1FBQ0UsRUFBRTtJQUNKLENBQUM7SUFNTSw4QkFBTSxHQUFiO1FBQ0UsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU0sSUFBSyxPQUFBLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBWCxDQUFXLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRU0sMEJBQUUsR0FBVDtRQUNFLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNLElBQUssT0FBQSxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQVgsQ0FBVyxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVNLDJCQUFHLEdBQVY7UUFDRSxNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTSxJQUFLLE9BQUEsT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUFYLENBQVcsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFFTSxrQ0FBVSxHQUFqQjtRQUNFLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRU0sMkNBQW1CLEdBQTFCLFVBQTJCLFFBQVE7UUFDakMsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNmLENBQUM7SUFFTSxnQ0FBUSxHQUFmO1FBQ0UsTUFBTSxDQUFDLEVBQUUsQ0FBQztJQUNaLENBQUM7SUFFTSxnQ0FBUSxHQUFmLFVBQWdCLFFBQVE7UUFDdEIsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU0sSUFBSyxPQUFBLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBWCxDQUFXLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRU0sMkJBQUcsR0FBVixVQUFXLE9BQU8sRUFBRSxRQUFvQjtRQUFwQix5QkFBQSxFQUFBLG9CQUFvQjtRQUN0QyxNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTSxJQUFLLE9BQUEsT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUFYLENBQVcsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFFTSxxQ0FBYSxHQUFwQixVQUFxQixVQUFrQixFQUFFLGFBQXFCO1FBQzVELE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNLElBQUssT0FBQSxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQVgsQ0FBVyxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVILG9CQUFDO0FBQUQsQ0FBQyxBQXRERCxJQXNEQztBQXREWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBMb2dnZXJNYW5hZ2VyIHtcblxuICBwdWJsaWMgc3RhdGljIGluaXQobG9nRmlsZU5hbWUgPSB1bmRlZmluZWQsIG1heFNpemVPZlJvbGxvdmVySW5NZWdhQnl0ZXMgPSB1bmRlZmluZWQpIHtcbiAgICAvL1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZSgpOiBhbnkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgY2xlYXJMb2coKSB7XG4gICAgLy9cbiAgfVxuXG4gIHByaXZhdGUgY29uc3RydWN0b3IoKSB7XG4gICAgLy9cbiAgfVxuXG4gIHB1YmxpYyB0b2dnbGUoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4gcmVzb2x2ZSgnJykpO1xuICB9XG5cbiAgcHVibGljIG9uKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHJlc29sdmUoJycpKTtcbiAgfVxuXG4gIHB1YmxpYyBvZmYoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4gcmVzb2x2ZSgnJykpO1xuICB9XG5cbiAgcHVibGljIGlzVHVybmVkT24oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcHVibGljIGlzTG9nU2V2ZXJpdHlIaWdoZXIoc2V2ZXJpdHkpOiBib29sZWFuIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBwdWJsaWMgZ2V0TGV2ZWwoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBwdWJsaWMgc2V0TGV2ZWwobG9nTGV2ZWwpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiByZXNvbHZlKCcnKSk7XG4gIH1cblxuICBwdWJsaWMgbG9nKG1lc3NhZ2UsIHNldmVyaXR5ID0gdW5kZWZpbmVkKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4gcmVzb2x2ZSgnJykpO1xuICB9XG5cbiAgcHVibGljIHVwbG9hZExvZ0ZpbGUoYmFja2VuZFVSTDogc3RyaW5nLCBhcHBsaWNhdGlvbklEOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiByZXNvbHZlKCcnKSk7XG4gIH1cblxufVxuIl19