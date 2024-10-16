// var name = '1';
// new Promise(function (resolve, reject) {
//   resolve();
//   reject();
// })
//   .then(function () {
//     name = '2';
//     console.log(name);
//   })
//   .catch(function () {
//     name = '3';
//     console.log(name);
//   });
// name = '4';
// console.log(name);

// let obj = {
//   num: 5,
//   func: function () {
//     let that = this;
//     that.num *= 2;
//     (function () {
//       this.num *= 3;
//       that.num *= 4;
//       return function () {
//         this.num *= 5;
//         that.num *= 6;
//       };
//     })();
//   },
// };
// var num = 2;
// obj.func();
// console.log(num);
// console.log(obj.num);

// console.log(x);
// x();
// var x = 2;
// function x() {
//   console.log(1);
// }
// console.log(x);
// x = 9;
// x();
console.log(Math.min(...[1, 2, 3]));
