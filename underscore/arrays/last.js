/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize underscore exports="node" -o ./underscore/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var slice = require('./slice');

/**
 * Gets the last element of `array`.
 *
 * Note: The `n` and `predicate` arguments are deprecated; replace with
 * `_.takeRight` and `_.takeRightWhile` respectively.
 *
 * @static
 * @memberOf _
 * @category Arrays
 * @param {Array} array The array to query.
 * @returns {*} Returns the last element of `array`.
 * @example
 *
 * _.last([1, 2, 3]);
 * // => 3
 */
function last(array, n, guard) {
  var length = array ? array.length : 0;
  if (n == null || guard) {
    return array ? array[length - 1] : undefined;
  }
  n = length - (n || 0);
  return slice(array, n < 0 ? 0 : n);
}

module.exports = last;
