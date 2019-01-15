"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MDKFormCellModel = /** @class */ (function () {
    function MDKFormCellModel(model) {
        this._model = model;
    }
    Object.defineProperty(MDKFormCellModel.prototype, "model", {
        get: function () {
            return this._model;
        },
        enumerable: true,
        configurable: true
    });
    MDKFormCellModel.prototype.update = function (data) {
        // intentional no-op
    };
    return MDKFormCellModel;
}());
exports.MDKFormCellModel = MDKFormCellModel;
var FormCellFactory = /** @class */ (function () {
    function FormCellFactory() {
    }
    FormCellFactory.getInstance = function () {
        return null;
    };
    FormCellFactory.prototype.createAttachmentFormCell = function (data, callback) {
        // intentional no-op
        return undefined;
    };
    FormCellFactory.prototype.createButtonFormCell = function (data, callback) {
        // intentional no-op
        return undefined;
    };
    FormCellFactory.prototype.createDateFormCell = function (data, callback) {
        // intentional no-op
        return undefined;
    };
    FormCellFactory.prototype.createDurationFormCell = function (data, callback) {
        // intentional no-op
        return undefined;
    };
    FormCellFactory.prototype.createExtensionFormCell = function (data, callback) {
        // intentional no-op
        return undefined;
    };
    FormCellFactory.prototype.createFilterFormCell = function (data, callback) {
        // intentional no-op
        return undefined;
    };
    FormCellFactory.prototype.createListPicker = function (data, callback) {
        // intentional no-op
        return undefined;
    };
    FormCellFactory.prototype.createNoteFormCell = function (data, callback) {
        // intentional no-op
        return undefined;
    };
    FormCellFactory.prototype.createSegmentedFormCell = function (data, callback) {
        // intentional no-op
        return undefined;
    };
    FormCellFactory.prototype.createSimplePropertyFormCell = function (data, callback) {
        // intentional no-op
        return undefined;
    };
    FormCellFactory.prototype.createSorterFormCell = function (data, callback) {
        // intentional no-op
        return undefined;
    };
    FormCellFactory.prototype.createSwitchFormCell = function (data, callback) {
        // intentional no-op
        return undefined;
    };
    FormCellFactory.prototype.createTitleFormCell = function (data, callback) {
        // intentional no-op
        return undefined;
    };
    return FormCellFactory;
}());
exports.FormCellFactory = FormCellFactory;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRm9ybUNlbGxGYWN0b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiRm9ybUNlbGxGYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7SUFHRSwwQkFBbUIsS0FBVTtRQUMzQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBRUQsc0JBQUksbUNBQUs7YUFBVDtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3JCLENBQUM7OztPQUFBO0lBRU0saUNBQU0sR0FBYixVQUFjLElBQVM7UUFDckIsb0JBQW9CO0lBQ3RCLENBQUM7SUFDSCx1QkFBQztBQUFELENBQUMsQUFkRCxJQWNDO0FBZFksNENBQWdCO0FBZ0I3QjtJQUFBO0lBcUVBLENBQUM7SUFwRWUsMkJBQVcsR0FBekI7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVNLGtEQUF3QixHQUEvQixVQUFnQyxJQUFTLEVBQUUsUUFBYTtRQUN0RCxvQkFBb0I7UUFDcEIsTUFBTSxDQUFDLFNBQVMsQ0FBQztJQUNuQixDQUFDO0lBRU0sOENBQW9CLEdBQTNCLFVBQTRCLElBQVMsRUFBRSxRQUFhO1FBQ2xELG9CQUFvQjtRQUNwQixNQUFNLENBQUMsU0FBUyxDQUFDO0lBQ25CLENBQUM7SUFFTSw0Q0FBa0IsR0FBekIsVUFBMEIsSUFBUyxFQUFFLFFBQWE7UUFDaEQsb0JBQW9CO1FBQ3BCLE1BQU0sQ0FBQyxTQUFTLENBQUM7SUFDbkIsQ0FBQztJQUVNLGdEQUFzQixHQUE3QixVQUE4QixJQUFTLEVBQUUsUUFBYTtRQUNwRCxvQkFBb0I7UUFDcEIsTUFBTSxDQUFDLFNBQVMsQ0FBQztJQUNuQixDQUFDO0lBRU0saURBQXVCLEdBQTlCLFVBQStCLElBQVMsRUFBRSxRQUFhO1FBQ3JELG9CQUFvQjtRQUNwQixNQUFNLENBQUMsU0FBUyxDQUFDO0lBQ25CLENBQUM7SUFFTSw4Q0FBb0IsR0FBM0IsVUFBNEIsSUFBUyxFQUFFLFFBQWE7UUFDbEQsb0JBQW9CO1FBQ3BCLE1BQU0sQ0FBQyxTQUFTLENBQUM7SUFDbkIsQ0FBQztJQUVNLDBDQUFnQixHQUF2QixVQUF3QixJQUFTLEVBQUUsUUFBYTtRQUM5QyxvQkFBb0I7UUFDcEIsTUFBTSxDQUFDLFNBQVMsQ0FBQztJQUNuQixDQUFDO0lBRU0sNENBQWtCLEdBQXpCLFVBQTBCLElBQVMsRUFBRSxRQUFhO1FBQ2hELG9CQUFvQjtRQUNwQixNQUFNLENBQUMsU0FBUyxDQUFDO0lBQ25CLENBQUM7SUFFTSxpREFBdUIsR0FBOUIsVUFBK0IsSUFBUyxFQUFFLFFBQWE7UUFDckQsb0JBQW9CO1FBQ3BCLE1BQU0sQ0FBQyxTQUFTLENBQUM7SUFDbkIsQ0FBQztJQUVNLHNEQUE0QixHQUFuQyxVQUFvQyxJQUFTLEVBQUUsUUFBYTtRQUMxRCxvQkFBb0I7UUFDcEIsTUFBTSxDQUFDLFNBQVMsQ0FBQztJQUNuQixDQUFDO0lBRU0sOENBQW9CLEdBQTNCLFVBQTRCLElBQVMsRUFBRSxRQUFhO1FBQ2xELG9CQUFvQjtRQUNwQixNQUFNLENBQUMsU0FBUyxDQUFDO0lBQ25CLENBQUM7SUFFTSw4Q0FBb0IsR0FBM0IsVUFBNEIsSUFBUyxFQUFFLFFBQWE7UUFDbEQsb0JBQW9CO1FBQ3BCLE1BQU0sQ0FBQyxTQUFTLENBQUM7SUFDbkIsQ0FBQztJQUVNLDZDQUFtQixHQUExQixVQUEyQixJQUFTLEVBQUUsUUFBYTtRQUNqRCxvQkFBb0I7UUFDcEIsTUFBTSxDQUFDLFNBQVMsQ0FBQztJQUNuQixDQUFDO0lBQ0gsc0JBQUM7QUFBRCxDQUFDLEFBckVELElBcUVDO0FBckVZLDBDQUFlO0FBcUUzQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIE1ES0Zvcm1DZWxsTW9kZWwge1xuICBwcml2YXRlIF9tb2RlbDogYW55O1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihtb2RlbDogYW55KSB7XG4gICAgdGhpcy5fbW9kZWwgPSBtb2RlbDtcbiAgfVxuXG4gIGdldCBtb2RlbCgpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLl9tb2RlbDtcbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGUoZGF0YTogYW55KTogdm9pZCB7XG4gICAgLy8gaW50ZW50aW9uYWwgbm8tb3BcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRm9ybUNlbGxGYWN0b3J5IHtcbiAgcHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZSgpOiBGb3JtQ2VsbEZhY3Rvcnkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcHVibGljIGNyZWF0ZUF0dGFjaG1lbnRGb3JtQ2VsbChkYXRhOiBhbnksIGNhbGxiYWNrOiBhbnkpOiBNREtGb3JtQ2VsbE1vZGVsIHtcbiAgICAvLyBpbnRlbnRpb25hbCBuby1vcFxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbiAgXG4gIHB1YmxpYyBjcmVhdGVCdXR0b25Gb3JtQ2VsbChkYXRhOiBhbnksIGNhbGxiYWNrOiBhbnkpOiBNREtGb3JtQ2VsbE1vZGVsIHtcbiAgICAvLyBpbnRlbnRpb25hbCBuby1vcFxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgY3JlYXRlRGF0ZUZvcm1DZWxsKGRhdGE6IGFueSwgY2FsbGJhY2s6IGFueSk6IE1ES0Zvcm1DZWxsTW9kZWwge1xuICAgIC8vIGludGVudGlvbmFsIG5vLW9wXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuICBcbiAgcHVibGljIGNyZWF0ZUR1cmF0aW9uRm9ybUNlbGwoZGF0YTogYW55LCBjYWxsYmFjazogYW55KTogTURLRm9ybUNlbGxNb2RlbCB7XG4gICAgLy8gaW50ZW50aW9uYWwgbm8tb3BcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIGNyZWF0ZUV4dGVuc2lvbkZvcm1DZWxsKGRhdGE6IGFueSwgY2FsbGJhY2s6IGFueSk6IE1ES0Zvcm1DZWxsTW9kZWwge1xuICAgIC8vIGludGVudGlvbmFsIG5vLW9wXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBjcmVhdGVGaWx0ZXJGb3JtQ2VsbChkYXRhOiBhbnksIGNhbGxiYWNrOiBhbnkpOiBNREtGb3JtQ2VsbE1vZGVsIHtcbiAgICAvLyBpbnRlbnRpb25hbCBuby1vcFxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgY3JlYXRlTGlzdFBpY2tlcihkYXRhOiBhbnksIGNhbGxiYWNrOiBhbnkpOiBNREtGb3JtQ2VsbE1vZGVsIHtcbiAgICAvLyBpbnRlbnRpb25hbCBuby1vcFxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgY3JlYXRlTm90ZUZvcm1DZWxsKGRhdGE6IGFueSwgY2FsbGJhY2s6IGFueSk6IE1ES0Zvcm1DZWxsTW9kZWwge1xuICAgIC8vIGludGVudGlvbmFsIG5vLW9wXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBjcmVhdGVTZWdtZW50ZWRGb3JtQ2VsbChkYXRhOiBhbnksIGNhbGxiYWNrOiBhbnkpOiBNREtGb3JtQ2VsbE1vZGVsIHtcbiAgICAvLyBpbnRlbnRpb25hbCBuby1vcFxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbiAgXG4gIHB1YmxpYyBjcmVhdGVTaW1wbGVQcm9wZXJ0eUZvcm1DZWxsKGRhdGE6IGFueSwgY2FsbGJhY2s6IGFueSk6IE1ES0Zvcm1DZWxsTW9kZWwge1xuICAgIC8vIGludGVudGlvbmFsIG5vLW9wXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBjcmVhdGVTb3J0ZXJGb3JtQ2VsbChkYXRhOiBhbnksIGNhbGxiYWNrOiBhbnkpOiBNREtGb3JtQ2VsbE1vZGVsIHtcbiAgICAvLyBpbnRlbnRpb25hbCBuby1vcFxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgY3JlYXRlU3dpdGNoRm9ybUNlbGwoZGF0YTogYW55LCBjYWxsYmFjazogYW55KTogTURLRm9ybUNlbGxNb2RlbCB7XG4gICAgLy8gaW50ZW50aW9uYWwgbm8tb3BcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIGNyZWF0ZVRpdGxlRm9ybUNlbGwoZGF0YTogYW55LCBjYWxsYmFjazogYW55KTogTURLRm9ybUNlbGxNb2RlbCB7XG4gICAgLy8gaW50ZW50aW9uYWwgbm8tb3BcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG59O1xuIl19