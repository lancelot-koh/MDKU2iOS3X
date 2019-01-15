"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Section = /** @class */ (function () {
    function Section() {
    }
    Section.prototype.destroy = function () {
        // No-op
    };
    Section.prototype.create = function (params, callback) {
        // No-op
    };
    Section.prototype.createButtonSection = function (params, callback) {
        // No-op
    };
    Section.prototype.createContactTableSection = function (params, callback) {
        // No-op
    };
    Section.prototype.createExtensionSection = function (params, callback) {
        // No-op
    };
    Section.prototype.createGridTableSection = function (params, callback) {
        // No-op
    };
    Section.prototype.createKeyValueSection = function (params, callback) {
        // No-op
    };
    Section.prototype.createObjectCollectionSection = function (params, callback) {
        // No-op
    };
    Section.prototype.createObjectHeaderSection = function (params, callback) {
        // No-op
    };
    Section.prototype.createObjectTableSection = function (params, callback) {
        // No-op
    };
    Section.prototype.createSimplePropertySection = function (params, callback) {
        // No-op
    };
    Section.prototype.redraw = function (data) {
        //
    };
    Section.prototype.reloadData = function (itemCount) {
        //
    };
    Section.prototype.reloadRow = function (index) {
        //
    };
    Section.prototype.setIndicatorState = function (params) {
        //
    };
    Section.prototype.refreshIndicators = function () {
        //
    };
    Section.prototype.redrawLayout = function () {
        //
    };
    return Section;
}());
exports.Section = Section;
;
var SectionedTable = /** @class */ (function () {
    function SectionedTable(page) {
        this.page = page;
    }
    SectionedTable.prototype.create = function (sections) {
        //
    };
    SectionedTable.prototype.destroy = function () {
        //
    };
    return SectionedTable;
}());
exports.SectionedTable = SectionedTable;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VjdGlvbmVkVGFibGVNYW5hZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiU2VjdGlvbmVkVGFibGVNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7SUFBQTtJQW9FQSxDQUFDO0lBbkVRLHlCQUFPLEdBQWQ7UUFDRSxRQUFRO0lBQ1YsQ0FBQztJQUVNLHdCQUFNLEdBQWIsVUFBYyxNQUFXLEVBQUUsUUFBYTtRQUN0QyxRQUFRO0lBQ1YsQ0FBQztJQUVNLHFDQUFtQixHQUExQixVQUEyQixNQUFXLEVBQUUsUUFBYTtRQUNuRCxRQUFRO0lBQ1YsQ0FBQztJQUVNLDJDQUF5QixHQUFoQyxVQUFpQyxNQUFXLEVBQUUsUUFBYTtRQUN6RCxRQUFRO0lBQ1YsQ0FBQztJQUVNLHdDQUFzQixHQUE3QixVQUE4QixNQUFXLEVBQUUsUUFBYTtRQUN0RCxRQUFRO0lBQ1YsQ0FBQztJQUVNLHdDQUFzQixHQUE3QixVQUE4QixNQUFXLEVBQUUsUUFBYTtRQUN0RCxRQUFRO0lBQ1YsQ0FBQztJQUVNLHVDQUFxQixHQUE1QixVQUE2QixNQUFXLEVBQUUsUUFBYTtRQUNyRCxRQUFRO0lBQ1YsQ0FBQztJQUVNLCtDQUE2QixHQUFwQyxVQUFxQyxNQUFXLEVBQUUsUUFBYTtRQUM3RCxRQUFRO0lBQ1YsQ0FBQztJQUVNLDJDQUF5QixHQUFoQyxVQUFpQyxNQUFXLEVBQUUsUUFBYTtRQUN6RCxRQUFRO0lBQ1YsQ0FBQztJQUVNLDBDQUF3QixHQUEvQixVQUFnQyxNQUFXLEVBQUUsUUFBYTtRQUN4RCxRQUFRO0lBQ1YsQ0FBQztJQUVNLDZDQUEyQixHQUFsQyxVQUFtQyxNQUFXLEVBQUUsUUFBYTtRQUMzRCxRQUFRO0lBQ1YsQ0FBQztJQUVNLHdCQUFNLEdBQWIsVUFBYyxJQUFTO1FBQ3JCLEVBQUU7SUFDSixDQUFDO0lBRU0sNEJBQVUsR0FBakIsVUFBa0IsU0FBaUI7UUFDakMsRUFBRTtJQUNKLENBQUM7SUFFTSwyQkFBUyxHQUFoQixVQUFpQixLQUFhO1FBQzVCLEVBQUU7SUFDSixDQUFDO0lBRU8sbUNBQWlCLEdBQXhCLFVBQXlCLE1BQVc7UUFDbkMsRUFBRTtJQUNKLENBQUM7SUFFTSxtQ0FBaUIsR0FBeEI7UUFDRSxFQUFFO0lBQ0osQ0FBQztJQUVNLDhCQUFZLEdBQW5CO1FBQ0UsRUFBRTtJQUNKLENBQUM7SUFDSCxjQUFDO0FBQUQsQ0FBQyxBQXBFRCxJQW9FQztBQXBFWSwwQkFBTztBQW9FbkIsQ0FBQztBQUVGO0lBSUUsd0JBQVksSUFBVTtRQUNwQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNuQixDQUFDO0lBRU0sK0JBQU0sR0FBYixVQUFjLFFBQWU7UUFDM0IsRUFBRTtJQUNKLENBQUM7SUFDTSxnQ0FBTyxHQUFkO1FBQ0UsRUFBRTtJQUNKLENBQUM7SUFDSCxxQkFBQztBQUFELENBQUMsQUFkRCxJQWNDO0FBZFksd0NBQWM7QUFjMUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBhZ2UgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2UvcGFnZSc7XG5cbmV4cG9ydCBjbGFzcyBTZWN0aW9uIHtcbiAgcHVibGljIGRlc3Ryb3koKSB7XG4gICAgLy8gTm8tb3BcbiAgfVxuXG4gIHB1YmxpYyBjcmVhdGUocGFyYW1zOiBhbnksIGNhbGxiYWNrOiBhbnkpIHtcbiAgICAvLyBOby1vcFxuICB9XG5cbiAgcHVibGljIGNyZWF0ZUJ1dHRvblNlY3Rpb24ocGFyYW1zOiBhbnksIGNhbGxiYWNrOiBhbnkpIHtcbiAgICAvLyBOby1vcFxuICB9XG5cbiAgcHVibGljIGNyZWF0ZUNvbnRhY3RUYWJsZVNlY3Rpb24ocGFyYW1zOiBhbnksIGNhbGxiYWNrOiBhbnkpIHtcbiAgICAvLyBOby1vcFxuICB9XG5cbiAgcHVibGljIGNyZWF0ZUV4dGVuc2lvblNlY3Rpb24ocGFyYW1zOiBhbnksIGNhbGxiYWNrOiBhbnkpIHtcbiAgICAvLyBOby1vcFxuICB9XG5cbiAgcHVibGljIGNyZWF0ZUdyaWRUYWJsZVNlY3Rpb24ocGFyYW1zOiBhbnksIGNhbGxiYWNrOiBhbnkpIHtcbiAgICAvLyBOby1vcFxuICB9XG5cbiAgcHVibGljIGNyZWF0ZUtleVZhbHVlU2VjdGlvbihwYXJhbXM6IGFueSwgY2FsbGJhY2s6IGFueSkge1xuICAgIC8vIE5vLW9wXG4gIH1cblxuICBwdWJsaWMgY3JlYXRlT2JqZWN0Q29sbGVjdGlvblNlY3Rpb24ocGFyYW1zOiBhbnksIGNhbGxiYWNrOiBhbnkpIHtcbiAgICAvLyBOby1vcFxuICB9XG5cbiAgcHVibGljIGNyZWF0ZU9iamVjdEhlYWRlclNlY3Rpb24ocGFyYW1zOiBhbnksIGNhbGxiYWNrOiBhbnkpIHtcbiAgICAvLyBOby1vcFxuICB9XG5cbiAgcHVibGljIGNyZWF0ZU9iamVjdFRhYmxlU2VjdGlvbihwYXJhbXM6IGFueSwgY2FsbGJhY2s6IGFueSkge1xuICAgIC8vIE5vLW9wXG4gIH1cblxuICBwdWJsaWMgY3JlYXRlU2ltcGxlUHJvcGVydHlTZWN0aW9uKHBhcmFtczogYW55LCBjYWxsYmFjazogYW55KSB7XG4gICAgLy8gTm8tb3BcbiAgfVxuXG4gIHB1YmxpYyByZWRyYXcoZGF0YTogYW55KSB7XG4gICAgLy9cbiAgfVxuXG4gIHB1YmxpYyByZWxvYWREYXRhKGl0ZW1Db3VudDogbnVtYmVyKSB7XG4gICAgLy9cbiAgfVxuXG4gIHB1YmxpYyByZWxvYWRSb3coaW5kZXg6IG51bWJlcikge1xuICAgIC8vXG4gIH1cbiAgXG4gICBwdWJsaWMgc2V0SW5kaWNhdG9yU3RhdGUocGFyYW1zOiBhbnkpIHtcbiAgICAvL1xuICB9XG5cbiAgcHVibGljIHJlZnJlc2hJbmRpY2F0b3JzKCkge1xuICAgIC8vXG4gIH1cblxuICBwdWJsaWMgcmVkcmF3TGF5b3V0KCkge1xuICAgIC8vXG4gIH1cbn07XG5cbmV4cG9ydCBjbGFzcyBTZWN0aW9uZWRUYWJsZSB7XG5cbiAgcHJvdGVjdGVkIHBhZ2U6IFBhZ2U7XG4gIFxuICBjb25zdHJ1Y3RvcihwYWdlOiBQYWdlKSB7XG4gICAgdGhpcy5wYWdlID0gcGFnZTtcbiAgfVxuXG4gIHB1YmxpYyBjcmVhdGUoc2VjdGlvbnM6IGFueVtdKSB7XG4gICAgLy9cbiAgfVxuICBwdWJsaWMgZGVzdHJveSgpIHtcbiAgICAvL1xuICB9XG59O1xuIl19