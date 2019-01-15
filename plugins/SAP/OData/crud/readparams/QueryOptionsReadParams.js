"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ReadParams_1 = require("./ReadParams");
var QueryOptionsReadParams = /** @class */ (function (_super) {
    __extends(QueryOptionsReadParams, _super);
    function QueryOptionsReadParams(entitySetName, queryOptions) {
        var _this = _super.call(this, entitySetName) || this;
        _this.queryOptions = queryOptions;
        return _this;
    }
    QueryOptionsReadParams.prototype.getQueryOptions = function () {
        return this.queryOptions;
    };
    return QueryOptionsReadParams;
}(ReadParams_1.ReadParams));
exports.QueryOptionsReadParams = QueryOptionsReadParams;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUXVlcnlPcHRpb25zUmVhZFBhcmFtcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlF1ZXJ5T3B0aW9uc1JlYWRQYXJhbXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBMEM7QUFFMUM7SUFBNEMsMENBQVU7SUFHcEQsZ0NBQW1CLGFBQXFCLEVBQUUsWUFBb0I7UUFBOUQsWUFDRSxrQkFBTSxhQUFhLENBQUMsU0FFckI7UUFEQyxLQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQzs7SUFDbkMsQ0FBQztJQUVNLGdEQUFlLEdBQXRCO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDM0IsQ0FBQztJQUNILDZCQUFDO0FBQUQsQ0FBQyxBQVhELENBQTRDLHVCQUFVLEdBV3JEO0FBWFksd0RBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVhZFBhcmFtcyB9IGZyb20gJy4vUmVhZFBhcmFtcyc7XG5cbmV4cG9ydCBjbGFzcyBRdWVyeU9wdGlvbnNSZWFkUGFyYW1zIGV4dGVuZHMgUmVhZFBhcmFtcyB7XG4gIHByaXZhdGUgcXVlcnlPcHRpb25zOiBzdHJpbmc7XG4gIFxuICBwdWJsaWMgY29uc3RydWN0b3IoZW50aXR5U2V0TmFtZTogc3RyaW5nLCBxdWVyeU9wdGlvbnM6IHN0cmluZykge1xuICAgIHN1cGVyKGVudGl0eVNldE5hbWUpO1xuICAgIHRoaXMucXVlcnlPcHRpb25zID0gcXVlcnlPcHRpb25zO1xuICB9XG5cbiAgcHVibGljIGdldFF1ZXJ5T3B0aW9ucygpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnF1ZXJ5T3B0aW9ucztcbiAgfVxufVxuIl19