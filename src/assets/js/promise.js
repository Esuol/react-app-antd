// /* eslint-disable strict */
// /* eslint-disable lines-around-directive */
// /* eslint-disable func-names */
// (function () {
//   'use strict';
//    // 用于执行异步 onFullfilled/onRejected
//    // setImmediate or function(fn){setTimeout(fn, 0)} in browser
//    // process.nexttick in node
//    var asyncCall = process.nextTick

//    // 2.3
//    // Promise 解析过程,是以一个promise和一个值作为一个参数的抽象过程
//    // [[resolve]](promise, x)
//   function (promise, x) {
//     // 2.3.1
//     // 如果promise 和 x 指向同一个值
//     // 使用 TypeError做为原因将promise拒绝
//     if(promise === x) {
//       return promise.reject(new TypeError('The promise and its value refer to the same object'))
//     }
//     // 2.3.3
//     // 如果 x 是一个函数或一个对象
//     if (x &&( typeof x === 'function' || typeof x === 'object')) {
//       // 2.3.3.3
//       // 如果resolvePromise 和 rejectPromisr 都被调用了
//       // 或被调用了多次 则只有第一次执行 后面的忽略
//       // 我们用 called作为标识防止多次被调用
//       let called = false
//         then;
//       try {
//         // 2.3.3.1
//         // 将then 赋 为 x.then
//         then = x.then
//         if (typeof then === 'function') {
//           // 2.3.3.3
//           // 如果then是一个函数
//           // 以x为this调用then函数
//           // 且第一个参数为resolvePromise
//           // 第二个参数为rejectPromise
//           then.call(x, function(y) {
//             // 2.3.3.3.1
//             // 当resolvePromise被以y为参数调用
//             // 执行[[resolve]](promise, y)
//             if(!called) {
//               called = true
//               resolve(promise, y)
//             }
//           }, function(r) {
//             // 2.3.3.3.2
//              // 当 rejectPromise 被以 r 为参数调用,
//             // 则以r为原因将promise拒绝。
//             if(!called) {
//               called = true;
//               promise.reject(r);
//             }
//           })
//         } else {
//            // 2.3.3.4
//           // 如果 then不是一个函数，则 以x为值fulfill promise
//           promise.fulfill(x);
//         }
//       } catch (e) {
//         // 2.3.3.2
//         // 如果在取x.then值时抛出了异常，
//         // 则以这个异常做为原因将promise拒绝
//         if (!called) {
//           called = true;
//           promise.reject(e);
//         }
//       }
//     } else {
//       // 2.3.4
//       // 如果 x 不是对象也不是函数，
//       // 则以x为值 fulfill promise
//       promise.fulfill(x);
//     }
//   }

//   function Taxi() {
//     // 0 pending, 1 fulfilled, 2 rejected
//     var _state = 0,
//       _value,
//       _onFulfills = [],
//       _onRejects = [];
//     this.done = function(onFulfilled, onRejected) {

//       if (_state === 0) {
//         // 如果还在pending,先把处理函数存起来
//         _onFulfills.push(onFulfilled);
//         _onRejects.push(onRejected);
//       }else {
//         // 否则,异步执行
//         asyncCall(function() {
//           if (_state === 1) {
//             if (typeof onFulfilled === 'function') {
//               onFulfilled(_value);
//             }
//           }else if (typeof onRejected === 'function') {
//             onRejected(_value);
//           }
//         });
//       }
//     };

//     /**
//      * 用于this.fulfill和this.reject内部调用的函数
//      * @param  {number} state 0->pending, 1->fulfill, 2->reject
//      * @param  {dynamic} value result 或 reason
//      */
//     function _complete(state, value){
//       // 只能 fulfill或reject一次, 后面的忽略
//       if (!_state) {
//         _state = state;
//         _value = value;
//         // 根据 state 获取需要处理的函数数组
//         // 异步执行
//         asyncCall(function() {
//           var handlers = state == 1 ? _onFulfills : _onRejects;
//           handlers.forEach(function(fn) {
//             if (typeof fn === 'function') {
//               fn(value);
//             }
//           });
//           // 执行完之后,解除数组引用
//           _onFulfills = null;
//           _onRejects = null;
//         });
//       }
//     }
//     this.fulfill = function(value) {
//       _complete(1, value);
//     };
//     this.reject = function(value) {
//       _complete(2, value);
//     };
//   }

//   Taxi.prototype = {
//     constructor: Taxi,
//     catch: function(onRejected) {
//       this.then(null, onRejected);
//     },
//     then: function(onFulfilled, onRejected) {
//       // 2.2.7
//       // then 必须返回一个promise
//       // 所以我们new一个,等下用于返回
//       var taxi = new Taxi();

//       // this指向当前promise
//       // 2.2.2
//       // 如果onFulfilled是一个函数:
//       // 它必须在promise fulfilled后调用， 且promise的value为其第一个参数。
//       // 2.2.3
//       // 如果onRejected是一个函数,
//       // 它必须在promise rejected后调用， 且promise的reason为其第一个参数。
//       this.done(function(x) {
//         if (typeof onFulfilled === 'function') {
//           try {
//             // 2.2.7.1
//             // 如果onFulfilled 或 onRejected 返回了值x,
//             // 则执行Promise 解析流程[[Resolve]](promise2, x).
//             resolve(taxi, onFulfilled(x));
//           }catch (e) {
//             // 2.2.7.2
//             // 如果onFulfilled 或 onRejected抛出了异常e,
//             // 则promise2应当以e为reason被拒绝
//             taxi.reject(e);
//           }
//         }else {
//           // 2.2.7.3
//           // 如果 onFulfilled 不是一个函数且promise1已经fulfilled，
//           // 则promise2必须以promise1的值fulfilled.
//           taxi.fulfill(x);
//         }
//       }, function(x) {

//         if (typeof onRejected === 'function') {
//           try {
//             // 2.2.7.1
//             // 如果onFulfilled 或 onRejected 返回了值x,
//             // 则执行Promise 解析流程[[Resolve]](promise2, x).
//             resolve(taxi, onRejected(x));
//           }catch (e) {
//             // 2.2.7.2
//             // 如果onFulfilled 或 onRejected抛出了异常e,
//             // 则promise2应当以e为reason被拒绝
//             taxi.reject(e);
//           }
//         }else {
//           // 2.2.7.4
//           // 如果 OnReject 不是一个函数且promise1已经rejected,
//           // 则promise2必须以相同的reason被拒绝.
//           taxi.reject(x);
//         }
//       });
//       return taxi;
//     }
//   };
//   module.exports = Taxi;
// }())
