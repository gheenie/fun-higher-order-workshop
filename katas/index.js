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

function composeB(baseFunc1, baseFunc2) {
  function firstGenericFunc(arg1, arg2, arg3) {
    return baseFunc2( baseFunc1(arg1, arg2) , arg3);
  }

  return firstGenericFunc;
}

function limit(baseFunc, maxCalls) {
  let count = 0;

  function firstGenericFunc(arg1, arg2) {
    if (count < maxCalls) {
      count++;
      return baseFunc(arg1, arg2);
    }

    return undefined;
  }

  return firstGenericFunc;
}

function from(startingNum) {
  let currentNum = startingNum - 1;

  function incrementBy1() {
    return ++currentNum;
  }

  return incrementBy1;
}

function to(generator, maxValue) {
  let currentNum = 0;
  
  function firstGenericFunc() {
    currentNum = generator();

    if (currentNum < maxValue) return currentNum;

    return undefined;
  }

  return firstGenericFunc;
}

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
