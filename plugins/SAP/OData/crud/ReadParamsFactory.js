"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ReadParams_1 = require("./readparams/ReadParams");
var QueryOptionsReadParams_1 = require("./readparams/QueryOptionsReadParams");
var ReadLinkReadParams_1 = require("./readparams/ReadLinkReadParams");
var CrudParamsHelper_1 = require("./CrudParamsHelper");
var ErrorMessage_1 = require("../../ErrorHandling/ErrorMessage");
var ReadParamsFactory = /** @class */ (function () {
    function ReadParamsFactory() {
    }
    ReadParamsFactory.createReadParams = function (params) {
        var entitySetName = params[ReadParamsFactory.ENTITYSETNAMEKEY];
        if (typeof entitySetName !== 'string' || entitySetName.length === 0) {
            throw new Error(ErrorMessage_1.ErrorMessage.format(ErrorMessage_1.ErrorMessage.ODATA_ENTITY_NAME_NOT_FOUND, CrudParamsHelper_1.CrudParamsHelper.MALFORMEDPARAM, this.ENTITYSETNAMEKEY));
        }
        var queryOptions = params[ReadParamsFactory.QUERYOPTIONSKEY];
        var readLink = params[ReadParamsFactory.READLINKKEY];
        if (typeof queryOptions === 'string' && queryOptions.length !== 0) {
            return new QueryOptionsReadParams_1.QueryOptionsReadParams(entitySetName, queryOptions);
        }
        else if (typeof readLink === 'string' && readLink.length !== 0) {
            return new ReadLinkReadParams_1.ReadLinkReadParams(entitySetName, readLink);
        }
        else {
            return new ReadParams_1.ReadParams(entitySetName);
        }
    };
    ReadParamsFactory.ENTITYSETNAMEKEY = 'entitySet';
    ReadParamsFactory.QUERYOPTIONSKEY = 'queryOptions';
    ReadParamsFactory.READLINKKEY = 'readLink';
    return ReadParamsFactory;
}());
exports.ReadParamsFactory = ReadParamsFactory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVhZFBhcmFtc0ZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJSZWFkUGFyYW1zRmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHNEQUFxRDtBQUNyRCw4RUFBNkU7QUFDN0Usc0VBQXFFO0FBQ3JFLHVEQUFzRDtBQUN0RCxpRUFBZ0U7QUFFaEU7SUFBQTtJQXVCQSxDQUFDO0lBdEJlLGtDQUFnQixHQUE5QixVQUErQixNQUFXO1FBQ3hDLElBQUksYUFBYSxHQUFHLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQy9ELEVBQUUsQ0FBQyxDQUFDLE9BQU8sYUFBYSxLQUFLLFFBQVEsSUFBSSxhQUFhLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDcEUsTUFBTSxJQUFJLEtBQUssQ0FBQywyQkFBWSxDQUFDLE1BQU0sQ0FBQywyQkFBWSxDQUFDLDJCQUEyQixFQUFFLG1DQUFnQixDQUFDLGNBQWMsRUFDM0csSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztRQUM1QixDQUFDO1FBRUQsSUFBSSxZQUFZLEdBQUcsTUFBTSxDQUFDLGlCQUFpQixDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQzdELElBQUksUUFBUSxHQUFHLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUVyRCxFQUFFLENBQUMsQ0FBQyxPQUFPLFlBQVksS0FBSyxRQUFRLElBQUksWUFBWSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2xFLE1BQU0sQ0FBQyxJQUFJLCtDQUFzQixDQUFDLGFBQWEsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUNqRSxDQUFDO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sUUFBUSxLQUFLLFFBQVEsSUFBSSxRQUFRLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDakUsTUFBTSxDQUFDLElBQUksdUNBQWtCLENBQUMsYUFBYSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ3pELENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLE1BQU0sQ0FBQyxJQUFJLHVCQUFVLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDdkMsQ0FBQztJQUNILENBQUM7SUFFdUIsa0NBQWdCLEdBQVcsV0FBVyxDQUFDO0lBQ3ZDLGlDQUFlLEdBQVcsY0FBYyxDQUFDO0lBQ3pDLDZCQUFXLEdBQVcsVUFBVSxDQUFDO0lBQzNELHdCQUFDO0NBQUEsQUF2QkQsSUF1QkM7QUF2QlksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBSZWFkUGFyYW1zIH0gZnJvbSAnLi9yZWFkcGFyYW1zL1JlYWRQYXJhbXMnO1xuaW1wb3J0IHsgUXVlcnlPcHRpb25zUmVhZFBhcmFtcyB9IGZyb20gJy4vcmVhZHBhcmFtcy9RdWVyeU9wdGlvbnNSZWFkUGFyYW1zJztcbmltcG9ydCB7IFJlYWRMaW5rUmVhZFBhcmFtcyB9IGZyb20gJy4vcmVhZHBhcmFtcy9SZWFkTGlua1JlYWRQYXJhbXMnO1xuaW1wb3J0IHsgQ3J1ZFBhcmFtc0hlbHBlciB9IGZyb20gJy4vQ3J1ZFBhcmFtc0hlbHBlcic7XG5pbXBvcnQgeyBFcnJvck1lc3NhZ2UgfSBmcm9tICcuLi8uLi9FcnJvckhhbmRsaW5nL0Vycm9yTWVzc2FnZSc7XG5cbmV4cG9ydCBjbGFzcyBSZWFkUGFyYW1zRmFjdG9yeSB7XG4gIHB1YmxpYyBzdGF0aWMgY3JlYXRlUmVhZFBhcmFtcyhwYXJhbXM6IGFueSk6IGFueSB7XG4gICAgbGV0IGVudGl0eVNldE5hbWUgPSBwYXJhbXNbUmVhZFBhcmFtc0ZhY3RvcnkuRU5USVRZU0VUTkFNRUtFWV07XG4gICAgaWYgKHR5cGVvZiBlbnRpdHlTZXROYW1lICE9PSAnc3RyaW5nJyB8fCBlbnRpdHlTZXROYW1lLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKEVycm9yTWVzc2FnZS5mb3JtYXQoRXJyb3JNZXNzYWdlLk9EQVRBX0VOVElUWV9OQU1FX05PVF9GT1VORCwgQ3J1ZFBhcmFtc0hlbHBlci5NQUxGT1JNRURQQVJBTSxcbiAgICAgICAgdGhpcy5FTlRJVFlTRVROQU1FS0VZKSk7XG4gICAgfVxuXG4gICAgbGV0IHF1ZXJ5T3B0aW9ucyA9IHBhcmFtc1tSZWFkUGFyYW1zRmFjdG9yeS5RVUVSWU9QVElPTlNLRVldO1xuICAgIGxldCByZWFkTGluayA9IHBhcmFtc1tSZWFkUGFyYW1zRmFjdG9yeS5SRUFETElOS0tFWV07XG5cbiAgICBpZiAodHlwZW9mIHF1ZXJ5T3B0aW9ucyA9PT0gJ3N0cmluZycgJiYgcXVlcnlPcHRpb25zLmxlbmd0aCAhPT0gMCkge1xuICAgICAgcmV0dXJuIG5ldyBRdWVyeU9wdGlvbnNSZWFkUGFyYW1zKGVudGl0eVNldE5hbWUsIHF1ZXJ5T3B0aW9ucyk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgcmVhZExpbmsgPT09ICdzdHJpbmcnICYmIHJlYWRMaW5rLmxlbmd0aCAhPT0gMCkge1xuICAgICAgcmV0dXJuIG5ldyBSZWFkTGlua1JlYWRQYXJhbXMoZW50aXR5U2V0TmFtZSwgcmVhZExpbmspO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbmV3IFJlYWRQYXJhbXMoZW50aXR5U2V0TmFtZSk7XG4gICAgfVxuICB9XG4gIFxuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBFTlRJVFlTRVROQU1FS0VZOiBzdHJpbmcgPSAnZW50aXR5U2V0JztcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgUVVFUllPUFRJT05TS0VZOiBzdHJpbmcgPSAncXVlcnlPcHRpb25zJztcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgUkVBRExJTktLRVk6IHN0cmluZyA9ICdyZWFkTGluayc7XG59XG4iXX0=