"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CpmsSession = /** @class */ (function () {
    function CpmsSession() {
    }
    CpmsSession.getInstance = function () {
        return null;
    };
    CpmsSession.prototype.initialize = function (params) {
        // intentional no-op
    };
    CpmsSession.prototype.updateConnectionParams = function (params) {
        // intentional no-op
    };
    CpmsSession.prototype.sendRequest = function (params) {
        return new Promise(function (resolve, reject) { return resolve(''); });
    };
    return CpmsSession;
}());
exports.CpmsSession = CpmsSession;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3Btc1Nlc3Npb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJDcG1zU2Vzc2lvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBO0lBQUE7SUFnQkEsQ0FBQztJQWZlLHVCQUFXLEdBQXpCO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNkLENBQUM7SUFFTSxnQ0FBVSxHQUFqQixVQUFrQixNQUFNO1FBQ3RCLG9CQUFvQjtJQUN0QixDQUFDO0lBRU0sNENBQXNCLEdBQTdCLFVBQThCLE1BQU07UUFDaEMsb0JBQW9CO0lBQ3hCLENBQUM7SUFFTSxpQ0FBVyxHQUFsQixVQUFtQixNQUFNO1FBQ3ZCLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNLElBQUssT0FBQSxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQVgsQ0FBVyxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUNILGtCQUFDO0FBQUQsQ0FBQyxBQWhCRCxJQWdCQztBQWhCWSxrQ0FBVztBQWdCdkIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBDcG1zU2Vzc2lvbiB7XG4gIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2UoKTogQ3Btc1Nlc3Npb24ge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIFxuICBwdWJsaWMgaW5pdGlhbGl6ZShwYXJhbXMpOiB2b2lkIHtcbiAgICAvLyBpbnRlbnRpb25hbCBuby1vcFxuICB9XG5cbiAgcHVibGljIHVwZGF0ZUNvbm5lY3Rpb25QYXJhbXMocGFyYW1zKTogdm9pZCB7XG4gICAgICAvLyBpbnRlbnRpb25hbCBuby1vcFxuICB9XG5cbiAgcHVibGljIHNlbmRSZXF1ZXN0KHBhcmFtcyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHJlc29sdmUoJycpKTtcbiAgfVxufTtcbiJdfQ==