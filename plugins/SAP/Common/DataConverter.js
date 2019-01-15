"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DataConverter = /** @class */ (function () {
    function DataConverter() {
    }
    DataConverter.toJavaObject = function (params) {
        // Intentional no-op
        return undefined;
    };
    DataConverter.toJavaArray = function (params) {
        // Intentional no-op
        return undefined;
    };
    DataConverter.toJavaScriptObject = function (javaObj) {
        // Intentional no-op
    };
    DataConverter.toJavaScriptMap = function (javaObj) {
        // Intentional no-op
    };
    DataConverter.fromNSDictToMap = function (nsDict) {
        // Intentional no-op
        return undefined;
    };
    DataConverter.toViewFacade = function (view) {
        return undefined;
    };
    DataConverter.toUTCDate = function (dateString, serviceTimeZoneAbbreviation) {
        return '';
    };
    DataConverter.toJavaScriptValue = function (value) {
        return '';
    };
    return DataConverter;
}());
exports.DataConverter = DataConverter;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0YUNvbnZlcnRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkRhdGFDb252ZXJ0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQTtJQUFBO0lBbUNBLENBQUM7SUFsQ2UsMEJBQVksR0FBMUIsVUFBMkIsTUFBTTtRQUMvQixvQkFBb0I7UUFDcEIsTUFBTSxDQUFDLFNBQVMsQ0FBQztJQUNuQixDQUFDO0lBRWEseUJBQVcsR0FBekIsVUFBMEIsTUFBTTtRQUM5QixvQkFBb0I7UUFDcEIsTUFBTSxDQUFDLFNBQVMsQ0FBQztJQUNuQixDQUFDO0lBRWEsZ0NBQWtCLEdBQWhDLFVBQWlDLE9BQU87UUFDdEMsb0JBQW9CO0lBQ3RCLENBQUM7SUFFYSw2QkFBZSxHQUE3QixVQUE4QixPQUFPO1FBQ25DLG9CQUFvQjtJQUN0QixDQUFDO0lBRWEsNkJBQWUsR0FBN0IsVUFBOEIsTUFBTTtRQUNsQyxvQkFBb0I7UUFDcEIsTUFBTSxDQUFDLFNBQVMsQ0FBQztJQUNuQixDQUFDO0lBRWEsMEJBQVksR0FBMUIsVUFBMkIsSUFBUztRQUNsQyxNQUFNLENBQUMsU0FBUyxDQUFDO0lBQ25CLENBQUM7SUFFYSx1QkFBUyxHQUF2QixVQUF3QixVQUFrQixFQUFFLDJCQUFtQztRQUM3RSxNQUFNLENBQUMsRUFBRSxDQUFDO0lBQ1osQ0FBQztJQUVhLCtCQUFpQixHQUEvQixVQUFnQyxLQUFVO1FBQ3hDLE1BQU0sQ0FBQyxFQUFFLENBQUM7SUFDWixDQUFDO0lBQ0gsb0JBQUM7QUFBRCxDQUFDLEFBbkNELElBbUNDO0FBbkNZLHNDQUFhO0FBbUN6QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgY2xhc3MgRGF0YUNvbnZlcnRlciB7XG4gIHB1YmxpYyBzdGF0aWMgdG9KYXZhT2JqZWN0KHBhcmFtcykge1xuICAgIC8vIEludGVudGlvbmFsIG5vLW9wXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgdG9KYXZhQXJyYXkocGFyYW1zKSB7XG4gICAgLy8gSW50ZW50aW9uYWwgbm8tb3BcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyB0b0phdmFTY3JpcHRPYmplY3QoamF2YU9iaikge1xuICAgIC8vIEludGVudGlvbmFsIG5vLW9wXG4gIH1cblxuICBwdWJsaWMgc3RhdGljIHRvSmF2YVNjcmlwdE1hcChqYXZhT2JqKSB7XG4gICAgLy8gSW50ZW50aW9uYWwgbm8tb3BcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZnJvbU5TRGljdFRvTWFwKG5zRGljdCk6IE1hcDxTdHJpbmcsIGFueT4ge1xuICAgIC8vIEludGVudGlvbmFsIG5vLW9wXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgdG9WaWV3RmFjYWRlKHZpZXc6IGFueSkge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIHRvVVRDRGF0ZShkYXRlU3RyaW5nOiBzdHJpbmcsIHNlcnZpY2VUaW1lWm9uZUFiYnJldmlhdGlvbjogc3RyaW5nKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyB0b0phdmFTY3JpcHRWYWx1ZSh2YWx1ZTogYW55KSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG59O1xuIl19