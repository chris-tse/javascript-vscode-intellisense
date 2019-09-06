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

(function(exports) {
    Object.assign(exports, {
        add,
        subtract,
    })
})(typeof exports === 'undefined' ? this['util']={} : exports)