"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SharedLoggerManager = /** @class */ (function () {
    function SharedLoggerManager() {
    }
    SharedLoggerManager.log = function (message, severity) {
        if (severity === void 0) { severity = undefined; }
        return new Promise(function (resolve, reject) { return resolve(''); });
    };
    SharedLoggerManager.pluginError = function (message) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return new Promise(function (resolve, reject) { return resolve(''); });
    };
    SharedLoggerManager.pluginDebug = function (message) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return new Promise(function (resolve, reject) { return resolve(''); });
    };
    SharedLoggerManager.pluginInfo = function (message) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return new Promise(function (resolve, reject) { return resolve(''); });
    };
    SharedLoggerManager.pluginWarn = function (message) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return new Promise(function (resolve, reject) { return resolve(''); });
    };
    return SharedLoggerManager;
}());
exports.SharedLoggerManager = SharedLoggerManager;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2hhcmVkTG9nZ2VyTWFuYWdlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlNoYXJlZExvZ2dlck1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtJQUFBO0lBb0JBLENBQUM7SUFuQmUsdUJBQUcsR0FBakIsVUFBa0IsT0FBTyxFQUFFLFFBQW9CO1FBQXBCLHlCQUFBLEVBQUEsb0JBQW9CO1FBQzdDLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNLElBQUssT0FBQSxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQVgsQ0FBVyxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVhLCtCQUFXLEdBQXpCLFVBQTBCLE9BQU87UUFBRSxjQUFPO2FBQVAsVUFBTyxFQUFQLHFCQUFPLEVBQVAsSUFBTztZQUFQLDZCQUFPOztRQUN4QyxNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTSxJQUFLLE9BQUEsT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUFYLENBQVcsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFFYSwrQkFBVyxHQUF6QixVQUEwQixPQUFPO1FBQUUsY0FBTzthQUFQLFVBQU8sRUFBUCxxQkFBTyxFQUFQLElBQU87WUFBUCw2QkFBTzs7UUFDeEMsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU0sSUFBSyxPQUFBLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBWCxDQUFXLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRWEsOEJBQVUsR0FBeEIsVUFBeUIsT0FBTztRQUFFLGNBQU87YUFBUCxVQUFPLEVBQVAscUJBQU8sRUFBUCxJQUFPO1lBQVAsNkJBQU87O1FBQ3ZDLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNLElBQUssT0FBQSxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQVgsQ0FBVyxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVhLDhCQUFVLEdBQXhCLFVBQXlCLE9BQU87UUFBRSxjQUFPO2FBQVAsVUFBTyxFQUFQLHFCQUFPLEVBQVAsSUFBTztZQUFQLDZCQUFPOztRQUN2QyxNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTSxJQUFLLE9BQUEsT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUFYLENBQVcsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFDSCwwQkFBQztBQUFELENBQUMsQUFwQkQsSUFvQkM7QUFwQlksa0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFNoYXJlZExvZ2dlck1hbmFnZXIge1xuICBwdWJsaWMgc3RhdGljIGxvZyhtZXNzYWdlLCBzZXZlcml0eSA9IHVuZGVmaW5lZCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHJlc29sdmUoJycpKTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgcGx1Z2luRXJyb3IobWVzc2FnZSwgLi4uYXJncyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHJlc29sdmUoJycpKTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgcGx1Z2luRGVidWcobWVzc2FnZSwgLi4uYXJncyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHJlc29sdmUoJycpKTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgcGx1Z2luSW5mbyhtZXNzYWdlLCAuLi5hcmdzKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4gcmVzb2x2ZSgnJykpO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBwbHVnaW5XYXJuKG1lc3NhZ2UsIC4uLmFyZ3MpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiByZXNvbHZlKCcnKSk7XG4gIH1cbn1cbiJdfQ==