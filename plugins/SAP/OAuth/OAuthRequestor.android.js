"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DataConverter_1 = require("../Common/DataConverter");
/**
 * Sends requests which can respond to OAuth challenges.
 * The normal http.request API in NativeScript can't be used for OAuth
 * because it uses its own NSURLSession instead of an SAPURLSession.
 */
var OAuthRequestor = /** @class */ (function () {
    function OAuthRequestor() {
        this._bridge = null; // new com.sap.sapmdc.foundation.oauth.OAuthRequestorBridge(application.android.context);
    }
    OAuthRequestor.getInstance = function () {
        if (!OAuthRequestor._instance) {
            OAuthRequestor._instance = new OAuthRequestor();
        }
        return OAuthRequestor._instance;
    };
    OAuthRequestor.prototype.initialize = function (params) {
        var javaParams = DataConverter_1.DataConverter.toJavaObject(params);
        // return this._bridge.initialize(javaParams);
    };
    OAuthRequestor.prototype.updateConnectionParams = function (params) {
        var javaParams = DataConverter_1.DataConverter.toJavaObject(params);
        // return this._bridge.updateConnectionParams(javaParams);
    };
    OAuthRequestor.prototype.sendRequest = function (url) {
        return Promise.resolve();
        // let javaParams = new org.json.JSONObject();
        // javaParams.put("url", url);
        // return new Promise((resolve, reject) => {
        //   return this._bridge.sendRequest(javaParams, new com.sap.sapmdc.common.SnowblindPromiseResolveBlock({
        //       onFinished: function(result) {
        //         resolve(result);
        //     }
        //   }), new com.sap.sapmdc.common.SnowblindPromiseRejectBlock({
        //     onError: function(message) {
        //       reject(message);
        //     }
        //   }));
        // });
    };
    return OAuthRequestor;
}());
exports.OAuthRequestor = OAuthRequestor;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT0F1dGhSZXF1ZXN0b3IuYW5kcm9pZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIk9BdXRoUmVxdWVzdG9yLmFuZHJvaWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx5REFBc0Q7QUFPdEQ7Ozs7R0FJRztBQUNIO0lBQUE7UUFTVSxZQUFPLEdBQUcsSUFBSSxDQUFDLENBQUMseUZBQXlGO0lBOEJuSCxDQUFDO0lBdENlLDBCQUFXLEdBQXpCO1FBQ0UsRUFBRSxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUM5QixjQUFjLENBQUMsU0FBUyxHQUFHLElBQUksY0FBYyxFQUFFLENBQUM7UUFDbEQsQ0FBQztRQUNELE1BQU0sQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDO0lBQ2xDLENBQUM7SUFLTSxtQ0FBVSxHQUFqQixVQUFrQixNQUFNO1FBQ3RCLElBQUksVUFBVSxHQUFHLDZCQUFhLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BELDhDQUE4QztJQUNoRCxDQUFDO0lBRU0sK0NBQXNCLEdBQTdCLFVBQThCLE1BQU07UUFDbEMsSUFBSSxVQUFVLEdBQUcsNkJBQWEsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEQsMERBQTBEO0lBQzVELENBQUM7SUFFTSxvQ0FBVyxHQUFsQixVQUFtQixHQUFXO1FBQzVCLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7UUFFekIsOENBQThDO1FBQzlDLDhCQUE4QjtRQUU5Qiw0Q0FBNEM7UUFDNUMseUdBQXlHO1FBQ3pHLHVDQUF1QztRQUN2QywyQkFBMkI7UUFDM0IsUUFBUTtRQUNSLGdFQUFnRTtRQUNoRSxtQ0FBbUM7UUFDbkMseUJBQXlCO1FBQ3pCLFFBQVE7UUFDUixTQUFTO1FBQ1QsTUFBTTtJQUNSLENBQUM7SUFDSCxxQkFBQztBQUFELENBQUMsQUF2Q0QsSUF1Q0M7QUF2Q1ksd0NBQWM7QUF1QzFCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RhdGFDb252ZXJ0ZXJ9IGZyb20gJy4uL0NvbW1vbi9EYXRhQ29udmVydGVyJztcbmltcG9ydCBhcHBsaWNhdGlvbiA9IHJlcXVpcmUoJ2FwcGxpY2F0aW9uJyk7XG5cbmRlY2xhcmUgdmFyIGNvbTogYW55O1xuZGVjbGFyZSB2YXIgamF2YTogYW55O1xuZGVjbGFyZSB2YXIgb3JnOiBhbnk7XG5cbi8qKlxuICogU2VuZHMgcmVxdWVzdHMgd2hpY2ggY2FuIHJlc3BvbmQgdG8gT0F1dGggY2hhbGxlbmdlcy5cbiAqIFRoZSBub3JtYWwgaHR0cC5yZXF1ZXN0IEFQSSBpbiBOYXRpdmVTY3JpcHQgY2FuJ3QgYmUgdXNlZCBmb3IgT0F1dGggXG4gKiBiZWNhdXNlIGl0IHVzZXMgaXRzIG93biBOU1VSTFNlc3Npb24gaW5zdGVhZCBvZiBhbiBTQVBVUkxTZXNzaW9uLlxuICovXG5leHBvcnQgY2xhc3MgT0F1dGhSZXF1ZXN0b3Ige1xuICBwdWJsaWMgc3RhdGljIGdldEluc3RhbmNlKCk6IE9BdXRoUmVxdWVzdG9yIHtcbiAgICBpZiAoIU9BdXRoUmVxdWVzdG9yLl9pbnN0YW5jZSkge1xuICAgICAgT0F1dGhSZXF1ZXN0b3IuX2luc3RhbmNlID0gbmV3IE9BdXRoUmVxdWVzdG9yKCk7XG4gICAgfVxuICAgIHJldHVybiBPQXV0aFJlcXVlc3Rvci5faW5zdGFuY2U7XG4gIH1cbiAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlO1xuICBcbiAgcHJpdmF0ZSBfYnJpZGdlID0gbnVsbDsgLy8gbmV3IGNvbS5zYXAuc2FwbWRjLmZvdW5kYXRpb24ub2F1dGguT0F1dGhSZXF1ZXN0b3JCcmlkZ2UoYXBwbGljYXRpb24uYW5kcm9pZC5jb250ZXh0KTtcblxuICBwdWJsaWMgaW5pdGlhbGl6ZShwYXJhbXMpOiB2b2lkIHtcbiAgICBsZXQgamF2YVBhcmFtcyA9IERhdGFDb252ZXJ0ZXIudG9KYXZhT2JqZWN0KHBhcmFtcyk7XG4gICAgLy8gcmV0dXJuIHRoaXMuX2JyaWRnZS5pbml0aWFsaXplKGphdmFQYXJhbXMpO1xuICB9XG5cbiAgcHVibGljIHVwZGF0ZUNvbm5lY3Rpb25QYXJhbXMocGFyYW1zKTogdm9pZCB7XG4gICAgbGV0IGphdmFQYXJhbXMgPSBEYXRhQ29udmVydGVyLnRvSmF2YU9iamVjdChwYXJhbXMpO1xuICAgIC8vIHJldHVybiB0aGlzLl9icmlkZ2UudXBkYXRlQ29ubmVjdGlvblBhcmFtcyhqYXZhUGFyYW1zKTtcbiAgfVxuXG4gIHB1YmxpYyBzZW5kUmVxdWVzdCh1cmw6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuXG4gICAgLy8gbGV0IGphdmFQYXJhbXMgPSBuZXcgb3JnLmpzb24uSlNPTk9iamVjdCgpO1xuICAgIC8vIGphdmFQYXJhbXMucHV0KFwidXJsXCIsIHVybCk7XG5cbiAgICAvLyByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIC8vICAgcmV0dXJuIHRoaXMuX2JyaWRnZS5zZW5kUmVxdWVzdChqYXZhUGFyYW1zLCBuZXcgY29tLnNhcC5zYXBtZGMuY29tbW9uLlNub3dibGluZFByb21pc2VSZXNvbHZlQmxvY2soe1xuICAgIC8vICAgICAgIG9uRmluaXNoZWQ6IGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgIC8vICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgIC8vICAgICB9XG4gICAgLy8gICB9KSwgbmV3IGNvbS5zYXAuc2FwbWRjLmNvbW1vbi5Tbm93YmxpbmRQcm9taXNlUmVqZWN0QmxvY2soe1xuICAgIC8vICAgICBvbkVycm9yOiBmdW5jdGlvbihtZXNzYWdlKSB7XG4gICAgLy8gICAgICAgcmVqZWN0KG1lc3NhZ2UpO1xuICAgIC8vICAgICB9XG4gICAgLy8gICB9KSk7XG4gICAgLy8gfSk7XG4gIH1cbn07XG4iXX0=