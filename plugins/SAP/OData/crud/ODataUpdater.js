"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BaseODataCruder_1 = require("./BaseODataCruder");
var ReadParamsFactory_1 = require("./ReadParamsFactory");
var CrudParamsHelper_1 = require("./CrudParamsHelper");
var ReadService_1 = require("./ReadService");
var ODataHelper_1 = require("../ODataHelper");
var ErrorMessage_1 = require("../../ErrorHandling/ErrorMessage");
var ODataUpdater = /** @class */ (function (_super) {
    __extends(ODataUpdater, _super);
    function ODataUpdater(params) {
        var _this = _super.call(this, params) || this;
        _this.setTargetReadParams();
        _this.setProperties();
        _this.setLinkCreators();
        _this.setLinkUpdaters();
        _this.setLinkDeleters();
        return _this;
    }
    ODataUpdater.prototype.execute = function (dataService, changeSetManager) {
        this.setChangeSetManager(changeSetManager);
        var entityToUpdate = ReadService_1.ReadService.entityFromParams(this.targetReadParams, dataService, this.changeSetManager);
        ODataHelper_1.ODataHelper.setEntityValueProperties(entityToUpdate, this.properties);
        this.executeLinkers(dataService, entityToUpdate);
        this.changeSetManager.updateEntity(entityToUpdate, this.headers);
        return ODataHelper_1.ODataHelper.entityValueToJson(entityToUpdate, this.getDataContext(dataService));
    };
    ODataUpdater.prototype.setTargetReadParams = function () {
        this.targetReadParams = ReadParamsFactory_1.ReadParamsFactory.createReadParams(this.service);
    };
    ODataUpdater.prototype.setProperties = function () {
        this.properties = CrudParamsHelper_1.CrudParamsHelper.getPropertiesFromService(this.service);
    };
    ODataUpdater.prototype.setLinkCreators = function () {
        this.linkCreators = CrudParamsHelper_1.CrudParamsHelper.getLinkCreatorsFromParams(this.params);
    };
    ODataUpdater.prototype.setLinkUpdaters = function () {
        this.linkUpdaters = CrudParamsHelper_1.CrudParamsHelper.getLinkUpdatersFromParams(this.params);
    };
    ODataUpdater.prototype.setLinkDeleters = function () {
        this.linkDeleters = CrudParamsHelper_1.CrudParamsHelper.getLinkDeletersFromParams(this.params);
    };
    ODataUpdater.prototype.executeLinkers = function (dataService, sourceEntity) {
        this.executeLinkCreators(dataService, sourceEntity);
        this.executeLinkUpdaters(dataService, sourceEntity);
        this.executeLinkDeleters(dataService, sourceEntity);
    };
    ODataUpdater.prototype.executeLinkCreators = function (dataService, sourceEntity) {
        if (this.linkCreators != null) {
            for (var _i = 0, _a = this.linkCreators; _i < _a.length; _i++) {
                var linkCreator = _a[_i];
                try {
                    linkCreator.execute(sourceEntity, dataService, this.changeSetManager);
                }
                catch (error) {
                    throw new Error(ErrorMessage_1.ErrorMessage.ODATA_UPDATE_MANDATORY_PARENT_NOT_ALLOWED);
                }
            }
        }
    };
    ODataUpdater.prototype.executeLinkUpdaters = function (dataService, sourceEntity) {
        if (this.linkUpdaters != null) {
            for (var _i = 0, _a = this.linkUpdaters; _i < _a.length; _i++) {
                var linkUpdater = _a[_i];
                try {
                    linkUpdater.execute(sourceEntity, dataService, this.changeSetManager);
                }
                catch (error) {
                    throw new Error(ErrorMessage_1.ErrorMessage.ODATA_UPDATE_MANDATORY_PARENT_NOT_ALLOWED);
                }
            }
        }
    };
    ODataUpdater.prototype.executeLinkDeleters = function (dataService, sourceEntity) {
        if (this.linkDeleters != null) {
            for (var _i = 0, _a = this.linkDeleters; _i < _a.length; _i++) {
                var linkDeleter = _a[_i];
                linkDeleter.execute(sourceEntity, dataService, this.changeSetManager);
            }
        }
    };
    return ODataUpdater;
}(BaseODataCruder_1.BaseODataCruder));
exports.ODataUpdater = ODataUpdater;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT0RhdGFVcGRhdGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiT0RhdGFVcGRhdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscURBQW9EO0FBQ3BELHlEQUF3RDtBQUN4RCx1REFBc0Q7QUFDdEQsNkNBQTRDO0FBTTVDLDhDQUE2QztBQUM3QyxpRUFBZ0U7QUFFaEU7SUFBa0MsZ0NBQWU7SUFPL0Msc0JBQW1CLE1BQVc7UUFBOUIsWUFDRSxrQkFBTSxNQUFNLENBQUMsU0FNZDtRQUxDLEtBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQzNCLEtBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyQixLQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDdkIsS0FBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3ZCLEtBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQzs7SUFDekIsQ0FBQztJQUVNLDhCQUFPLEdBQWQsVUFBZSxXQUFnQixFQUFFLGdCQUFrQztRQUNqRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUUzQyxJQUFJLGNBQWMsR0FBRyx5QkFBVyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDN0cseUJBQVcsQ0FBQyx3QkFBd0IsQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRXRFLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBRWpELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNqRSxNQUFNLENBQUMseUJBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQ3pGLENBQUM7SUFF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LFdBQVcsQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQzthQUN2RTtRQUNILENBQUM7SUFDSCxDQUFDO0lBQ0gsbUJBQUM7QUFBRCxDQUFDLEFBckZELENBQWtDLGlDQUFlLEdBcUZoRDtBQXJGWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhc2VPRGF0YUNydWRlciB9IGZyb20gJy4vQmFzZU9EYXRhQ3J1ZGVyJztcbmltcG9ydCB7IFJlYWRQYXJhbXNGYWN0b3J5IH0gZnJvbSAnLi9SZWFkUGFyYW1zRmFjdG9yeSc7XG5pbXBvcnQgeyBDcnVkUGFyYW1zSGVscGVyIH0gZnJvbSAnLi9DcnVkUGFyYW1zSGVscGVyJztcbmltcG9ydCB7IFJlYWRTZXJ2aWNlIH0gZnJvbSAnLi9SZWFkU2VydmljZSc7XG5pbXBvcnQgeyBPRGF0YUxpbmtDcmVhdG9yIH0gZnJvbSAnLi9vZGF0YWxpbmtpbmcvb2RhdGFsaW5rZXJzL09EYXRhTGlua0NyZWF0b3InO1xuaW1wb3J0IHsgT0RhdGFMaW5rVXBkYXRlciB9IGZyb20gJy4vb2RhdGFsaW5raW5nL29kYXRhbGlua2Vycy9PRGF0YUxpbmtVcGRhdGVyJztcbmltcG9ydCB7IE9EYXRhTGlua0RlbGV0ZXIgfSBmcm9tICcuL29kYXRhbGlua2luZy9vZGF0YWxpbmtlcnMvT0RhdGFMaW5rRGVsZXRlcic7XG5pbXBvcnQgeyBSZWFkUGFyYW1zIH0gZnJvbSAnLi9yZWFkcGFyYW1zL1JlYWRQYXJhbXMnO1xuaW1wb3J0IHsgQ2hhbmdlU2V0TWFuYWdlciB9IGZyb20gJy4vQ2hhbmdlU2V0TWFuYWdlcic7XG5pbXBvcnQgeyBPRGF0YUhlbHBlciB9IGZyb20gJy4uL09EYXRhSGVscGVyJztcbmltcG9ydCB7IEVycm9yTWVzc2FnZSB9IGZyb20gJy4uLy4uL0Vycm9ySGFuZGxpbmcvRXJyb3JNZXNzYWdlJztcblxuZXhwb3J0IGNsYXNzIE9EYXRhVXBkYXRlciBleHRlbmRzIEJhc2VPRGF0YUNydWRlciB7XG4gIHByaXZhdGUgdGFyZ2V0UmVhZFBhcmFtczogUmVhZFBhcmFtcztcbiAgcHJpdmF0ZSBwcm9wZXJ0aWVzOiBhbnk7XG4gIHByaXZhdGUgbGlua0NyZWF0b3JzOiBPRGF0YUxpbmtDcmVhdG9yIFtdO1xuICBwcml2YXRlIGxpbmtVcGRhdGVyczogT0RhdGFMaW5rVXBkYXRlciBbXTtcbiAgcHJpdmF0ZSBsaW5rRGVsZXRlcnM6IE9EYXRhTGlua0RlbGV0ZXIgW107XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHBhcmFtczogYW55KSB7XG4gICAgc3VwZXIocGFyYW1zKTtcbiAgICB0aGlzLnNldFRhcmdldFJlYWRQYXJhbXMoKTtcbiAgICB0aGlzLnNldFByb3BlcnRpZXMoKTtcbiAgICB0aGlzLnNldExpbmtDcmVhdG9ycygpO1xuICAgIHRoaXMuc2V0TGlua1VwZGF0ZXJzKCk7XG4gICAgdGhpcy5zZXRMaW5rRGVsZXRlcnMoKTtcbiAgfVxuXG4gIHB1YmxpYyBleGVjdXRlKGRhdGFTZXJ2aWNlOiBhbnksIGNoYW5nZVNldE1hbmFnZXI6IENoYW5nZVNldE1hbmFnZXIpOiBhbnkge1xuICAgIHRoaXMuc2V0Q2hhbmdlU2V0TWFuYWdlcihjaGFuZ2VTZXRNYW5hZ2VyKTtcblxuICAgIGxldCBlbnRpdHlUb1VwZGF0ZSA9IFJlYWRTZXJ2aWNlLmVudGl0eUZyb21QYXJhbXModGhpcy50YXJnZXRSZWFkUGFyYW1zLCBkYXRhU2VydmljZSwgdGhpcy5jaGFuZ2VTZXRNYW5hZ2VyKTtcbiAgICBPRGF0YUhlbHBlci5zZXRFbnRpdHlWYWx1ZVByb3BlcnRpZXMoZW50aXR5VG9VcGRhdGUsIHRoaXMucHJvcGVydGllcyk7XG5cbiAgICB0aGlzLmV4ZWN1dGVMaW5rZXJzKGRhdGFTZXJ2aWNlLCBlbnRpdHlUb1VwZGF0ZSk7XG5cbiAgICB0aGlzLmNoYW5nZVNldE1hbmFnZXIudXBkYXRlRW50aXR5KGVudGl0eVRvVXBkYXRlLCB0aGlzLmhlYWRlcnMpO1xuICAgIHJldHVybiBPRGF0YUhlbHBlci5lbnRpdHlWYWx1ZVRvSnNvbihlbnRpdHlUb1VwZGF0ZSwgdGhpcy5nZXREYXRhQ29udGV4dChkYXRhU2VydmljZSkpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRUYXJnZXRSZWFkUGFyYW1zKCk6IGFueSB7XG4gICAgdGhpcy50YXJnZXRSZWFkUGFyYW1zID0gUmVhZFBhcmFtc0ZhY3RvcnkuY3JlYXRlUmVhZFBhcmFtcyh0aGlzLnNlcnZpY2UpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRQcm9wZXJ0aWVzKCk6IGFueSB7XG4gICAgdGhpcy5wcm9wZXJ0aWVzID0gQ3J1ZFBhcmFtc0hlbHBlci5nZXRQcm9wZXJ0aWVzRnJvbVNlcnZpY2UodGhpcy5zZXJ2aWNlKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0TGlua0NyZWF0b3JzKCk6IHZvaWQge1xuICAgIHRoaXMubGlua0NyZWF0b3JzID0gQ3J1ZFBhcmFtc0hlbHBlci5nZXRMaW5rQ3JlYXRvcnNGcm9tUGFyYW1zKHRoaXMucGFyYW1zKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0TGlua1VwZGF0ZXJzKCk6IHZvaWQge1xuICAgIHRoaXMubGlua1VwZGF0ZXJzID0gQ3J1ZFBhcmFtc0hlbHBlci5nZXRMaW5rVXBkYXRlcnNGcm9tUGFyYW1zKHRoaXMucGFyYW1zKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0TGlua0RlbGV0ZXJzKCk6IHZvaWQge1xuICAgIHRoaXMubGlua0RlbGV0ZXJzID0gQ3J1ZFBhcmFtc0hlbHBlci5nZXRMaW5rRGVsZXRlcnNGcm9tUGFyYW1zKHRoaXMucGFyYW1zKTtcbiAgfVxuXG4gIHByaXZhdGUgZXhlY3V0ZUxpbmtlcnMoZGF0YVNlcnZpY2U6IGFueSwgc291cmNlRW50aXR5OiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLmV4ZWN1dGVMaW5rQ3JlYXRvcnMoZGF0YVNlcnZpY2UsIHNvdXJjZUVudGl0eSk7XG4gICAgdGhpcy5leGVjdXRlTGlua1VwZGF0ZXJzKGRhdGFTZXJ2aWNlLCBzb3VyY2VFbnRpdHkpO1xuICAgIHRoaXMuZXhlY3V0ZUxpbmtEZWxldGVycyhkYXRhU2VydmljZSwgc291cmNlRW50aXR5KTtcbiAgfVxuXG4gIHByaXZhdGUgZXhlY3V0ZUxpbmtDcmVhdG9ycyhkYXRhU2VydmljZTogYW55LCBzb3VyY2VFbnRpdHk6IGFueSk6IHZvaWQge1xuICAgIGlmICh0aGlzLmxpbmtDcmVhdG9ycyAhPSBudWxsKSB7XG4gICAgICBmb3IgKGxldCBsaW5rQ3JlYXRvciBvZiB0aGlzLmxpbmtDcmVhdG9ycykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGxpbmtDcmVhdG9yLmV4ZWN1dGUoc291cmNlRW50aXR5LCBkYXRhU2VydmljZSwgdGhpcy5jaGFuZ2VTZXRNYW5hZ2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoRXJyb3JNZXNzYWdlLk9EQVRBX1VQREFURV9NQU5EQVRPUllfUEFSRU5UX05PVF9BTExPV0VEKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZXhlY3V0ZUxpbmtVcGRhdGVycyhkYXRhU2VydmljZTogYW55LCBzb3VyY2VFbnRpdHk6IGFueSk6IHZvaWQge1xuICAgIGlmICh0aGlzLmxpbmtVcGRhdGVycyAhPSBudWxsKSB7XG4gICAgICBmb3IgKGxldCBsaW5rVXBkYXRlciBvZiB0aGlzLmxpbmtVcGRhdGVycykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGxpbmtVcGRhdGVyLmV4ZWN1dGUoc291cmNlRW50aXR5LCBkYXRhU2VydmljZSwgdGhpcy5jaGFuZ2VTZXRNYW5hZ2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoRXJyb3JNZXNzYWdlLk9EQVRBX1VQREFURV9NQU5EQVRPUllfUEFSRU5UX05PVF9BTExPV0VEKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZXhlY3V0ZUxpbmtEZWxldGVycyhkYXRhU2VydmljZTogYW55LCBzb3VyY2VFbnRpdHk6IGFueSk6IHZvaWQge1xuICAgIGlmICh0aGlzLmxpbmtEZWxldGVycyAhPSBudWxsKSB7XG4gICAgICBmb3IgKGxldCBsaW5rRGVsZXRlciBvZiB0aGlzLmxpbmtEZWxldGVycykge1xuICAgICAgICBsaW5rRGVsZXRlci5leGVjdXRlKHNvdXJjZUVudGl0eSwgZGF0YVNlcnZpY2UsIHRoaXMuY2hhbmdlU2V0TWFuYWdlcik7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=