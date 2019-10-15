'use strict';
const is = require('is');

const FUNCTION_TYPE_ERROR = 'element of methodsList must be `Function`';
const METHODS_LIST_TYPE_ERROR = 'aopWrapper(..., methodsList), The argument methodsList must be array.';

/**
 *
 * @param {object} target 'target to be wrapped'
 * @param {array} aopMethodsList 'list of function'
 *
 * aopMethodsList:
 * [
 *  ...
 *  function(value[, target]) {...},
 *  ...
 * ]
 */
function aopWrapper(target, aopMethodsList) {
  if (!is.array(aopMethodsList)) {
    throw new TypeError(METHODS_LIST_TYPE_ERROR);
  }

  for (let func of aopMethodsList) {
    if (!is.function(func)) {
      throw new TypeError(FUNCTION_TYPE_ERROR);
    }

    target = new Proxy(target, {
      set(target, p, value, receiver) {
        const newVal = func(value);
        return Reflect.set(target, p, newVal, receiver);
      }
    });
  }

  return target;
}

module.exports = aopWrapper;
