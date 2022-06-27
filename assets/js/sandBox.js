"use strict";
//                                          СЧЁТЧИК

function createCounter(initial) {
  let i = initial;
  return{
    increment(){
        return ++i;
    },
    decrement(){
        return --i;
    }
  }
}

const counter1 = createCounter(10);
counter1.increment()
counter1.increment()
console.log(counter1.increment())

const counter2 = createCounter(100);