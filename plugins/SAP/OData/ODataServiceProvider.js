"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ODataServiceProvider = /** @class */ (function () {
    function ODataServiceProvider() {
    }
    ODataServiceProvider.getServiceTimeZoneAbbreviation = function () {
        return '';
    };
    ODataServiceProvider.clear = function (context, name) {
        return new Promise(function (resolve, reject) { return resolve(''); });
    };
    /// Offline specific methods
    ODataServiceProvider.prototype.download = function (params) {
        return new Promise(function (resolve, reject) { return resolve(''); });
    };
    ;
    ODataServiceProvider.prototype.initOfflineStore = function (context, params) {
        return new Promise(function (resolve, reject) { return resolve(''); });
    };
    ;
    ODataServiceProvider.prototype.upload = function (params) {
        return new Promise(function (resolve, reject) { return resolve(''); });
    };
    ;
    ODataServiceProvider.prototype.close = function (params) {
        return new Promise(function (resolve, reject) { return resolve(''); });
    };
    ;
    ODataServiceProvider.prototype.clear = function (params) {
        return new Promise(function (resolve, reject) { return resolve(''); });
    };
    ;
    /// Online specific methods
    ODataServiceProvider.prototype.create = function (params) {
        return new Promise(function (resolve, reject) { return resolve(''); });
    };
    ;
    ODataServiceProvider.prototype.open = function (params) {
        return new Promise(function (resolve, reject) { return resolve(''); });
    };
    ;
    /// Common CRUD methods
    ODataServiceProvider.prototype.read = function (entitySet, properties, queryString) {
        return new Promise(function (resolve, reject) { return resolve(''); });
    };
    ;
    ODataServiceProvider.prototype.createEntity = function (odataCreator) {
        return new Promise(function (resolve, reject) { return resolve(''); });
    };
    ;
    ODataServiceProvider.prototype.updateEntity = function (odataUpdater) {
        return new Promise(function (resolve, reject) { return resolve(''); });
    };
    ;
    ODataServiceProvider.prototype.deleteEntity = function (odataDeleter) {
        return new Promise(function (resolve, reject) { return resolve(''); });
    };
    ;
    ODataServiceProvider.prototype.deleteMediaEntity = function (entitySetName, queryString, readLink) {
        return new Promise(function (resolve, reject) { return resolve(''); });
    };
    ;
    ODataServiceProvider.prototype.createMediaEntity = function (entitySetName, properties, headers, isOnlineRequest, media) {
        return new Promise(function (resolve, reject) { return resolve(''); });
    };
    ;
    ODataServiceProvider.prototype.createOpenService = function (serviceUrl) {
        return new Promise(function (resolve, reject) { return resolve(''); });
    };
    ;
    ODataServiceProvider.prototype.downloadMedia = function (entitySet, queryString, readLink) {
        return new Promise(function (resolve, reject) { return resolve(''); });
    };
    ;
    ODataServiceProvider.prototype.isMediaLocal = function (entitySet, readLink) {
        return new Promise(function (resolve, reject) { return resolve(''); });
    };
    ;
    // Change Set methods
    ODataServiceProvider.prototype.beginChangeSet = function () {
        return new Promise(function (resolve, reject) { return resolve(''); });
    };
    ;
    ODataServiceProvider.prototype.cancelChangeSet = function () {
        return new Promise(function (resolve, reject) { return resolve(''); });
    };
    ;
    ODataServiceProvider.prototype.commitChangeSet = function () {
        return new Promise(function (resolve, reject) { return resolve(''); });
    };
    ;
    ODataServiceProvider.prototype.count = function (entitySet, properties, queryString) {
        return new Promise(function (resolve, reject) { return resolve(''); });
    };
    ;
    ODataServiceProvider.prototype.callFunction = function (functionName, functionParameters) {
        return new Promise(function (resolve, reject) { return resolve(''); });
    };
    ;
    ODataServiceProvider.prototype.getPropertyType = function (params) {
        return '';
    };
    ;
    return ODataServiceProvider;
}());
exports.ODataServiceProvider = ODataServiceProvider;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT0RhdGFTZXJ2aWNlUHJvdmlkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJPRGF0YVNlcnZpY2VQcm92aWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBO0lBQUE7SUFvR0EsQ0FBQztJQW5HZSxtREFBOEIsR0FBNUM7UUFDRSxNQUFNLENBQUMsRUFBRSxDQUFDO0lBQ1osQ0FBQztJQUVhLDBCQUFLLEdBQW5CLFVBQW9CLE9BQU8sRUFBRSxJQUFJO1FBQy9CLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNLElBQUssT0FBQSxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQVgsQ0FBVyxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVELDRCQUE0QjtJQUNyQix1Q0FBUSxHQUFmLFVBQWdCLE1BQU07UUFDcEIsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU0sSUFBSyxPQUFBLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBWCxDQUFXLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBQUEsQ0FBQztJQUVLLCtDQUFnQixHQUF2QixVQUF3QixPQUFPLEVBQUUsTUFBTTtRQUNyQyxNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTSxJQUFLLE9BQUEsT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUFYLENBQVcsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFBQSxDQUFDO0lBRUsscUNBQU0sR0FBYixVQUFjLE1BQU07UUFDbEIsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU0sSUFBSyxPQUFBLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBWCxDQUFXLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBQUEsQ0FBQztJQUVLLG9DQUFLLEdBQVosVUFBYSxNQUFNO1FBQ2pCLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNLElBQUssT0FBQSxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQVgsQ0FBVyxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUFBLENBQUM7SUFFSyxvQ0FBSyxHQUFaLFVBQWEsTUFBTTtRQUNqQixNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTSxJQUFLLE9BQUEsT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUFYLENBQVcsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFBQSxDQUFDO0lBRUYsMkJBQTJCO0lBQ3BCLHFDQUFNLEdBQWIsVUFBYyxNQUFNO1FBQ2xCLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNLElBQUssT0FBQSxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQVgsQ0FBVyxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUFBLENBQUM7SUFFSyxtQ0FBSSxHQUFYLFVBQVksTUFBTTtRQUNoQixNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTSxJQUFLLE9BQUEsT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUFYLENBQVcsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFBQSxDQUFDO0lBRUYsdUJBQXVCO0lBQ2hCLG1DQUFJLEdBQVgsVUFBWSxTQUFTLEVBQUUsVUFBVSxFQUFFLFdBQVc7UUFDNUMsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU0sSUFBSyxPQUFBLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBWCxDQUFXLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBQUEsQ0FBQztJQUVLLDJDQUFZLEdBQW5CLFVBQW9CLFlBQVk7UUFDOUIsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU0sSUFBSyxPQUFBLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBWCxDQUFXLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBQUEsQ0FBQztJQUVLLDJDQUFZLEdBQW5CLFVBQW9CLFlBQVk7UUFDOUIsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU0sSUFBSyxPQUFBLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBWCxDQUFXLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBQUEsQ0FBQztJQUVLLDJDQUFZLEdBQW5CLFVBQW9CLFlBQVk7UUFDOUIsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU0sSUFBSyxPQUFBLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBWCxDQUFXLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBQUEsQ0FBQztJQUVLLGdEQUFpQixHQUF4QixVQUF5QixhQUFhLEVBQUUsV0FBVyxFQUFFLFFBQVE7UUFDM0QsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU0sSUFBSyxPQUFBLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBWCxDQUFXLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBQUEsQ0FBQztJQUVLLGdEQUFpQixHQUF4QixVQUF5QixhQUFhLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsS0FBSztRQUNqRixNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTSxJQUFLLE9BQUEsT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUFYLENBQVcsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFBQSxDQUFDO0lBRUssZ0RBQWlCLEdBQXhCLFVBQXlCLFVBQVU7UUFDakMsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU0sSUFBSyxPQUFBLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBWCxDQUFXLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBQUEsQ0FBQztJQUVLLDRDQUFhLEdBQXBCLFVBQXFCLFNBQVMsRUFBRSxXQUFXLEVBQUUsUUFBUTtRQUNuRCxNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTSxJQUFLLE9BQUEsT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUFYLENBQVcsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFBQSxDQUFDO0lBRUssMkNBQVksR0FBbkIsVUFBb0IsU0FBUyxFQUFFLFFBQVE7UUFDckMsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU0sSUFBSyxPQUFBLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBWCxDQUFXLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBQUEsQ0FBQztJQUVGLHFCQUFxQjtJQUNkLDZDQUFjLEdBQXJCO1FBQ0UsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU0sSUFBSyxPQUFBLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBWCxDQUFXLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBQUEsQ0FBQztJQUVLLDhDQUFlLEdBQXRCO1FBQ0UsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU0sSUFBSyxPQUFBLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBWCxDQUFXLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBQUEsQ0FBQztJQUVLLDhDQUFlLEdBQXRCO1FBQ0UsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU0sSUFBSyxPQUFBLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBWCxDQUFXLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBQUEsQ0FBQztJQUVLLG9DQUFLLEdBQVosVUFBYSxTQUFTLEVBQUUsVUFBVSxFQUFFLFdBQVc7UUFDN0MsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU0sSUFBSyxPQUFBLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBWCxDQUFXLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBQUEsQ0FBQztJQUVLLDJDQUFZLEdBQW5CLFVBQW9CLFlBQVksRUFBRSxrQkFBa0I7UUFDbEQsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU0sSUFBSyxPQUFBLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBWCxDQUFXLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBQUEsQ0FBQztJQUVLLDhDQUFlLEdBQXRCLFVBQXVCLE1BQU07UUFDM0IsTUFBTSxDQUFDLEVBQUUsQ0FBQztJQUNaLENBQUM7SUFBQSxDQUFDO0lBQ0osMkJBQUM7QUFBRCxDQUFDLEFBcEdELElBb0dDO0FBcEdZLG9EQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBPRGF0YVNlcnZpY2VQcm92aWRlciB7XG4gIHB1YmxpYyBzdGF0aWMgZ2V0U2VydmljZVRpbWVab25lQWJicmV2aWF0aW9uKCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgY2xlYXIoY29udGV4dCwgbmFtZSkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiByZXNvbHZlKCcnKSk7XG4gIH1cblxuICAvLy8gT2ZmbGluZSBzcGVjaWZpYyBtZXRob2RzXG4gIHB1YmxpYyBkb3dubG9hZChwYXJhbXMpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiByZXNvbHZlKCcnKSk7XG4gIH07XG5cbiAgcHVibGljIGluaXRPZmZsaW5lU3RvcmUoY29udGV4dCwgcGFyYW1zKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4gcmVzb2x2ZSgnJykpO1xuICB9O1xuXG4gIHB1YmxpYyB1cGxvYWQocGFyYW1zKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4gcmVzb2x2ZSgnJykpO1xuICB9O1xuXG4gIHB1YmxpYyBjbG9zZShwYXJhbXMpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiByZXNvbHZlKCcnKSk7XG4gIH07XG5cbiAgcHVibGljIGNsZWFyKHBhcmFtcyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHJlc29sdmUoJycpKTtcbiAgfTtcblxuICAvLy8gT25saW5lIHNwZWNpZmljIG1ldGhvZHNcbiAgcHVibGljIGNyZWF0ZShwYXJhbXMpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiByZXNvbHZlKCcnKSk7XG4gIH07XG5cbiAgcHVibGljIG9wZW4ocGFyYW1zKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4gcmVzb2x2ZSgnJykpO1xuICB9O1xuXG4gIC8vLyBDb21tb24gQ1JVRCBtZXRob2RzXG4gIHB1YmxpYyByZWFkKGVudGl0eVNldCwgcHJvcGVydGllcywgcXVlcnlTdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiByZXNvbHZlKCcnKSk7XG4gIH07XG5cbiAgcHVibGljIGNyZWF0ZUVudGl0eShvZGF0YUNyZWF0b3IpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiByZXNvbHZlKCcnKSk7XG4gIH07XG5cbiAgcHVibGljIHVwZGF0ZUVudGl0eShvZGF0YVVwZGF0ZXIpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiByZXNvbHZlKCcnKSk7XG4gIH07XG5cbiAgcHVibGljIGRlbGV0ZUVudGl0eShvZGF0YURlbGV0ZXIpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiByZXNvbHZlKCcnKSk7XG4gIH07XG5cbiAgcHVibGljIGRlbGV0ZU1lZGlhRW50aXR5KGVudGl0eVNldE5hbWUsIHF1ZXJ5U3RyaW5nLCByZWFkTGluayk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHJlc29sdmUoJycpKTtcbiAgfTtcblxuICBwdWJsaWMgY3JlYXRlTWVkaWFFbnRpdHkoZW50aXR5U2V0TmFtZSwgcHJvcGVydGllcywgaGVhZGVycywgaXNPbmxpbmVSZXF1ZXN0LCBtZWRpYSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHJlc29sdmUoJycpKTtcbiAgfTtcblxuICBwdWJsaWMgY3JlYXRlT3BlblNlcnZpY2Uoc2VydmljZVVybCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHJlc29sdmUoJycpKTtcbiAgfTtcblxuICBwdWJsaWMgZG93bmxvYWRNZWRpYShlbnRpdHlTZXQsIHF1ZXJ5U3RyaW5nLCByZWFkTGluayk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHJlc29sdmUoJycpKTtcbiAgfTtcblxuICBwdWJsaWMgaXNNZWRpYUxvY2FsKGVudGl0eVNldCwgcmVhZExpbmspOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiByZXNvbHZlKCcnKSk7XG4gIH07XG5cbiAgLy8gQ2hhbmdlIFNldCBtZXRob2RzXG4gIHB1YmxpYyBiZWdpbkNoYW5nZVNldCgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiByZXNvbHZlKCcnKSk7XG4gIH07XG5cbiAgcHVibGljIGNhbmNlbENoYW5nZVNldCgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiByZXNvbHZlKCcnKSk7XG4gIH07XG5cbiAgcHVibGljIGNvbW1pdENoYW5nZVNldCgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiByZXNvbHZlKCcnKSk7XG4gIH07XG5cbiAgcHVibGljIGNvdW50KGVudGl0eVNldCwgcHJvcGVydGllcywgcXVlcnlTdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiByZXNvbHZlKCcnKSk7XG4gIH07XG4gIFxuICBwdWJsaWMgY2FsbEZ1bmN0aW9uKGZ1bmN0aW9uTmFtZSwgZnVuY3Rpb25QYXJhbWV0ZXJzKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4gcmVzb2x2ZSgnJykpO1xuICB9O1xuXG4gIHB1YmxpYyBnZXRQcm9wZXJ0eVR5cGUocGFyYW1zKTogc3RyaW5nIHtcbiAgICByZXR1cm4gJyc7XG4gIH07XG59XG4iXX0=