"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FormCellContainerView = /** @class */ (function () {
    function FormCellContainerView(page, params) {
        this.page = page;
        this.params = params;
    }
    FormCellContainerView.prototype.addFormCell = function (model) {
        // intentional no-op
    };
    FormCellContainerView.prototype.createNativeView = function () {
        // intentional no-op
        return undefined;
    };
    FormCellContainerView.prototype.disposeNativeView = function () {
        // intentional no-op
    };
    FormCellContainerView.prototype.initNativeView = function () {
        // intentional no-op
    };
    FormCellContainerView.prototype.updateCell = function (params, row, section) {
        // intentional no-op
    };
    FormCellContainerView.prototype.updateCells = function (params, style) {
        // intentional no-op
    };
    return FormCellContainerView;
}());
exports.FormCellContainerView = FormCellContainerView;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRm9ybUNlbGxDb250YWluZXJWaWV3LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiRm9ybUNlbGxDb250YWluZXJWaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBR0E7SUFLRSwrQkFBWSxJQUFVLEVBQUUsTUFBVztRQUNqQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN2QixDQUFDO0lBRU0sMkNBQVcsR0FBbEIsVUFBbUIsS0FBdUI7UUFDeEMsb0JBQW9CO0lBQ3RCLENBQUM7SUFFTSxnREFBZ0IsR0FBdkI7UUFDRSxvQkFBb0I7UUFDcEIsTUFBTSxDQUFDLFNBQVMsQ0FBQztJQUNuQixDQUFDO0lBRU0saURBQWlCLEdBQXhCO1FBQ0Usb0JBQW9CO0lBQ3RCLENBQUM7SUFFTSw4Q0FBYyxHQUFyQjtRQUNFLG9CQUFvQjtJQUN0QixDQUFDO0lBRU0sMENBQVUsR0FBakIsVUFBa0IsTUFBVyxFQUFFLEdBQVcsRUFBRSxPQUFlO1FBQ3pELG9CQUFvQjtJQUN0QixDQUFDO0lBRU0sMkNBQVcsR0FBbEIsVUFBbUIsTUFBVyxFQUFFLEtBQVU7UUFDeEMsb0JBQW9CO0lBQ3RCLENBQUM7SUFDSCw0QkFBQztBQUFELENBQUMsQUFsQ0QsSUFrQ0M7QUFsQ1ksc0RBQXFCO0FBa0NqQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGFnZSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvcGFnZS9wYWdlJztcbmltcG9ydCB7IE1ES0Zvcm1DZWxsTW9kZWwgfSBmcm9tICcuLi9Gb3JtQ2VsbEZhY3RvcnkvRm9ybUNlbGxGYWN0b3J5JztcblxuZXhwb3J0IGNsYXNzIEZvcm1DZWxsQ29udGFpbmVyVmlldyB7XG5cbiAgcHJvdGVjdGVkIHBhZ2U6IFBhZ2U7XG4gIHByb3RlY3RlZCBwYXJhbXM6IGFueTtcblxuICBjb25zdHJ1Y3RvcihwYWdlOiBQYWdlLCBwYXJhbXM6IGFueSkge1xuICAgIHRoaXMucGFnZSA9IHBhZ2U7XG4gICAgdGhpcy5wYXJhbXMgPSBwYXJhbXM7XG4gIH1cblxuICBwdWJsaWMgYWRkRm9ybUNlbGwobW9kZWw6IE1ES0Zvcm1DZWxsTW9kZWwpIHtcbiAgICAvLyBpbnRlbnRpb25hbCBuby1vcFxuICB9XG5cbiAgcHVibGljIGNyZWF0ZU5hdGl2ZVZpZXcoKTogT2JqZWN0IHtcbiAgICAvLyBpbnRlbnRpb25hbCBuby1vcFxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgZGlzcG9zZU5hdGl2ZVZpZXcoKTogdm9pZCB7XG4gICAgLy8gaW50ZW50aW9uYWwgbm8tb3BcbiAgfVxuXG4gIHB1YmxpYyBpbml0TmF0aXZlVmlldygpOiB2b2lkIHtcbiAgICAvLyBpbnRlbnRpb25hbCBuby1vcFxuICB9XG5cbiAgcHVibGljIHVwZGF0ZUNlbGwocGFyYW1zOiBhbnksIHJvdzogbnVtYmVyLCBzZWN0aW9uOiBudW1iZXIpIHtcbiAgICAvLyBpbnRlbnRpb25hbCBuby1vcFxuICB9XG4gIFxuICBwdWJsaWMgdXBkYXRlQ2VsbHMocGFyYW1zOiBhbnksIHN0eWxlOiBhbnkpIHtcbiAgICAvLyBpbnRlbnRpb25hbCBuby1vcFxuICB9XG59O1xuIl19