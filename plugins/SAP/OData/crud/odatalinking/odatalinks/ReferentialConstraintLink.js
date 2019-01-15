"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BaseODataCruder_1 = require("../../BaseODataCruder");
var ODataServiceUtils_1 = require("../../../ODataServiceUtils");
var ErrorMessage_1 = require("../../../../ErrorHandling/ErrorMessage");
var ReferentialConstraintLink = /** @class */ (function () {
    function ReferentialConstraintLink(dependantNavigationProperty, dependantEntity, principalEntity, operation) {
        this.forcesCreateRelatedEntity = false;
        this.dependantNavigationProperty = dependantNavigationProperty;
        this.dependantEntity = dependantEntity;
        this.principalEntity = principalEntity;
        this.operation = operation;
    }
    ReferentialConstraintLink.prototype.getPrincipalEntity = function () {
        return this.principalEntity;
    };
    ReferentialConstraintLink.prototype.getDependantNavigationProperty = function () {
        return this.dependantNavigationProperty;
    };
    ReferentialConstraintLink.prototype.execute = function () {
        switch (this.operation) {
            case BaseODataCruder_1.ODataCrudOperation.Create:
            case BaseODataCruder_1.ODataCrudOperation.Update:
                this.createLink();
                break;
            case BaseODataCruder_1.ODataCrudOperation.Delete:
                this.deleteLink();
                break;
            case BaseODataCruder_1.ODataCrudOperation.Read:
            default:
                break;
        }
    };
    ReferentialConstraintLink.prototype.createLink = function () {
        var principalPropertyNamesByDependantPropertyNames = this.dependantNavigationProperty.getReferentialConstraints();
        var iterator = principalPropertyNamesByDependantPropertyNames.keys().iterator();
        while (iterator.hasNext()) {
            var dependantPropertyName = iterator.next();
            var principalPropertyName = principalPropertyNamesByDependantPropertyNames.get(dependantPropertyName);
            var principalProp = this.principalEntity.getEntityType().getProperty(principalPropertyName);
            // If the referential constraint property exists on
            // the principal, copy it to the dependant. We allow constraints
            // to be missing on locals, although they shouldn't be missing on
            // entities from the backend.
            var principalPropValue = principalProp.getOptionalValue(this.principalEntity);
            if (principalPropValue != null) {
                var dependantProp = this.dependantEntity.getEntityType().getProperty(dependantPropertyName);
                dependantProp.setValue(this.dependantEntity, ODataServiceUtils_1.ODataServiceUtils.convert(principalPropValue, dependantProp.getDataType().getCode()));
            }
        }
    };
    ReferentialConstraintLink.prototype.deleteLink = function () {
        var principalPropertyNamesByDependantPropertyNames = this.dependantNavigationProperty.getReferentialConstraints();
        var iterator = principalPropertyNamesByDependantPropertyNames.keys().iterator();
        while (iterator.hasNext()) {
            var dependantPropertyName = iterator.next();
            var dependantProp = this.dependantEntity.getEntityType().getProperty(dependantPropertyName);
            // if dependantEntity.entityType.keyProperties.contains(where: { $0.name == dependantProp.name })
            if (this.dependantEntity.getEntityType().getKeyProperties().indexOf(dependantProp) >= 0) {
                throw new Error(ErrorMessage_1.ErrorMessage.ODATA_DELETE_REQUIRED_PROPERTY_NOT_ALLOWED);
            }
            dependantProp.setValue(this.dependantEntity, null);
        }
    };
    return ReferentialConstraintLink;
}());
exports.ReferentialConstraintLink = ReferentialConstraintLink;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVmZXJlbnRpYWxDb25zdHJhaW50TGluay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlJlZmVyZW50aWFsQ29uc3RyYWludExpbmsudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx5REFBMkQ7QUFDM0QsZ0VBQStEO0FBQy9ELHVFQUFzRTtBQUV0RTtJQU9FLG1DQUFtQiwyQkFBZ0MsRUFBRSxlQUFvQixFQUFFLGVBQW9CLEVBQzVFLFNBQTZCO1FBUHpDLDhCQUF5QixHQUFZLEtBQUssQ0FBQztRQVFoRCxJQUFJLENBQUMsMkJBQTJCLEdBQUcsMkJBQTJCLENBQUM7UUFDL0QsSUFBSSxDQUFDLGVBQWUsR0FBRyxlQUFlLENBQUM7UUFDdkMsSUFBSSxDQUFDLGVBQWUsR0FBRyxlQUFlLENBQUM7UUFDdkMsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7SUFDN0IsQ0FBQztJQUVNLHNEQUFrQixHQUF6QjtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDO0lBQzlCLENBQUM7SUFFTSxrRUFBOEIsR0FBckM7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLDJCQUEyQixDQUFDO0lBQzFDLENBQUM7SUFFTSwyQ0FBTyxHQUFkO1FBQ0UsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDdkIsS0FBSyxvQ0FBa0IsQ0FBQyxNQUFNLENBQUM7WUFDL0IsS0FBSyxvQ0FBa0IsQ0FBQyxNQUFNO2dCQUM1QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7Z0JBQ2xCLEtBQUssQ0FBQztZQUNSLEtBQUssb0NBQWtCLENBQUMsTUFBTTtnQkFDNUIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO2dCQUNsQixLQUFLLENBQUM7WUFDUixLQUFLLG9DQUFrQixDQUFDLElBQUksQ0FBQztZQUM3QjtnQkFDRSxLQUFLLENBQUM7UUFDVixDQUFDO0lBQ0gsQ0FBQztJQUVPLDhDQUFVLEdBQWxCO1FBQ0UsSUFBSSw4Q0FBOEMsR0FBRyxJQUFJLENBQUMsMkJBQTJCLENBQUMseUJBQXlCLEVBQUUsQ0FBQztRQUVsSCxJQUFJLFFBQVEsR0FBRyw4Q0FBOEMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNoRixPQUFPLFFBQVEsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDO1lBQzFCLElBQUkscUJBQXFCLEdBQUcsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQzVDLElBQUkscUJBQXFCLEdBQUcsOENBQThDLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7WUFDdEcsSUFBSSxhQUFhLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxXQUFXLENBQUMscUJBQXFCLENBQUMsQ0FBQztZQUM1RixtREFBbUQ7WUFDbkQsZ0VBQWdFO1lBQ2hFLGlFQUFpRTtZQUNqRSw2QkFBNkI7WUFDN0IsSUFBSSxrQkFBa0IsR0FBRyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQzlFLEVBQUUsQ0FBQyxDQUFDLGtCQUFrQixJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQy9CLElBQUksYUFBYSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxFQUFFLENBQUMsV0FBVyxDQUFDLHFCQUFxQixDQUFDLENBQUM7Z0JBQzVGLGFBQWEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxxQ0FBaUIsQ0FBQyxPQUFPLENBQUMsa0JBQWtCLEVBQ3ZGLGFBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDNUMsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0lBRU8sOENBQVUsR0FBbEI7UUFDRSxJQUFJLDhDQUE4QyxHQUFHLElBQUksQ0FBQywyQkFBMkIsQ0FBQyx5QkFBeUIsRUFBRSxDQUFDO1FBRWxILElBQUksUUFBUSxHQUFHLDhDQUE4QyxDQUFDLElBQUksRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2hGLE9BQU8sUUFBUSxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUM7WUFDMUIsSUFBSSxxQkFBcUIsR0FBRyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDNUMsSUFBSSxhQUFhLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxXQUFXLENBQUMscUJBQXFCLENBQUMsQ0FBQztZQUM1RixpR0FBaUc7WUFDakcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN4RixNQUFNLElBQUksS0FBSyxDQUFDLDJCQUFZLENBQUMsMENBQTBDLENBQUMsQ0FBQztZQUMzRSxDQUFDO1lBQ0QsYUFBYSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3JELENBQUM7SUFDSCxDQUFDO0lBQ0gsZ0NBQUM7QUFBRCxDQUFDLEFBekVELElBeUVDO0FBekVZLDhEQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9EYXRhQ3J1ZE9wZXJhdGlvbiB9IGZyb20gJy4uLy4uL0Jhc2VPRGF0YUNydWRlcic7XG5pbXBvcnQgeyBPRGF0YVNlcnZpY2VVdGlscyB9IGZyb20gJy4uLy4uLy4uL09EYXRhU2VydmljZVV0aWxzJztcbmltcG9ydCB7IEVycm9yTWVzc2FnZSB9IGZyb20gJy4uLy4uLy4uLy4uL0Vycm9ySGFuZGxpbmcvRXJyb3JNZXNzYWdlJztcblxuZXhwb3J0IGNsYXNzIFJlZmVyZW50aWFsQ29uc3RyYWludExpbmsge1xuICBwdWJsaWMgZm9yY2VzQ3JlYXRlUmVsYXRlZEVudGl0eTogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIGRlcGVuZGFudE5hdmlnYXRpb25Qcm9wZXJ0eTogYW55O1xuICBwcml2YXRlIGRlcGVuZGFudEVudGl0eTogYW55O1xuICBwcml2YXRlIHByaW5jaXBhbEVudGl0eTogYW55O1xuICBwcml2YXRlIG9wZXJhdGlvbjogT0RhdGFDcnVkT3BlcmF0aW9uO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihkZXBlbmRhbnROYXZpZ2F0aW9uUHJvcGVydHk6IGFueSwgZGVwZW5kYW50RW50aXR5OiBhbnksIHByaW5jaXBhbEVudGl0eTogYW55LCBcbiAgICAgICAgICAgICAgICAgICAgIG9wZXJhdGlvbjogT0RhdGFDcnVkT3BlcmF0aW9uKSB7XG4gICAgdGhpcy5kZXBlbmRhbnROYXZpZ2F0aW9uUHJvcGVydHkgPSBkZXBlbmRhbnROYXZpZ2F0aW9uUHJvcGVydHk7XG4gICAgdGhpcy5kZXBlbmRhbnRFbnRpdHkgPSBkZXBlbmRhbnRFbnRpdHk7XG4gICAgdGhpcy5wcmluY2lwYWxFbnRpdHkgPSBwcmluY2lwYWxFbnRpdHk7XG4gICAgdGhpcy5vcGVyYXRpb24gPSBvcGVyYXRpb247XG4gIH1cblxuICBwdWJsaWMgZ2V0UHJpbmNpcGFsRW50aXR5KCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMucHJpbmNpcGFsRW50aXR5O1xuICB9XG5cbiAgcHVibGljIGdldERlcGVuZGFudE5hdmlnYXRpb25Qcm9wZXJ0eSgpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLmRlcGVuZGFudE5hdmlnYXRpb25Qcm9wZXJ0eTtcbiAgfVxuXG4gIHB1YmxpYyBleGVjdXRlKCk6IHZvaWQge1xuICAgIHN3aXRjaCAodGhpcy5vcGVyYXRpb24pIHtcbiAgICAgIGNhc2UgT0RhdGFDcnVkT3BlcmF0aW9uLkNyZWF0ZTpcbiAgICAgIGNhc2UgT0RhdGFDcnVkT3BlcmF0aW9uLlVwZGF0ZTpcbiAgICAgICAgdGhpcy5jcmVhdGVMaW5rKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBPRGF0YUNydWRPcGVyYXRpb24uRGVsZXRlOlxuICAgICAgICB0aGlzLmRlbGV0ZUxpbmsoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIE9EYXRhQ3J1ZE9wZXJhdGlvbi5SZWFkOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVMaW5rKCk6IHZvaWQge1xuICAgIGxldCBwcmluY2lwYWxQcm9wZXJ0eU5hbWVzQnlEZXBlbmRhbnRQcm9wZXJ0eU5hbWVzID0gdGhpcy5kZXBlbmRhbnROYXZpZ2F0aW9uUHJvcGVydHkuZ2V0UmVmZXJlbnRpYWxDb25zdHJhaW50cygpO1xuXG4gICAgbGV0IGl0ZXJhdG9yID0gcHJpbmNpcGFsUHJvcGVydHlOYW1lc0J5RGVwZW5kYW50UHJvcGVydHlOYW1lcy5rZXlzKCkuaXRlcmF0b3IoKTtcbiAgICB3aGlsZSAoaXRlcmF0b3IuaGFzTmV4dCgpKSB7XG4gICAgICBsZXQgZGVwZW5kYW50UHJvcGVydHlOYW1lID0gaXRlcmF0b3IubmV4dCgpO1xuICAgICAgbGV0IHByaW5jaXBhbFByb3BlcnR5TmFtZSA9IHByaW5jaXBhbFByb3BlcnR5TmFtZXNCeURlcGVuZGFudFByb3BlcnR5TmFtZXMuZ2V0KGRlcGVuZGFudFByb3BlcnR5TmFtZSk7XG4gICAgICBsZXQgcHJpbmNpcGFsUHJvcCA9IHRoaXMucHJpbmNpcGFsRW50aXR5LmdldEVudGl0eVR5cGUoKS5nZXRQcm9wZXJ0eShwcmluY2lwYWxQcm9wZXJ0eU5hbWUpO1xuICAgICAgLy8gSWYgdGhlIHJlZmVyZW50aWFsIGNvbnN0cmFpbnQgcHJvcGVydHkgZXhpc3RzIG9uXG4gICAgICAvLyB0aGUgcHJpbmNpcGFsLCBjb3B5IGl0IHRvIHRoZSBkZXBlbmRhbnQuIFdlIGFsbG93IGNvbnN0cmFpbnRzXG4gICAgICAvLyB0byBiZSBtaXNzaW5nIG9uIGxvY2FscywgYWx0aG91Z2ggdGhleSBzaG91bGRuJ3QgYmUgbWlzc2luZyBvblxuICAgICAgLy8gZW50aXRpZXMgZnJvbSB0aGUgYmFja2VuZC5cbiAgICAgIGxldCBwcmluY2lwYWxQcm9wVmFsdWUgPSBwcmluY2lwYWxQcm9wLmdldE9wdGlvbmFsVmFsdWUodGhpcy5wcmluY2lwYWxFbnRpdHkpO1xuICAgICAgaWYgKHByaW5jaXBhbFByb3BWYWx1ZSAhPSBudWxsKSB7XG4gICAgICAgIGxldCBkZXBlbmRhbnRQcm9wID0gdGhpcy5kZXBlbmRhbnRFbnRpdHkuZ2V0RW50aXR5VHlwZSgpLmdldFByb3BlcnR5KGRlcGVuZGFudFByb3BlcnR5TmFtZSk7XG4gICAgICAgIGRlcGVuZGFudFByb3Auc2V0VmFsdWUodGhpcy5kZXBlbmRhbnRFbnRpdHksIE9EYXRhU2VydmljZVV0aWxzLmNvbnZlcnQocHJpbmNpcGFsUHJvcFZhbHVlLCBcbiAgICAgICAgICBkZXBlbmRhbnRQcm9wLmdldERhdGFUeXBlKCkuZ2V0Q29kZSgpKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBkZWxldGVMaW5rKCk6IHZvaWQge1xuICAgIGxldCBwcmluY2lwYWxQcm9wZXJ0eU5hbWVzQnlEZXBlbmRhbnRQcm9wZXJ0eU5hbWVzID0gdGhpcy5kZXBlbmRhbnROYXZpZ2F0aW9uUHJvcGVydHkuZ2V0UmVmZXJlbnRpYWxDb25zdHJhaW50cygpO1xuXG4gICAgbGV0IGl0ZXJhdG9yID0gcHJpbmNpcGFsUHJvcGVydHlOYW1lc0J5RGVwZW5kYW50UHJvcGVydHlOYW1lcy5rZXlzKCkuaXRlcmF0b3IoKTtcbiAgICB3aGlsZSAoaXRlcmF0b3IuaGFzTmV4dCgpKSB7XG4gICAgICBsZXQgZGVwZW5kYW50UHJvcGVydHlOYW1lID0gaXRlcmF0b3IubmV4dCgpO1xuICAgICAgbGV0IGRlcGVuZGFudFByb3AgPSB0aGlzLmRlcGVuZGFudEVudGl0eS5nZXRFbnRpdHlUeXBlKCkuZ2V0UHJvcGVydHkoZGVwZW5kYW50UHJvcGVydHlOYW1lKTtcbiAgICAgIC8vIGlmIGRlcGVuZGFudEVudGl0eS5lbnRpdHlUeXBlLmtleVByb3BlcnRpZXMuY29udGFpbnMod2hlcmU6IHsgJDAubmFtZSA9PSBkZXBlbmRhbnRQcm9wLm5hbWUgfSlcbiAgICAgIGlmICh0aGlzLmRlcGVuZGFudEVudGl0eS5nZXRFbnRpdHlUeXBlKCkuZ2V0S2V5UHJvcGVydGllcygpLmluZGV4T2YoZGVwZW5kYW50UHJvcCkgPj0gMCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoRXJyb3JNZXNzYWdlLk9EQVRBX0RFTEVURV9SRVFVSVJFRF9QUk9QRVJUWV9OT1RfQUxMT1dFRCk7XG4gICAgICB9XG4gICAgICBkZXBlbmRhbnRQcm9wLnNldFZhbHVlKHRoaXMuZGVwZW5kYW50RW50aXR5LCBudWxsKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==