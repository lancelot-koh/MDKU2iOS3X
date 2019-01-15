"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SwiftExtensionDelegate = /** @class */ (function (_super) {
    __extends(SwiftExtensionDelegate, _super);
    function SwiftExtensionDelegate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /* tslint:enable */
    SwiftExtensionDelegate.initWithBridge = function (bridge, extension) {
        return undefined;
    };
    /**
     * Explicitly set reference to control extension
     * @param controlExtension
     */
    SwiftExtensionDelegate.prototype.setControlExtension = function (controlExtension) {
        // no-op
    };
    SwiftExtensionDelegate.prototype.setControlValue = function (value) {
        // no-op
    };
    SwiftExtensionDelegate.prototype.executeActionOrRule = function (definitionPath) {
        // no-op
    };
    SwiftExtensionDelegate.prototype.resolveValue = function (value) {
        // no-op
    };
    // selector will be exposed so it can be called from native.
    /* tslint:disable */
    SwiftExtensionDelegate.ObjCExposedMethods = {
        setControlValue: { value: [NSString], returns: interop.types.void },
        executeActionOrRule: { definitionPath: [NSString], returns: interop.types.void },
        resolveValue: { value: [NSString], returns: interop.types.void },
    };
    return SwiftExtensionDelegate;
}(NSObject));
exports.SwiftExtensionDelegate = SwiftExtensionDelegate;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3dpZnRFeHRlbnNpb25EZWxlZ2F0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlN3aWZ0RXh0ZW5zaW9uRGVsZWdhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtJQUE0QywwQ0FBUTtJQUFwRDs7SUFvQ0EsQ0FBQztJQTNCRyxtQkFBbUI7SUFDTCxxQ0FBYyxHQUE1QixVQUE2QixNQUFNLEVBQUUsU0FBUztRQUM1QyxNQUFNLENBQUMsU0FBUyxDQUFDO0lBQ25CLENBQUM7SUFJRDs7O09BR0c7SUFDSSxvREFBbUIsR0FBMUIsVUFBMkIsZ0JBQWdCO1FBQ3pDLFFBQVE7SUFDVixDQUFDO0lBRU0sZ0RBQWUsR0FBdEIsVUFBdUIsS0FBSztRQUMxQixRQUFRO0lBQ1YsQ0FBQztJQUVNLG9EQUFtQixHQUExQixVQUEyQixjQUFjO1FBQ3ZDLFFBQVE7SUFDVixDQUFDO0lBRU0sNkNBQVksR0FBbkIsVUFBb0IsS0FBSztRQUN2QixRQUFRO0lBQ1YsQ0FBQztJQWpDRCw0REFBNEQ7SUFDNUQsb0JBQW9CO0lBQ04seUNBQWtCLEdBQUc7UUFDakMsZUFBZSxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFO1FBQ25FLG1CQUFtQixFQUFFLEVBQUUsY0FBYyxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFO1FBQ2hGLFlBQVksRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRTtLQUNqRSxDQUFDO0lBNkJOLDZCQUFDO0NBQUEsQUFwQ0QsQ0FBNEMsUUFBUSxHQW9DbkQ7QUFwQ1ksd0RBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFN3aWZ0RXh0ZW5zaW9uRGVsZWdhdGUgZXh0ZW5kcyBOU09iamVjdCB7XG4gICAgLy8gc2VsZWN0b3Igd2lsbCBiZSBleHBvc2VkIHNvIGl0IGNhbiBiZSBjYWxsZWQgZnJvbSBuYXRpdmUuXG4gICAgLyogdHNsaW50OmRpc2FibGUgKi9cbiAgICBwdWJsaWMgc3RhdGljIE9iakNFeHBvc2VkTWV0aG9kcyA9IHtcbiAgICAgIHNldENvbnRyb2xWYWx1ZTogeyB2YWx1ZTogW05TU3RyaW5nXSwgcmV0dXJuczogaW50ZXJvcC50eXBlcy52b2lkIH0sXG4gICAgICBleGVjdXRlQWN0aW9uT3JSdWxlOiB7IGRlZmluaXRpb25QYXRoOiBbTlNTdHJpbmddLCByZXR1cm5zOiBpbnRlcm9wLnR5cGVzLnZvaWQgfSxcbiAgICAgIHJlc29sdmVWYWx1ZTogeyB2YWx1ZTogW05TU3RyaW5nXSwgcmV0dXJuczogaW50ZXJvcC50eXBlcy52b2lkIH0sXG4gICAgfTtcblxuICAgIC8qIHRzbGludDplbmFibGUgKi9cbiAgICBwdWJsaWMgc3RhdGljIGluaXRXaXRoQnJpZGdlKGJyaWRnZSwgZXh0ZW5zaW9uKTogU3dpZnRFeHRlbnNpb25EZWxlZ2F0ZSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBwcml2YXRlIF9icmlkZ2U6IGFueTtcbiAgICBwcml2YXRlIF9jb250cm9sRXh0ZW5zaW9uOiBhbnk7XG5cbiAgICAvKipcbiAgICAgKiBFeHBsaWNpdGx5IHNldCByZWZlcmVuY2UgdG8gY29udHJvbCBleHRlbnNpb25cbiAgICAgKiBAcGFyYW0gY29udHJvbEV4dGVuc2lvbiBcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0Q29udHJvbEV4dGVuc2lvbihjb250cm9sRXh0ZW5zaW9uKSB7XG4gICAgICAvLyBuby1vcFxuICAgIH1cblxuICAgIHB1YmxpYyBzZXRDb250cm9sVmFsdWUodmFsdWUpIHtcbiAgICAgIC8vIG5vLW9wXG4gICAgfVxuICBcbiAgICBwdWJsaWMgZXhlY3V0ZUFjdGlvbk9yUnVsZShkZWZpbml0aW9uUGF0aCkge1xuICAgICAgLy8gbm8tb3BcbiAgICB9XG4gIFxuICAgIHB1YmxpYyByZXNvbHZlVmFsdWUodmFsdWUpIHtcbiAgICAgIC8vIG5vLW9wXG4gICAgfVxuXG59XG4iXX0=