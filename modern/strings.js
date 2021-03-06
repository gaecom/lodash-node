/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="node" -o ./modern/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */

module.exports = {
  'camelCase': require('./strings/camelCase'),
  'capitalize': require('./strings/capitalize'),
  'endsWith': require('./strings/endsWith'),
  'escape': require('./utilities/escape'),
  'escapeRegExp': require('./strings/escapeRegExp'),
  'kebabCase': require('./strings/kebabCase'),
  'pad': require('./strings/pad'),
  'padLeft': require('./strings/padLeft'),
  'padRight': require('./strings/padRight'),
  'repeat': require('./strings/repeat'),
  'snakeCase': require('./strings/snakeCase'),
  'startsWith': require('./strings/startsWith'),
  'template': require('./utilities/template'),
  'templateSettings': require('./utilities/templateSettings'),
  'trim': require('./strings/trim'),
  'trimLeft': require('./strings/trimLeft'),
  'trimRight': require('./strings/trimRight'),
  'truncate': require('./strings/truncate'),
  'unescape': require('./utilities/unescape')
};
