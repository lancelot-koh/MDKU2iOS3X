"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BindingLink_1 = require("./BindingLink");
var ReferentialConstraintLink_1 = require("./ReferentialConstraintLink");
var BaseODataCruder_1 = require("../../BaseODataCruder");
var ChangeSetManager_1 = require("../../ChangeSetManager");
var ODataHelper_1 = require("../../../ODataHelper");
var ErrorMessage_1 = require("../../../../ErrorHandling/ErrorMessage");
var LinkingScenario = /** @class */ (function () {
    function LinkingScenario(navigationProperty, sourceEntity, targetEntity, operation, canUseCreateRelatedEntity) {
        this.navigationProperty = navigationProperty;
        this.sourceEntity = sourceEntity;
        this.targetEntity = targetEntity;
        this.operation = operation;
        this.canUseCreateRelatedEntity = canUseCreateRelatedEntity;
        this.partnerProperty = ODataHelper_1.ODataHelper.partnerPropertyFromEntity(navigationProperty, targetEntity);
    }
    LinkingScenario.prototype.execute = function () {
        var linkToParentEntity = null;
        var shouldDoBinding = true;
        var refConstrs = this.analyseReferentialConstraintScenario();
        if (refConstrs != null) {
            if (refConstrs.forcesCreateRelatedEntity) {
                linkToParentEntity = refConstrs;
                // Do not bind an entity which will be used as a related parent
                shouldDoBinding = false;
            }
            else {
                refConstrs.execute();
            }
        }
        if (shouldDoBinding) {
            var binding = this.analyseBindingScenario();
            if (binding != null) {
                binding.execute();
            }
        }
        return linkToParentEntity;
    };
    LinkingScenario.prototype.canCreateRelatedEntity = function () {
        if (this.partnerProperty == null) {
            return false;
        }
        // The canUseCreateRelatedEntity flag is true unless createRelatedEntity was already
        // used to link to the entity.
        // TODO-FUTURE: Refactor to make this more clear.
        return this.canUseCreateRelatedEntity
            // It must be a create operation
            && this.operation === BaseODataCruder_1.ODataCrudOperation.Create
            // SNOWBLIND-4807: The navigation property being posted to must be a collection.
            // Violating this would result in an Invalid Resource Path error.
            // See "How to Create Relationships With Offline OData"
            // in the "POST through a navigation property" section.
            && this.partnerProperty.getType().isList();
    };
    LinkingScenario.prototype.analyseBindingScenario = function () {
        if (this.operation === BaseODataCruder_1.ODataCrudOperation.Delete) {
            // Bind deletion is not supported by the OData SDK. Only referential constraints is currently used for deletion
            return null;
        }
        if (this.bothPending()) {
            throw new Error(ErrorMessage_1.ErrorMessage.ODATA_LINKING_2_PENDING_ENTITIES_NOT_ALLOWED);
        }
        if (this.canBindFromSourceToTarget()) {
            return new BindingLink_1.BindingLink(this.navigationProperty, this.sourceEntity, this.targetEntity, this.operation);
        }
        else if (this.canBindFromTargetToSource()) {
            return new BindingLink_1.BindingLink(this.partnerProperty, this.targetEntity, this.sourceEntity, this.operation);
        }
        return null;
    };
    LinkingScenario.prototype.analyseReferentialConstraintScenario = function () {
        var arranged = this.arrange(this.sourceEntity, this.navigationProperty, this.targetEntity);
        if (arranged == null) {
            return null;
        }
        var dependantNavProp = arranged.dependantNavProp;
        var dependant = arranged.dependant;
        var principal = arranged.principal;
        var refLink = new ReferentialConstraintLink_1.ReferentialConstraintLink(dependantNavProp, dependant, principal, this.operation);
        if (!this.canCreateRelatedEntity()) {
            return refLink;
        }
        // The only way to link a many-to-many relationship or two
        // entities which are in an un-processed changeSet is to use createRelatedEntity.
        // We must also use createRelatedEntity if the principal is not known to the backend (it is local).
        // This is required to support merging transactions for child items
        // created outside of the parent's changeset.
        if (this.bothPending() || this.isRelationshipManyToMany() ||
            !ODataHelper_1.ODataHelper.isEntityValueKnownToBackend(principal)) {
            // Flag this link so its execute() function does not get invoked, but it's returned to the calling class for 
            // createRelatedEntity(), instead
            refLink.forcesCreateRelatedEntity = true;
        }
        return refLink;
    };
    LinkingScenario.prototype.canBindFromSourceToTarget = function () {
        return this.canBindFromNavProp(this.navigationProperty);
    };
    LinkingScenario.prototype.canBindFromTargetToSource = function () {
        if (this.partnerProperty == null) {
            return false;
        }
        return this.canBindFromNavProp(this.partnerProperty);
    };
    LinkingScenario.prototype.canBindFromNavProp = function (navProp) {
        if (this.associationHasReferentialConstraints()) {
            return this.isDependant(navProp);
        }
        else {
            return !navProp.getType().isList();
        }
    };
    LinkingScenario.prototype.associationHasReferentialConstraints = function () {
        return this.isDependant(this.navigationProperty) || this.isDependant(this.partnerProperty);
    };
    LinkingScenario.prototype.isDependant = function (navProp) {
        if (navProp == null) {
            return false;
        }
        return navProp.getReferentialConstraints().size() !== 0;
    };
    LinkingScenario.prototype.bothPending = function () {
        return ChangeSetManager_1.ChangeSetManager.isPending(this.targetEntity) && ChangeSetManager_1.ChangeSetManager.isPending(this.sourceEntity);
    };
    LinkingScenario.prototype.isRelationshipManyToMany = function () {
        if (this.partnerProperty == null) {
            return false;
        }
        return this.navigationProperty.getType().isList()
            && this.partnerProperty.isList();
    };
    LinkingScenario.prototype.arrange = function (entity1, entity1NavProp, entity2) {
        if (!this.associationHasReferentialConstraints()) {
            return null;
        }
        if (!this.isDependant(entity1NavProp)) {
            return {
                dependant: entity2,
                dependantNavProp: ODataHelper_1.ODataHelper.partnerPropertyFromEntity(entity1NavProp, entity2),
                principal: entity1,
            };
        }
        else {
            return {
                dependant: entity1,
                dependantNavProp: entity1NavProp,
                principal: entity2,
            };
        }
    };
    return LinkingScenario;
}());
exports.LinkingScenario = LinkingScenario;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGlua2luZ1NjZW5hcmlvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiTGlua2luZ1NjZW5hcmlvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNkNBQTRDO0FBQzVDLHlFQUF3RTtBQUN4RSx5REFBMkQ7QUFDM0QsMkRBQTBEO0FBQzFELG9EQUFtRDtBQUNuRCx1RUFBc0U7QUFFdEU7SUFRRSx5QkFBbUIsa0JBQXVCLEVBQUUsWUFBaUIsRUFBRSxZQUFpQixFQUFFLFNBQTZCLEVBQzVGLHlCQUFrQztRQUNuRCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsa0JBQWtCLENBQUM7UUFDN0MsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7UUFDakMsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7UUFDakMsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLHlCQUF5QixHQUFHLHlCQUF5QixDQUFDO1FBQzNELElBQUksQ0FBQyxlQUFlLEdBQUcseUJBQVcsQ0FBQyx5QkFBeUIsQ0FBQyxrQkFBa0IsRUFBRSxZQUFZLENBQUMsQ0FBQztJQUNqRyxDQUFDO0lBRU0saUNBQU8sR0FBZDtRQUNFLElBQUksa0JBQWtCLEdBQUcsSUFBSSxDQUFDO1FBQzlCLElBQUksZUFBZSxHQUFHLElBQUksQ0FBQztRQUUzQixJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsb0NBQW9DLEVBQUUsQ0FBQztRQUM3RCxFQUFFLENBQUMsQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztZQUN2QixFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMseUJBQXlCLENBQUMsQ0FBQyxDQUFDO2dCQUN6QyxrQkFBa0IsR0FBRyxVQUFVLENBQUM7Z0JBQ2hDLCtEQUErRDtnQkFDL0QsZUFBZSxHQUFHLEtBQUssQ0FBQztZQUMxQixDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ04sVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFD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O2dCQUNuQixnQkFBZ0IsRUFBRyx5QkFBVyxDQUFDLHlCQUF5QixDQUFDLGNBQWMsRUFBRSxPQUFPLENBQUM7Z0JBQ2pGLFNBQVMsRUFBRyxPQUFPO2FBQ3BCLENBQUM7UUFDSixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixNQUFNLENBQUM7Z0JBQ0wsU0FBUyxFQUFHLE9BQU87Z0JBQ25CLGdCQUFnQixFQUFHLGNBQWM7Z0JBQ2pDLFNBQVMsRUFBRyxPQUFPO2FBQ3BCLENBQUM7UUFDSixDQUFDO0lBQ0gsQ0FBQztJQUNILHNCQUFDO0FBQUQsQ0FBQyxBQTNLRCxJQTJLQztBQTNLWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJpbmRpbmdMaW5rIH0gZnJvbSAnLi9CaW5kaW5nTGluayc7XG5pbXBvcnQgeyBSZWZlcmVudGlhbENvbnN0cmFpbnRMaW5rIH0gZnJvbSAnLi9SZWZlcmVudGlhbENvbnN0cmFpbnRMaW5rJztcbmltcG9ydCB7IE9EYXRhQ3J1ZE9wZXJhdGlvbiB9IGZyb20gJy4uLy4uL0Jhc2VPRGF0YUNydWRlcic7XG5pbXBvcnQgeyBDaGFuZ2VTZXRNYW5hZ2VyIH0gZnJvbSAnLi4vLi4vQ2hhbmdlU2V0TWFuYWdlcic7XG5pbXBvcnQgeyBPRGF0YUhlbHBlciB9IGZyb20gJy4uLy4uLy4uL09EYXRhSGVscGVyJztcbmltcG9ydCB7IEVycm9yTWVzc2FnZSB9IGZyb20gJy4uLy4uLy4uLy4uL0Vycm9ySGFuZGxpbmcvRXJyb3JNZXNzYWdlJztcblxuZXhwb3J0IGNsYXNzIExpbmtpbmdTY2VuYXJpbyB7XG4gIHByaXZhdGUgbmF2aWdhdGlvblByb3BlcnR5OiBhbnk7XG4gIHByaXZhdGUgc291cmNlRW50aXR5OiBhbnk7XG4gIHByaXZhdGUgdGFyZ2V0RW50aXR5OiBhbnk7XG4gIHByaXZhdGUgb3BlcmF0aW9uOiBPRGF0YUNydWRPcGVyYXRpb247XG4gIHByaXZhdGUgY2FuVXNlQ3JlYXRlUmVsYXRlZEVudGl0eTogYm9vbGVhbjtcbiAgcHJpdmF0ZSBwYXJ0bmVyUHJvcGVydHk6IGFueTtcblxuICBwdWJsaWMgY29uc3RydWN0b3IobmF2aWdhdGlvblByb3BlcnR5OiBhbnksIHNvdXJjZUVudGl0eTogYW55LCB0YXJnZXRFbnRpdHk6IGFueSwgb3BlcmF0aW9uOiBPRGF0YUNydWRPcGVyYXRpb24sIFxuICAgICAgICAgICAgICAgICAgICAgY2FuVXNlQ3JlYXRlUmVsYXRlZEVudGl0eTogYm9vbGVhbikge1xuICAgIHRoaXMubmF2aWdhdGlvblByb3BlcnR5ID0gbmF2aWdhdGlvblByb3BlcnR5O1xuICAgIHRoaXMuc291cmNlRW50aXR5ID0gc291cmNlRW50aXR5O1xuICAgIHRoaXMudGFyZ2V0RW50aXR5ID0gdGFyZ2V0RW50aXR5O1xuICAgIHRoaXMub3BlcmF0aW9uID0gb3BlcmF0aW9uO1xuICAgIHRoaXMuY2FuVXNlQ3JlYXRlUmVsYXRlZEVudGl0eSA9IGNhblVzZUNyZWF0ZVJlbGF0ZWRFbnRpdHk7XG4gICAgdGhpcy5wYXJ0bmVyUHJvcGVydHkgPSBPRGF0YUhlbHBlci5wYXJ0bmVyUHJvcGVydHlGcm9tRW50aXR5KG5hdmlnYXRpb25Qcm9wZXJ0eSwgdGFyZ2V0RW50aXR5KTtcbiAgfVxuXG4gIHB1YmxpYyBleGVjdXRlKCk6IGFueSB7XG4gICAgbGV0IGxpbmtUb1BhcmVudEVudGl0eSA9IG51bGw7XG4gICAgbGV0IHNob3VsZERvQmluZGluZyA9IHRydWU7XG5cbiAgICBsZXQgcmVmQ29uc3RycyA9IHRoaXMuYW5hbHlzZVJlZmVyZW50aWFsQ29uc3RyYWludFNjZW5hcmlvKCk7XG4gICAgaWYgKHJlZkNvbnN0cnMgIT0gbnVsbCkge1xuICAgICAgaWYgKHJlZkNvbnN0cnMuZm9yY2VzQ3JlYXRlUmVsYXRlZEVudGl0eSkge1xuICAgICAgICBsaW5rVG9QYXJlbnRFbnRpdHkgPSByZWZDb25zdHJzO1xuICAgICAgICAvLyBEbyBub3QgYmluZCBhbiBlbnRpdHkgd2hpY2ggd2lsbCBiZSB1c2VkIGFzIGEgcmVsYXRlZCBwYXJlbnRcbiAgICAgICAgc2hvdWxkRG9CaW5kaW5nID0gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZWZDb25zdHJzLmV4ZWN1dGUoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc2hvdWxkRG9CaW5kaW5nKSB7XG4gICAgICBsZXQgYmluZGluZyA9IHRoaXMuYW5hbHlzZUJpbmRpbmdTY2VuYXJpbygpO1xuICAgICAgaWYgKGJpbmRpbmcgIT0gbnVsbCkge1xuICAgICAgICBiaW5kaW5nLmV4ZWN1dGUoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGxpbmtUb1BhcmVudEVudGl0eTtcbiAgfVxuXG4gIHByaXZhdGUgY2FuQ3JlYXRlUmVsYXRlZEVudGl0eSgpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5wYXJ0bmVyUHJvcGVydHkgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIFRoZSBjYW5Vc2VDcmVhdGVSZWxhdGVkRW50aXR5IGZsYWcgaXMgdHJ1ZSB1bmxlc3MgY3JlYXRlUmVsYXRlZEVudGl0eSB3YXMgYWxyZWFkeVxuICAgIC8vIHVzZWQgdG8gbGluayB0byB0aGUgZW50aXR5LlxuICAgIC8vIFRPRE8tRlVUVVJFOiBSZWZhY3RvciB0byBtYWtlIHRoaXMgbW9yZSBjbGVhci5cbiAgICByZXR1cm4gdGhpcy5jYW5Vc2VDcmVhdGVSZWxhdGVkRW50aXR5XG4gICAgICAvLyBJdCBtdXN0IGJlIGEgY3JlYXRlIG9wZXJhdGlvblxuICAgICAgJiYgdGhpcy5vcGVyYXRpb24gPT09IE9EYXRhQ3J1ZE9wZXJhdGlvbi5DcmVhdGVcbiAgICAgIC8vIFNOT1dCTElORC00ODA3OiBUaGUgbmF2aWdhdGlvbiBwcm9wZXJ0eSBiZWluZyBwb3N0ZWQgdG8gbXVzdCBiZSBhIGNvbGxlY3Rpb24uXG4gICAgICAvLyBWaW9sYXRpbmcgdGhpcyB3b3VsZCByZXN1bHQgaW4gYW4gSW52YWxpZCBSZXNvdXJjZSBQYXRoIGVycm9yLlxuICAgICAgLy8gU2VlIFwiSG93IHRvIENyZWF0ZSBSZWxhdGlvbnNoaXBzIFdpdGggT2ZmbGluZSBPRGF0YVwiXG4gICAgICAvLyBpbiB0aGUgXCJQT1NUIHRocm91Z2ggYSBuYXZpZ2F0aW9uIHByb3BlcnR5XCIgc2VjdGlvbi5cbiAgICAgICYmIHRoaXMucGFydG5lclByb3BlcnR5LmdldFR5cGUoKS5pc0xpc3QoKTtcbiAgfVxuXG4gIHByaXZhdGUgYW5hbHlzZUJpbmRpbmdTY2VuYXJpbygpOiBhbnkge1xuICAgIGlmICh0aGlzLm9wZXJhdGlvbiA9PT0gT0RhdGFDcnVkT3BlcmF0aW9uLkRlbGV0ZSkgIHtcbiAgICAgIC8vIEJpbmQgZGVsZXRpb24gaXMgbm90IHN1cHBvcnRlZCBieSB0aGUgT0RhdGEgU0RLLiBPbmx5IHJlZmVyZW50aWFsIGNvbnN0cmFpbnRzIGlzIGN1cnJlbnRseSB1c2VkIGZvciBkZWxldGlvblxuICAgICAgcmV0dXJuIG51bGw7IFxuICAgIH1cblxuICAgIGlmICh0aGlzLmJvdGhQZW5kaW5nKCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihFcnJvck1lc3NhZ2UuT0RBVEFfTElOS0lOR18yX1BFTkRJTkdfRU5USVRJRVNfTk9UX0FMTE9XRUQpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmNhbkJpbmRGcm9tU291cmNlVG9UYXJnZXQoKSkge1xuICAgICAgcmV0dXJuIG5ldyBCaW5kaW5nTGluayh0aGlzLm5hdmlnYXRpb25Qcm9wZXJ0eSwgdGhpcy5zb3VyY2VFbnRpdHksIHRoaXMudGFyZ2V0RW50aXR5LCB0aGlzLm9wZXJhdGlvbik7XG4gICAgfSBlbHNlIGlmICh0aGlzLmNhbkJpbmRGcm9tVGFyZ2V0VG9Tb3VyY2UoKSkge1xuICAgICAgcmV0dXJuIG5ldyBCaW5kaW5nTGluayh0aGlzLnBhcnRuZXJQcm9wZXJ0eSwgdGhpcy50YXJnZXRFbnRpdHksIHRoaXMuc291cmNlRW50aXR5LCB0aGlzLm9wZXJhdGlvbik7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBhbmFseXNlUmVmZXJlbnRpYWxDb25zdHJhaW50U2NlbmFyaW8oKTogYW55IHtcbiAgICAgIGxldCBhcnJhbmdlZCA9IHRoaXMuYXJyYW5nZSh0aGlzLnNvdXJjZUVudGl0eSwgdGhpcy5uYXZpZ2F0aW9uUHJvcGVydHksIHRoaXMudGFyZ2V0RW50aXR5KTtcbiAgICAgIGlmIChhcnJhbmdlZCA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICBsZXQgZGVwZW5kYW50TmF2UHJvcCA9IGFycmFuZ2VkLmRlcGVuZGFudE5hdlByb3A7XG4gICAgICBsZXQgZGVwZW5kYW50ID0gYXJyYW5nZWQuZGVwZW5kYW50O1xuICAgICAgbGV0IHByaW5jaXBhbCA9IGFycmFuZ2VkLnByaW5jaXBhbDtcblxuICAgICAgbGV0IHJlZkxpbmsgPSBuZXcgUmVmZXJlbnRpYWxDb25zdHJhaW50TGluayhkZXBlbmRhbnROYXZQcm9wLCBkZXBlbmRhbnQsIHByaW5jaXBhbCwgdGhpcy5vcGVyYXRpb24pO1xuXG4gICAgICBpZiAoIXRoaXMuY2FuQ3JlYXRlUmVsYXRlZEVudGl0eSgpKSB7XG4gICAgICAgIHJldHVybiByZWZMaW5rO1xuICAgICAgfVxuICAgICAgLy8gVGhlIG9ubHkgd2F5IHRvIGxpbmsgYSBtYW55LXRvLW1hbnkgcmVsYXRpb25zaGlwIG9yIHR3b1xuICAgICAgLy8gZW50aXRpZXMgd2hpY2ggYXJlIGluIGFuIHVuLXByb2Nlc3NlZCBjaGFuZ2VTZXQgaXMgdG8gdXNlIGNyZWF0ZVJlbGF0ZWRFbnRpdHkuXG4gICAgICAvLyBXZSBtdXN0IGFsc28gdXNlIGNyZWF0ZVJlbGF0ZWRFbnRpdHkgaWYgdGhlIHByaW5jaXBhbCBpcyBub3Qga25vd24gdG8gdGhlIGJhY2tlbmQgKGl0IGlzIGxvY2FsKS5cbiAgICAgIC8vIFRoaXMgaXMgcmVxdWlyZWQgdG8gc3VwcG9ydCBtZXJnaW5nIHRyYW5zYWN0aW9ucyBmb3IgY2hpbGQgaXRlbXNcbiAgICAgIC8vIGNyZWF0ZWQgb3V0c2lkZSBvZiB0aGUgcGFyZW50J3MgY2hhbmdlc2V0LlxuICAgICAgaWYgKHRoaXMuYm90aFBlbmRpbmcoKSB8fCB0aGlzLmlzUmVsYXRpb25zaGlwTWFueVRvTWFueSgpIHx8IFxuICAgICAgICAgICFPRGF0YUhlbHBlci5pc0VudGl0eVZhbHVlS25vd25Ub0JhY2tlbmQocHJpbmNpcGFsKSkge1xuICAgICAgICAvLyBGbGFnIHRoaXMgbGluayBzbyBpdHMgZXhlY3V0ZSgpIGZ1bmN0aW9uIGRvZXMgbm90IGdldCBpbnZva2VkLCBidXQgaXQncyByZXR1cm5lZCB0byB0aGUgY2FsbGluZyBjbGFzcyBmb3IgXG4gICAgICAgIC8vIGNyZWF0ZVJlbGF0ZWRFbnRpdHkoKSwgaW5zdGVhZFxuICAgICAgICByZWZMaW5rLmZvcmNlc0NyZWF0ZVJlbGF0ZWRFbnRpdHkgPSB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlZkxpbms7XG4gIH1cblxuICBwcml2YXRlIGNhbkJpbmRGcm9tU291cmNlVG9UYXJnZXQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY2FuQmluZEZyb21OYXZQcm9wKHRoaXMubmF2aWdhdGlvblByb3BlcnR5KTtcbiAgfVxuXG4gIHByaXZhdGUgY2FuQmluZEZyb21UYXJnZXRUb1NvdXJjZSgpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5wYXJ0bmVyUHJvcGVydHkgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmNhbkJpbmRGcm9tTmF2UHJvcCh0aGlzLnBhcnRuZXJQcm9wZXJ0eSk7XG4gIH1cblxuICBwcml2YXRlIGNhbkJpbmRGcm9tTmF2UHJvcChuYXZQcm9wOiBhbnkpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5hc3NvY2lhdGlvbkhhc1JlZmVyZW50aWFsQ29uc3RyYWludHMoKSkge1xuICAgICAgcmV0dXJuIHRoaXMuaXNEZXBlbmRhbnQobmF2UHJvcCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAhbmF2UHJvcC5nZXRUeXBlKCkuaXNMaXN0KCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhc3NvY2lhdGlvbkhhc1JlZmVyZW50aWFsQ29uc3RyYWludHMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaXNEZXBlbmRhbnQodGhpcy5uYXZpZ2F0aW9uUHJvcGVydHkpIHx8IHRoaXMuaXNEZXBlbmRhbnQodGhpcy5wYXJ0bmVyUHJvcGVydHkpO1xuICB9XG5cbiAgcHJpdmF0ZSBpc0RlcGVuZGFudChuYXZQcm9wOiBhbnkpOiBib29sZWFuIHtcbiAgICBpZiAobmF2UHJvcCA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5hdlByb3AuZ2V0UmVmZXJlbnRpYWxDb25zdHJhaW50cygpLnNpemUoKSAhPT0gMDtcbiAgfVxuXG4gIHByaXZhdGUgYm90aFBlbmRpbmcoKTogYm9vbGVhbiAge1xuICAgIHJldHVybiBDaGFuZ2VTZXRNYW5hZ2VyLmlzUGVuZGluZyh0aGlzLnRhcmdldEVudGl0eSkgJiYgQ2hhbmdlU2V0TWFuYWdlci5pc1BlbmRpbmcodGhpcy5zb3VyY2VFbnRpdHkpO1xuICB9XG5cbiAgcHJpdmF0ZSBpc1JlbGF0aW9uc2hpcE1hbnlUb01hbnkoKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMucGFydG5lclByb3BlcnR5ID09IG51bGwpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5uYXZpZ2F0aW9uUHJvcGVydHkuZ2V0VHlwZSgpLmlzTGlzdCgpXG4gICAgICAmJiB0aGlzLnBhcnRuZXJQcm9wZXJ0eS5pc0xpc3QoKTtcbiAgfVxuXG4gIHByaXZhdGUgYXJyYW5nZShlbnRpdHkxOiBhbnksIGVudGl0eTFOYXZQcm9wOiBhbnksIGVudGl0eTI6IGFueSk6IGFueSB7IFxuICAgIGlmICghdGhpcy5hc3NvY2lhdGlvbkhhc1JlZmVyZW50aWFsQ29uc3RyYWludHMoKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLmlzRGVwZW5kYW50KGVudGl0eTFOYXZQcm9wKSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZGVwZW5kYW50IDogZW50aXR5MiwgXG4gICAgICAgIGRlcGVuZGFudE5hdlByb3AgOiBPRGF0YUhlbHBlci5wYXJ0bmVyUHJvcGVydHlGcm9tRW50aXR5KGVudGl0eTFOYXZQcm9wLCBlbnRpdHkyKSwgXG4gICAgICAgIHByaW5jaXBhbCA6IGVudGl0eTEsIFxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZGVwZW5kYW50IDogZW50aXR5MSwgXG4gICAgICAgIGRlcGVuZGFudE5hdlByb3AgOiBlbnRpdHkxTmF2UHJvcCwgXG4gICAgICAgIHByaW5jaXBhbCA6IGVudGl0eTIsIFxuICAgICAgfTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==