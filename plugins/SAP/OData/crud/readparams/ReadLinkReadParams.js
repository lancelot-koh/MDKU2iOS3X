"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ReadParams_1 = require("./ReadParams");
var ChangeSetManager_1 = require("../ChangeSetManager");
var ReadLinkReadParams = /** @class */ (function (_super) {
    __extends(ReadLinkReadParams, _super);
    function ReadLinkReadParams(entitySetName, readLink) {
        var _this = _super.call(this, entitySetName) || this;
        _this.readLink = readLink;
        return _this;
    }
    ReadLinkReadParams.prototype.getReadLink = function () {
        return this.readLink;
    };
    ReadLinkReadParams.prototype.isTargetCreatedInSameChangeSet = function () {
        return this.readLink.startsWith(ChangeSetManager_1.ChangeSetManager.UNPROCESSEDPREFIX);
    };
    return ReadLinkReadParams;
}(ReadParams_1.ReadParams));
exports.ReadLinkReadParams = ReadLinkReadParams;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVhZExpbmtSZWFkUGFyYW1zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiUmVhZExpbmtSZWFkUGFyYW1zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQTBDO0FBQzFDLHdEQUF1RDtBQUV2RDtJQUF3QyxzQ0FBVTtJQUdoRCw0QkFBbUIsYUFBcUIsRUFBRSxRQUFnQjtRQUExRCxZQUNFLGtCQUFNLGFBQWEsQ0FBQyxTQUVyQjtRQURDLEtBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDOztJQUMzQixDQUFDO0lBRU0sd0NBQVcsR0FBbEI7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDO0lBRU0sMkRBQThCLEdBQXJDO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLG1DQUFnQixDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDdEUsQ0FBQztJQUNILHlCQUFDO0FBQUQsQ0FBQyxBQWZELENBQXdDLHVCQUFVLEdBZWpEO0FBZlksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVhZFBhcmFtcyB9IGZyb20gJy4vUmVhZFBhcmFtcyc7XG5pbXBvcnQgeyBDaGFuZ2VTZXRNYW5hZ2VyIH0gZnJvbSAnLi4vQ2hhbmdlU2V0TWFuYWdlcic7XG5cbmV4cG9ydCBjbGFzcyBSZWFkTGlua1JlYWRQYXJhbXMgZXh0ZW5kcyBSZWFkUGFyYW1zIHtcbiAgcHJpdmF0ZSByZWFkTGluazogc3RyaW5nO1xuICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKGVudGl0eVNldE5hbWU6IHN0cmluZywgcmVhZExpbms6IHN0cmluZykge1xuICAgIHN1cGVyKGVudGl0eVNldE5hbWUpO1xuICAgIHRoaXMucmVhZExpbmsgPSByZWFkTGluaztcbiAgfVxuXG4gIHB1YmxpYyBnZXRSZWFkTGluaygpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnJlYWRMaW5rO1xuICB9XG5cbiAgcHVibGljIGlzVGFyZ2V0Q3JlYXRlZEluU2FtZUNoYW5nZVNldCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5yZWFkTGluay5zdGFydHNXaXRoKENoYW5nZVNldE1hbmFnZXIuVU5QUk9DRVNTRURQUkVGSVgpO1xuICB9XG59XG4iXX0=