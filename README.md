# proxy-test [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

> 🎉Learn how to use proxy effectively.

## Whats this project for?
This project is a personal project aimed to learn how to use `Proxy` and `Reflect`.
I have applied some methods including:
- [x] set
- [x] get
- [x] apply
- [ ] defineProperty
- [ ] deleteProperty
- [ ] construct
- [ ] getOwnPropertyDescriptor
- [ ] getPropertyOf
- [ ] has
- [ ] isExtensible
- [ ] ownKeys
- [ ] preventExtensions
- [ ] setPropertyOf

## Custom an Aop method by Proxy and Reflect api defined in javascript.

To learn how to use `Proxy` and `Reflect`, I have created a function to make a list of function a new proxy object.
The wrapper's code descripbed like this:

``` javascript
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
  ...
}
```

## How to run this project?
```
$ yarn run test (or npm run test)
```
