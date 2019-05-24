/* eslint-disable strict */
/* eslint-disable lines-around-directive */
/* eslint-disable func-names */
(function () {
  'use strict';
   // 用于执行异步 onFullfilled/onRejected
   // setImmediate or function(fn){setTimeout(fn, 0)} in browser
   // process.nexttick in node
   var asyncCall = process.nextTick

   // 2.3
   // Promise 解析过程,是以一个promise和一个值作为一个参数的抽象过程
   // [[resolve]](promise, x)
  function (promise, x) {
    // 2.3.1
    // 如果promise 和 x 指向同一个值
    // 使用 TypeError做为原因将promise拒绝
    if(promise === x) {
      return promise.reject(new TypeError('The promise and its value refer to the same object'))
    }
    // 2.3.3
    // 如果 x 是一个函数或一个对象
    if (x &&( typeof x === 'function' || typeof x === 'object')) {
      // 2.3.3.3
      // 如果resolvePromise 和 rejectPromisr 都被调用了
      // 或被调用了多次 则只有第一次执行 后面的忽略
      // 我们用 called作为标识防止多次被调用
      let called = false
        then;
      try {
        // 2.3.3.1
        // 将then fu wei
      }
    }
  }
}())