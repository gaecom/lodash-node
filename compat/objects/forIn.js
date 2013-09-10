/**
 * @license
 * Lo-Dash 1.3.1 <http://lodash.com/>
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var createIterator = require('../internals/createIterator'),
    eachIteratorOptions = require('../internals/eachIteratorOptions'),
    forOwnIteratorOptions = require('../internals/forOwnIteratorOptions');

/**
 * Iterates over own and inherited enumerable properties of an object,
 * executing the callback for each property. The callback is bound to `thisArg`
 * and invoked with three arguments; (value, key, object). Callbacks may exit
 * iteration early by explicitly returning `false`.
 *
 * @static
 * @memberOf _
 * @type Function
 * @category Objects
 * @param {Object} object The object to iterate over.
 * @param {Function} [callback=identity] The function called per iteration.
 * @param {*} [thisArg] The `this` binding of `callback`.
 * @returns {Object} Returns `object`.
 * @example
 *
 * function Dog(name) {
 *   this.name = name;
 * }
 *
 * Dog.prototype.bark = function() {
 *   console.log('Woof, woof!');
 * };
 *
 * _.forIn(new Dog('Dagny'), function(value, key) {
 *   console.log(key);
 * });
 * // => logs 'bark' and 'name' (property order is not guaranteed across environments)
 */
var forIn = createIterator(eachIteratorOptions, forOwnIteratorOptions, {
  'useHas': false
});

module.exports = forIn;