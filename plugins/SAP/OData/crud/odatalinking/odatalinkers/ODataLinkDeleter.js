"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ODataLinker_1 = require("./ODataLinker");
var LinkingScenario_1 = require("../odatalinks/LinkingScenario");
var BaseODataCruder_1 = require("../../BaseODataCruder");
var ErrorMessage_1 = require("../../../../ErrorHandling/ErrorMessage");
var ODataLinkDeleter = /** @class */ (function (_super) {
    __extends(ODataLinkDeleter, _super);
    function ODataLinkDeleter(sourceEntitySetName, linkingParams) {
        return _super.call(this, sourceEntitySetName, linkingParams, BaseODataCruder_1.ODataCrudOperation.Delete) || this;
    }
    ODataLinkDeleter.prototype.execute = function (sourceEntity, dataService, changeSetManager) {
        if (dataService != null) {
            _super.prototype.execute.call(this, sourceEntity, dataService, changeSetManager);
            this.performLinking(sourceEntity);
        }
        else {
            throw new Error(ErrorMessage_1.ErrorMessage.ODATA_UNKNOWN_DATASERVICE_TYPE);
        }
    };
    ODataLinkDeleter.prototype.performLinking = function (sourceEntity) {
        for (var _i = 0, _a = this.targets; _i < _a.length; _i++) {
            var target = _a[_i];
            var scenario = new LinkingScenario_1.LinkingScenario(this.navigationProperty, sourceEntity, target, this.operation, false);
            scenario.execute();
        }
    };
    return ODataLinkDeleter;
}(ODataLinker_1.ODataLinker));
exports.ODataLinkDeleter = ODataLinkDeleter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT0RhdGFMaW5rRGVsZXRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIk9EYXRhTGlua0RlbGV0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw2Q0FBNEM7QUFDNUMsaUVBQWdFO0FBQ2hFLHlEQUEyRDtBQUUzRCx1RUFBc0U7QUFFdEU7SUFBc0Msb0NBQVc7SUFDL0MsMEJBQW1CLG1CQUEyQixFQUFFLGFBQWtCO2VBQ2hFLGtCQUFNLG1CQUFtQixFQUFFLGFBQWEsRUFBRSxvQ0FBa0IsQ0FBQyxNQUFNLENBQUM7SUFDdEUsQ0FBQztJQUVNLGtDQUFPLEdBQWQsVUFBZSxZQUFpQixFQUFFLFdBQWdCLEVBQUUsZ0JBQWtDO1FBQ3BGLEVBQUUsQ0FBQyxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLGlCQUFNLE9BQU8sWUFBQyxZQUFZLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixDQUFDLENBQUM7WUFDM0QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNwQyxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixNQUFNLElBQUksS0FBSyxDQUFDLDJCQUFZLENBQUMsOEJBQThCLENBQUMsQ0FBQztRQUMvRCxDQUFDO0lBQ0gsQ0FBQztJQUVPLHlDQUFjLEdBQXRCLFVBQXVCLFlBQWlCO1FBQ3RDLEdBQUcsQ0FBQyxDQUFlLFVBQVksRUFBWixLQUFBLElBQUksQ0FBQyxPQUFPLEVBQVosY0FBWSxFQUFaLElBQVk7WUFBMUIsSUFBSSxNQUFNLFNBQUE7WUFDYixJQUFJLFFBQVEsR0FBRyxJQUFJLGlDQUFlLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFDOUYsS0FBSyxDQUFDLENBQUM7WUFDVCxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDcEI7SUFDSCxDQUFDO0lBQ0gsdUJBQUM7QUFBRCxDQUFDLEFBckJELENBQXNDLHlCQUFXLEdBcUJoRDtBQXJCWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPRGF0YUxpbmtlciB9IGZyb20gJy4vT0RhdGFMaW5rZXInO1xuaW1wb3J0IHsgTGlua2luZ1NjZW5hcmlvIH0gZnJvbSAnLi4vb2RhdGFsaW5rcy9MaW5raW5nU2NlbmFyaW8nO1xuaW1wb3J0IHsgT0RhdGFDcnVkT3BlcmF0aW9uIH0gZnJvbSAnLi4vLi4vQmFzZU9EYXRhQ3J1ZGVyJztcbmltcG9ydCB7IENoYW5nZVNldE1hbmFnZXIgfSBmcm9tICcuLi8uLi9DaGFuZ2VTZXRNYW5hZ2VyJztcbmltcG9ydCB7IEVycm9yTWVzc2FnZSB9IGZyb20gJy4uLy4uLy4uLy4uL0Vycm9ySGFuZGxpbmcvRXJyb3JNZXNzYWdlJztcblxuZXhwb3J0IGNsYXNzIE9EYXRhTGlua0RlbGV0ZXIgZXh0ZW5kcyBPRGF0YUxpbmtlciB7XG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihzb3VyY2VFbnRpdHlTZXROYW1lOiBzdHJpbmcsIGxpbmtpbmdQYXJhbXM6IGFueSkge1xuICAgIHN1cGVyKHNvdXJjZUVudGl0eVNldE5hbWUsIGxpbmtpbmdQYXJhbXMsIE9EYXRhQ3J1ZE9wZXJhdGlvbi5EZWxldGUpO1xuICB9XG5cbiAgcHVibGljIGV4ZWN1dGUoc291cmNlRW50aXR5OiBhbnksIGRhdGFTZXJ2aWNlOiBhbnksIGNoYW5nZVNldE1hbmFnZXI6IENoYW5nZVNldE1hbmFnZXIpOiBhbnkge1xuICAgIGlmIChkYXRhU2VydmljZSAhPSBudWxsKSB7XG4gICAgICBzdXBlci5leGVjdXRlKHNvdXJjZUVudGl0eSwgZGF0YVNlcnZpY2UsIGNoYW5nZVNldE1hbmFnZXIpO1xuICAgICAgdGhpcy5wZXJmb3JtTGlua2luZyhzb3VyY2VFbnRpdHkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoRXJyb3JNZXNzYWdlLk9EQVRBX1VOS05PV05fREFUQVNFUlZJQ0VfVFlQRSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBwZXJmb3JtTGlua2luZyhzb3VyY2VFbnRpdHk6IGFueSk6IHZvaWQge1xuICAgIGZvciAobGV0IHRhcmdldCBvZiB0aGlzLnRhcmdldHMpIHtcbiAgICAgIGxldCBzY2VuYXJpbyA9IG5ldyBMaW5raW5nU2NlbmFyaW8odGhpcy5uYXZpZ2F0aW9uUHJvcGVydHksIHNvdXJjZUVudGl0eSwgdGFyZ2V0LCB0aGlzLm9wZXJhdGlvbiwgXG4gICAgICAgIGZhbHNlKTtcbiAgICAgIHNjZW5hcmlvLmV4ZWN1dGUoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==