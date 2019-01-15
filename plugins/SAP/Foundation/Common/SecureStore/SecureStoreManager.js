"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This is the common interface exosed to TS for the SecureStore native implementation.
 */
var SecureStoreManager = /** @class */ (function () {
    function SecureStoreManager() {
    }
    SecureStoreManager.getInstance = function () {
        //
        return null;
    };
    SecureStoreManager.prototype.putOfflinestoreEncryptionKey = function (value) {
        //
    };
    SecureStoreManager.prototype.getOfflinestoreEncryptionKey = function () {
        return '';
    };
    return SecureStoreManager;
}());
exports.SecureStoreManager = SecureStoreManager;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VjdXJlU3RvcmVNYW5hZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiU2VjdXJlU3RvcmVNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7O0dBRUc7QUFDSDtJQUFBO0lBZUEsQ0FBQztJQWJlLDhCQUFXLEdBQXpCO1FBQ0UsRUFBRTtRQUNGLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRU0seURBQTRCLEdBQW5DLFVBQW9DLEtBQWE7UUFDL0MsRUFBRTtJQUNKLENBQUM7SUFFTSx5REFBNEIsR0FBbkM7UUFDRSxNQUFNLENBQUMsRUFBRSxDQUFDO0lBQ1osQ0FBQztJQUVILHlCQUFDO0FBQUQsQ0FBQyxBQWZELElBZUM7QUFmWSxnREFBa0I7QUFlOUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGhpcyBpcyB0aGUgY29tbW9uIGludGVyZmFjZSBleG9zZWQgdG8gVFMgZm9yIHRoZSBTZWN1cmVTdG9yZSBuYXRpdmUgaW1wbGVtZW50YXRpb24uXG4gKi9cbmV4cG9ydCBjbGFzcyBTZWN1cmVTdG9yZU1hbmFnZXIge1xuXG4gIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2UoKTogU2VjdXJlU3RvcmVNYW5hZ2VyIHtcbiAgICAvL1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcHVibGljIHB1dE9mZmxpbmVzdG9yZUVuY3J5cHRpb25LZXkodmFsdWU6IFN0cmluZykge1xuICAgIC8vXG4gIH1cblxuICBwdWJsaWMgZ2V0T2ZmbGluZXN0b3JlRW5jcnlwdGlvbktleSgpOiBTdHJpbmcge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG59O1xuIl19