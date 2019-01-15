"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WelcomeScreen = /** @class */ (function () {
    function WelcomeScreen() {
    }
    WelcomeScreen.getInstance = function () {
        return null;
    };
    WelcomeScreen.prototype.create = function (params, callback) {
        //
    };
    WelcomeScreen.prototype.reInitializePage = function (params) {
        //
    };
    WelcomeScreen.prototype.manageBlurScreen = function (params) {
        //
    };
    WelcomeScreen.prototype.applicationWillEnterForeground = function () {
        return new Promise(function (resolve, reject) { return resolve(''); });
    };
    WelcomeScreen.prototype.changeUserPasscode = function () {
        return new Promise(function (resolve, reject) { return resolve(''); });
    };
    WelcomeScreen.prototype.restoreOnRelaunch = function (params) {
        return new Promise(function (resolve, reject) { return resolve(''); });
    };
    WelcomeScreen.prototype.applicationWillEnterBackground = function () {
        // 
    };
    return WelcomeScreen;
}());
exports.WelcomeScreen = WelcomeScreen;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2VsY29tZVNjcmVlbk1hbmFnZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJXZWxjb21lU2NyZWVuTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBO0lBQUE7SUF5QkEsQ0FBQztJQXhCZSx5QkFBVyxHQUF6QjtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBQ00sOEJBQU0sR0FBYixVQUFjLE1BQVcsRUFBRSxRQUFhO1FBQ3BDLEVBQUU7SUFDTixDQUFDO0lBQ00sd0NBQWdCLEdBQXZCLFVBQXdCLE1BQVc7UUFDakMsRUFBRTtJQUNKLENBQUM7SUFDTSx3Q0FBZ0IsR0FBdkIsVUFBd0IsTUFBVztRQUNqQyxFQUFFO0lBQ0osQ0FBQztJQUNNLHNEQUE4QixHQUFyQztRQUNFLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNLElBQUssT0FBQSxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQVgsQ0FBVyxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUNNLDBDQUFrQixHQUF6QjtRQUNFLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNLElBQUssT0FBQSxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQVgsQ0FBVyxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUNNLHlDQUFpQixHQUF4QixVQUF5QixNQUFXO1FBQ2xDLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNLElBQUssT0FBQSxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQVgsQ0FBVyxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUNNLHNEQUE4QixHQUFyQztRQUNFLEdBQUc7SUFDTCxDQUFDO0lBQ0gsb0JBQUM7QUFBRCxDQUFDLEFBekJELElBeUJDO0FBekJZLHNDQUFhO0FBeUJ6QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFdlbGNvbWVTY3JlZW4ge1xuICBwdWJsaWMgc3RhdGljIGdldEluc3RhbmNlKCk6IFdlbGNvbWVTY3JlZW4ge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHB1YmxpYyBjcmVhdGUocGFyYW1zOiBhbnksIGNhbGxiYWNrOiBhbnkpIHtcbiAgICAgIC8vXG4gIH1cbiAgcHVibGljIHJlSW5pdGlhbGl6ZVBhZ2UocGFyYW1zOiBhbnkpIHtcbiAgICAvL1xuICB9XG4gIHB1YmxpYyBtYW5hZ2VCbHVyU2NyZWVuKHBhcmFtczogYW55KSB7XG4gICAgLy9cbiAgfVxuICBwdWJsaWMgYXBwbGljYXRpb25XaWxsRW50ZXJGb3JlZ3JvdW5kKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHJlc29sdmUoJycpKTtcbiAgfVxuICBwdWJsaWMgY2hhbmdlVXNlclBhc3Njb2RlKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHJlc29sdmUoJycpKTtcbiAgfVxuICBwdWJsaWMgcmVzdG9yZU9uUmVsYXVuY2gocGFyYW1zOiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiByZXNvbHZlKCcnKSk7XG4gIH1cbiAgcHVibGljIGFwcGxpY2F0aW9uV2lsbEVudGVyQmFja2dyb3VuZCgpIHsgXG4gICAgLy8gXG4gIH1cbn07XG4iXX0=