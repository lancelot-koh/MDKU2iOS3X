"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var I18n = /** @class */ (function () {
    function I18n() {
    }
    /**
     * This method is to override system language
     *
     * @param languageCode language code to override
     *
     */
    I18n.applyLanguage = function (languageCode) {
        // apply language
    };
    /**
     * This method is to display datetime into format based on selected style and locale
     *
     * @param date date object to be formatted into locale string
     * @param format one of [DT, D, T], default is DT
     * @param customLocale overrides app locale
     * @param customTimeZone overrides device TimeZone
     * @return {string} formatted datetime string
     *
     */
    I18n.formatDateToLocaleString = function (date, format, customLocale, customTimeZone) {
        return '';
    };
    /**
     * This method is to display value in number format based on selected style and locale
     *
     * @param value numeric value to be formatted
     * @param options number format options, optional
     * @param customLocale overrides app locale
     * @param patterns set number in specific pattern
     * i.e. 0.##, 0.00, ¤#,##0.00, (¤0.00)
     * @return {string} formatted number in selected style
     *
     */
    I18n.formatNumberToLocaleString = function (value, options, customLocale, patterns) {
        return '';
    };
    /**
     * This method is to get device language code
     *
     * @return {string} device language code
     *
     */
    I18n.getDeviceLanguageCode = function () {
        return '';
    };
    /**
     * This method is to get device region code
     *
     * @return {string} device region code
     *
     */
    I18n.getDeviceRegionCode = function () {
        return '';
    };
    /**
     * This method is to get device region code
     *
     * @return {string} device region code
     *
     */
    I18n.getDeviceRegionCodeList = function () {
        return [];
    };
    /**
     * This method is to get name of the region
     *
     * @return {string} device name of the region
     *
     */
    I18n.getDeviceRegionName = function (currentAppLocale, countryCode) {
        return '';
    };
    /**
     * This method is to get localized language name based on language code
     *
     * @param currentAppLocale current locale
     * @param languageCode language code
     *
     */
    I18n.getLocalizedLanguageName = function (currentAppLocale, languageCode) {
        return '';
    };
    return I18n;
}());
exports.I18n = I18n;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSTE4bi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkkxOG4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtJQUFBO0lBK0ZBLENBQUM7SUE3RkM7Ozs7O09BS0c7SUFDVyxrQkFBYSxHQUEzQixVQUE0QixZQUFvQjtRQUM5QyxpQkFBaUI7SUFDbkIsQ0FBQztJQUVEOzs7Ozs7Ozs7T0FTRztJQUNXLDZCQUF3QixHQUF0QyxVQUNFLElBQVUsRUFBRSxNQUFlLEVBQUUsWUFBcUIsRUFDbEQsY0FBdUI7UUFDdkIsTUFBTSxDQUFDLEVBQUUsQ0FBQztJQUNaLENBQUM7SUFFRDs7Ozs7Ozs7OztPQVVHO0lBQ1csK0JBQTBCLEdBQXhDLFVBQ0UsS0FBYSxFQUFFLE9BQWEsRUFDNUIsWUFBcUIsRUFBRSxRQUFpQjtRQUN4QyxNQUFNLENBQUMsRUFBRSxDQUFDO0lBQ1osQ0FBQztJQUVEOzs7OztPQUtHO0lBQ1csMEJBQXFCLEdBQW5DO1FBQ0UsTUFBTSxDQUFDLEVBQUUsQ0FBQztJQUNaLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNXLHdCQUFtQixHQUFqQztRQUNFLE1BQU0sQ0FBQyxFQUFFLENBQUM7SUFDWixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDVyw0QkFBdUIsR0FBckM7UUFDRSxNQUFNLENBQUMsRUFBRSxDQUFDO0lBQ1osQ0FBQztJQUVEOzs7OztPQUtHO0lBQ1csd0JBQW1CLEdBQWpDLFVBQWtDLGdCQUF3QixFQUFFLFdBQW1CO1FBQzdFLE1BQU0sQ0FBQyxFQUFFLENBQUM7SUFDWixDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ1csNkJBQXdCLEdBQXRDLFVBQXVDLGdCQUF3QixFQUFFLFlBQW9CO1FBQ25GLE1BQU0sQ0FBQyxFQUFFLENBQUM7SUFDWixDQUFDO0lBQ0gsV0FBQztBQUFELENBQUMsQUEvRkQsSUErRkM7QUEvRlksb0JBQUk7QUErRmhCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgSTE4biB7XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIGlzIHRvIG92ZXJyaWRlIHN5c3RlbSBsYW5ndWFnZVxuICAgKiBcbiAgICogQHBhcmFtIGxhbmd1YWdlQ29kZSBsYW5ndWFnZSBjb2RlIHRvIG92ZXJyaWRlXG4gICAqIFxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBhcHBseUxhbmd1YWdlKGxhbmd1YWdlQ29kZTogc3RyaW5nKSB7XG4gICAgLy8gYXBwbHkgbGFuZ3VhZ2VcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCBpcyB0byBkaXNwbGF5IGRhdGV0aW1lIGludG8gZm9ybWF0IGJhc2VkIG9uIHNlbGVjdGVkIHN0eWxlIGFuZCBsb2NhbGVcbiAgICogXG4gICAqIEBwYXJhbSBkYXRlIGRhdGUgb2JqZWN0IHRvIGJlIGZvcm1hdHRlZCBpbnRvIGxvY2FsZSBzdHJpbmdcbiAgICogQHBhcmFtIGZvcm1hdCBvbmUgb2YgW0RULCBELCBUXSwgZGVmYXVsdCBpcyBEVFxuICAgKiBAcGFyYW0gY3VzdG9tTG9jYWxlIG92ZXJyaWRlcyBhcHAgbG9jYWxlXG4gICAqIEBwYXJhbSBjdXN0b21UaW1lWm9uZSBvdmVycmlkZXMgZGV2aWNlIFRpbWVab25lXG4gICAqIEByZXR1cm4ge3N0cmluZ30gZm9ybWF0dGVkIGRhdGV0aW1lIHN0cmluZ1xuICAgKiBcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgZm9ybWF0RGF0ZVRvTG9jYWxlU3RyaW5nKFxuICAgIGRhdGU6IERhdGUsIGZvcm1hdD86IHN0cmluZywgY3VzdG9tTG9jYWxlPzogc3RyaW5nLFxuICAgIGN1c3RvbVRpbWVab25lPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBtZXRob2QgaXMgdG8gZGlzcGxheSB2YWx1ZSBpbiBudW1iZXIgZm9ybWF0IGJhc2VkIG9uIHNlbGVjdGVkIHN0eWxlIGFuZCBsb2NhbGVcbiAgICogXG4gICAqIEBwYXJhbSB2YWx1ZSBudW1lcmljIHZhbHVlIHRvIGJlIGZvcm1hdHRlZFxuICAgKiBAcGFyYW0gb3B0aW9ucyBudW1iZXIgZm9ybWF0IG9wdGlvbnMsIG9wdGlvbmFsXG4gICAqIEBwYXJhbSBjdXN0b21Mb2NhbGUgb3ZlcnJpZGVzIGFwcCBsb2NhbGVcbiAgICogQHBhcmFtIHBhdHRlcm5zIHNldCBudW1iZXIgaW4gc3BlY2lmaWMgcGF0dGVyblxuICAgKiBpLmUuIDAuIyMsIDAuMDAsIMKkIywjIzAuMDAsICjCpDAuMDApXG4gICAqIEByZXR1cm4ge3N0cmluZ30gZm9ybWF0dGVkIG51bWJlciBpbiBzZWxlY3RlZCBzdHlsZVxuICAgKiBcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgZm9ybWF0TnVtYmVyVG9Mb2NhbGVTdHJpbmcoXG4gICAgdmFsdWU6IG51bWJlciwgb3B0aW9ucz86IGFueSxcbiAgICBjdXN0b21Mb2NhbGU/OiBzdHJpbmcsIHBhdHRlcm5zPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBtZXRob2QgaXMgdG8gZ2V0IGRldmljZSBsYW5ndWFnZSBjb2RlXG4gICAqIFxuICAgKiBAcmV0dXJuIHtzdHJpbmd9IGRldmljZSBsYW5ndWFnZSBjb2RlXG4gICAqIFxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBnZXREZXZpY2VMYW5ndWFnZUNvZGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBtZXRob2QgaXMgdG8gZ2V0IGRldmljZSByZWdpb24gY29kZVxuICAgKiBcbiAgICogQHJldHVybiB7c3RyaW5nfSBkZXZpY2UgcmVnaW9uIGNvZGVcbiAgICogXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGdldERldmljZVJlZ2lvbkNvZGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBtZXRob2QgaXMgdG8gZ2V0IGRldmljZSByZWdpb24gY29kZVxuICAgKiBcbiAgICogQHJldHVybiB7c3RyaW5nfSBkZXZpY2UgcmVnaW9uIGNvZGVcbiAgICogXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGdldERldmljZVJlZ2lvbkNvZGVMaXN0KCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBtZXRob2QgaXMgdG8gZ2V0IG5hbWUgb2YgdGhlIHJlZ2lvblxuICAgKiBcbiAgICogQHJldHVybiB7c3RyaW5nfSBkZXZpY2UgbmFtZSBvZiB0aGUgcmVnaW9uXG4gICAqIFxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBnZXREZXZpY2VSZWdpb25OYW1lKGN1cnJlbnRBcHBMb2NhbGU6IHN0cmluZywgY291bnRyeUNvZGU6IHN0cmluZykge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCBpcyB0byBnZXQgbG9jYWxpemVkIGxhbmd1YWdlIG5hbWUgYmFzZWQgb24gbGFuZ3VhZ2UgY29kZVxuICAgKiBcbiAgICogQHBhcmFtIGN1cnJlbnRBcHBMb2NhbGUgY3VycmVudCBsb2NhbGVcbiAgICogQHBhcmFtIGxhbmd1YWdlQ29kZSBsYW5ndWFnZSBjb2RlXG4gICAqIFxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBnZXRMb2NhbGl6ZWRMYW5ndWFnZU5hbWUoY3VycmVudEFwcExvY2FsZTogc3RyaW5nLCBsYW5ndWFnZUNvZGU6IHN0cmluZykge1xuICAgIHJldHVybiAnJztcbiAgfVxufTtcbiJdfQ==