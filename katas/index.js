function identity(arg) {
  return arg;
}

function identityF(arg) {
  function identity() {
    return arg;
  }  

  return identity;
}

function add(n1, n2) {
  return n1 + n2;
}

function subtract(n1, n2) {
  return n1 - n2;
}

function multiply(n1, n2) {
  return n1 * n2;
}

function increment(n) {
  return add(n, 1);
}

function addF(n1) {
  function add(n2) {
    return n1 + n2;
  }

  return add;
}

function curry(binaryFunction, arg1) {
  function secondCallingFunction(arg2) {
    return binaryFunction(arg1, arg2);
  }

  return secondCallingFunction;
}

function liftF(aFunction) {
  function secondCallingFunction(arg1) {
    function thirdCallingFunction(arg2) {
      return aFunction(arg1, arg2);
    }

    return thirdCallingFunction;
  }

  return secondCallingFunction;
}

function twice() {}

function composeU() {}

function composeB() {}

function limit() {}

function from() {}

function to() {}

function fromTo() {}

function element() {}

function collect() {}

function filter() {}

function concat() {}

function fibonacciF() {}

function genSymF() {}

function genSymFF() {}

function counter() {}

function revokable() {}

module.exports = {
  identity,
  identityF,
  add,
  subtract,
  multiply,
  increment,
  addF,
  curry,
  liftF,
  twice,
  composeU,
  composeB,
  limit,
  from,
  to,
  fromTo,
  element,
  collect,
  filter,
  concat,
  fibonacciF,
  genSymF,
  genSymFF,
  counter,
  revokable,
};
