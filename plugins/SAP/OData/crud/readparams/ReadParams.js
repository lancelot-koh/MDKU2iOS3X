"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ReadParams = /** @class */ (function () {
    function ReadParams(entitySetName) {
        this.entitySetName = entitySetName;
    }
    ReadParams.prototype.getEntitySetName = function () {
        return this.entitySetName;
    };
    // This is overriden in sub classes
    ReadParams.prototype.isTargetCreatedInSameChangeSet = function () {
        return false;
    };
    return ReadParams;
}());
exports.ReadParams = ReadParams;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVhZFBhcmFtcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlJlYWRQYXJhbXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtJQUdFLG9CQUFtQixhQUFxQjtRQUN0QyxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztJQUNyQyxDQUFDO0lBRU0scUNBQWdCLEdBQXZCO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDNUIsQ0FBQztJQUVELG1DQUFtQztJQUM1QixtREFBOEIsR0FBckM7UUFDRSxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUNILGlCQUFDO0FBQUQsQ0FBQyxBQWZELElBZUM7QUFmWSxnQ0FBVSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBSZWFkUGFyYW1zIHtcbiAgcHJpdmF0ZSBlbnRpdHlTZXROYW1lOiBzdHJpbmc7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKGVudGl0eVNldE5hbWU6IHN0cmluZykge1xuICAgIHRoaXMuZW50aXR5U2V0TmFtZSA9IGVudGl0eVNldE5hbWU7XG4gIH1cblxuICBwdWJsaWMgZ2V0RW50aXR5U2V0TmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmVudGl0eVNldE5hbWU7XG4gIH1cblxuICAvLyBUaGlzIGlzIG92ZXJyaWRlbiBpbiBzdWIgY2xhc3Nlc1xuICBwdWJsaWMgaXNUYXJnZXRDcmVhdGVkSW5TYW1lQ2hhbmdlU2V0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuIl19