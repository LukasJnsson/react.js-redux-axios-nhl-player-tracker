
/**
 * Function that checks if an value is undefined or null
 * @param {String|Number|Object} value - The value to check
 * @returns {String|Number|Object} - The value or the string 'N/A'
 */
export default function checkFalsy(value) {
    return value ?? 'N/A';
};