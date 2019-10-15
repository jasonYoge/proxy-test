'use strict';

const proxy = require('../index');
const aopWrapper = require('../aop');
const makeObservable = require('../observable');

describe('Proxy Property Test', () => {
  // set method
  it('expect set method returns 11', () => {
    proxy.foo = 10;
    expect(proxy.foo).toBe(11);
  });

  // get method
  it('expect get method returns 0 if props not in obj', () => {
    expect(proxy.name).toBe(0);
  });

  // apply method
  it('expect apply method returns string `hello`', () => {
    expect(proxy.useOfApply.apply(null, [])).toBe('hello');
  });
});

describe('Test aopWrapper which created by Proxy', () => {
  // test aop wrapper
  it('expect continuous plus operation that set 10 to 12', () => {
    const target = {};
    function plusOne(value) {
      return value + 1;
    }
    const newProxy = aopWrapper(target, [plusOne, plusOne]);
    newProxy.a = 10;

    expect(newProxy.a).toBe(12);
  });
})

describe('Test observable.js', () => {
  it('expect set method console.log something', () => {
    let user = {};

    user = makeObservable(user);
    user.observe((p, value) => {
      console.log('This is log:', p, '=', value);
    });

    user.name = 'JasonYoge';
  });
});
