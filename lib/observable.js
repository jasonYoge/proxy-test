'use strict';

function makeObservable(target) {
  // closure array
  const observerList = [];

  target.observe = (observeHandler) => {
    observerList.push(observeHandler);
  };

  return new Proxy(target, {
    set(target, p, value, receiver) {
      observerList.forEach(handler => {
        handler(p, value);
      });

      return Reflect.set(target, p, value, receiver);
    }
  })
}

module.exports = makeObservable;
