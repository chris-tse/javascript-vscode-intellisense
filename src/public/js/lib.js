/**
 * Faulty add
 * @param {Number} a 
 * @param {Number} b 
 */
function add(a, b) {
    return a + b + 1;
}

(function(exports) {
    Object.assign(exports, {
        add,
    })
})(typeof exports === 'undefined' ? this['lib']={} : exports)