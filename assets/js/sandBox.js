"use strict";
//                                          СЧЁТЧИК

function createCounter(initial) {
  let i = initial;
  return function counter() {
    i++;
    return i;
  };
}
const counter1 = createCounter()
