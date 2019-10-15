'use strict';

const target = {
  useOfApply() {
    return 'hello';
  }
};
const options = {
  /**
   *
   * @param {object} target
   * @param {string} property
   * @param {any} value
   * @param {object} receiver
   */
  set(target, property, value, receiver) {
    if (typeof value !== 'number') {
      return false;
    } else {
      return Reflect.set(target, property, value + 1, receiver);
    }
  },
  /**
   *
   * @param {*} target
   * @param {*} property
   * @param {*} receiver
   */
  get(target, property, receiver) {
    if (property in target) {
      return Reflect.get(target, property, receiver);
    }

    return 0;
  },
  /**
   *
   * @param {*} target
   * @param {*} thisArgument
   * @param {*} argumentsList
   */
  apply(target, thisArgument, argumentsList) {
    if (!Array.isArray(argumentsList)) {
      // type check
      throw new TypeError('Arguments list parameter must be type of Array.')
    }

    return Reflect.apply(target, thisArgument, argumentsList);
  }
};


const proxy = new Proxy(target, options);

module.exports = proxy;
