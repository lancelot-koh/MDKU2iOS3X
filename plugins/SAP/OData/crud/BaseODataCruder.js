"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CrudParamsHelper_1 = require("./CrudParamsHelper");
var ODataHelper_1 = require("../ODataHelper");
var ErrorMessage_1 = require("../../ErrorHandling/ErrorMessage");
var ODataCrudOperation;
(function (ODataCrudOperation) {
    ODataCrudOperation[ODataCrudOperation["Create"] = 0] = "Create";
    ODataCrudOperation[ODataCrudOperation["Update"] = 1] = "Update";
    ODataCrudOperation[ODataCrudOperation["Delete"] = 2] = "Delete";
    ODataCrudOperation[ODataCrudOperation["Read"] = 3] = "Read";
})(ODataCrudOperation = exports.ODataCrudOperation || (exports.ODataCrudOperation = {}));
;
var BaseODataCruder = /** @class */ (function () {
    function BaseODataCruder(params) {
        this.params = params;
        this.setService();
        this.setServiceUrl();
        this.setHeaders();
    }
    BaseODataCruder.prototype.getServiceUrl = function () {
        return this.serviceUrl;
    };
    BaseODataCruder.prototype.setChangeSetManager = function (changeSetManager) {
        if (changeSetManager == null) {
            throw new Error(ErrorMessage_1.ErrorMessage.ODATA_CRUD_INIT_CHANGESETMANAGER_NOT_FOUND);
        }
        this.changeSetManager = changeSetManager;
    };
    BaseODataCruder.prototype.getDataContext = function (dataService) {
        if (dataService != null) {
            return ODataHelper_1.ODataHelper.createDataContext(dataService.getMetadata());
        }
        throw new Error(ErrorMessage_1.ErrorMessage.ODATA_UNKNOWN_DATASERVICE_TYPE);
    };
    BaseODataCruder.prototype.setService = function () {
        this.service = CrudParamsHelper_1.CrudParamsHelper.getServiceFromParams(this.params);
    };
    BaseODataCruder.prototype.setServiceUrl = function () {
        this.serviceUrl = CrudParamsHelper_1.CrudParamsHelper.getServiceUrlFromService(this.service);
    };
    BaseODataCruder.prototype.setHeaders = function () {
        this.headers = this.getHttpHeaders(CrudParamsHelper_1.CrudParamsHelper.getHeadersFromParams(this.params));
    };
    BaseODataCruder.prototype.getHttpHeaders = function (headers) {
        var httpHeader = ODataHelper_1.ODataHelper.createHttpHeaders();
        if (headers == null) {
            return httpHeader;
        }
        for (var key in headers) {
            if (key) {
                httpHeader.set(key, headers[key]);
            }
        }
        return httpHeader;
    };
    return BaseODataCruder;
}());
exports.BaseODataCruder = BaseODataCruder;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZU9EYXRhQ3J1ZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQmFzZU9EYXRhQ3J1ZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsdURBQXNEO0FBRXRELDhDQUE2QztBQUM3QyxpRUFBZ0U7QUFFaEUsSUFBWSxrQkFLWDtBQUxELFdBQVksa0JBQWtCO0lBQzVCLCtEQUFNLENBQUE7SUFDTiwrREFBTSxDQUFBO0lBQ04sK0RBQU0sQ0FBQTtJQUNOLDJEQUFJLENBQUE7QUFDTixDQUFDLEVBTFcsa0JBQWtCLEdBQWxCLDBCQUFrQixLQUFsQiwwQkFBa0IsUUFLN0I7QUFBQSxDQUFDO0FBRUY7SUFPRSx5QkFBbUIsTUFBVztRQUM1QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUVyQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRU0sdUNBQWEsR0FBcEI7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDO0lBRU0sNkNBQW1CLEdBQTFCLFVBQTJCLGdCQUFxQjtRQUM5QyxFQUFFLENBQUMsQ0FBQyxnQkFBZ0IsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQzdCLE1BQU0sSUFBSSxLQUFLLENBQUMsMkJBQVksQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDO1FBQzNFLENBQUM7UUFDRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsZ0JBQWdCLENBQUM7SUFDM0MsQ0FBQztJQUVNLHdDQUFjLEdBQXJCLFVBQXNCLFdBQWdCO1FBQ3BDLEVBQUUsQ0FBQyxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLE1BQU0sQ0FBQyx5QkFBVyxDQUFDLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1FBQ2xFLENBQUM7UUFFRCxNQUFNLElBQUksS0FBSyxDQUFDLDJCQUFZLENBQUMsOEJBQThCLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRU8sb0NBQVUsR0FBbEI7UUFDRSxJQUFJLENBQUMsT0FBTyxHQUFHLG1DQUFnQixDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBRU8sdUNBQWEsR0FBckI7UUFDRSxJQUFJLENBQUMsVUFBVSxHQUFHLG1DQUFnQixDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM1RSxDQUFDO0lBRU8sb0NBQVUsR0FBbEI7UUFDRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsbUNBQWdCLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDekYsQ0FBQztJQUVPLHdDQUFjLEdBQXRCLFVBQXVCLE9BQVk7UUFDakMsSUFBSSxVQUFVLEdBQUcseUJBQVcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ2pELEVBQUUsQ0FBQyxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLE1BQU0sQ0FBQyxVQUFVLENBQUM7UUFDcEIsQ0FBQztRQUVELEdBQUcsQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDeEIsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDUixVQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNwQyxDQUFDO1FBQ0gsQ0FBQztRQUNELE1BQU0sQ0FBQyxVQUFVLENBQUM7SUFDcEIsQ0FBQztJQUNILHNCQUFDO0FBQUQsQ0FBQyxBQTNERCxJQTJEQztBQTNEWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENydWRQYXJhbXNIZWxwZXIgfSBmcm9tICcuL0NydWRQYXJhbXNIZWxwZXInO1xuaW1wb3J0IHsgQ2hhbmdlU2V0TWFuYWdlciB9IGZyb20gJy4vQ2hhbmdlU2V0TWFuYWdlcic7XG5pbXBvcnQgeyBPRGF0YUhlbHBlciB9IGZyb20gJy4uL09EYXRhSGVscGVyJztcbmltcG9ydCB7IEVycm9yTWVzc2FnZSB9IGZyb20gJy4uLy4uL0Vycm9ySGFuZGxpbmcvRXJyb3JNZXNzYWdlJztcblxuZXhwb3J0IGVudW0gT0RhdGFDcnVkT3BlcmF0aW9uIHtcbiAgQ3JlYXRlLFxuICBVcGRhdGUsXG4gIERlbGV0ZSxcbiAgUmVhZCxcbn07XG5cbmV4cG9ydCBjbGFzcyBCYXNlT0RhdGFDcnVkZXIge1xuICBwcm90ZWN0ZWQgc2VydmljZTogc3RyaW5nW107XG4gIHByb3RlY3RlZCBwYXJhbXM6IHN0cmluZ1tdO1xuICBwcm90ZWN0ZWQgaGVhZGVyczogYW55O1xuICBwcm90ZWN0ZWQgc2VydmljZVVybDogc3RyaW5nO1xuICBwcm90ZWN0ZWQgY2hhbmdlU2V0TWFuYWdlcjogQ2hhbmdlU2V0TWFuYWdlcjtcblxuICBwdWJsaWMgY29uc3RydWN0b3IocGFyYW1zOiBhbnkpIHtcbiAgICB0aGlzLnBhcmFtcyA9IHBhcmFtcztcblxuICAgIHRoaXMuc2V0U2VydmljZSgpO1xuICAgIHRoaXMuc2V0U2VydmljZVVybCgpO1xuICAgIHRoaXMuc2V0SGVhZGVycygpO1xuICB9XG5cbiAgcHVibGljIGdldFNlcnZpY2VVcmwoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5zZXJ2aWNlVXJsO1xuICB9XG5cbiAgcHVibGljIHNldENoYW5nZVNldE1hbmFnZXIoY2hhbmdlU2V0TWFuYWdlcjogYW55KTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZVNldE1hbmFnZXIgPT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKEVycm9yTWVzc2FnZS5PREFUQV9DUlVEX0lOSVRfQ0hBTkdFU0VUTUFOQUdFUl9OT1RfRk9VTkQpO1xuICAgIH1cbiAgICB0aGlzLmNoYW5nZVNldE1hbmFnZXIgPSBjaGFuZ2VTZXRNYW5hZ2VyO1xuICB9XG5cbiAgcHVibGljIGdldERhdGFDb250ZXh0KGRhdGFTZXJ2aWNlOiBhbnkpOiBhbnkge1xuICAgIGlmIChkYXRhU2VydmljZSAhPSBudWxsKSB7XG4gICAgICByZXR1cm4gT0RhdGFIZWxwZXIuY3JlYXRlRGF0YUNvbnRleHQoZGF0YVNlcnZpY2UuZ2V0TWV0YWRhdGEoKSk7XG4gICAgfVxuXG4gICAgdGhyb3cgbmV3IEVycm9yKEVycm9yTWVzc2FnZS5PREFUQV9VTktOT1dOX0RBVEFTRVJWSUNFX1RZUEUpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRTZXJ2aWNlKCk6IHZvaWQge1xuICAgIHRoaXMuc2VydmljZSA9IENydWRQYXJhbXNIZWxwZXIuZ2V0U2VydmljZUZyb21QYXJhbXModGhpcy5wYXJhbXMpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRTZXJ2aWNlVXJsKCk6IHZvaWQge1xuICAgIHRoaXMuc2VydmljZVVybCA9IENydWRQYXJhbXNIZWxwZXIuZ2V0U2VydmljZVVybEZyb21TZXJ2aWNlKHRoaXMuc2VydmljZSk7XG4gIH1cblxuICBwcml2YXRlIHNldEhlYWRlcnMoKTogdm9pZCB7XG4gICAgdGhpcy5oZWFkZXJzID0gdGhpcy5nZXRIdHRwSGVhZGVycyhDcnVkUGFyYW1zSGVscGVyLmdldEhlYWRlcnNGcm9tUGFyYW1zKHRoaXMucGFyYW1zKSk7XG4gIH1cblxuICBwcml2YXRlIGdldEh0dHBIZWFkZXJzKGhlYWRlcnM6IGFueSk6IGFueSB7XG4gICAgbGV0IGh0dHBIZWFkZXIgPSBPRGF0YUhlbHBlci5jcmVhdGVIdHRwSGVhZGVycygpO1xuICAgIGlmIChoZWFkZXJzID09IG51bGwpIHtcbiAgICAgIHJldHVybiBodHRwSGVhZGVyO1xuICAgIH1cblxuICAgIGZvciAobGV0IGtleSBpbiBoZWFkZXJzKSB7XG4gICAgICBpZiAoa2V5KSB7XG4gICAgICAgIGh0dHBIZWFkZXIuc2V0KGtleSwgaGVhZGVyc1trZXldKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGh0dHBIZWFkZXI7XG4gIH1cbn1cbiJdfQ==