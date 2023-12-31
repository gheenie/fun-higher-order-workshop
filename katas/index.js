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

/*function curry(baseFunc, arg1) {
  function firstGenericFunc(arg2) {
    return baseFunc(arg1, arg2);
  }

  return firstGenericFunc;
}*/

function curry(baseFunc, ...args1) {
  function firstGenericFunc(...args2) {
    return baseFunc.apply(null, [...args1, ...args2]);
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

/*function composeU(baseFunc1, baseFunc2) {
  function firstGenericFunc(arg) {
    return baseFunc2( baseFunc1(arg) );
  }

  return firstGenericFunc;
}*/

function composeU(...baseFuncs) {
  function firstGenericFunc(arg) {
    for (let i = 0; i < baseFuncs.length; i++) {
      arg = baseFuncs[i](arg);
    }

    return arg;
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

function to(increment, maxValue) {
  let currentNum = 0;
  
  function incrementWithMax() {
    currentNum = increment();

    if (currentNum < maxValue) return currentNum;

    return undefined;
  }

  return incrementWithMax;
}

function fromTo(startingNum, maxValue) {
  const increment = from(startingNum);
  let currentNum = 0;
  
  function incrementWithMax() {
    currentNum = increment();

    if (currentNum < maxValue) return currentNum;
    
    return undefined;
  }

  return incrementWithMax;
}

function element(arr, increment) {
  let currentIndex = -1;

  function firstGenericFunc() {
    if (typeof increment === 'function') {
      currentIndex = increment();
    } else {
      currentIndex++;
    }

    return arr[currentIndex];
  }

  return firstGenericFunc;
}

function collect() {}

function filter() {}

function concat() {}

function fibonacciF() {}

function genSymF() {}

function genSymFF() {}

function counter(startNum) {
  let count = startNum;

  function up() {
    return ++count;
  }

  function down() {
    return --count;
  }

  return { up, down };
}

function revokable(baseFunc) {
  let isRevoked = false;

  function invoke(arg1, arg2) {
    if (!isRevoked) return baseFunc(arg1, arg2);

    return undefined;
  }

  function revoke() {
    isRevoked = true;
  }

  return { invoke, revoke };
}

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
