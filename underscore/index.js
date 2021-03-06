/**
 * @license
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize underscore exports="node" -o ./underscore/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var arrays = require('./arrays'),
    chaining = require('./chaining'),
    collections = require('./collections'),
    functions = require('./functions'),
    objects = require('./objects'),
    strings = require('./strings'),
    utilities = require('./utilities'),
    assign = require('./objects/assign'),
    baseEach = require('./internals/baseEach'),
    baseForOwn = require('./internals/baseForOwn'),
    lodashWrapper = require('./internals/lodashWrapper'),
    mixin = require('./utilities/mixin'),
    support = require('./support'),
    templateSettings = require('./utilities/templateSettings');

/** Used as the semantic version number */
var version = '2.4.1';

/** Used for native method references */
var arrayRef = Array.prototype;

/**
 * Creates a `lodash` object which wraps the given value to enable intuitive
 * method chaining.
 *
 * In addition to Lo-Dash methods, wrappers also have the following `Array` methods:
 * `concat`, `join`, `pop`, `push`, `reverse`, `shift`, `slice`, `sort`, `splice`,
 * and `unshift`
 *
 * Chaining is supported in custom builds as long as the `value` method is
 * implicitly or explicitly included in the build.
 *
 * The chainable wrapper functions are:
 * `after`, `assign`, `at`, `bind`, `bindAll`, `bindKey`, `chain`, `compact`,
 * `compose`, `concat`, `constant`, `countBy`, `create`, `createCallback`,
 * `curry`, `debounce`, `defaults`, `defer`, `delay`, `difference`, `filter`,
 * `flatten`, `forEach`, `forEachRight`, `forIn`, `forInRight`, `forOwn`,
 * `forOwnRight`, `functions`, `groupBy`, `indexBy`, `initial`, `intersection`,
 * `invert`, `invoke`, `keys`, `map`, `mapValues`, `matches`, `max`, `memoize`,
 * `merge`, `min`, `noop`, `object`, `omit`, `once`, `pairs`, `partial`,
 * `partialRight`, `pick`, `pluck`, `property`, `pull`, `push`, `range`,
 * `reject`, `remove`, `rest`, `reverse`, `shuffle`, `slice`, `sort`, `sortBy`,
 * `splice`, `tap`, `throttle`, `times`, `toArray`, `transform`, `union`,
 * `uniq`, `unshift`, `unzip`, `values`, `where`, `without`, `wrap`, `xor`,
 * and `zip`
 *
 * The non-chainable wrapper functions are:
 * `capitalize`, `clone`, `cloneDeep`, `contains`, `escape`, `every`, `find`,
 * `findIndex`, `findKey`, `findLast`, `findLastIndex`, `findLastKey`, `has`,
 * `identity`, `indexOf`, `isArguments`, `isArray`, `isBoolean`, `isDate`,
 * `isElement`, `isEmpty`, `isEqual`, `isFinite`, `isFunction`, `isNaN`,
 * `isNull`, `isNumber`, `isObject`, `isPlainObject`, `isRegExp`, `isString`,
 * `isUndefined`, `join`, `lastIndexOf`, `mixin`, `noConflict`, `now`,
 * `parseInt`, `pop`, `random`, `reduce`, `reduceRight`, `result`, `shift`,
 * `size`, `some`, `sortedIndex`, `runInContext`, `template`, `trim`,
 * `trimLeft`, `trimRight`, `unescape`, `uniqueId`, and `value`
 *
 * The wrapper functions `first`, `last`, and `sample` return wrapped values
 * when `n` is provided, otherwise they return unwrapped values.
 *
 * Explicit chaining can be enabled by using the `_.chain` method.
 *
 * @name _
 * @constructor
 * @category Chaining
 * @param {*} value The value to wrap in a `lodash` instance.
 * @returns {Object} Returns a `lodash` instance.
 * @example
 *
 * var wrapped = _([1, 2, 3]);
 *
 * // returns an unwrapped value
 * wrapped.reduce(function(sum, num) {
 *   return sum + num;
 * });
 * // => 6
 *
 * // returns a wrapped value
 * var squares = wrapped.map(function(num) {
 *   return num * num;
 * });
 *
 * _.isArray(squares);
 * // => false
 *
 * _.isArray(squares.value());
 * // => true
 */
function lodash(value) {
  return (value instanceof lodash)
    ? value
    : new lodashWrapper(value);
}

// ensure `new lodashWrapper` is an instance of `lodash`
lodashWrapper.prototype = lodash.prototype;

// wrap `_.mixin` so it works when provided only one argument
mixin = (function(func) {
  return function(object, source) {
    if (!source) {
      source = object;
      object = lodash;
    }
    return func(object, source);
  };
}(mixin));

