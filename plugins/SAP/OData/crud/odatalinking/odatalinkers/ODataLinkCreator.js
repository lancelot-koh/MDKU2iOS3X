"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ODataLinker_1 = require("./ODataLinker");
var LinkingScenario_1 = require("../odatalinks/LinkingScenario");
var BaseODataCruder_1 = require("../../BaseODataCruder");
var ErrorMessage_1 = require("../../../../ErrorHandling/ErrorMessage");
var ODataLinkCreator = /** @class */ (function (_super) {
    __extends(ODataLinkCreator, _super);
    function ODataLinkCreator(sourceEntitySetName, linkingParams, operation) {
        if (operation === void 0) { operation = BaseODataCruder_1.ODataCrudOperation.Create; }
        return _super.call(this, sourceEntitySetName, linkingParams, operation) || this;
    }
    ODataLinkCreator.prototype.execute = function (sourceEntity, dataService, changeSetManager, canUseCreateRelatedEntity) {
        if (canUseCreateRelatedEntity === void 0) { canUseCreateRelatedEntity = false; }
        if (dataService != null) {
            _super.prototype.execute.call(this, sourceEntity, dataService, changeSetManager);
            return this.performLinking(sourceEntity, canUseCreateRelatedEntity);
        }
        throw new Error(ErrorMessage_1.ErrorMessage.ODATA_UNKNOWN_DATASERVICE_TYPE);
    };
    ODataLinkCreator.prototype.isTargetCreatedInSameChangeSet = function () {
        return this.targetReadParams.isTargetCreatedInSameChangeSet();
    };
    ODataLinkCreator.prototype.performLinking = function (sourceEntity, canUseCreateRelatedEntity) {
        var linkToParentEntity = null;
        for (var _i = 0, _a = this.targets; _i < _a.length; _i++) {
            var target = _a[_i];
            if (target.getReadLink() == null) {
                target.setReadLink(target.getCanonicalURL());
            }
            var scenario = new LinkingScenario_1.LinkingScenario(this.navigationProperty, sourceEntity, target, this.operation, canUseCreateRelatedEntity);
            var link_1 = scenario.execute();
            if (link_1 != null) {
                // Make sure that the linker does not have more than one link which requires to be a relatedParent
                if (linkToParentEntity != null) {
                    throw new Error(ErrorMessage_1.ErrorMessage.ODATA_CREATE_RELATED_ENTITY_NOT_ALLOWED);
                }
                else {
                    linkToParentEntity = link_1;
                }
            }
        }
        return linkToParentEntity;
    };
    return ODataLinkCreator;
}(ODataLinker_1.ODataLinker));
exports.ODataLinkCreator = ODataLinkCreator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT0RhdGFMaW5rQ3JlYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIk9EYXRhTGlua0NyZWF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw2Q0FBNEM7QUFDNUMsaUVBQWdFO0FBQ2hFLHlEQUEyRDtBQUUzRCx1RUFBc0U7QUFFdEU7SUFBc0Msb0NBQVc7SUFDL0MsMEJBQW1CLG1CQUEyQixFQUFFLGFBQWtCLEVBQUUsU0FBcUM7UUFBckMsMEJBQUEsRUFBQSxZQUFZLG9DQUFrQixDQUFDLE1BQU07ZUFDdkcsa0JBQU0sbUJBQW1CLEVBQUUsYUFBYSxFQUFFLFNBQVMsQ0FBQztJQUN0RCxDQUFDO0lBRU0sa0NBQU8sR0FBZCxVQUFlLFlBQWlCLEVBQUUsV0FBZ0IsRUFBRSxnQkFBa0MsRUFDdkUseUJBQWlDO1FBQWpDLDBDQUFBLEVBQUEsaUNBQWlDO1FBQzlDLEVBQUUsQ0FBQyxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLGlCQUFNLE9BQU8sWUFBQyxZQUFZLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixDQUFDLENBQUM7WUFDM0QsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxFQUFFLHlCQUF5QixDQUFDLENBQUM7UUFDdEUsQ0FBQztRQUNELE1BQU0sSUFBSSxLQUFLLENBQUMsMkJBQVksQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFFTSx5REFBOEIsR0FBckM7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLDhCQUE4QixFQUFFLENBQUM7SUFDaEUsQ0FBQztJQUVPLHlDQUFjLEdBQXRCLFVBQXVCLFlBQWlCLEVBQUUseUJBQWtDO1FBQzFFLElBQUksa0JBQWtCLEdBQUcsSUFBSSxDQUFDO1FBQzlCLEdBQUcsQ0FBQyxDQUFlLFVBQVksRUFBWixLQUFBLElBQUksQ0FBQyxPQUFPLEVBQVosY0FBWSxFQUFaLElBQVk7WUFBMUIsSUFBSSxNQUFNLFNBQUE7WUFDYixFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDakMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQztZQUMvQyxDQUFDO1lBQ0QsSUFBSSxRQUFRLEdBQUcsSUFBSSxpQ0FBZSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQzlGLHlCQUF5QixDQUFDLENBQUM7WUFDN0IsSUFBSSxNQUFJLEdBQUcsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQzlCLEVBQUUsQ0FBQyxDQUFDLE1BQUksSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUNqQixrR0FBa0c7Z0JBQ2xHLEVBQUUsQ0FBQyxDQUFDLGtCQUFrQixJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7b0JBQy9CLE1BQU0sSUFBSSxLQUFLLENBQUMsMkJBQVksQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFDO2dCQUN4RSxDQUFDO2dCQUFDLElBQUksQ0FBQyxDQUFDO29CQUNOLGtCQUFrQixHQUFHLE1BQUksQ0FBQztnQkFDNUIsQ0FBQztZQUNILENBQUM7U0FDRjtRQUNELE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQztJQUM1QixDQUFDO0lBQ0gsdUJBQUM7QUFBRCxDQUFDLEFBdENELENBQXNDLHlCQUFXLEdBc0NoRDtBQXRDWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPRGF0YUxpbmtlciB9IGZyb20gJy4vT0RhdGFMaW5rZXInO1xuaW1wb3J0IHsgTGlua2luZ1NjZW5hcmlvIH0gZnJvbSAnLi4vb2RhdGFsaW5rcy9MaW5raW5nU2NlbmFyaW8nO1xuaW1wb3J0IHsgT0RhdGFDcnVkT3BlcmF0aW9uIH0gZnJvbSAnLi4vLi4vQmFzZU9EYXRhQ3J1ZGVyJztcbmltcG9ydCB7IENoYW5nZVNldE1hbmFnZXIgfSBmcm9tICcuLi8uLi9DaGFuZ2VTZXRNYW5hZ2VyJztcbmltcG9ydCB7IEVycm9yTWVzc2FnZSB9IGZyb20gJy4uLy4uLy4uLy4uL0Vycm9ySGFuZGxpbmcvRXJyb3JNZXNzYWdlJztcblxuZXhwb3J0IGNsYXNzIE9EYXRhTGlua0NyZWF0b3IgZXh0ZW5kcyBPRGF0YUxpbmtlciB7XG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihzb3VyY2VFbnRpdHlTZXROYW1lOiBzdHJpbmcsIGxpbmtpbmdQYXJhbXM6IGFueSwgb3BlcmF0aW9uID0gT0RhdGFDcnVkT3BlcmF0aW9uLkNyZWF0ZSkge1xuICAgIHN1cGVyKHNvdXJjZUVudGl0eVNldE5hbWUsIGxpbmtpbmdQYXJhbXMsIG9wZXJhdGlvbik7XG4gIH1cblxuICBwdWJsaWMgZXhlY3V0ZShzb3VyY2VFbnRpdHk6IGFueSwgZGF0YVNlcnZpY2U6IGFueSwgY2hhbmdlU2V0TWFuYWdlcjogQ2hhbmdlU2V0TWFuYWdlciwgXG4gICAgICAgICAgICAgICAgIGNhblVzZUNyZWF0ZVJlbGF0ZWRFbnRpdHkgPSBmYWxzZSkge1xuICAgIGlmIChkYXRhU2VydmljZSAhPSBudWxsKSB7XG4gICAgICBzdXBlci5leGVjdXRlKHNvdXJjZUVudGl0eSwgZGF0YVNlcnZpY2UsIGNoYW5nZVNldE1hbmFnZXIpO1xuICAgICAgcmV0dXJuIHRoaXMucGVyZm9ybUxpbmtpbmcoc291cmNlRW50aXR5LCBjYW5Vc2VDcmVhdGVSZWxhdGVkRW50aXR5KTtcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKEVycm9yTWVzc2FnZS5PREFUQV9VTktOT1dOX0RBVEFTRVJWSUNFX1RZUEUpO1xuICB9XG5cbiAgcHVibGljIGlzVGFyZ2V0Q3JlYXRlZEluU2FtZUNoYW5nZVNldCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy50YXJnZXRSZWFkUGFyYW1zLmlzVGFyZ2V0Q3JlYXRlZEluU2FtZUNoYW5nZVNldCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBwZXJmb3JtTGlua2luZyhzb3VyY2VFbnRpdHk6IGFueSwgY2FuVXNlQ3JlYXRlUmVsYXRlZEVudGl0eTogYm9vbGVhbikge1xuICAgIGxldCBsaW5rVG9QYXJlbnRFbnRpdHkgPSBudWxsO1xuICAgIGZvciAobGV0IHRhcmdldCBvZiB0aGlzLnRhcmdldHMpIHtcbiAgICAgIGlmICh0YXJnZXQuZ2V0UmVhZExpbmsoKSA9PSBudWxsKSB7XG4gICAgICAgIHRhcmdldC5zZXRSZWFkTGluayh0YXJnZXQuZ2V0Q2Fub25pY2FsVVJMKCkpO1xuICAgICAgfVxuICAgICAgbGV0IHNjZW5hcmlvID0gbmV3IExpbmtpbmdTY2VuYXJpbyh0aGlzLm5hdmlnYXRpb25Qcm9wZXJ0eSwgc291cmNlRW50aXR5LCB0YXJnZXQsIHRoaXMub3BlcmF0aW9uLCBcbiAgICAgICAgY2FuVXNlQ3JlYXRlUmVsYXRlZEVudGl0eSk7XG4gICAgICBsZXQgbGluayA9IHNjZW5hcmlvLmV4ZWN1dGUoKTtcbiAgICAgIGlmIChsaW5rICE9IG51bGwpIHtcbiAgICAgICAgLy8gTWFrZSBzdXJlIHRoYXQgdGhlIGxpbmtlciBkb2VzIG5vdCBoYXZlIG1vcmUgdGhhbiBvbmUgbGluayB3aGljaCByZXF1aXJlcyB0byBiZSBhIHJlbGF0ZWRQYXJlbnRcbiAgICAgICAgaWYgKGxpbmtUb1BhcmVudEVudGl0eSAhPSBudWxsKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKEVycm9yTWVzc2FnZS5PREFUQV9DUkVBVEVfUkVMQVRFRF9FTlRJVFlfTk9UX0FMTE9XRUQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxpbmtUb1BhcmVudEVudGl0eSA9IGxpbms7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGxpbmtUb1BhcmVudEVudGl0eTtcbiAgfVxufVxuIl19