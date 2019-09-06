/**
 * Adds two numbers
 * @param {Number} a 
 * @param {Number} b 
 */
function add(a, b) {
    return a + b;
}

/**
 * Subtracts two numbers
 * @param {Number} a 
 * @param {Number} b 
 */
function subtract(a, b) {
    return a - b;
}

const library = { add, subtract };

(function(exports) {
    Object.assign(exports, library)
})(typeof exports === 'undefined' ? this['util']={} : exports)