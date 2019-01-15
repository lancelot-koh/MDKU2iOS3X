"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ODataHelper = /** @class */ (function () {
    function ODataHelper() {
    }
    ODataHelper.createEntityValueList = function () {
        return undefined;
    };
    ODataHelper.entityValueListToJson = function (entityValueList, dataContext, isErrorArchive) {
        return undefined;
    };
    ODataHelper.complexValueListToJson = function (complexList, dataContext) {
        return undefined;
    };
    // EntityValue
    ODataHelper.createEntityValue = function (entityType) {
        return undefined;
    };
    ODataHelper.entityValueToJson = function (entityValue, dataContext) {
        return undefined;
    };
    ODataHelper.setEntityValueProperties = function (entityValue, properties) {
        //
    };
    ODataHelper.isEntityValueKnownToBackend = function (entityValue) {
        return false;
    };
    ODataHelper.entityWithReadLink = function (changeSet, readLink) {
        return undefined;
    };
    // Property
    ODataHelper.partnerPropertyFromEntity = function (property, targetEntity) {
        return undefined;
    };
    // HttpHeaders
    ODataHelper.createHttpHeaders = function () {
        return undefined;
    };
    // DataContext
    ODataHelper.createDataContext = function (dataService) {
        return undefined;
    };
    // DataQuery
    ODataHelper.createDataQuery = function () {
        return undefined;
    };
    // ChangeSet
    ODataHelper.createChangeSet = function () {
        return undefined;
    };
    ODataHelper.createRequestBatch = function () {
        return undefined;
    };
    ODataHelper.isOnlineProvider = function (dataService) {
        return false;
    };
    return ODataHelper;
}());
exports.ODataHelper = ODataHelper;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT0RhdGFIZWxwZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJPRGF0YUhlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBO0lBQUE7SUFrRUEsQ0FBQztJQWpFZSxpQ0FBcUIsR0FBbkM7UUFDRSxNQUFNLENBQUMsU0FBUyxDQUFDO0lBQ25CLENBQUM7SUFFYSxpQ0FBcUIsR0FBbkMsVUFBb0MsZUFBb0IsRUFBRSxXQUFnQixFQUFFLGNBQXdCO1FBQ2xHLE1BQU0sQ0FBQyxTQUFTLENBQUM7SUFDbkIsQ0FBQztJQUVhLGtDQUFzQixHQUFwQyxVQUFxQyxXQUFnQixFQUFFLFdBQWdCO1FBQ3JFLE1BQU0sQ0FBQyxTQUFTLENBQUM7SUFDbkIsQ0FBQztJQUVELGNBQWM7SUFDQSw2QkFBaUIsR0FBL0IsVUFBZ0MsVUFBZTtRQUM3QyxNQUFNLENBQUMsU0FBUyxDQUFDO0lBQ25CLENBQUM7SUFFYSw2QkFBaUIsR0FBL0IsVUFBZ0MsV0FBZ0IsRUFBRSxXQUFnQjtRQUNoRSxNQUFNLENBQUMsU0FBUyxDQUFDO0lBQ25CLENBQUM7SUFFYSxvQ0FBd0IsR0FBdEMsVUFBdUMsV0FBZ0IsRUFBRSxVQUFlO1FBQ3RFLEVBQUU7SUFDSixDQUFDO0lBRWEsdUNBQTJCLEdBQXpDLFVBQTBDLFdBQWdCO1FBQ3hELE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRWEsOEJBQWtCLEdBQWhDLFVBQWlDLFNBQWMsRUFBRSxRQUFnQjtRQUMvRCxNQUFNLENBQUMsU0FBUyxDQUFDO0lBQ25CLENBQUM7SUFFRCxXQUFXO0lBQ0cscUNBQXlCLEdBQXZDLFVBQXdDLFFBQWEsRUFBRSxZQUFpQjtRQUN0RSxNQUFNLENBQUMsU0FBUyxDQUFDO0lBQ25CLENBQUM7SUFFRCxjQUFjO0lBQ0EsNkJBQWlCLEdBQS9CO1FBQ0UsTUFBTSxDQUFDLFNBQVMsQ0FBQztJQUNuQixDQUFDO0lBRUQsY0FBYztJQUNBLDZCQUFpQixHQUEvQixVQUFnQyxXQUFnQjtRQUM5QyxNQUFNLENBQUMsU0FBUyxDQUFDO0lBQ25CLENBQUM7SUFFRCxZQUFZO0lBQ0UsMkJBQWUsR0FBN0I7UUFDRSxNQUFNLENBQUMsU0FBUyxDQUFDO0lBQ25CLENBQUM7SUFFRCxZQUFZO0lBQ0UsMkJBQWUsR0FBN0I7UUFDRSxNQUFNLENBQUMsU0FBUyxDQUFDO0lBQ25CLENBQUM7SUFFYSw4QkFBa0IsR0FBaEM7UUFDRSxNQUFNLENBQUMsU0FBUyxDQUFDO0lBQ25CLENBQUM7SUFFYSw0QkFBZ0IsR0FBOUIsVUFBK0IsV0FBZ0I7UUFDN0MsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNmLENBQUM7SUFDSCxrQkFBQztBQUFELENBQUMsQUFsRUQsSUFrRUM7QUFsRVksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgT0RhdGFIZWxwZXIge1xuICBwdWJsaWMgc3RhdGljIGNyZWF0ZUVudGl0eVZhbHVlTGlzdCgpOiBhbnkge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGVudGl0eVZhbHVlTGlzdFRvSnNvbihlbnRpdHlWYWx1ZUxpc3Q6IGFueSwgZGF0YUNvbnRleHQ6IGFueSwgaXNFcnJvckFyY2hpdmU/OiBib29sZWFuKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBjb21wbGV4VmFsdWVMaXN0VG9Kc29uKGNvbXBsZXhMaXN0OiBhbnksIGRhdGFDb250ZXh0OiBhbnkpOiBzdHJpbmcge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICAvLyBFbnRpdHlWYWx1ZVxuICBwdWJsaWMgc3RhdGljIGNyZWF0ZUVudGl0eVZhbHVlKGVudGl0eVR5cGU6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZW50aXR5VmFsdWVUb0pzb24oZW50aXR5VmFsdWU6IGFueSwgZGF0YUNvbnRleHQ6IGFueSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgc2V0RW50aXR5VmFsdWVQcm9wZXJ0aWVzKGVudGl0eVZhbHVlOiBhbnksIHByb3BlcnRpZXM6IGFueSk6IHZvaWQge1xuICAgIC8vXG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGlzRW50aXR5VmFsdWVLbm93blRvQmFja2VuZChlbnRpdHlWYWx1ZTogYW55KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBlbnRpdHlXaXRoUmVhZExpbmsoY2hhbmdlU2V0OiBhbnksIHJlYWRMaW5rOiBzdHJpbmcpOiBhbnkge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICAvLyBQcm9wZXJ0eVxuICBwdWJsaWMgc3RhdGljIHBhcnRuZXJQcm9wZXJ0eUZyb21FbnRpdHkocHJvcGVydHk6IGFueSwgdGFyZ2V0RW50aXR5OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICAvLyBIdHRwSGVhZGVyc1xuICBwdWJsaWMgc3RhdGljIGNyZWF0ZUh0dHBIZWFkZXJzKCk6IGFueSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIC8vIERhdGFDb250ZXh0XG4gIHB1YmxpYyBzdGF0aWMgY3JlYXRlRGF0YUNvbnRleHQoZGF0YVNlcnZpY2U6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIC8vIERhdGFRdWVyeVxuICBwdWJsaWMgc3RhdGljIGNyZWF0ZURhdGFRdWVyeSgpOiBhbnkge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICAvLyBDaGFuZ2VTZXRcbiAgcHVibGljIHN0YXRpYyBjcmVhdGVDaGFuZ2VTZXQoKTogYW55IHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBjcmVhdGVSZXF1ZXN0QmF0Y2goKTogYW55IHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBpc09ubGluZVByb3ZpZGVyKGRhdGFTZXJ2aWNlOiBhbnkpOiBib29sZWFuIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiJdfQ==