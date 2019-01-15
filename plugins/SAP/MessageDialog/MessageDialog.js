"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MessageDialog = /** @class */ (function () {
    function MessageDialog() {
    }
    MessageDialog.getInstance = function () {
        return MessageDialog._instance;
    };
    MessageDialog.prototype.alert = function (arg) {
        //
        return Promise.resolve();
    };
    MessageDialog.prototype.confirm = function (arg) {
        //
        return Promise.resolve(false);
    };
    MessageDialog._instance = new MessageDialog();
    return MessageDialog;
}());
exports.MessageDialog = MessageDialog;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVzc2FnZURpYWxvZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIk1lc3NhZ2VEaWFsb2cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtJQUFBO0lBZ0JBLENBQUM7SUFmZSx5QkFBVyxHQUF6QjtRQUNFLE1BQU0sQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDO0lBQ2pDLENBQUM7SUFJTSw2QkFBSyxHQUFaLFVBQWEsR0FBUTtRQUNuQixFQUFFO1FBQ0YsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRU0sK0JBQU8sR0FBZCxVQUFlLEdBQVE7UUFDckIsRUFBRTtRQUNGLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFWYyx1QkFBUyxHQUFrQixJQUFJLGFBQWEsRUFBRSxDQUFDO0lBV2hFLG9CQUFDO0NBQUEsQUFoQkQsSUFnQkM7QUFoQlksc0NBQWE7QUFnQnpCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgTWVzc2FnZURpYWxvZyB7XG4gIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2UoKTogTWVzc2FnZURpYWxvZyB7XG4gICAgcmV0dXJuIE1lc3NhZ2VEaWFsb2cuX2luc3RhbmNlO1xuICB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBNZXNzYWdlRGlhbG9nID0gbmV3IE1lc3NhZ2VEaWFsb2coKTtcblxuICBwdWJsaWMgYWxlcnQoYXJnOiBhbnkpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAvL1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgfVxuXG4gIHB1YmxpYyBjb25maXJtKGFyZzogYW55KTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgLy9cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGZhbHNlKTtcbiAgfSBcbn07XG4iXX0=