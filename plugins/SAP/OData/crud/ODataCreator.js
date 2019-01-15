"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BaseODataCruder_1 = require("./BaseODataCruder");
var CrudParamsHelper_1 = require("./CrudParamsHelper");
var ODataHelper_1 = require("../ODataHelper");
var ErrorMessage_1 = require("../../ErrorHandling/ErrorMessage");
var ODataCreator = /** @class */ (function (_super) {
    __extends(ODataCreator, _super);
    function ODataCreator(params) {
        var _this = _super.call(this, params) || this;
        _this.setEntitySetName();
        _this.setProperties();
        _this.setLinkCreators();
        return _this;
    }
    ODataCreator.prototype.execute = function (dataService, changeSetManager) {
        this.setChangeSetManager(changeSetManager);
        var entityToCreate = this.initNewEntity(dataService);
        ODataHelper_1.ODataHelper.setEntityValueProperties(entityToCreate, this.properties);
        // MandatoryParentLinker will be returned by a link which does not have its principal's referential constraints 
        // set, but is in a strict relationship this one needs to be used with createRelatedEntity
        var linkToParentEntity = this.executeLinkCreators(dataService, entityToCreate);
        if (linkToParentEntity != null) {
            this.createUsingCreateRelatedEntity(entityToCreate, linkToParentEntity);
        }
        else {
            changeSetManager.createEntity(entityToCreate, this.headers);
        }
        return ODataHelper_1.ODataHelper.entityValueToJson(entityToCreate, this.getDataContext(dataService));
    };
    ODataCreator.prototype.setEntitySetName = function () {
        this.entitySetName = CrudParamsHelper_1.CrudParamsHelper.getEntitySetNameFromService(this.service);
    };
    ODataCreator.prototype.setProperties = function () {
        var properties = CrudParamsHelper_1.CrudParamsHelper.getPropertiesFromService(this.service);
        if (properties != null) {
            this.properties = properties;
        }
        else {
            throw new Error(ErrorMessage_1.ErrorMessage.format(ErrorMessage_1.ErrorMessage.ODATA_CREATE_OPERATION_EMPTY_PROPERTY_NOT_ALLOWED, CrudParamsHelper_1.CrudParamsHelper.MALFORMEDPARAM));
        }
    };
    ODataCreator.prototype.setLinkCreators = function () {
        this.linkCreators = CrudParamsHelper_1.CrudParamsHelper.getLinkCreatorsFromParams(this.params);
    };
    ODataCreator.prototype.createUsingCreateRelatedEntity = function (entityToCreate, linkToParentEntity) {
        var relatedParent = linkToParentEntity.getPrincipalEntity();
        var navigationPropertyFromRelatedParent = ODataHelper_1.ODataHelper.partnerPropertyFromEntity(linkToParentEntity.getDependantNavigationProperty(), relatedParent);
        this.changeSetManager.createRelatedEntity(entityToCreate, relatedParent, navigationPropertyFromRelatedParent, this.headers);
    };
    ODataCreator.prototype.initNewEntity = function (dataService) {
        if (dataService != null) {
            var entitySet = dataService.getEntitySet(this.entitySetName);
            return ODataHelper_1.ODataHelper.createEntityValue(entitySet.getEntityType());
        }
        throw new Error(ErrorMessage_1.ErrorMessage.format(ErrorMessage_1.ErrorMessage.ODATA_CREATE_ENTITY_ENTITY_SET_NOT_FOUND, this.entitySetName));
    };
    ODataCreator.prototype.executeLinkCreators = function (dataService, sourceEntity) {
        var linkToParentEntity = null;
        if (this.linkCreators != null) {
            for (var _i = 0, _a = this.linkCreators; _i < _a.length; _i++) {
                var linkCreator = _a[_i];
                // Can only use createRelatedEntity to create the parent once.
                var canUseCreateRelatedEntity = (linkToParentEntity == null);
                var link_1 = linkCreator.execute(sourceEntity, dataService, this.changeSetManager, canUseCreateRelatedEntity);
                if (link_1 != null) {
                    // Make sure that no more than one linker returns a link which requires to be a relatedParent
                    if (linkToParentEntity != null) {
                        throw new Error('Two links forced the usage of createRelatedEntity, which is not possible');
                    }
                    else {
                        linkToParentEntity = link_1;
                    }
                }
            }
        }
        return linkToParentEntity;
    };
    return ODataCreator;
}(BaseODataCruder_1.BaseODataCruder));
exports.ODataCreator = ODataCreator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT0RhdGFDcmVhdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiT0RhdGFDcmVhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscURBQW9EO0FBQ3BELHVEQUFzRDtBQUd0RCw4Q0FBNkM7QUFDN0MsaUVBQWdFO0FBRWhFO0lBQWtDLGdDQUFlO0lBSy9DLHNCQUFtQixNQUFXO1FBQTlCLFlBQ0Usa0JBQU0sTUFBTSxDQUFDLFNBSWQ7UUFIQyxLQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUN4QixLQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckIsS0FBSSxDQUFDLGVBQWUsRUFBRSxDQUFDOztJQUN6QixDQUFDO0lBRU0sOEJBQU8sR0FBZCxVQUFlLFdBQWdCLEVBQUUsZ0JBQWtDO1FBQ2pFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzNDLElBQUksY0FBYyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFckQseUJBQVcsQ0FBQyx3QkFBd0IsQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRXRFLGdIQUFnSDtRQUNoSCwwRkFBMEY7UUFDMUYsSUFBSSxrQkFBa0IsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsV0FBVyxFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBQy9FLEVBQUUsQ0FBQyxDQUFDLGtCQUFrQixJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDL0IsSUFBSSxDQUFDLDhCQUE4QixDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBQzFFLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzlELENBQUM7UUFDRCxNQUFNLENBQUMseUJBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQ3pGLENBQUM7SUFFTyx1Q0FBZ0IsR0FBeEI7UUFDRSxJQUFJLENBQUMsYUFBYSxHQUFHLG1DQUFnQixDQUFDLDJCQUEyQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNsRixDQUFDO0lBRU8sb0NBQWEsR0FBckI7UUFDRSxJQUFJLFVBQVUsR0FBRyxtQ0FBZ0IsQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFekUsRUFBRSxDQUFDLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDdkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDL0IsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sTUFBTSxJQUFJLEtBQUssQ0FBQywyQkFBWSxDQUFDLE1BQU0sQ0FBQywyQkFBWSxDQUFDLGlEQUFpRCxFQUNoRyxtQ0FBZ0IsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO1FBQ3RDLENBQUM7SUFDSCxDQUFDO0lBRU8sc0NBQWUsR0FBdkI7UUFDRSxJQUFJLENBQUMsWUFBWSxHQUFHLG1DQUFnQixDQUFDLHlCQUF5QixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM5RSxDQUFDO0lBRU8scURBQThCLEdBQXRDLFVBQXVDLGNBQW1CLEVBQUUsa0JBQXVCO1FBQ2pGLElBQUksYUFBYSxHQUFHLGtCQUFrQixDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDNUQsSUFBSSxtQ0FBbUMsR0FBRyx5QkFBVyxDQUFDLHlCQUF5QixDQUM3RSxrQkFBa0IsQ0FBQyw4QkFBOEIsRUFBRSxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBRXRFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxtQkFBbUIsQ0FBQyxjQUFjLEVBQUUsYUFBYSxFQUNyRSxtQ0FBbUMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVPLG9DQUFhLEdBQXJCLFVBQXNCLFdBQWdCO1FBQ3BDLEVBQUUsQ0FBQyxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLElBQUksU0FBUyxHQUFHLFdBQVcsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQzdELE1BQU0sQ0FBQyx5QkFBVyxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO1FBQ2xFLENBQUM7UUFDRCxNQUFNLElBQUksS0FBSyxDQUFDLDJCQUFZLENBQUMsTUFBTSxDQUFDLDJCQUFZLENBQUMsd0NBQXdDLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7SUFDbEgsQ0FBQztJQUVPLDBDQUFtQixHQUEzQixVQUE0QixXQUFnQixFQUFFLFlBQWlCO1FBQzdELElBQUksa0JBQWtCLEdBQUcsSUFBSSxDQUFDO1FBRTlCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztZQUM5QixHQUFHLENBQUMsQ0FBb0IsVUFBaUIsRUFBakIsS0FBQSxJQUFJLENBQUMsWUFBWSxFQUFqQixjQUFpQixFQUFqQixJQUFpQjtnQkFBcEMsSUFBSSxXQUFXLFNBQUE7Z0JBQ2xCLDhEQUE4RDtnQkFDOUQsSUFBSSx5QkFBeUIsR0FBRyxDQUFDLGtCQUFrQixJQUFJLElBQUksQ0FBQyxDQUFDO2dCQUM3RCxJQUFJLE1BQUksR0FBRyxXQUFXLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixFQUFFLHlCQUF5QixDQUFDLENBQUM7Z0JBQzVHLEVBQUUsQ0FBQyxDQUFDLE1BQUksSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO29CQUNqQiw2RkFBNkY7b0JBQzdGLEVBQUUsQ0FBQyxDQUFDLGtCQUFrQixJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7d0JBQy9CLE1BQU0sSUFBSSxLQUFLLENBQUMsMEVBQTBFLENBQUMsQ0FBQztvQkFDOUYsQ0FBQztvQkFBQyxJQUFJLENBQUMsQ0FBQzt3QkFDTixrQkFBa0IsR0FBRyxNQUFJLENBQUM7b0JBQzVCLENBQUM7Z0JBQ0gsQ0FBQzthQUNGO1FBQ0gsQ0FBQztRQUNELE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQztJQUM1QixDQUFDO0lBQ0gsbUJBQUM7QUFBRCxDQUFDLEFBckZELENBQWtDLGlDQUFlLEdBcUZoRDtBQXJGWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhc2VPRGF0YUNydWRlciB9IGZyb20gJy4vQmFzZU9EYXRhQ3J1ZGVyJztcbmltcG9ydCB7IENydWRQYXJhbXNIZWxwZXIgfSBmcm9tICcuL0NydWRQYXJhbXNIZWxwZXInO1xuaW1wb3J0IHsgT0RhdGFMaW5rQ3JlYXRvciB9IGZyb20gJy4vb2RhdGFsaW5raW5nL29kYXRhbGlua2Vycy9PRGF0YUxpbmtDcmVhdG9yJztcbmltcG9ydCB7IENoYW5nZVNldE1hbmFnZXIgfSBmcm9tICcuL0NoYW5nZVNldE1hbmFnZXInO1xuaW1wb3J0IHsgT0RhdGFIZWxwZXIgfSBmcm9tICcuLi9PRGF0YUhlbHBlcic7XG5pbXBvcnQgeyBFcnJvck1lc3NhZ2UgfSBmcm9tICcuLi8uLi9FcnJvckhhbmRsaW5nL0Vycm9yTWVzc2FnZSc7XG5cbmV4cG9ydCBjbGFzcyBPRGF0YUNyZWF0b3IgZXh0ZW5kcyBCYXNlT0RhdGFDcnVkZXIge1xuICBwcml2YXRlIHByb3BlcnRpZXM6IHN0cmluZ1tdO1xuICBwcml2YXRlIGVudGl0eVNldE5hbWU6IHN0cmluZztcbiAgcHJpdmF0ZSBsaW5rQ3JlYXRvcnM6IFtPRGF0YUxpbmtDcmVhdG9yXTtcblxuICBwdWJsaWMgY29uc3RydWN0b3IocGFyYW1zOiBhbnkpIHtcbiAgICBzdXBlcihwYXJhbXMpO1xuICAgIHRoaXMuc2V0RW50aXR5U2V0TmFtZSgpO1xuICAgIHRoaXMuc2V0UHJvcGVydGllcygpO1xuICAgIHRoaXMuc2V0TGlua0NyZWF0b3JzKCk7XG4gIH1cblxuICBwdWJsaWMgZXhlY3V0ZShkYXRhU2VydmljZTogYW55LCBjaGFuZ2VTZXRNYW5hZ2VyOiBDaGFuZ2VTZXRNYW5hZ2VyKTogc3RyaW5nIHtcbiAgICB0aGlzLnNldENoYW5nZVNldE1hbmFnZXIoY2hhbmdlU2V0TWFuYWdlcik7XG4gICAgbGV0IGVudGl0eVRvQ3JlYXRlID0gdGhpcy5pbml0TmV3RW50aXR5KGRhdGFTZXJ2aWNlKTtcblxuICAgIE9EYXRhSGVscGVyLnNldEVudGl0eVZhbHVlUHJvcGVydGllcyhlbnRpdHlUb0NyZWF0ZSwgdGhpcy5wcm9wZXJ0aWVzKTtcblxuICAgIC8vIE1hbmRhdG9yeVBhcmVudExpbmtlciB3aWxsIGJlIHJldHVybmVkIGJ5IGEgbGluayB3aGljaCBkb2VzIG5vdCBoYXZlIGl0cyBwcmluY2lwYWwncyByZWZlcmVudGlhbCBjb25zdHJhaW50cyBcbiAgICAvLyBzZXQsIGJ1dCBpcyBpbiBhIHN0cmljdCByZWxhdGlvbnNoaXAgdGhpcyBvbmUgbmVlZHMgdG8gYmUgdXNlZCB3aXRoIGNyZWF0ZVJlbGF0ZWRFbnRpdHlcbiAgICBsZXQgbGlua1RvUGFyZW50RW50aXR5ID0gdGhpcy5leGVjdXRlTGlua0NyZWF0b3JzKGRhdGFTZXJ2aWNlLCBlbnRpdHlUb0NyZWF0ZSk7XG4gICAgaWYgKGxpbmtUb1BhcmVudEVudGl0eSAhPSBudWxsKSB7XG4gICAgICB0aGlzLmNyZWF0ZVVzaW5nQ3JlYXRlUmVsYXRlZEVudGl0eShlbnRpdHlUb0NyZWF0ZSwgbGlua1RvUGFyZW50RW50aXR5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2hhbmdlU2V0TWFuYWdlci5jcmVhdGVFbnRpdHkoZW50aXR5VG9DcmVhdGUsIHRoaXMuaGVhZGVycyk7XG4gICAgfVxuICAgIHJldHVybiBPRGF0YUhlbHBlci5lbnRpdHlWYWx1ZVRvSnNvbihlbnRpdHlUb0NyZWF0ZSwgdGhpcy5nZXREYXRhQ29udGV4dChkYXRhU2VydmljZSkpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRFbnRpdHlTZXROYW1lKCk6IHZvaWQge1xuICAgIHRoaXMuZW50aXR5U2V0TmFtZSA9IENydWRQYXJhbXNIZWxwZXIuZ2V0RW50aXR5U2V0TmFtZUZyb21TZXJ2aWNlKHRoaXMuc2VydmljZSk7XG4gIH1cblxuICBwcml2YXRlIHNldFByb3BlcnRpZXMoKTogdm9pZCB7XG4gICAgbGV0IHByb3BlcnRpZXMgPSBDcnVkUGFyYW1zSGVscGVyLmdldFByb3BlcnRpZXNGcm9tU2VydmljZSh0aGlzLnNlcnZpY2UpO1xuXG4gICAgaWYgKHByb3BlcnRpZXMgIT0gbnVsbCkge1xuICAgICAgdGhpcy5wcm9wZXJ0aWVzID0gcHJvcGVydGllcztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKEVycm9yTWVzc2FnZS5mb3JtYXQoRXJyb3JNZXNzYWdlLk9EQVRBX0NSRUFURV9PUEVSQVRJT05fRU1QVFlfUFJPUEVSVFlfTk9UX0FMTE9XRUQsXG4gICAgICAgIENydWRQYXJhbXNIZWxwZXIuTUFMRk9STUVEUEFSQU0pKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNldExpbmtDcmVhdG9ycygpOiB2b2lkIHtcbiAgICB0aGlzLmxpbmtDcmVhdG9ycyA9IENydWRQYXJhbXNIZWxwZXIuZ2V0TGlua0NyZWF0b3JzRnJvbVBhcmFtcyh0aGlzLnBhcmFtcyk7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZVVzaW5nQ3JlYXRlUmVsYXRlZEVudGl0eShlbnRpdHlUb0NyZWF0ZTogYW55LCBsaW5rVG9QYXJlbnRFbnRpdHk6IGFueSk6IHZvaWQge1xuICAgIGxldCByZWxhdGVkUGFyZW50ID0gbGlua1RvUGFyZW50RW50aXR5LmdldFByaW5jaXBhbEVudGl0eSgpO1xuICAgIGxldCBuYXZpZ2F0aW9uUHJvcGVydHlGcm9tUmVsYXRlZFBhcmVudCA9IE9EYXRhSGVscGVyLnBhcnRuZXJQcm9wZXJ0eUZyb21FbnRpdHkoXG4gICAgICBsaW5rVG9QYXJlbnRFbnRpdHkuZ2V0RGVwZW5kYW50TmF2aWdhdGlvblByb3BlcnR5KCksIHJlbGF0ZWRQYXJlbnQpO1xuXG4gICAgdGhpcy5jaGFuZ2VTZXRNYW5hZ2VyLmNyZWF0ZVJlbGF0ZWRFbnRpdHkoZW50aXR5VG9DcmVhdGUsIHJlbGF0ZWRQYXJlbnQsXG4gICAgICBuYXZpZ2F0aW9uUHJvcGVydHlGcm9tUmVsYXRlZFBhcmVudCwgdGhpcy5oZWFkZXJzKTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdE5ld0VudGl0eShkYXRhU2VydmljZTogYW55KTogYW55IHtcbiAgICBpZiAoZGF0YVNlcnZpY2UgIT0gbnVsbCkge1xuICAgICAgbGV0IGVudGl0eVNldCA9IGRhdGFTZXJ2aWNlLmdldEVudGl0eVNldCh0aGlzLmVudGl0eVNldE5hbWUpO1xuICAgICAgcmV0dXJuIE9EYXRhSGVscGVyLmNyZWF0ZUVudGl0eVZhbHVlKGVudGl0eVNldC5nZXRFbnRpdHlUeXBlKCkpO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoRXJyb3JNZXNzYWdlLmZvcm1hdChFcnJvck1lc3NhZ2UuT0RBVEFfQ1JFQVRFX0VOVElUWV9FTlRJVFlfU0VUX05PVF9GT1VORCwgdGhpcy5lbnRpdHlTZXROYW1lKSk7XG4gIH1cblxuICBwcml2YXRlIGV4ZWN1dGVMaW5rQ3JlYXRvcnMoZGF0YVNlcnZpY2U6IGFueSwgc291cmNlRW50aXR5OiBhbnkpOiBhbnkge1xuICAgIGxldCBsaW5rVG9QYXJlbnRFbnRpdHkgPSBudWxsO1xuXG4gICAgaWYgKHRoaXMubGlua0NyZWF0b3JzICE9IG51bGwpIHtcbiAgICAgIGZvciAobGV0IGxpbmtDcmVhdG9yIG9mIHRoaXMubGlua0NyZWF0b3JzKSB7XG4gICAgICAgIC8vIENhbiBvbmx5IHVzZSBjcmVhdGVSZWxhdGVkRW50aXR5IHRvIGNyZWF0ZSB0aGUgcGFyZW50IG9uY2UuXG4gICAgICAgIGxldCBjYW5Vc2VDcmVhdGVSZWxhdGVkRW50aXR5ID0gKGxpbmtUb1BhcmVudEVudGl0eSA9PSBudWxsKTtcbiAgICAgICAgbGV0IGxpbmsgPSBsaW5rQ3JlYXRvci5leGVjdXRlKHNvdXJjZUVudGl0eSwgZGF0YVNlcnZpY2UsIHRoaXMuY2hhbmdlU2V0TWFuYWdlciwgY2FuVXNlQ3JlYXRlUmVsYXRlZEVudGl0eSk7XG4gICAgICAgIGlmIChsaW5rICE9IG51bGwpIHtcbiAgICAgICAgICAvLyBNYWtlIHN1cmUgdGhhdCBubyBtb3JlIHRoYW4gb25lIGxpbmtlciByZXR1cm5zIGEgbGluayB3aGljaCByZXF1aXJlcyB0byBiZSBhIHJlbGF0ZWRQYXJlbnRcbiAgICAgICAgICBpZiAobGlua1RvUGFyZW50RW50aXR5ICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVHdvIGxpbmtzIGZvcmNlZCB0aGUgdXNhZ2Ugb2YgY3JlYXRlUmVsYXRlZEVudGl0eSwgd2hpY2ggaXMgbm90IHBvc3NpYmxlJyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxpbmtUb1BhcmVudEVudGl0eSA9IGxpbms7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBsaW5rVG9QYXJlbnRFbnRpdHk7XG4gIH1cbn1cbiJdfQ==