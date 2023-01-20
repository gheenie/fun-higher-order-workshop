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

function curry(baseFunc, arg1) {
  function firstGenericFunc(arg2) {
    return baseFunc(arg1, arg2);
  }

  return firstGenericFunc;
}

function liftF(baseFunc) {
  function firstGenericFunc(arg1) {
    function secondGenericFunc(arg2) {
      return baseFunc(arg1, arg2);
    }

    return secondGenericFunc;
  }

  return firstGenericFunc;
}

function twice(baseFunc) {
  function firstGenericFunc(arg) {
    return baseFunc(arg, arg);
  }

  return firstGenericFunc;
}

function composeU(baseFunc1, baseFunc2) {
  function firstGenericFunc(arg) {
    return baseFunc2( baseFunc1(arg) );
  }

  return firstGenericFunc;
}

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
