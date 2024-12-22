let a = {
  c: 1,
  d: {
    name: 'meiyu',
    age: 18,
  },
};

let h = Object.assign({}, a);
a.c = 2;
console.log('a:', a);
console.log('h:', h);

a.d.name = '登登';

console.log('a:', a);
console.log('h:', h);