// add functions that return wrapped values when chaining
lodash.after = functions.after;
lodash.bind = functions.bind;
lodash.bindAll = functions.bindAll;
lodash.chain = chaining.chain;
lodash.compact = arrays.compact;
lodash.compose = functions.compose;
lodash.constant = utilities.constant;
lodash.countBy = collections.countBy;
lodash.debounce = functions.debounce;
lodash.defaults = objects.defaults;
lodash.defer = functions.defer;
lodash.delay = functions.delay;
lodash.difference = arrays.difference;
lodash.drop = arrays.drop;
lodash.filter = collections.filter;
lodash.flatten = arrays.flatten;
lodash.forEach = collections.forEach;
lodash.functions = objects.functions;
lodash.groupBy = collections.groupBy;
lodash.indexBy = collections.indexBy;
lodash.initial = arrays.initial;
lodash.intersection = arrays.intersection;
lodash.invert = objects.invert;
lodash.invoke = collections.invoke;
lodash.keys = objects.keys;
lodash.map = collections.map;
lodash.matches = utilities.matches;
lodash.max = collections.max;
lodash.memoize = functions.memoize;
lodash.min = collections.min;
lodash.omit = objects.omit;
lodash.once = functions.once;
lodash.pairs = objects.pairs;
lodash.partial = functions.partial;
lodash.partition = collections.partition;
lodash.pick = objects.pick;
lodash.pluck = collections.pluck;
lodash.property = utilities.property;
lodash.range = arrays.range;
lodash.reject = collections.reject;
lodash.rest = arrays.rest;
lodash.shuffle = collections.shuffle;
lodash.sortBy = collections.sortBy;
lodash.tap = chaining.tap;
lodash.throttle = functions.throttle;
lodash.times = utilities.times;
lodash.toArray = collections.toArray;
lodash.union = arrays.union;
lodash.uniq = arrays.uniq;
lodash.values = objects.values;
lodash.where = collections.where;
lodash.without = arrays.without;
lodash.wrap = functions.wrap;
lodash.zip = arrays.zip;

// add aliases
lodash.collect = collections.map;
lodash.each = collections.forEach;
lodash.extend = assign;
lodash.methods = objects.functions;
lodash.object = arrays.zipObject;
lodash.select = collections.filter;
lodash.tail = arrays.rest;
lodash.unique = arrays.uniq;

// add functions that return unwrapped values when chaining
lodash.clone = objects.clone;
lodash.contains = collections.contains;
lodash.escape = utilities.escape;
lodash.every = collections.every;
lodash.find = collections.find;
lodash.has = objects.has;
lodash.identity = utilities.identity;
lodash.indexOf = arrays.indexOf;
lodash.isArguments = objects.isArguments;
lodash.isArray = objects.isArray;
lodash.isBoolean = objects.isBoolean;
lodash.isDate = objects.isDate;
lodash.isElement = objects.isElement;
lodash.isEmpty = objects.isEmpty;
lodash.isEqual = objects.isEqual;
lodash.isFinite = objects.isFinite;
lodash.isFunction = objects.isFunction;
lodash.isNaN = objects.isNaN;
lodash.isNull = objects.isNull;
lodash.isNumber = objects.isNumber;
lodash.isObject = objects.isObject;
lodash.isRegExp = objects.isRegExp;
lodash.isString = objects.isString;
lodash.isUndefined = objects.isUndefined;
lodash.lastIndexOf = arrays.lastIndexOf;
lodash.mixin = mixin;
lodash.noConflict = utilities.noConflict;
lodash.now = utilities.now;
lodash.random = utilities.random;
lodash.reduce = collections.reduce;
lodash.reduceRight = collections.reduceRight;
lodash.result = utilities.result;
lodash.size = collections.size;
lodash.some = collections.some;
lodash.sortedIndex = arrays.sortedIndex;
lodash.template = utilities.template;
lodash.unescape = utilities.unescape;
lodash.uniqueId = utilities.uniqueId;

// add aliases
lodash.all = collections.every;
lodash.any = collections.some;
lodash.detect = collections.find;
lodash.findWhere = collections.find;
lodash.foldl = collections.reduce;
lodash.foldr = collections.reduceRight;
lodash.include = collections.contains;
lodash.inject = collections.reduce;

// add functions capable of returning wrapped and unwrapped values when chaining
lodash.first = arrays.first;
lodash.last = arrays.last;
lodash.sample = collections.sample;
lodash.take = arrays.take;

// add aliases
lodash.head = arrays.first;

// add functions to `lodash.prototype`
mixin(assign({}, lodash));

/**
 * The semantic version number.
 *
 * @static
 * @memberOf _
 * @type string
 */
lodash.VERSION = version;

// add "Chaining" functions to the wrapper
lodash.prototype.chain = chaining.wrapperChain;
lodash.prototype.value = chaining.wrapperValueOf;

  // add `Array` mutator functions to the wrapper
  baseEach(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(methodName) {
    var func = arrayRef[methodName];
    lodash.prototype[methodName] = function() {
      var value = this.__wrapped__;
      func.apply(value, arguments);

      // avoid array-like object bugs with `Array#shift` and `Array#splice`
      // in Firefox < 10 and IE < 9
      if (!support.spliceObjects && value.length === 0) {
        delete value[0];
      }
      return this;
    };
  });

  // add `Array` accessor functions to the wrapper
  baseEach(['concat', 'join', 'slice'], function(methodName) {
    var func = arrayRef[methodName];
    lodash.prototype[methodName] = function() {
      var value = this.__wrapped__,
          result = func.apply(value, arguments);

      if (this.__chain__) {
        result = new lodashWrapper(result);
        result.__chain__ = true;
      }
      return result;
    };
  });

lodash.support = support;
(lodash.templateSettings = utilities.templateSettings).imports._ = lodash;
module.exports = lodash;
